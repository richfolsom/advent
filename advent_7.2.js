var s = [];
var l;
var read_file = true;

if (!read_file) {
  s = [
    'pbga (66)',
    'xhth (57)',
    'ebii (61)',
    'havc (66)',
    'ktlj (57)',
    'fwft (72) -> ktlj, cntj, xhth',
    'qoyq (66)',
    'padx (45) -> pbga, havc, qoyq',
    'tknk (41) -> ugml, padx, fwft',
    'jptl (61)',
    'ugml (68) -> gyxo, ebii, jptl',
    'gyxo (61)',
    'cntj (57)'

  ];
  l = s.length;
} else {
  var fs = require('fs');
  s = fs.readFileSync('tree.txt').toString().split("\n");
  l = s.length - 1;
}


var nodeMap = {};
var keys = [];

for (var i = 0; i < l; i++) {
  var n = new node(s[i]);
  nodeMap[n.key] = n;
  keys.push(n.key);
}
//console.log(nodeMap);

for (var i = 0; i < l; i++) {
  var n = nodeMap[keys[i]];
  for (var j = 0; j < n.children_text.length; j++) {
    n.children.push(nodeMap[n.children_text[j]]);
    nodeMap[n.children_text[j]].isChild = true;
  }
}
var root;

for (var i = 0; i < l; i++) {
  if (nodeMap[keys[i]].isChild == false)
    root = nodeMap[keys[i]];
}

var printTotal = function(n) {
  n.total = n.weight;
  for (var i = 0; i < n.children.length; i++)
    n.total += printTotal(n.children[i]);
  return n.total;
}

console.log(nodeMap[root.key]);

console.log(root.key);
for (var i = 0; i < root.children.length; i++) {
  console.log(nodeMap[root.children[i].key].key + ' ' + printTotal(nodeMap[root
      .children[i].key]) +
    ' ' +
    nodeMap[root.children[i].key].weight + ' ' + nodeMap[root.children[i].key]
    .total
  );
}

var printTree = function(n, level) {
  var s = '';
  for (var i = 0; i < level * 4; i++) {
    s = s + ' ';
  }
  console.log(s + n.key + ' ' + n.weight + ' ' + n.total);
  for (var i = 0; i < n.children.length; i++)
    printTree(n.children[i], level + 1);
}

printTree(nodeMap[root.key], 0);
//console.log(nodeMap);



function node(s) {
  var step1 = s.split('->')
  this.key = step1[0].split(' ')[0].trim();
  this.weight = parseInt(step1[0].split(' ')[1].replace('(', '').replace(')',
    '').trim());
  this.children_text = [];
  this.children = [];
  this.isChild = false;
  this.total = 0;
  if (step1.length > 1) {
    this.children_text = step1[1].trim().split(',');
  }
  for (var i = 0; i < this.children_text.length; i++)
    this.children_text[i] = this.children_text[i].trim();
}
