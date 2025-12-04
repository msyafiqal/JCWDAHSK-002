const num: number = 1 // awalan
let num2: number = 3

// ditambhakan angka 2 
// sebanyak 3 kali

//diulang sebnanyak berapa kali? 3 kali
//num += 2
//num += 2
//num += 2

// naik / turun = naik
// step / langkah = 2 langkah

//console.log (num)
// num = 3
// num = 5
// i = 1, true
// i = 2, true
// i - 3, true
// i = 4. false
//for (let i = 1; i <= 3; i += 1) {
//    let j =1
//    num += 2. 
//    //console.log (num)   
//}

//console .log (num);
//console.log(i, j)

let j = 1
// 1 <= 3 , true
// 2 <= 3 , true
// 3 <= 3 , true
// 4 <= 3 , false

// while: check the condition first, then execute the block code  
while ( j<= 3 ) {

    num += 2 // 3
    console.log (num)
    j += 1 // 3 + 1
}

console.log(j) // 4

// do while: execute the block code first, then check the condition
console.log("==========================================  ")
let k = 1
do {
    num2 += 2
    console.log (num2)
    k += 1
} while ( k <= 3 )

console.log (k)
console.log (num2)

let numbers = [10, 20, 30, 40, 50]

// for ... of
for (let number of numbers){
    console.log (number)    
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for(let key in obj){
    console.log (key, obj[key])
}

for(let i = 0; i < 5; i++){

    if (i === 3 ){
        continue
    }
     console.log(" number : ",i ) 
}

