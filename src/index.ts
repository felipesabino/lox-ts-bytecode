
(() => {
  process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });
  console.log('it works');
})();