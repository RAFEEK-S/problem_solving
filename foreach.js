//foreach

let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.forEach(function (element) {
  console.log(element*2);
});

//points to remember:

// 1. for each does not return anything ,return work only in callback function like map methods

// 2. for each is alternate for function to call for so many values;

// 3. for each mutates each value and store directly to database and return;

// example:

function numeric(num) {
  console.log(num);
}
console.log(numeric(1));
console.log(numeric(2)); // for each is alternate for the function to call numbers upto 1000
console.log(numeric(3));
