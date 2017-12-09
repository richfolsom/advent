var target = 277678;
//var target = 23;
var grid_size = Math.ceil(Math.sqrt(target));
console.log(grid_size);
var target_x = target_y = Math.floor(grid_size / 2);
console.log(target_x);
var start_x = grid_size - ((Math.pow(grid_size, 2)) - target + 1);
var start_y = grid_size - 1;
console.log(start_y + ' ' + start_x);

console.log(Math.abs(target_x - start_x) + Math.abs(target_y - start_y));
