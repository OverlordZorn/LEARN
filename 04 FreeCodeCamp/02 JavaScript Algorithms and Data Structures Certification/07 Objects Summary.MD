# Objects Summary

## Create a Basic Object

```js
let object = {
    key1: 1337, // a key value pair is called a property
    key2: "value", 
    key3: true,
};
```

## Dot-Notation

```js
object.key1; // returns 1337
object.key4 = "Value"; // creates this property
```

## Methods / functions inside objects

```js
let duck = {
    name: "Aflac",
    canFly: true,
    sayName: function() {console.log("The name of this duck is " + duck.name + ".");}
};

duck.sayName // consoleoutput: "The name of this duck is Aflac."
```

## Keyword This

```js
let duck = {
    name: "Alfred",
    sayName: function() {return this.name};
}
```

## Constructor Function

```js
// this function predefines a "Class" for an Object, it's an template, note it always starts with upperCase.

function Bird(name = "Birdy") {
    this.name = name,
    this.color = "blue",
    this.canFly = True,
    this.numLegs = 2,
    this.sayName = function() {return "The name of this duck is " + this.name + ".";}
};


// this invokes a new Object called blueBird from the Class Bird() with the name "john" or without anyname, so it will pick the default argument

let johnBird = new Bird("john");
let notJohnBird = new Bird();

notJohnBird.name; // returns "Birdy
notJohnBird.name = "notJohn";
notJohnBird.name; // returns "NotJohn"
```

## Verify an Object's Constructor with instanceof

```js
let Bird = Function(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // returns true
```

## Own Properties
```js
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```
`name` and `numLegs` are called `own` properties. They are defined directly on the instance object.
That means `duck` and `canary` each have their own seperate copies of these properties.

The following code adds all of the `own` properties of `duck` to the array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}
console.log(ownProps);
// prints ["name", "numLegs"]
```

## Prototype 