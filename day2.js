function getInput() {
 var fs = require('fs');
 return fs.readFileSync('day2input.txt', 'utf8');
}

var input = getInput();

var wsplit = input.split('\n').filter(function(line) {
  return line.length !==0;
});


function wrap(dimSplit) {
  var lwh = [];
  for (i = 0; i < dimSplit.length; i++) {
   lwh.push(dimSplit[i].split('x'));
  }
return lwh;
}


function area(dims) {
  var sarea = 0;
  for (i = 0; i < dims.length; i++){
    var box = dims[i];
    var l = parseInt(box[0]);
    var w = parseInt(box[1]);
    var h = parseInt(box[2]);
     sarea = sarea + (2*l*w) + (2*w*h) + (2*h*l) + Math.min(l*w,w*h,h*l);
     console.log(sarea);
  }
return sarea;
}

function ribbon(dims) {
  var rarea = 0;
  for (i = 0; i < dims.length; i++){
    var box = dims[i];
    var l = parseInt(box[0]);
    var w = parseInt(box[1]);
    var h = parseInt(box[2]);
    rarea = rarea + (2*l) + (2*h) + (2*w) -(2 * Math.max(l,w,h)) + (l*w*h);
    console.log(rarea);
}
}
console.log(area(wrap(wsplit)));
console.log(ribbon(wrap(wsplit)));
