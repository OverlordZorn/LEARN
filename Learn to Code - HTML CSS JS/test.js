

var array = ["Apple", "Pea", "Banana", "Grapes", ];


while (array.length > 0) {
    var nom = array.pop();
    console.log("Oh so many fruits I have, lets eat them all")
    console.log("this is my tasty "+nom+"! Otchin Vkusna!");
    console.log("Njam Njam Njam!");
    console.log("");
    console.log("");

}


function loveAnna(times) {
    console.log("I love my anna, soso much, let's tell her that " + times + " times!");
    for (var i = times; i > 0; i--) {
    console.log(i + " times to say, I love my Anna!");
    }
}
console.log("");
console.log("");
loveAnna(5);
console.log("");
console.log("");
loveAnna(1000);