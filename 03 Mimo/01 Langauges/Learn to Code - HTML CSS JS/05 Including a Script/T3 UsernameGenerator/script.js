function generate() {
  var name = document.getElementById("name").innerHTML;
  var age = document.getElementById("age").innerHTML;
  var username = name + "_" + age;

  document.getElementById("username").innerHTML = username;
}
