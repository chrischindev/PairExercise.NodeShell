const fs = require('fs');

function ls() {
  fs.readdir('./', 'utf-8', (err, files) => {
    if(err) {
      throw err;
    } else {
      process.stdout.write(files.join('\t'));
      process.stdout.write('\nprompt > ');
    }

  });
}

module.exports = () => {
  ls();
};
