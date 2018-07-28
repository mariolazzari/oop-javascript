// Constructors under the hood
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function() {
        console.log(this.email, "has logged in");
    };
}

let user1 = new User("user1@domain.com", "Standard user 1");
let user2 = new User("user2@domain.com", "Standard user 2");
user1.login();
