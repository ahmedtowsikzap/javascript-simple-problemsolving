const products = [
  { name: "laptop", price: 200, brand: "lenovo", color: "Silver" },
  { name: "phone", price: 4444, brand: "iphone", color: "Silver" },
  { name: "watch", price: 4400, brand: "apple", color: "Silver" },
  { name: "sunglass", price: 500, brand: "ray bon", color: "black" },
  { name: "camera", price: 10000, brand: "nikon", color: "matte black" },
  { name: "Choco", price: 20034, brand: "ldsfdo", color: "Sdfadsr" },
];

const brands = products.map((product) => product.brand);
// console.log(brands);

const prices = products.map((price) => price.price);

// console.log(prices);

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

// Filter options ;

const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);

// containing name filter

const specificName = products.filter((product) => product.name.includes("n"));
// console.log(specificName);

//4.find

const special = products.find((p) => p.name.includes("n"));
console.log(specificName);
