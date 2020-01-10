const replace = require('replace');
const shell = require("shelljs");

function generateAASA () {
  var currentPath = process.cwd();
  shell.exec(`cp ${ currentPath }/scripts/AASA.template ${ currentPath }/public/apple-app-site-association`)
  replace({
    regex: '{APPLE_TEAM}',
    replacement: process.env.REACT_APP_ITC_TEAM_ID,
    paths: [`${ currentPath }/public/apple-app-site-association`],
    recursive: true,
    silent: true
  })
  replace({
    regex: '{BUNDLE_ID}',
    replacement: process.env.REACT_APP_IOS_BUNDLE_ID,
    paths: [`${ currentPath }/public/apple-app-site-association`],
    recursive: true,
    silent: true
  })
}

generateAASA();