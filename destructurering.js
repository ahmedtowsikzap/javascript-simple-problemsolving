// Array destructuring
const numbers = [42, 53, 23];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// console.log(boxify(90, 30));

const student = {
  name: "sam roy",
  age: 35,
  movies: ["loyal", "demi god", "vanialla"],
};

const [first, second] = student.movies;
console.log(first, second);

// object destructuring

const { name, age } = { name: "alu", age: 22 };
const { name, age } = { id: 12, name: "alu", age: 22 };
