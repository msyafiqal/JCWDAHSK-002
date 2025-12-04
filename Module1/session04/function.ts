hello(2)
console.log('===================================')

function hello(num: number){
   for (let i = 1; i <= num; i++){
    console.log("hello")
   }
}

hello(5) // pemanggilan function
//=====================================================
console.log("===================================")
hello(15)


const showMessage = (message: string): void => {
    console.log ("message:", message)
}

showMessage("hello my family")

function sum(a: number, b: number, c= 30 ,d: number): number {
    return a * b * c * d
}

let result = sum (10, 20, 30, 40)
let res = sum(10, 20, 30, 40)
console.log ("result:", result) 
console.log ("res:", res)

function showPeople (a: string, b: string, ...c: string[]): void {
    console.log ("a:", a)
    console.log ("b:", b)
    console.log ("c:", c)
}

showPeople ("luffy", "zoro", "nami", "usopp", "sanji")


function addTotal (num: number):number{
    let total = 0
    total += num
    return total
}

console.log (addTotal(10))
console.log (addTotal(20))
console.log (addTotal(30))

//() => { disebut dengan arrow function, expression function
function getMessage(name: string): string {
    const sayHello = () => {
        return "hello" +" " + name 
    }

    const welcomeMessage = () => {
        return "welcome to Purwadhika"
    }

    return sayHello () + " " + welcomeMessage ()

}

const message: string = getMessage ("Syafiq")
console.log (message) 



