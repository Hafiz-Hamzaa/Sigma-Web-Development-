// 🔶 1. What is a Promise?
// "A Promise is an object that represents the future result of an asynchronous operation.
// Kaam abhi complete nahi hua || Lekin ya to success hoga, ya fail hoga
// Aur tab tak JS usko "promise" karta hai ki mai baad me handle karunga

// Prmiises has 3 states : fullfiled , pending , reject
// creating a promise
const myPromise = new Promise((resolve, reject) => {
  let workDone = true;

  if (workDone) {
    resolve("Kaam ho gaya! ✅");
  } else {
    reject("Kaam fail ho gaya!");
  }
});

// Consuming a Prmoise
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });


  const chaiBanai = new Promise((resolve, reject) => {
  let gasAvailable = true;

  if (gasAvailable) {
    resolve("Chai ban gayi");
  } else {
    reject("Gas khatam ho gayi");
  }
});

chaiBanai
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });


// Promise Chaining
// Jab ek kaam ke baad dusra kaam karo — step-by-step
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 done");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 done");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 done");
      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("All steps completed");
  });
