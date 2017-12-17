var start = [0, 0, 0];
var loc = start.slice();
//var moves = 'se,sw,se,sw,sw'.split(',');

var fs = require('fs');
var moves = fs.readFileSync('moves.txt').toString().split(',');
var max_dist = 0;


var dirs = {
  'nw': [1, -1, 0],
  'n': [1, 0, -1],
  'ne': [0, 1, -1],
  'sw': [0, -1, 1],
  's': [-1, 0, 1],
  'se': [-1, 1, 0]
}

var move = function(dir) {
  dir = dir.trim();
  console.log('dir=' + '"' + dir + '"');

  loc[0] += dirs[dir][0];
  loc[1] += dirs[dir][1];
  loc[2] += dirs[dir][2];
  if (dist(start, loc) > max_dist)
    max_dist = dist(start, loc);
}

var dist = function(s, l) {
  //console.log(s);
  //console.log(l);
  return ((Math.abs(s[0] - l[0]) + Math.abs(s[1] - l[1]) + Math.abs(s[2] -
      l[
        2]))) /
    2
}

console.log('var=' + moves[moves.length - 1]);
for (var i = 0; i < moves.length; i++)
  move(moves[i]);
console.log(loc);
console.log(dist(start, loc));
console.log(max_dist);
