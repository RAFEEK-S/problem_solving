
// Find foctors of number less than 1000;

var input = 6;

var facNum = [];

for (let i = 0; i <= 1000; i++) {
  if (input % (i)== 0) {
    facNum.push(i);
  }
}

console.log(facNum);
