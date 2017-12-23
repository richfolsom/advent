var progs = {};
var counter = 0;

var fs = require('fs');
var input = fs.readFileSync('advent_12.txt').toString().split('\n');

for (var i = 0; i < input.length; i++) {
  if (input[i] != '') {
    input[i] = input[i].replace('<->', '');
    input[i] = input[i].split(',').join('');
    input[i] = input[i].match(/\S+/g);
    console.log(input[i]);
    progs[input[i][0]] = {
      data: input[i],
      added: false
    };

  }
}
console.log(progs);

var addLine = function(idx) {
  if (progs[idx].added == false) {
    counter++;
    progs[idx].added = true;
    for (var i = 0; i < progs[idx].data.length; i++)
      addLine(progs[idx].data[i]);
  }
}
addLine('0');


console.log(progs);
console.log(counter);
