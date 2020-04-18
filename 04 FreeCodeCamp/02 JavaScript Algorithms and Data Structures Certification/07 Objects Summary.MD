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

```js
Bird.prototype.numLegs = 2;
```

```js
function Dog(name) {
    this.name = name;
};

let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;

console.log(beagle); // returns Dog{name:snoopy, numLegs:4}
```

###  Prototype Properties


```js
function Bird(name) {
    this.name = name;
}

Bird.prototype.numLegs = 2;

let duck = new Bird("Donald");


let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    if (duck.hasOwnProperty(property)) {ownProps.push(property);}
     else {prototypeProps.push(property)};
}

console.log(ownProps);
console.log(prototypeProps);
```

## Constructor Property

There is a special `constructor` property located on the object instances

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); // true
console.log(dog.constructor === Dog); // true
```

The advantage of `constructor` property is that it's possible to check for this property to find out what kind of object it is.

The constructor property can be overwritten and therefore its generally better to use the `instanceof` method to check the type of an object.

## Change the Prototype to a new Object

A move effeicient way is to set the `prototype` to a new object that already contains the properties.
This way, the properties are added all at once:

```js
Bird.prototype = {
    numLegs: 2,
    eat: function() {console.log("Nom Nom Nom");},
    describe: function() {console.log(`My Name is ${this.name} and I am a ${this.constructor}`)}
};
```
**This reases the `constructor` property!**

```js
duck.constructor === Bird; // false - oh no
duck.constructor === Object; // true (all objects inherit from Object.prototype)
duck instanceof Bird; // true, still works
```
To fix this, we have to define the `constructor` property, when we manually set the prototype to a new object!

```js
Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {console.log("Nom Nom Nom");},
    describe: function() {console.log(`My Name is ${this.name} and I am a ${this.constructor}`)}
};
```
## Inheritance

An Object inherits it's `prototype` directly from the constructor function that created it.

For example, here the `Bird` constructor creates the `duck` object:

```js 
function Bird(name) {
    this.name = name;
}

let duck = new Bird("donald");
```

`duck` inherits its `properties` from the `Bird` constructor function.

You can show this relationshop with the `isPrototypeOf` method:

```js
Bird.prototype.isPrototypeOf(duck); // returns true
```

## Prototype Chain

All objects in JavaScript (with a few exceptions) have a `prototype`.

Also, an object's `prototype` itself is an object.

```js
function Bird(name) {this.name = name;}

typeof Bird.prototype // returns `object`
```

Because `prototype` is an object, it can have its own `prototype`!

In this case, the `prototype` of `Bird.prototype` is `Object.prototype`:
```js
Object.prototype.isPrototypeOf(Bird.prototype); // returns true
```

The `hasOwnPrototype` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can be accessed by `duck`.

This is an example of the `prototype` chain.

In thi prototype-chain, `Bird` is the `supertype` for `duck`, while `duck` is the `subtype`.

`Object` is a `supertype` for both `Bird` and `duck`.

`Object` is a `supertype` for all objects in JavaScript.

Therefore, any object can use methods like `hasOwnProperty`.

## Use Inheritance so you don't repeat yourself

