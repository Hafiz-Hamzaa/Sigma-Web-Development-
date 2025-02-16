// Arrays
let arr = ["apple" , "banana" , "mango"]
// access index
console.log(arr[2])
// find length
console.log(arr.length);
// update value from an array
arr[3] = "pear"
console.log(arr);

// Some Array Methods
let vegetables = ["tomato" , "onion" , "carrots"]
// push , unshift
console.log(vegetables.push("ladyfinger"));
console.log(vegetables.unshift("potato"));

// pop , shift
console.log(vegetables.pop());
console.log(vegetables.shift());

let food = ["bread" , "juice" , "cookies" , "candies"]
// console.log(food.slice(1,3))
food.splice(0,0,"biryani");
console.log(food);
console.log(food.toString());

// Looping with an array
// 4 Commonly ways
// For Loop Basic =>  Ye loop array ke index ko use karke har element ko access karta hai.
let Arr = [20 , 30 , 80 , 90 , 100]
for(let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

// For in Loop =>  Ye loop sirf indexes deta hai, elements ko access karne ke liye array[index] likhna parta hai.
let cars = ["BMW", "Toyota", "Honda"];
for(let index in cars) {
    console.log(index, cars[index]);
}

// For of Loop => Ye loop sirf values ko access karta hai, index ki zaroorat nahi hoti.
let numbers = [10, 20, 30, 40];
for(let number of numbers) {
    console.log(number);
}

// For each => Ye array ke har element pe ek function apply karta hai.
let colors = ["red", "blue", "green"];
colors.forEach(colors => {
    console.log(colors);
})