var obj = new Object(); // sudah tidak relevan
var myObj = {}; // disarankan pakai ini
var user = {
    myName: "Syafiq",
    age: 30,
    "alamat-saya": "puri Kembangan",
    typeCode: function () {
        console.log(" coding ....");
    },
    run: function () {
        console.log(" running ....");
    },
    read: function () {
        console.log(" reading ....");
    }
};
console.log(user.myName);
user.run();
console.log(user.myName.toLowerCase());
console.log(user.myName.split(""));
console.log(typeof user.myName);
var myNamearr = user.myName.split("");
console.log(user.age);
