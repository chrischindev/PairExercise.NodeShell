function pwd() {
  process.stdout.write(__dirname);
}

module.exports = () => {
  pwd();

  process.stdout.write('\nprompt > ');
};
