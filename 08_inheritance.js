// Class inheritance
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

class Admin extends User {
    delete(user) {
        users = users.filter(u => u.email !== user.email);
    }
}

let user1 = new User("user1@domain.com", "Standard user 1");
let user2 = new User("user2@domain.com", "Standard user 2");
let admin = new Admin("admin@domain.com", "Admin user");

let users = [user1, user2, admin];

// user.delete -> error
admin.delete(user2);
console.log(users);
