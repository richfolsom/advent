var ARR_SIZE = 256;
var current = 0;
var lengths = '187,254,0,81,169,219,1,190,19,102,255,56,46,32,2,216'.split(',');
//var lengths = '3,4,1,5'.split(',');
var skip = 0;


var arr = [];

for (var i = 0; i < ARR_SIZE; i++) {
  arr.push(i);
}

console.log(lengths);


var reverse = function(length) {
  var tmp = [];
  for (var i = 0; i < length; i++) {
    tmp.push(arr[(current + i) % ARR_SIZE]);
  }
  for (var i = 0; i < length; i++)
    arr[(current + i) % ARR_SIZE] = tmp[length - i - 1];
  current = (current + length + skip) % ARR_SIZE;
  skip++;
}


var printArray = function() {
  var s = '';
  for (var i = 0; i < arr.length; i++) {
    if (i > 0)
      s += ',';
    if (current == i)
      s += '[' + arr[i] + ']';
    else
      s += arr[i];
  }
  console.log(s);

}

for (var i = 0; i < lengths.length; i++) {
  reverse(parseInt(lengths[i]));
  printArray();
}
