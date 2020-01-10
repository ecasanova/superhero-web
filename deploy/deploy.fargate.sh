#!/bin/bash

# If any of this commands fail, stop script.
set -e

# creates a new task definiton, and then does a rolling update on a ECS service

# Source container on your local build environment
LOCAL_CONTAINER_NAME=formhealthfe
LOCAL_SOURCE_IMAGE=$LOCAL_CONTAINER_NAME:latest
BUILD_COMMAND=$BUILD_COMMAND


# Build container.
# As we did before, but now we are going to build the Docker image that will
# be pushed to the repository.
# TODO hard code the docker file for now
docker build --build-arg build_command=$BUILD_COMMAND --pull -t $LOCAL_SOURCE_IMAGE -f Dockerfile .

# Determine the most recent task version
# This will be used both for the task version and the ECR version
last_task_version=`aws ecs list-task-definitions --region $AWS_DEFAULT_REGION | jq '.taskDefinitionArns[]' | grep $AWS_TASK_FAMILY_NAME | tr -d '"' | tail -1 | rev | cut -d':' -f 1 | rev`

IMAGETAG=$((last_task_version + 5))

AWS_IMAGE_ARN="$AWS_ECR_BASE/$AWS_ECR_REPOSITORY_NAME:$IMAGETAG"


# Tag the new Docker image as latest on the ECS Repository.
docker tag $LOCAL_SOURCE_IMAGE "$AWS_IMAGE_ARN"

# Login to ECS Repository.
eval $(aws ecr get-login --no-include-email --region $AWS_DEFAULT_REGION)

# Upload the Docker image to the ECS Repository.
docker push "$AWS_IMAGE_ARN"

# Build a new task definition from the template
# you can get the json output from the gui task builder
#   you will need to cut out the null components
task_definition_path_template=./deploy/fargate-task.json.template
task_definition_path=./deploy/fargate-task.json

sed \
    -e 's/$IMAGEARN/'"$AWS_ECR_BASE\/$AWS_ECR_REPOSITORY_NAME:$IMAGETAG"'/g' \
    -e 's/$AWS_LOG_GROUP/'$AWS_LOG_GROUP'/g' \
    -e 's/$AWS_DEFAULT_REGION/'$AWS_DEFAULT_REGION'/g' \
    -e 's/$AWS_TASK_FAMILY_NAME/'$AWS_TASK_FAMILY_NAME'/g' \
    -e 's/$AWS_TASK_CPU/'$AWS_TASK_CPU'/g' \
    -e 's/$AWS_TASK_MEMORY/'$AWS_TASK_MEMORY'/g' \
    -e 's/$AWS_CONTAINER_NAME/'$AWS_CONTAINER_NAME'/g' \
    -e 's/$AWS_TASK_ROLE_ARN/'$AWS_TASK_ROLE_ARN'/g' \
    $task_definition_path_template > $task_definition_path


# This will either create a new task definiton, or create a new version of an existing one
# we use grep and cut to get the revision number from the output
# xargs cuts the whitespace
new_task_version=$(aws ecs register-task-definition --region $AWS_DEFAULT_REGION --cli-input-json file://$task_definition_path | grep revision | cut -d':' -f2 | xargs)
echo $new_task_version


# Update service
aws ecs update-service \
    --region $AWS_DEFAULT_REGION \
    --cluster $AWS_ECS_CLUSTER_NAME \
    --service $AWS_ECS_CLUSTER_SERVICE_NAME \
    --task-definition "$AWS_TASK_FAMILY_NAME:$new_task_version"