// Methods chaining
class User {
    // create new user object
    constructor(email, name) {
        // add properties to object
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login() {
        console.log(this.email + " login");
    }

    logout() {
        console.log(this.email + " logout");
    }

    updateScore() {
        this.score++;
        console.log(this.email, "score", this.score);
        // return this in order to eneabe method chaining
        return this;
    }
}

let userOne = new User("mario@domain.com", "Mario");
console.log(userOne);
userOne
    .updateScore()
    .updateScore()
    .updateScore();
