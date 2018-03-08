Online demo will be released soon

## Team member
* Chen Qiu  qiu.che@husky.neu.edu
* Zenan Chen  chen.zena@husky.neu.edu
* Xinglong Jia  jia.xi@husky.neu.edu

This web application is a seperation of back-end and front-end and use axios to send data, it basiclly contains three parts: server, client, admin.

Application stack: MySQL--Linux--Node.js(koa.js)-Vue.js

AWS infrastucture: [dev-local-github-travisci]-[VPC-EC2 Instance-RDS,S3,CodeDeploy,IAM,Route53]

Application looks:

![image](https://github.com/lukchen/csye6225-spring2018/blob/master/Screenshot%20from%202018-03-07%2021-29-41.png)
![image](https://github.com/lukchen/csye6225-spring2018/blob/master/Screenshot%20from%202018-03-07%2021-31-50.png)
![image](https://github.com/lukchen/csye6225-spring2018/blob/master/Screenshot%20from%202018-03-07%2021-32-50.png)




## Sign up/ Sign in

  This project accomplised a website sign up/ sign in function, user's information will be store in database and password will be encrypted,

## Prerequisites

if you want to run this application locally, install mysql-server and apache2, then modify the config file under server/
install mode.js 9.5.0, npm 5.6
npm install

## Deployment

MySQL port is default 3306.

run 'npm install' first and run the follow lines in path '/csye6225-spring2018'


Server: server side as RESTful architectural style, responsible for communication with client/admin side. Used JWT achieves authentication system. It is listening at http://localhost:3000/

start server as dev: npm run dev-server   ## Attention, you must run server first, then run client or admin


Client: show the front-end, It is listening at http://localhost:8080/(only admin and server running) or 8081(admin, client, server all running), 

start client as dev: npm run dev-client


Admin: application management, provides sign in/sign up modules, It is listening at http://localhost:8080/ or 8081(same as above situations)

start admin as dev: npm run dev-admin

## Install JMeter and JMeter plugins

```
$ python bin/JMeterInstaller.py
```

The installer will also install several JMeter Plugins, which can be used directly or within a continuous integration server such as Jenkins

## Open Tests in JMeter

```
apache-jmeter-3.0/bin/jmeter.sh -t tests/my_test.jmx
```

This will load the JMeter GUI. This very simple test hits http://localhost 1 time, with 1 user

- Run the tests with Command-R
- See results by clicking in any of the Graph or Tree nodes
- Stop tests with Command-period
- Clear results with Command-E

- On Jmeter, open Signup with scv.jmx, which sets the csv config, the thread group nubmber and HTTP request, signup 100 users to website.
- Then open Login with scv.jmx, which login use the 100 users registered on Signup with scv.jmx, to test the the web client/server structure.

## Running Headless Tests

Especially in a continuous integration server, you'll want to run JMeter tests "headlessly", i.e. without a graphical user interface.
x
## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request




