#!/bin/bash

set -e

own=www:www
mod=g+w
basepath=target/

mkdir -p $basepath
find ${basepath} -type f -exec rm -f {} \;

for i in {1..2}
do 
	filepath=${basepath}test-$i
	touch $filepath
	chmod $mod $filepath
	sudo chown $own $filepath 
done 

ls -l $basepath
