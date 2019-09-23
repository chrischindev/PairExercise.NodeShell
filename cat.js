const fs = require('fs');

const cat = (fileName) => {
  const fileDir = __dirname + '/' + fileName;
  fs.readFile(fileDir, 'utf-8', (err, data) => {
    if (err) throw err;
    else {

      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    }
  })

}

module.exports = (fileName) => {
  cat(fileName);
}
