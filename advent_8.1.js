var regs = {};



var incReg = function(reg, value) {
  if (typeof(regs[reg]) === 'undefined') {
    regs[reg] = 0;
  }
  regs[reg] += value;
}

var decReg = function(reg, value) {
  if (typeof(regs[reg]) === 'undefined') {
    regs[reg] = 0;
  }
  regs[reg] -= value;
}

var instruction = function(s) {
  var fields = s.split(' ');
  this.reg = fields[0];
  this.op = fields[1];
  this.op_val = parseInt(fields[2]);
  this.if_reg = fields[4];
  this.if_comp = fields[5];
  this.if_val = parseInt(fields[6]);
  this.eval_if = function() {
    if (typeof(regs[this.if_reg]) === 'undefined') {
      regs[this.if_reg] = 0;
    }
    a = regs[this.if_reg]
    if (this.if_comp == '==')
      return (a == this.if_val)
    else if (this.if_comp == '>=')
      return (a >= this.if_val)
    else if (this.if_comp == '<=')
      return (a <= this.if_val)
    else if (this.if_comp == '<')
      return (a < this.if_val)
    else if (this.if_comp == '>')
      return (a > this.if_val)
    else if (this.if_comp == '!=')
      return (a != this.if_val)

  };
  this.apply_op = function() {
    if (this.op == 'inc')
      incReg(this.reg, this.op_val);
    else {
      decReg(this.reg, this.op_val)
    }

  }
}

var input = [
  'b inc 5 if a > 1',
  'a inc 1 if b < 5',
  'c dec -10 if a >= 1',
  'c inc -20 if c == 10'
]



var fs = require('fs');
var input = fs.readFileSync('instructions.txt').toString().split("\n");


var instructions = [];

for (var i = 0; i < input.length; i++) {
  instructions.push(new instruction(input[i]));
}

var highest = -999999;
var highest_reg = '';

var findHighest = function() {
  for (key in regs)
    if (regs[key] > highest)
      highest = regs[key];
}


for (var i = 0; i < instructions.length; i++)
  if (instructions[i].eval_if()) {
    instructions[i].apply_op();
    findHighest();
  }
console.log(highest);
//console.log(regs);
