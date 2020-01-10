# base image
FROM node:12.2.0-alpine as build
ARG build_command

COPY . .

WORKDIR .
# https://stackoverflow.com/questions/52196518/could-not-get-uid-gid-when-building-node-docker
RUN npm config set unsafe-perm true
RUN npm install
RUN npm run build:$build_command

FROM centos:7
LABEL Vendor="CentOS" \
      License=GPLv2 \
      Version=2.4.6-40


RUN yum -y --setopt=tsflags=nodocs update && \
    yum -y --setopt=tsflags=nodocs install httpd && \
    yum clean all

COPY --from=build /packages/web/build /var/www/html/

EXPOSE 80

RUN echo '<Directory /var/www/html/>' >> /etc/httpd/conf/httpd.conf
RUN echo 'Allow From All' >> /etc/httpd/conf/httpd.conf
RUN echo 'RewriteEngine On' >> /etc/httpd/conf/httpd.conf
RUN echo 'RewriteCond %{REQUEST_FILENAME} !-f' >> /etc/httpd/conf/httpd.conf
RUN echo 'RewriteCond %{REQUEST_URI} !^.*/apple-app-site-association/.*$ [NC]' >> /etc/httpd/conf/httpd.conf
RUN echo 'RewriteRule . /index.html [L]' >> /etc/httpd/conf/httpd.conf
RUN echo '</Directory>' >> /etc/httpd/conf/httpd.conf


ENTRYPOINT ["/usr/sbin/httpd"]
CMD ["-D", "FOREGROUND"]