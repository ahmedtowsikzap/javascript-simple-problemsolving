//'aad', 4, true , [],{}
//'' , 0, false, undefined, null

let myVar = 5;
// for check truthy
if(myVar){
  myVar = myVar * 100
}else {
    myVar = 0;
}

let mymoney = 50;
//check negative or flasy or anything just write !
if(!mymoney){

}
const money = 10
let food;

if(money > 100){
    food= "biryani"
}
else{
    food = 'cha'
}

// ternary operator 

let food1 = money>100 ? 'biryani' : 'cha';

// console.log(food1)


let drink = (money > 100 && myVar > 100 ) ? 'coke' : 'filterwater'
// console.log(drink)

//num 2 string convertion

const num1 = 54;
// console.log(num1);

const numStr = num1 + '';
// console.log(numStr)

//string to number

const input = '345'

const inpNum = +input
console.log(inpNum)

//

let isActive = true;

const showuser = () => console.log('display user');
const hideuser = () => console.log('hide user');

// isActive ? showuser() : hideuser()

isActive && showuser();
//  
isActive || hideuser();

//Toogle stuffs boolean

isActive = !isActive;

