// Class methods
class User {
    // create new user object
    constructor(email, name) {
        // add properties to object
        this.email = email;
        this.name = name;
    }

    login() {
        console.log(this.email + " login");
    }

    logout() {
        console.log(this.email + " logout");
    }
}

let userOne = new User("mario@domain.com", "Mario");
console.log(userOne);
userOne.login();
userOne.logout();

let userTwo = new User("mariarosa@domain.com", "Mariarosa");
console.log(userTwo);
userTwo.login();
userTwo.logout();
