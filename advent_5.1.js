var moves = [];



var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('maze.txt')
});

lineReader.on('line', function(line) {
  moves.push(parseInt(line));
});

lineReader.on('close', function() {
  var loc = 0;
  var next = 0;
  var counter = 0;


  while (loc < moves.length) {
    next = loc + moves[loc];
    if (moves[loc] < 3)
      moves[loc]++;
    else {
      moves[loc]--;
    }
    loc = next;
    counter++;
  }

  console.log(counter);

});
