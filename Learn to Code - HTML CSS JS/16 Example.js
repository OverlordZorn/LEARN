function matchTags(tag) {
    if (tag === "#gossip") {
        console.log("show post");
    } else {
        console.log("no match");
    }
}

matchTags("#kittens");
matchTags("#gossip");

###

var prices = [10, 25, 40];

console.log("initial prices:");
console.log(prices);

var halve = function(price) {return 0.5*price};

var reduce = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(halve(arr[i]));
    }

};

console.log("Reduced prices:");
reduce(prices);



















var salePrices = [10,20,30];
var tripple = function(price) = {return price*3};

var calc = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(tripple(arr[i]));
    }
}

calc(salePrices);