const number = [89, 34, 42, 11, 12];
const student = {
  name: "sam roy",
  age: 35,
  movies: ["loyal", "demi god", "vanialla"],
};
// template string

const about = `My Name is ${student.name}  age of ${student.age} has number${number[1]} also liked movies ${student.movies[0]} `;
console.log(about);

// arrow funtcion

const getFiftyFive = () => 55;

const addSixtyFive = (num) => num + 64;
const isEven = (x) => x % 2 == 0;

const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};
// spread operator

const newNumbers = [...number];
number.push(99);
number.push(99);
number.push(99);
number.push(99);

//create an new array from old array & add an new element to the new array

const currentNumber = [...number, 110];

console.log(number);
console.log(newNumbers);
console.log(currentNumber);
