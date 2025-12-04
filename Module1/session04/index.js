var fruits = ["mera - mera", "moku-moku", "suna - suna"];
var fruitsParamecia = ["gomu-gomu", "doku-doku", "bari-bari"];
console.log(fruits);
//let fruits2 = new Array("mera - mera", "moku-moku", "suna - suna")
//console.log (fruits2)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
var fruitsData = [
    { name: "mera - mera", type: "logia", power: "fire" },
    { name: "moku-moku", type: "logia", power: "smoke" },
    { name: "suna - suna", type: "logia", power: "sun" },
];
console.log(fruitsData);
console.log(fruitsData.length);
fruits.push("gomu-gomu");
console.log(fruits);
fruits[2] = "hie-hie";
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("goro-goro");
console.log(fruits);
//panjang datanya adalah 4
// i dari 0 sampai 4 --> 
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var item = fruits_1[_i];
    console.log(item);
}
fruits.forEach(function (item, index) {
    console.log(index, item);
});
console.log(fruits.concat(fruitsParamecia));


