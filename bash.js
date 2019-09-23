const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'pwd') {
    pwd();
  }
  if(cmd === 'ls') {
    ls();
  }
  if (cmd.slice(0,3) === 'cat') {
    cat(cmd.slice(4));
  }
});
