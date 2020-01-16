const replace = require('replace');
const shell = require("shelljs");

const { REACT_APP_ENVIRONMENT, REACT_APP_IOS_BUNDLE_ID, REACT_APP_ITC_TEAM_ID } = process.env

function generateAASA () {
  console.log(`Generating AASA file for ${REACT_APP_ENVIRONMENT} environment...`)
  if (!REACT_APP_IOS_BUNDLE_ID || !REACT_APP_ITC_TEAM_ID) {
    return console.log("Skipping AASA generating since REACT_APP_IOS_BUNDLE_ID/REACT_APP_ITC_TEAM_ID are missing from environment")
  } else {
    const currentPath = process.cwd();
    shell.exec(`cp ${currentPath}/scripts/AASA.template ${currentPath}/public/apple-app-site-association`)
    replace({
      regex: '{APPLE_TEAM}',
      replacement: REACT_APP_ITC_TEAM_ID,
      paths: [`${currentPath}/public/apple-app-site-association`],
      recursive: true,
      silent: true
    })
    replace({
      regex: '{BUNDLE_ID}',
      replacement: REACT_APP_IOS_BUNDLE_ID,
      paths: [`${currentPath}/public/apple-app-site-association`],
      recursive: true,
      silent: true
    })
    console.log(`${REACT_APP_ENVIRONMENT} AASA file generated in ${currentPath}/public/apple-app-site-association`)
  }
}

generateAASA();