// Class methods
class User {
    // create new user object
    constructor(email, name) {
        // add properties to object
        this.email = email;
        this.name = name;
    }
}

let userOne = new User("mario@domain.com", "Mario");
console.log(userOne);
let userTwo = new User("mariarosa@domain.com", "Mariarosa");
console.log(userTwo);
