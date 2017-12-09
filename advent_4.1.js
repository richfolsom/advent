var tot = 0;

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function(line) {
  var toks = line.split(' ');
  var thetok;
  var valid = 1;
  for (var i = 0; i < toks.length; i++) {
    thetok = toks[i];

    for (var j = 0; j < toks.length; j++) {
      if (j != i && thetok == toks[j]) {
        valid = 0;
        console.log(line);
      }
    }
  }
  tot += valid;

});

lineReader.on('close', function() {
  console.log(tot);
});
