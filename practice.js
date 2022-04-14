const number = [89, 34, 42, 11, 12];

for (let i = 0; i < number.length; i++) {
  const numbe1r = number[i];
}

function multiply(number1, number2) {
  const result = number1 * number2;
  return result;
}

const output = multiply(10, 101);

const student = {
  name: "sam roy",
  age: 35,
  movies: ["loyal", "demi god", "vanialla"],
};

const myVariable = "age";

console.log(student.age); //direct by property
console.log(student["age"]); // direct by property name string
// access property by name
console.log(student[myVariable]); //access via property name in a variable
