// Updating object properties
let userOne = {
    email: "mario@domain.com",
    name: "mario",
    login() {
        console.log(this.email + " login");
    },
    logout() {
        console.log(this.email + " logout");
    }
};

userOne.name = "Mariarosa";
console.log(userOne);
// [] notation: for dynamic access
userOne["email"] = "mariarosa@domain.com";
console.log(userOne.name + " mail: " + userOne["email"]);

// create new property
userOne.age = 42;
console.log(userOne);
// create new function
userOne.test = function() {
    console.log("test " + this.name);
};

userOne.test();
