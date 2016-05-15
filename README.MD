
Recipes World is Web application created with Node.js and MonogoDB

App Demo:
![Log](http://i.giphy.com/l0Fecb1gR0bjqMKw8.gif)


$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod
You can start mongodb by running the mongod script on your project root:

$ ./mongod
