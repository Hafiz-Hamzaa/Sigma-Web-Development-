// What is async / await?
// async ek aise function ko banata hai jo hamesha Promise return karta hai
// await ka matlab hai: "ruk jao jab tak Promise resolve ya reject nahi hota"

function step1() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 1");
      res();
    }, 1000);
  });
}

async function doSteps() {
  await step1();
  console.log("Step 2");
}

doSteps();

//  Error Handling in async/await
function getJuice() {
  return new Promise((resolve, reject) => {
    let fruitAvailable = false;
    setTimeout(() => {
      if (fruitAvailable) {
        resolve("Juice ready!");
      } else {
        reject("No fruit to make juice");
      }
    }, 1500);
  });
}

async function serveJuice() {
  try {
    let juice = await getJuice();
    console.log(juice);
  } catch (error) {
    console.log("ERROR:", error);
  } finally {
    console.log("Kitchen closed.");
  }
}

serveJuice();
