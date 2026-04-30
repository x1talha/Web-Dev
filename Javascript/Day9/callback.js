function getdatafromdb(dataid, getnextdata) {
  //1 sec
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
