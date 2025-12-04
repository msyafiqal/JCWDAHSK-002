var user = /** @class */ (function () {
    function user() {
        this.name = "";
        this.age = 0;
    }
    user.prototype.greeting = function () {
        console.log("hello iam a user");
    };
    return user;
}());
console.log(user);
