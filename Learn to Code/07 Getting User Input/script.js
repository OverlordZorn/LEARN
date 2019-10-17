function register() {
    var username = document.getElementById("usernameInput").value;
    console.log(username);
    document.getElementById("message").innerHTML = username + ", you're signed up!";
}
