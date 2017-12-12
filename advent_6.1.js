//var blocks = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];
var blocks = [0, 2, 7, 0];

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
  console.log(max_idx);

  var incr;
  if (max < blocks.length) {
    incr = 1;
    blocks[max_idx] = 0;
  } else {
    incr = Math.floor(max / (blocks.length - 1));
  }
  var arr = blocks.slice(0);

  var left = max;
  for (var i = 1; i < blocks.length; i++) {
    arr[(max_idx + i) % blocks.length] += incr;
    left -= incr;
  }
  if (left >= 0)
    arr[max_idx] = left;
  list.push(arr);

}

compare_arrays = function(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++)
    if (arr1[i] != arr2[i])
      return false
  return true;
}

var done = false;
var i = 0;
list.push(blocks);
while (!done) {
  calc_vals(list[i]);
  for (var j = 0; j <= i; j++)
    if (compare_arrays(list[i + 1], list[j])) {
      done = true;
      console.log('result=' + (list.length - 1));
    }

  i++;
}


console.log(list);
