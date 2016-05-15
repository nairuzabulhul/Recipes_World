
Recipes World is Web application created with Node.js and MonogoDB

<h1>App Demo:</h1>
![Log](http://i.giphy.com/xT4uQDBXB3Q9DGUdLG.gif)


$ mkdir data
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
$ chmod a+x mongod
You can start mongodb by running the mongod script on your project root:

$ ./mongod
