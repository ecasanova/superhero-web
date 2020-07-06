const { upload } = require('bugsnag-sourcemaps');
const glob = require('glob');
const fs = require('fs');
const appVersion = require(`${process.cwd()}/package.json`).version;
const reportBuild = require('bugsnag-build-reporter');

const appRoot = process.cwd()
/**
 * Find all of the map files in ./build
 */
function findSourceMaps (callback) {
  return glob(`${appRoot}/build/**/**/*.map`, callback);
}

/**
 * Uploads the source map with accompanying sources
 * @param sourceMap - single .map file
 * @returns {Promise<string>} - upload to Bugsnag
 */
function uploadSourceMap (sourceMap) {
  // Remove .map from the file to get the js filename
  const minifiedFile = sourceMap.replace('.map', '');
  // Remove absolute path to the static assets folder
  const minifiedFileRelativePath = minifiedFile.split('build/')[1];
  // // remove the hash code from the url
  // let path = minifiedFileRelativePath
  // path = path.split('.');
  // path.splice(1,1)
  // path = path.join('.');

  return upload({
    apiKey: process.env.REACT_APP_WEB_BUGSNAG_API_KEY,
    appVersion: appVersion,
    overwrite: true,
    minifiedUrl: `${process.env.REACT_APP_BASE_URL}/${minifiedFileRelativePath}`,
    sourceMap,
    minifiedFile,
    projectRoot: appRoot,
    uploadSources: true,
  });
}

/**
 * Delete the .map files
 * We do this to protect our source
 * @param files - array of sourcemap files
 */
function deleteFiles (files) {
  files.forEach(file => {
    const path = `${appRoot}/${file}`;
    fs.unlinkSync(path);
  });
}

/**
 * Notifies Bugsnag of the new release
 */
function notifyRelease () {
  reportBuild({
    apiKey: process.env.REACT_APP_WEB_BUGSNAG_API_KEY,
    appVersion,
    releaseStage: process.env.REACT_APP_RELEASE_STAGE,
  })
    .then(() => console.log('Bugsnag build reported'))
    .catch(err => console.log('Reporting Bugsnag build failed', err.messsage));
}

/**
 * Find, upload and delete Source Maps
 */
function processSourceMaps () {
  findSourceMaps((error, files) => {
    console.log(files);
    return (
      Promise.all(files.map(uploadSourceMap))
        .then(() => {
        // deleteFiles(files);
          notifyRelease();
        })
        .catch(e => {
          console.log(e);
        })
    )
  });
}

processSourceMaps();