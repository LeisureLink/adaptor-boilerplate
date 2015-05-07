# Generic LeisureLink nodejs docker file

FROM quay.io/leisurelink/baseimage-node:latest
# TODO: Update Maintainer
MAINTAINER FirstName LastName <firstname.lastname@email.com>
RUN groupadd -r node && useradd -r -g node node

RUN mkdir -p /srv/src/
COPY . /srv/src/

RUN mkdir -p /etc/service/nodejs
COPY runit.sh /etc/service/nodejs/run
RUN chmod a+x /etc/service/nodejs/run

# default command to start service manager
CMD ["/sbin/my_init"]