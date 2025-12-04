let obj = new Object() // sudah tidak relevan
let myObj = {} // disarankan pakai ini

let user = {
    myName: "Syafiq",
    age: 30,
    "alamat-saya": "puri Kembangan",
    typeCode: () => {
         console.log(" coding ....")
    },
    run: function () {
        console.log(" running ....")
    },
    read () {
    console.log(" reading ....")
    }
}
console.log(user.myName)
user.run()

console.log(user.myName.toLowerCase())
console.log(user.myName.split(""))

console.log(typeof user.myName)

let myNamearr = user.myName.split("")

console.log(user.age)