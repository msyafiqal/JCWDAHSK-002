var name = "Syafiq";
var age = 20;
var condition = age >= 17 && age <= 65;
//console.log (age >= 17)
//age
if (age >= 17) {
    console.log("you are now have an ID card");
    // else {
    //console.log ("you are underage")
}
else {
    console.log("you are underage");
}
//block ckode
var trafficLight = "yellow";
if (trafficLight == "red") {
    console.log("stop");
}
else if (trafficLight == "yellow") {
    console.log("get ready");
}
else if (trafficLight == "green") {
    console.log("go");
}
else {
    console.log("do what you want?");
}
// traffic light adalh patokan dibandingkan dengan case-case yang adas  
switch (trafficLight) {
    case "red": // trafficLight == "red"
        console.log("stop");
        break;
    case "yellow": // trafficLight == "yellow"
        console.log("get ready");
        break;
    case "green": // trafficLight == "green"
        console.log("go");
        break;
    default:
        console.log("do what you want?");
}
// condition --> age >= 17 && age <= 65
if (condition) {
    console.log("you are an adult");
}
// age = 25
// age === ( age >=17 && age <=65 ) --> false
// true === (age >=17 && age <=65) --> true
switch (true) {
    case age >= 17 && age <= 65:
        console.log("you are an adult");
        break;
    default:
        console.log("you are not an adult");
        break;
}
//true ==> truthy
//false ==> falsy
// 12 --> truthy
//"hello" --> truthy
// "" --> falsy
// 0 --> falsy
// null --> falsy
// undefined --> falsy
// NaN --> falsy
if (null) {
    console.log("this will never run");
}
//logic gate
console.log(age >= 20 || age <= 20);
// true || false --> true
console.log(age < 20 || age > 20);
// false || false --> false
console.log(age != 20); // false
console.log(!false); // true
//console.log((true != (40 >= 21)) == (34 != 70 && 56 >78)) // 
console.log(false && "hello");
console.log(true && "hello");
console.log(name || "guest");
//ternary
age > -17 ? console.log("you are now have an ID") : console.log("you are underage");
trafficLight == "red" ? console.log("stop") :
    trafficLight == "yellow" ? console.log("get ready") : console.log("run");
