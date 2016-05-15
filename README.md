$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod
You can start mongodb by running the mongod script on your project root:

$ ./mongod