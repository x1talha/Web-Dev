// it is called callback hell because of nested callbacks.
//  It is difficult to read and maintain the code.

function getdatafromdb(dataid, getnextdata) {
  setTimeout(() => {
    console.log("Data:", dataid);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}

getdatafromdb(1, () => {
  getdatafromdb(2);
});

//  To solve this problem, we can use promises chain.
function getdatafromdb(dataid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", dataid);
      resolve("Data fetched");
    }, 2000);
  });
}

console.log("Fetching data 1...");
getdatafromdb(1)
  .then((res) => {
    console.log(res);
    console.log("Fetching data 2...");
    return getdatafromdb(2);
  })
  .then((res) => {
    console.log(res);
    console.log("Fetching data 2...");
    return getdatafromdb(2);
  })
  .then((res) => {
    console.log(res);
    console.log("Fetching data 3...");
    return getdatafromdb(3);
  })
  .then((res) => {
    console.log(res);
    console.log("All data fetched");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

//Output

// Fetching data 1...
// Data: 1
// Data fetched
// Fetching data 2...
// Data: 2
// Data fetched
// Fetching data 3...
// Data: 3
// Data fetched
// All data fetched

//  To solve this problem, we can use async/await.
async function fetchData() {
  await getdatafromdb(1);
  await getdatafromdb(2);
  await getdatafromdb(3);
  console.log("All data fetched");
}
