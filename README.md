[![Code Climate](https://codeclimate.com/repos/57b56dabbd7db80dbe00344e/badges/5865eeec766a9fb5d895/gpa.svg)](https://codeclimate.com/repos/57b56dabbd7db80dbe00344e/feed)
[![Test Coverage](https://codeclimate.com/repos/57b56dabbd7db80dbe00344e/badges/5865eeec766a9fb5d895/coverage.svg)](https://codeclimate.com/repos/57b56dabbd7db80dbe00344e/coverage)
[![Issue Count](https://codeclimate.com/repos/57b56dabbd7db80dbe00344e/badges/5865eeec766a9fb5d895/issue_count.svg)](https://codeclimate.com/repos/57b56dabbd7db80dbe00344e/feed)
[![Build Status](https://travis-ci.org/witty123/gitdash.svg?branch=master)](https://travis-ci.org/witty123/gitdash)

# gitdash - Dashboard for github

This project is an application for analysing your activity on github. Project will be submitted as an entry to helloworld project at Practo.

## Tech 
  - Express v4.14.0 (Stable) - fast node.js network app framework
  - AngularJS v1 - HTML enhanced for User Interfaces
  - Node.js v6.3.1 (Latest) - evented I/O for the backend

## Setting up the environment

### Setting up NPM
  - For Linux

   ```bash
      sudo apt-get install npm
      sudp apt-get install node
      sudo apt-get install nodejs-legacy

    ```
  - For Mac

  ```bash
     brew install npm
     brew install node
  ```
### Cloning the repository

You need git to clone this repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

### Clone gitdash

Clone the gitdash repository using [git]:

```
git clone https://github.com/witty123/gitdash
cd gitdash
```

### Install Dependencies

* We get the tools we depend upon via `npm`, the [node package manager][npm].

```
npm install
gulp 
```

### Change config.json to add your clientID and clientSecret

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:3000/`.



## Directory Layout

```
├── README.md
├── app
│   ├── app-config
│   ├── components
│   ├── public
│   ├── routes
│   └── views
├── dist
│   ├── css
│   ├── img
│   └── js
├── gulpfile.js
├── node_modules
├── package.json
├── server
│   ├── app-server.js
│   ├── config-sample.json
│   └── config.json
└── tests

```

## Testing

There are two kinds of tests in the gitdash application: Unit tests and end-to-end tests.


### Running Unit Tests


You can perform unit testing by using the command.

```
karma start
```

### Running e2e Tests

We are in process of writing e2e tests.

