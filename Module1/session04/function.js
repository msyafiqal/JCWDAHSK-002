hello(2);
console.log('===================================');
function hello(num) {
    for (var i = 1; i <= num; i++) {
        console.log("hello");
    }
}
hello(5); // pemanggilan function
//=====================================================
console.log("===================================");
hello(15);
var showMessage = function (message) {
    console.log("message:", message);
};
showMessage("hello my family");
function sum(a, b, c, d) {
    if (c === void 0) { c = 30; }
    return a * b * c * d;
}
var result = sum(10, 20, 30, 40);
var res = sum(10, 20, 30, 40);
console.log("result:", result);
console.log("res:", res);
function showPeople(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);
}
showPeople("luffy", "zoro", "nami", "usopp", "sanji");
function addTotal(num) {
    var total = 0;
    total += num;
    return total;
}
console.log(addTotal(10));
console.log(addTotal(20));
console.log(addTotal(30));
//() => { disebut dengan arrow function, expression function
function getMessage(name) {
    var sayHello = function () {
        return "hello" + " " + name;
    };
    var welcomeMessage = function () {
        return "welcome to Purwadhika";
    };
    return sayHello() + " " + welcomeMessage();
}
var message = getMessage("Syafiq");
console.log(message);
