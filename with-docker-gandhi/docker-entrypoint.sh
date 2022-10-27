#!/bin/sh

set -e

uid="$(id -u)"
gid="$(id -g)"

cp -R out_temp/* out/.
# chown -R $uid:$gid out
# chown -R $uid:$gid src
# chown -R $uid:$gid public

exec "$@"