import { decodeJwt } from 'bootstrap/axios';

const s3BucketName = process.env.REACT_APP_AWS_BUCKET_NAME;

export const transformLoginResponse = (jwtData) => {
  const jwtMetadata = {
    ...jwtData,
    ...decodeJwt(jwtData.idToken)
  };
  const profilePhoto = `https://${s3BucketName}.s3.amazonaws.com/IDs/${jwtMetadata.sub}`;
  const groups = jwtMetadata['cognito:groups'];
  if (!groups) {
    throw new Error('User has not yet been assigned to a group yet');
  }
  if (groups.includes('FormAdmin') || groups.includes('CareProvider') || groups.includes('ADKSuperAdmin')) {
    const {
      'cognito:username': userId,
      given_name: firstName,
      family_name: lastName,
      email_verified: emailVerified,
      email,
      auth_time: timeOfRegistration,
      'cognito:groups': registrationGroups
    } = jwtMetadata;
    return {
      jwt: jwtMetadata,
      sendBirdAccessToken: jwtData.sendBirdAccessToken,
      user: {
        userId,
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        profilePhoto,
        timeOfRegistration,
        registrationGroups,
        email,
        emailVerified
      }
    };
  }
  const {
    'cognito:username': userId,
    birthdate,
    given_name: firstName,
    family_name: lastName,
    phone_number: phoneNumber,
    phone_number_verified: phoneNumberVerified,
    email_verified: emailVerified,
    email,
    auth_time: timeOfRegistration,
    'cognito:groups': registrationGroups,
    'custom:StripeCustomerID': stripeCustomerID,
    'custom:AddressLine1': addressLine1,
    'custom:AddressLine2': addressLine2,
    'custom:City': city,
    'custom:StateOrCountry': stateOrCountry,
    'custom:ZipCode': zipCode,
    'custom:Weight': weight,
    'custom:Height': height,
    'custom:onboardingCompleted': onboardingComplete
  } = jwtMetadata;
  return {
    jwt: jwtMetadata,
    sendBirdAccessToken: jwtData.sendBirdAccessToken,
    user: {
      userId,
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      profilePhoto,
      dob: birthdate,
      onboardingComplete,
      timeOfRegistration,
      registrationGroups,
      email,
      emailVerified,
      phoneNumber: phoneNumber.replace('+1', ''),
      phoneNumberVerified,
      stripeCustomerID,
      addressLine1,
      addressLine2,
      city,
      stateOrCountry,
      zipCode,
      height,
      weight,
      physical: {
        height,
        weight
      }
    }
  };
};
