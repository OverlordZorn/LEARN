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
**This erases the `constructor` property!**

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

There's a principle in programming called Don't Repeat Yourself.

Instead of having several constructors with the same method, we can create a supertype/parent object.

```js

//parent
function Animal () {};
Animal.prototype = {
    constructor: Animal,
    eat(): function() {return "nom nom nom"}
}

//child
function Bear(name) {
    this.name = name;
}
Bear.prototype = {
    constructor: Bear,
    size = "big";
}

//child
function Cat(name) {
    this.name = name
}
Cat.prototype = {
    constructor: Cat,
    size = "small";
}
```

## Supertype/Parent and Subtype/Child - Inheritance

### First step: Make an Instance of the supertype/parent:

```js
let animal = new Animal();
```
There are some disadvantages when using this syntax for inheritance. Instead, here's an alternative approach without those disadvantages:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` creates a new object, and sets `obj` as the new object's `prototype`.

Recall that the `prototype` is like the "recipe" for creating an object.

By setting the `prototype` of `animal` to be `Animal's prototype`, you're effectively giving the `animal` instance the same "recipe" as any other instance of `Animal`.

```js
animal.eat(); // nom nom
animal instanceof Animal; // true
```

```js
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
```

### Next Step: Set the Child's Prototype to an Instance of the Parent

Set the `prototype` of the subtype/child `Bird` to be an instance of `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

Remember that the `prototype` is like the recipe for creating an object. In a way, the recipe for `bird` now includes all the key "ingredients" from `animal`.

```js
let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
```
`duck` in herits all of `Animals` properties, including the `eat` method.


#### Example

```js

function Animal() {};

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() {};

Dog.prototype = Object.create(Animal.prototype);


let beagle = new Dog();
beagle.eat(); // nom nom nom
```

### Reset an Inherited Constructor Property

When an object inherits its `prototype` from another object, it also inherits the supertype's constructor property.

````js
function Bird() {};
Bird.prototype = Object.create(Animal.protototype);
let duck = new Bird();
duck.constructor // function Animal(){...};
````
But `duck` and all instances of `Bird` should show that they were constructed by `Bird` and not `Animal`.

To do so, you can manually set `Bird's` constructor property to the `Bird` object:

```js
Bird.prototype.Cosntructor = Bird;
duck.constructor // function Bird() {...}
```

### Add Methods After Inheritance

A constructor function that inherits its `prototype` object from a supertype constructor function can still have its own methods in addition to inherited methods.

For example, `Bird` is a constructor that inherits its `prototype` form `Animal`:

```js
function Animal() {}
Animal.prototype.eat = function() {

    console.log("nom nom nom");
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

In addition to what is inherited from `Animal`, you want to add behavior that is unique to `Bird` objects. Here, `Bird` will get a `fly()` function. Functions are added to `Bird`s `prototype` the same way as any constructor function:

```js
Bird.prototype.fly = function() {
    console.log("I'm flying!");
};
```

## Override Inherited Methods

It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override. 

```js
function Animal () {};
Animal.prototype.eat = function() {
    return "nom nom nom";};

function Bird() {};

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
    return "peck peck peck";};
```

If you ahve an instance `let duck = new Bird()`; and you call `duck.eat()`, this is how JavaScript looks for the method on `duck's` `prototype` chain:
1. Duck Is eat() defined here? No
2. Bird is eat() defined here? Yes - Execute and stop seachring.
3. Animal eat() is also defined, but JS stopped before.
4. Object JS stopped searching before reaching this level.


## Use a Mixin to Add Common Behavior Between unrelated Objects

There are cases when inheritance is not the best solution.
Does not work well for unrelated objects like bird and Airplane.

For unrelated objects, it's better to use *MixIn*s. It allows other objects to use a collection of functions.

```js
let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, wooosh!");
    }
};

let bird = {
    name: "donald",
    numLegs: 2
};

let plane = {
    model: "777",
    numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // same
```

## Use Closure to Protect Properties Within an Object from Being Modified Externally

bird has a public property called name. It is considered public because it can be accessed an changed outside of `bird`'s definition.

```js
bird.name = "Duffy";
```

Any part of your code can be easily change the name of `bird` to any value.

Think about things like passwords and bank accounts being easily changeable by any part of your codebase.

That could cause a lot of issues.

The Simplest way to make this public property private is by creating a variable within the constructor function.

This changes the scope of that variable to be within the constructor function versus available globally.

This way, the variable can only be accessed and changed by methods also within the constructor function.


```js
function Bird() {
    let hatchedEgg = 10; // private variable

    /* publicly available method that a bird obj can use */

    this.getHatchedEggCount = function () {
        return hatchedEgg;
    };
}

let ducky = new Bird();
ducky.getHatchedEggCount(); // returns 10
```

Here `getHatchedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`is declared in the same context as `getHatchedEggCount`. In JavaScript, a function always has access to the context in which it was created.
This is called `closure`.



## Modules
### Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared:
```js
(
    function () {
    console.log("Chrip, chirp!");}
)();
// This is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately
```

### Use an IIFE to Create a Module

An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or ***module***. For example, an earlier challenge defined two mixins:

```js
function glideMixin(obj) {
    obj.glide = function() {
        console.log("Gliding on the water");
    };
};

function flyMixin(obj) {
    obj.fly = function() {
        console.log("Flying, woosh!");
    };
};
```

We can group these mixins into a module as follows:
```js
let motionModule = (

    function() {
        return {

            glideMixin: function(obj) { obj.glide = function() { console.log("..."); }; },
            flyMixin: function(obj) { obj.fly = function() { console.log("..."); };}
        }
    }
)(); // The two parentheses caus ethe function to be immediately invoked
```

