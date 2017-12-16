//var input = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
//var input = '{{},{},{},{}}';
var idx = 0;
var total = 0;
var in_comment = false;
var comments = 0;

var getToken = function(s) {
  //console.log('getToken' + idx);
  var ret = '';
  var comment_counter = 0;
  while (idx < s.length) {
    if (s[idx] == '<')
      in_comment = true;
    if (s[idx] == '>') {
      in_comment = false;
      comment_counter = 0;
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
    } else {
      if (comment_counter > 0 && s[idx] != '!') {
        comments++;
        console.log(s[idx]);
      }

      comment_counter++;
    }
    if (s[idx] == '!')
      idx += 2;
    else
      idx++;
  }
}


var fs = require('fs');
var input = fs.readFileSync('weird.txt').toString();

//var input =
//  '{{{{{{<!!u!\'a<e!!!\'!"!>,<o!!!!o>,<oio{>},{{{<,!>o!>},<!>},<!i!{,a!!}!!!>!>}';

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


var total_comments = 0;
idx = 0;
in_comment = false;
comments = 0;
while (idx < input.length) {
  getToken(input);
}
total_comments += comments;
console.log(total_comments);
