const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
    // reject("Network error");
  });
};

let promise = getPromise();
promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("promise rejected", err);
});

// Output
// I am a promise
// promise rejected Network error

// async await solution
async function fetchData() {
  try {
    let promise = getPromise(); //1. get the promise
    let res = await promise; //2. wait for the promise to be fulfilled
    console.log("promise fulfilled", res); //3. log the result
  } catch (err) {
    console.log("promise rejected", err); //4. catch any error
  }
}
fetchData();


// Output
// I am a promise
// promise fulfilled success

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }
