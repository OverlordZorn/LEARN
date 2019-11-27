function signUp() {
    var username = document.getElementById("usernameInput").value;
    var phone = document.getElementById("phoneInput").value;
    document.getElementById("message").innerHTML = username + ", we sent a confirmation to your phone.";
    console.log("Sending text to " + phone);
}
