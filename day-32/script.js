// Operators
// Arithmetic Operators
let x = 10
let y = 5
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);
console.log(x % y);

// Comparision Operator
let a = 23
let b = 20
console.log(a == b);
console.log(a != b);
console.log(a < b);
console.log(a > b);
console.log(a === b);
console.log(a !==b);

// Assignment Operator
let c = 30
c += 20
c -= 10
// c *= 2
c /= 2
c **= 3
c %= 6
console.log(c);

// Unary Operator
let d = 10
// Post Increment =>> Pehle assign value deta hai phr bad me increment krta hai
console.log(d++); // 10
console.log(d); // 11
// Pre Incremenr =>> Pehle increment krta hai (same for decrement)
console.log(++d); // 12

// Logical Operator
let e = 20
let f = 20
// AND Operaor kehta hai kai dono conditio true honi chahiye
console.log(e === f && e !== f); // false
// OR Operaor kehta hai kai aik bhi conditio true honi chahiye
console.log(e === f || e !== f); // true
// NOT Operaor opposite kaam krta hai 
console.log(!(e == f)); // false

// Conditional Statements
// If-Else Ladder
let theme = "dark"
if(theme === "dark") {
    console.log("Dark Mode");
} else {
    console.log("White Mode");
}

let age = 15
if(age > 20){
    console.log("You can drive");
}else if (age === 15) {
    console.log("Use a Bicycle");
}else{
    console.log("You cannot drive");
}

// Ternary Operators
// Short Hand of If-else Chain
let Age = 20
let result = (Age >= 18 )? "You are in  adult" : "You are a minor"
console.log(result);

// Switch Staement
// aik variable se multiple value se match krna
// case : break : default => keypoints
let fruit = "Apple"
switch(fruit){
    case "Mango":
        console.log("Mango is yellow");
        break;
    case "Apple":
        console.log("Apple is red");
        break;
    default:
        console.log("Unknown Fruit");
}