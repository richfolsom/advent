var ARR_SIZE = 256;
var current = 0;
var input = '187,254,0,81,169,219,1,190,19,102,255,56,46,32,2,216'
  //var input = '3,4,1,5';
var skip = 0;
var lengths = [];

for (var i = 0; i < input.length; i++) {
  lengths.push(input.charCodeAt(i));
}

lengths.push(17);
lengths.push(31);
lengths.push(73);
lengths.push(47);
lengths.push(23);
console.log(lengths);

var arr = [];

for (var i = 0; i < ARR_SIZE; i++) {
  arr.push(i);
}



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


for (var x = 0; x < 64; x++) {
  for (var i = 0; i < lengths.length; i++) {
    reverse(parseInt(lengths[i]));
  }
}
printArray();


var s = '';

for (var i = 0; i < 16; i++) {
  var tmp = 0;
  for (var j = 0; j < 16; j++)
    tmp = tmp ^ arr[(16 * i) + j];
  var t = tmp.toString(16);
  if (t.length == 1)
    t = '0' + t;
  s += t;
}
console.log(s)
