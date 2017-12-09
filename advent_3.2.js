//var target = 277678;
var target = 82;
var grid_size = Math.ceil(Math.sqrt(target));
var start = Math.floor(grid_size / 2);

console.log(grid_size);
console.log(start);
var grid = new Array();
var dirs = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0]
];

var populateCell = function(x, y) {
  var x_adj;
  var y_adj;
  var tot = 0;
  var surrounding = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ]
  var tmp_x, tmp_y;
  for (var i = 0; i < surrounding.length; i++) {
    tmp_x = x + surrounding[i][0];
    tmp_y = y + surrounding[i][1];
    if (tmp_x >= 0 && tmp_x < grid_size && tmp_y >= 0 && tmp_y < grid_size)
      tot += grid[tmp_x][tmp_y];
  }
  return tot;
}

var x = start,
  y = start;
var idx = 0;
var counter = 1;
tmp = 0;
var val = 1;

for (var i = 0; i < grid_size; i++) {
  grid.push(new Array());
  for (var j = 0; j < grid_size; j++) {
    grid[i].push(0);
  }
}
grid[x][y] = 1;

for (var i = 0; i < grid_size; i++) {
  for (var j = 0; j < 2; j++) {
    for (var k = 0; k < counter; k++) {
      //console.log(dirs[idx]);
      x += dirs[idx][0];
      y += dirs[idx][1];
      if (x < grid_size && y < grid_size)
        grid[x][y] = populateCell(x, y);

    }
    idx = (idx + 1) % 4;
  }
  counter++;
}



var s = '';
for (var i = 0; i < grid_size; i++) {
  s = ''
  for (var j = 0; j < grid_size; j++) {
    s = s + grid[i][j] + '\t';
  }
  console.log(s);
}
