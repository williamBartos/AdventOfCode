var spark = require('./spark-md5.min.js');

var secret = 'iwrupvqb';

var santaHash = spark.hash(secret);



function hashCheck(hashes) {
var start = hashes.slice(0,6);
if (start =='000000') {
  return true;
}
return false;
}

function hashGen (input) {
  var i = 0;
  while (!hashCheck(santaHash)) {
    santaHash = spark.hash(secret+ i);
    i++;
  }
  return i;
}

console.log(hashGen(santaHash));
