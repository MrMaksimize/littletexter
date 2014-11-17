var _ = require('lodash');
var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';
    if (env !== 'production')
      require('dotenv').load()

var config = {
  global: {
    twilio: {
      accountSID: process.env.ACCOUNT_SID,
      authToken: process.env.AUTH_TOKEN
    }
  },
  development: {
    root: rootPath,
    app: {
      name: 'littletexter'
    },
    port: 3000,
    db: 'postgres://localhost/littletexter'
  },

  test: {
    root: rootPath,
    app: {
      name: 'littletexter'
    },
    port: 3000,
    db: 'postgres://localhost/littletexter-test'

  },

  production: {
    root: rootPath,
    app: {
      name: 'littletexter'
    },
    port: 3000,
    db: 'postgres://localhost/littletexter-production'
  }
};

module.exports = _.extend(config.global, config[env]);
