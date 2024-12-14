const path = require('path');
const fs = require('fs');

const clearImage = filePath => {
  try {
    filePath = path.join(__dirname, '..', filePath);
    fs.unlink(filePath, err => console.log(err));
  } catch (ex) {
    console.error(ex);
  }
};

exports.clearImage = clearImage;
