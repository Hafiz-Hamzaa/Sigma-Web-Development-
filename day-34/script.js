// Functions in JS => Block of code ko resubale banana
// 3 Steps : define krna , call krna or invoke krna , return value lena

// Function Definition
// a and b are parameters and passed the arguments when you invoke the function
function sum (a,b) {
    return a + b; // return
}
let result = sum(20,30) // invoke
console.log(result);

// Default Parameters
function namedFuc(name = "Hamza") {
    return name;
}
let Result = namedFuc(); // agr arguments pass na kiye to default value return hojai gi
console.log(Result);

// Arrow Functions => Shorthand of Function Defintion and save in variable
const divide = (x,y)=>{
    return x / y;
}
let output = divide(20,2)
console.log(output); // 10

// Anonymous Function => aik variable me stor krna and they have no functions named
let sub = function(){
    console.log("This is an Anonymous Functions");
}
sub();

// IIFE (Immediately Invoked Function Expression) => Agar function ko bina call kiye foran execute karna ho, toh IIFE use hota hai.
(function(){
    console.log("This function runs immediately!");
})();

// Functions ka Use Cases (Kab Aur Kyu?)
// ✅ Code Reusability – Ek baar likho, bar bar call karo.
// ✅ Modular Code – Code ko different functions me break karo.
// ✅ Parameters aur Return Values se dynamic programming likho.
// ✅ Complex Calculations ya Operations ko function me rakho.

