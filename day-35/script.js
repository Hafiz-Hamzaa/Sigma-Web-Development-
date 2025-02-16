// Strings and their Methods
let str = "Ali"
console.log(str);
// Accessing Chracters
console.log(str[1]);
// length
console.log(str.length);

// Template Lietrals
let name = "Hamza"
let age = 12
let result = `My name is ${name} and my age is ${age}`
console.log(result);

// Strings are immutabele => mtlb original string kbhi change nh hota hamesha new str create hoti hai with new variable
// Some String Methods
let string = "   Javascript"
// uppercase
console.log(string.toUpperCase());
console.log(string);
// lowercase
console.log(string.toLowerCase());
// trim
console.log(string.trim());

// slice
let fruit = "apple"
console.log(fruit.slice(1,4));

// concat
let vege = "onion"
let veg = "tomato"
console.log(vege.concat(veg));

// replace
console.log(vege.replace("o",7));

// charAt
console.log(fruit.charAt(3));

// indeexof
console.log(fruit.indexOf("l"));