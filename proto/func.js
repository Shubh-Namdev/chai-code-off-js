function printData(data) {
    console.log(data);
}

printData.specificData = "some specific data";

// console.log(printData("some data"));
// console.log(printData.specificData);
// console.log(printData.prototype);

printData.prototype.editData = function(newData) {
    console.log(newData);
}

//console.log(printData.prototype);

const e = new printData("some data");
console.log(e.editData("new data"));

