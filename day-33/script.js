// Loops => Repeatition Task ko automate krna
// 5 Types of Loops
// 1- For Loop => kaha tak code ko execute krna hai
let a = 1
for(let i = 0; i < 100 ; i++) {
    x = a + i
    console.log(x);
}

// 2- While Loop => sb se pehle condition check hoti hai phr code execute hota hai
let b = 10
while (b < 15) {
    console.log(b);
    b++
}

// 3- Do while loop => same for while loop but isme code aik bar lazmi chlta hai then phr condition check hoti hai
let y = 30
do {
    console.log(y);
    y++
} while (y < 40);

// 4- For in Loop => Objects ki keys provide krte hai or value bh access krskte hai
let student = {
    name : "Ali",
    age : 23,
    profession : "Full Stack Developer",
}
for (let key in student){
    console.log(key); // keys access
    console.log(student[key]); // value access
}

// 5- For of Loop => arrays , strings per apply hota hai iterable kai liye
// Arrays Example
let fruits = ["apple" , "mango" , "pear" , "banana"]
for(let fruit of fruits){
    console.log(fruit); // apple , mango , pear , banana
}

// Strings Example
let str = "JavaScript"
for(let char of str){
    console.log(char);
}