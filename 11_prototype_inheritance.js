// Prototype inheritance

// constructor
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    /*
    this.login = function() {
        console.log(this.email, "has logged in");
    };
    */
}

// attatch methods to prototype, not to function
User.prototype.login = function() {
    console.log(this.email, "has logged in");
    this.online = true;
};
User.prototype.logout = function() {
    console.log(this.email, "has logged out");
    this.online = false;
};

let user1 = new User("user1@domain.com", "Standard user 1");
let user2 = new User("user2@domain.com", "Standard user 2");
user1.login();
console.log(user1.name, "online:", user1.online);
user1.logout();
console.log(user1.name, "online:", user1.online);

// admin extends user
function Admin(...args) {
    User.apply(this, args);
}

Admin.prototype = Object.create(User.prototype);
// method specific to admin
Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => u.email !== user.email);
};

let admin = new Admin("adnin@domain.com", "Admin user");
console.log(admin);
admin.login();

let users = [admin, user1, user2];
admin.deleteUser(user1);
console.log(users);
