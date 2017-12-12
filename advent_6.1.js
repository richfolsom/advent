var blocks = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];
//var blocks = [0, 2, 7, 0];

var list = [];
var counter = 1;
//list.push(blocks);


calc_vals = function(blocks) {
  var max = 0;
  var max_idx = 0;

  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i] > max) {
      max_idx = i;
      max = blocks[i];
    }
  }
  var arr = blocks.slice(0);
  arr[max_idx] = 0;
  var left = max;
  var idx = 1;
  while (left > 0) {
    arr[(max_idx + idx) % blocks.length]++;
    idx++;
    left--;
  }
  //console.log(arr);
  list.push(arr);

}

compare_arrays = function(arr1, arr2) {
  var i = 0;
  for (i = 0; i < arr1.length; i++)
    if (arr1[i] != arr2[i])
      return -1;
  return i;
}

var done = false;
var i = 0;
list.push(blocks);
while (!done) {
  calc_vals(list[i]);
  for (var j = 0; j <= i; j++) {
    var val = compare_arrays(list[i + 1], list[j])
    if (val >= 0) {
      done = true;
      console.log('result=' + (list.length - j - 1));
    }
  }
  i++;
}


console.log(list);
