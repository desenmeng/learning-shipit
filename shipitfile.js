var pm = require('shipit-pm');
var deploy = require('shipit-deploy');
var cnpm = require('shipit-cnpm');
module.exports = function(shipit) {
  deploy(shipit);
  cnpm(shipit);
  pm(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/node-example',
      deployTo: '/home/work/node-example',
      repositoryUrl: 'https://github.com/demohi/node-example.git',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      cnpm: {
        flags: '--production'
      },
      pm: {
        production: '/home/work/node-example/current/pm2/production.json',
        development: '/home/work/node-example/current/pm2/development.json'
      }
    },
    development: {
      servers: ['work@xxx']
    },
    production: {
      servers: ['work@xxx']
    }
  });
}
