let fruits = ["mera - mera", "moku-moku", "suna - suna"]
let fruitsParamecia = ["gomu-gomu", "doku-doku", "bari-bari"]

console.log(fruits)

//let fruits2 = new Array("mera - mera", "moku-moku", "suna - suna")

//console.log (fruits2)

console.log (fruits[0])
console.log (fruits[1])
console.log (fruits[2])

let fruitsData = [
    { name: "mera - mera", type: "logia", power: "fire"},
    { name: "moku-moku", type: "logia", power: "smoke" },
    { name: "suna - suna", type: "logia", power: "sun" },
]

console.log (fruitsData)
console.log(fruitsData.length)
fruits.push("gomu-gomu")
console.log (fruits)
fruits[2] = "hie-hie"
console.log (fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("goro-goro")
console.log (fruits)

//panjang datanya adalah 4
// i dari 0 sampai 4 --> 
for(let i = 0; i < fruits.length; i++ ){
    console.log (fruits[i])
}

for (let item of fruits) {
    console.log(item)
}

fruits.forEach((item, index) => {
    console.log (index, item)
})

console.log(fruits.concat(fruitsParamecia))

console.log(fruitsParamecia.toString())

const myItem = function(item:{name:string, type:string, power:string}){ {
    console.log(" name: ", item.name);
    console.log(" type: ", item.type);      
    console.log(" power: ", item.power);
}
}

fruitsData.map(myItem);

let mySort = fruits.sort ((a: string, b: string) => {
    return a > b ? 1 : -1;  
    
});
console.log (mySort)    

fruits[4] = "goro-goro"
console.log (fruits)

