const fs = require('fs');

const cat = (fileName) => {
  fs.readFile(__dirname + '/' + fileName, 'utf-8', (err, data) => {
    if (err) throw err;
    else {
      process.stdout.write(data);
    }
  })
}

module.exports = (fileName) => {
  cat(fileName);
}
