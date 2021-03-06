const path = require('path');
const fs = require('fs');

module.exports = function(idString, fileName, tempFilePath){
  return new Promise((resolve, reject) => {
    const targetPath = path.join(__dirname, '..', '..', 'public', 'uploads', 'items', idString);
    fs.rename(tempFilePath, path.join(targetPath, fileName), (err) => {
      if(err){
        reject(err);
      }
      resolve(path.join(targetPath, fileName));
    });
  });
}