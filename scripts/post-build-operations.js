const fs = require('fs');
const { upload } = require('bugsnag-sourcemaps');
const appVersion = require('../package.json').version;
const reportBuild = require('bugsnag-build-reporter');
const glob = require('glob');
const shell = require("shelljs");
const filesystem = require("file-system");


/**
 * Find all of the map files in ./build
 */
function findSourceMaps(callback) {
  return glob('build/**/*/*.map', callback);
}

/**
 * Delete the .map files
 * We do this to protect our source
 * @param files - array of source map files
 */
function deleteFiles(files) {
  files.forEach(file => {
    const path = `${__dirname}/${file}`;
    fs.unlinkSync(path);
  });
}

/**
 * Uploads the source map with accompanying sources
 * @param sourceMap - single .map file
 * @returns {Promise<string>} - upload to Bugsnag
 */
function uploadSourceMap(sourceMap) {
  // Remove .map from the file to get the js filename
  const minifiedFile = sourceMap.replace('.map', '');

  // Remove absolute path to the static assets folder
  const minifiedFileRelativePath = minifiedFile.split('build/')[1];

  return upload({
    apiKey: process.env.REACT_APP_WEB_BUGSNAG_API_KEY,
    appVersion,
    overwrite: true,
    minifiedUrl: `https://${process.env.REACT_APP_PRIMARY_ASSOCIATED_DOMAIN}/${minifiedFileRelativePath}`,
    sourceMap,
    minifiedFile,
    projectRoot: __dirname,
    uploadSources: true
  });
}

/**
 * Find, upload and delete Source Maps
 */
async function processSourceMaps() {
  findSourceMaps((error, files) => {
    console.log('Files to be processed as source maps', files)
    return Promise.all(files.map(uploadSourceMap))
  })
}

/**
 * Notifies Bugsnag of the new release
 */
function notifyRelease() {
  reportBuild({
    apiKey: process.env.REACT_APP_WEB_BUGSNAG_API_KEY,
    appVersion,
    releaseStage: process.env.REACT_APP_ENVIRONMENT
  }).then(() => console.log('Bugsnag build reported'))
    .catch(error => console.log('Reporting Bugsnag build failed', error.message));
}


/**
 * Obfuscates JS code: https://adkgroup.atlassian.net/wiki/spaces/ADK/pages/871203049/Javascript+Obfuscation
 */
function obfuscateAllJSFiles() {
  console.log("Obfuscating all JS files...")
  shell.exec("npm install -g javascript-obfuscator");
  filesystem.fs.readdir(`build/static/js`, function(err, items) {
    if (err) {
      console.error(err)
    }
    items.forEach((item) => {
      console.log(`build/static/js/${item}`)
      if (!item.includes('.map')) {
        shell.exec(`javascript-obfuscator --source-map true --source-map-mode 'separate' build/static/js/${item} --output build/static/js/${item}`);
      }
    });
  });
  console.log("Javascript obfuscation complete")
}

async function runPostBuildOperations() {
  obfuscateAllJSFiles();
  await processSourceMaps();
  notifyRelease();
}