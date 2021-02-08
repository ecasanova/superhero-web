const glob = require('glob');
const fs = require('fs');
const appVersion = require(`${process.cwd()}/package.json`).version;

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
 * @returns {Promise<string>} - upload
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

  // Error Monitoring SDK upload command goes here
  return
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
 * Notifies Error Monitoring of the new release
 */
function notifyRelease () {
}

/**
 * Find, upload and delete Source Maps
 */
function processSourceMaps () {
  findSourceMaps((error, files) => {
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