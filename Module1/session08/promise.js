var users = [];
var getUsers = new Promise(function (resolve, reject) {
    if (users.length > 0) {
        resolve(users);
    }
    else {
        reject("user not found");
    }
});
getUsers
    .then(function (res) {
    console.log("users : ", res);
})
    .catch(function (err) {
    console.log("err :", err);
})
    .finally(function () {
    console.log(" finally done ");
});
