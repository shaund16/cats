// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
};
 

module.exports = breedDetailsFromFile;
