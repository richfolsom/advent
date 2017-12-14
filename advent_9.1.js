//var input = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
//var input = '{{},{},{},{}}';
var idx = 0;
var total = 0;
var in_comment = false;

var getToken = function(s) {
  //console.log('getToken' + idx);
  var ret = '';
  while (true) {
    if (s[idx] == '<')
      in_comment = true;
    if (s[idx] == '>') {
      in_comment = false;
      idx++;
    }
    if (!in_comment) {
      if (s[idx] == '{') {
        idx++;
        return '{';
      }
      if (s[idx] == '}') {
        idx++;
        return '}';
      }
    }
    if (s[idx] == '!')
      idx += 2;
    else
      idx++;
  }
}


var fs = require('fs');
var input = fs.readFileSync('weird.txt').toString().split("\n");

var addUp = function(s, level) {
  while (idx < s.length) {
    char = getToken(s);
    if (char == '{') {
      total += level;
      addUp(s, level + 1)
    } else if (char == '}')
      return;
  }
}

var big_total = 0;
for (var i = 0; i < input.length; i++) {
  var input_sa = input[i].split('');
  total = 0;
  idx = 0;
  in_comment = false;
  addUp(input_sa, 1);
  big_total += total;
}
console.log(big_total);
