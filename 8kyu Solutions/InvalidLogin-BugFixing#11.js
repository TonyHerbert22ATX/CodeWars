function validate(username, password) {
    let database = new Database();
    return password.includes("||") || password.includes("//")
        ? database.login(username, password)
        : "Wrong username or password!";
}

console.log(validate("Timmy", "password"));
console.log(validate("Timmy", 'password"||""=="'));
