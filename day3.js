function getInput() {
 var fs = require('fs');
 return fs.readFileSync('day3input.txt', 'utf8');
}

var input = getInput();
var moves = input.split('');


var deliver = ([0,0]);
var roboDeliver = ([0,0]);
var houses = [];

function santaMove(direction) {
  for (i = 0; i < direction.length; i++){

    if (direction[i] === '^') {
      if (i % 2 === 0) {
      deliver[1] += 1;
      houses.push(deliver.slice(0));
      }
      else {
        roboDeliver[1] += 1;
        houses.push(roboDeliver.slice(0));
      }
    }

    else if (direction[i] ==='v') {
      if (i % 2 === 0) {
      deliver[1] -= 1;
      houses.push(deliver.slice(0));
    }
      else {
        roboDeliver[1] -= 1;
        houses.push(roboDeliver.slice(0));
      }
    }

    else if (direction[i] ==='>') {
      if (i % 2 ===0){
      deliver[0] += 1;
      houses.push(deliver.slice(0));
    }
    else {
      roboDeliver[0] += 1;
      houses.push(roboDeliver.slice(0));
    }
    }
    else if (direction[i] ==='<') {
      if (i % 2 === 0)
      {
      deliver[0] -= 1;
      houses.push(deliver.slice(0));
    }
    else {
      roboDeliver[0] -= 1;
      houses.push(roboDeliver.slice(0));

    }
    }
  }
  return houses;
}


function adder(arr) {
  for (i = 0; i < arr.length; i++){
    arr[i] = arr[i].reduce(function(a,b) {return a+ ',' + b;});
  }
  return arr;
}

function filter(array) {
  var uniquearray = array.filter(function(item,pos) {
    //console.log(pos);
    console.log(array.indexOf(item));
    return array.indexOf(item) == pos;
  });
  return uniquearray.length;
}














console.log(filter(adder(santaMove(moves))));
