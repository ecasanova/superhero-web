// This file is used to generate a master locale folder containing all namespaces and translation keys
const fs = require('fs');
const path = require('path');

const jsonFilePaths = [
  // Add/change these paths to point to the folder where your translations live.
  ...searchRecursive('../../features'),
  ...searchRecursive('../../screens'),
]

const master = jsonFilePaths.reduce((acc, cur) => {
  const [filename/*unused*/, path] = cur;
  const contents = require(path);
  Object.entries(contents).forEach(([key, val]) => {
    if (key in acc) {
      acc[key] = (Array.isArray(acc[key]))
        ? [...acc[key], ...val]
        : {...acc[key], ...val};
    } else {
      acc[key] = val;
    }
  })
  return acc;
}, {})

fs.writeFile(
  // This is where the masterTranslations folder will be placed in relation to this file.
  './languages/masterTranslations.json', 
  JSON.stringify(master), 
  (error) => { if (error) console.log(error); }
);

/**
 * Recursively searches sub directories and files for json files and collects their filenames and paths
 * 
 * @param {string} dir - directory to look for json files
 * @returns {Array<object>} results: [{name: path}]
 */
function searchRecursive(dir) {
  // This is where we store pattern matches of all files inside the directory
  let results = [];
  // Read contents of directory
  fs.readdirSync(dir).forEach(function(dirInner) {
    const _dirInner = path.resolve(dir, dirInner);
    const stat = fs.statSync(_dirInner);
    // If path is a directory, scan it and combine results
    if (stat.isDirectory()) {
      results = results.concat(searchRecursive(_dirInner));
    }
    // If path is a file and ends with pattern then push it onto results
    if (stat.isFile() && dirInner.endsWith('.json')) {
      const fileName = _dirInner.slice(_dirInner.lastIndexOf('/') + 1).split('.json')[0];
      results.push([fileName, _dirInner]);
    }
  });
  return results;
};
