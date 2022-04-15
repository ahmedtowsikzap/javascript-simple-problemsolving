// 1.  JSON

// stringfy, parse

const student = {
  name: "sam roy",
  age: 35,
  movies: ["loyal", "demi god", "vanialla"],
};

const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);

const studentObj = JSON.parse(studentJson);
console.log(studentObj);

// fetch

// fetch("")
//   .then(res => res.json())
//   .then(data => console.log(data));


  // keys, values


const keys= Object.keys(student);
const values = Object.values(student);



//for 

const numbers = [34,434,23,6,4,52,34,3,445,45]
numbers.forEach(num=> console.log(num));

numbers.map(num => num*2);

//for of on array like object
//for in on object loop on an object using for in


//add or remove for an array


const products = [
  { name: "laptop", price: 200, brand: "leno", color: "Silver" },
  { name: "phone", price: 4444, brand: "iphone", color: "Silver" },
  { name: "watch", price: 4400, brand: "apple", color: "Silver" },
  { name: "sunglass", price: 500, brand: "ray bon", color: "black" },
  { name: "camera", price: 10000, brand: "nikon", color: "matte black" },
  { name: "Choco", price: 20034, brand: "ldsfdo", color: "Sdfadsr" },
];

const newproduct = {name: 'webcam', price:700, brand:'logitech'};

//copy products array and then add new product
const newProducts = [...products, newproduct];

/// create an new array without one specific item
/// remove means create aray without an obj

const remaining  = products.filter(product=> product.name !== 'phone')
