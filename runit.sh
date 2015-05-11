#!/bin/sh

##
# Note that this service file depends on an appropriately configured dockerfile
# in order to create a runtime environment where the application is located at
# /srv/src/app.js and the 'node' user exists
##
exec /sbin/setuser node /usr/local/bin/node /srv/src/app.js 2>&1
