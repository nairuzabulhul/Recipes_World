

Recipes World is Web application created with Node.js and MonogoDB


![Log](http://s32.postimg.org/ci2opz8dx/output_x_Ck1_RC.gif)



$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod
You can start mongodb by running the mongod script on your project root:

$ ./mongod
