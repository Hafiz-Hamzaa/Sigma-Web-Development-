// CallBacks & Promises :

// sync vs asyncronous 
// sync js
console.log("Start");
console.log("Doing some work...");
console.log("End");

// async js : js wait nh krta agai ka code run krdeta hai 
console.log("Start");
setTimeout(() => {
  console.log("Async task done!");
}, 2000);
console.log("End");

// understanding Callbacks: A callback is a function passed as an argument to another function, jo baad me call hoti hai.
function greet(name,callback){
    console.log(`Hi ${name}`)
    callback()
}
function sayBye(){
    console.log("Byee")
}
greet("Ali",sayBye)

// 🔥 Callback Hell — Simple Definition:
// Jab hum ek function ke andar dusra function, uske andar teesra... aise deeply nested callbacks likhne lagte hain, to us situation ko Callback Hell kehte hain.
function washClothes(callback) {
  console.log("Washing clothes...");
  setTimeout(() => {
    console.log("Clothes washed!");
    callback();
  }, 1500);
}

function dryClothes(callback) {
  console.log("Drying clothes...");
  setTimeout(() => {
    console.log("Drying Clothes!")
    callback()
  }, 1500);
}

washClothes(dryClothes)