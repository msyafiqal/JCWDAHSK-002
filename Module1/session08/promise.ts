const users: string [] = []

const getUsers = new Promise((resolve, reject) =>{
    if (users.length > 0) {
        resolve(users)
    } else {
        reject("user not found")
    }
})

getUsers
    .then((res) => {
        console.log("users : ", res)
    })
    .catch((err) => {
        console.log("err :", err)
    })
    .finally(() => {
        console.log(" finally done ")
    })