// map method
var squareRoot = [4, 16, 25, 400, 900];

const results = squareRoot.map((element) => {
  return Math.sqrt(element);
});

console.log(results);

// 1. map return an array;

// 2. map mutates(changes) each element and return the new array with same length;

var people = [
  {
    firstname: "Jimmy",
    lastname: "Brown",
  },
  {
    firstname: "Cindy",
    lastname: "Malcolm",
  },
  {
    firstname: "Timothy",
    lastname: "Stumps",
  },
];

function fullNames(element, index) {
  var fullnames = [index + ":" + element.firstname,element.lastname].join(" ");
  return fullnames;
}

console.log(people.map(fullNames));
