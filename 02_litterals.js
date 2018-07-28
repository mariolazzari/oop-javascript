// Object litterals
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

console.log(userOne.name);
userOne.login();
userOne.logout();
