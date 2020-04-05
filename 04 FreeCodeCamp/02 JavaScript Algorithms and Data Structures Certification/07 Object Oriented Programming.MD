# Object Oriented Programming

## Introduction to the Object Oriented Programming Challenges

At its core, software developement solves a problem or achieves a result with computation. The software development process first defines a problem, then presents a solution. Object oriented programming is one of several major approaches to the software development process.

As its name implies, object oriented programming organizes code into object definitions. These are sometimes called classes, and they group togehter data with related behavior. The data is an object's attributes, and the behavior (or functions) are methods.

The object structure makes it flexible within a program. Objects can transfer information by calling and passing data to another object's methods. Also, new classes can recieve, or inherit, all the features from a base or parent class. This helps to reduce repeated code.

Your choice of programming approach depends on a a few factors. These include the type of problem, as well as how you want to structure your data and algorithms. This section covers object oriented programming principles in JavaScript.

## Create a Basic JavaScript Object

Think about things people see every day, like cars, shops, and birds. These are all `objects`: tangible things people can observe an interact with.

What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.

These qualities, or *properties*, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have the same number of wheels.

Objects in JavaScript are used to model real-world objects, giving them properties and behaviors just like their real-world counterparts. Here's an example using these concepts to create a `duck` object:
```js
let duck = {
    name: "Aflac",
    numLegs: 2
};
```
This `duck` object has two property/value pairs: a `name` of "Aflac" and a `numLegs` of 2.

## Use Dot Notation to Access the Properties of an Object

The last challenge created an object with various properties. Now you'll see how to access the values of those properties. Here's an example:
```js
let duck = {
    name: "Aflac",
    numLegs:2
};
console.log(duck.name);
// this prints "Aflac" to the console
```

## Create a Method on an Object

Objects can have a special type of property, called a `method`.

Methods are properties that are functions. This adds diferent behavior to an object. Here is the `duck` example with a method:

```js
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayname();
// returns "The name of thid duck is Aflac."
```
The example adds the `sayName` Method, which is a function that returns a sentance giving the name of the `duck`. Notice that the method accessed the `name`property in the return statement using `duck.name`. The next challenge will cover another way to do this.

## Make Code More Reusable with this Keyword

The last challenge introduced a method to the `duck` object. It used `duck.name` dot notation to access the value fo the `name` property within the return statement:

`sayName: function() {return " The name of this duck is " + duck.name + ".";}`

While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the `this` keyword: 

```js
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```
`this` is a deep topic, and the above example is only one way to use it. In the current context, `this` refers to the object that the method is associated with: `duck`. If the object's name is changed to `mallard`, it is not necessary to find all the references to `duck` in the code. It makes the code reusable and easier to read.

## Define a Constructor Function

*Constructors* are functions that create new objects. They define properties and behaviors that will belong to the new object.
Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:
```js
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
```

This constructor defines a `Bird` object with properties `name, color, and numLegs`set to Albert, blue and 2, respectively. Constructors follow a few conventions:

* Constructors are defined with a capitalized name to distinguish them from other functions that are not `constructors`.
* Constructors use the keyword `this` to set properties of the object they will create. Inside the constructor, `this` refers to the new object it will create.
* Constructors define properties and behaviors instead of returning a value as other functions might.

## Use a Constructor to Create Objects

Here's the `Bird` constructor from the previous challenge:
```js
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
    // "this" inside the constructor always refers to the object being created
}

let blueBird = new Bird();
```

Notice that the `new`operator is used when calling a constructor. This tells JavaScript to create a new instance of `Bird` called `blueBird`. Without the `new` operator, `this` inside the constructor would not point to the newly created object, giving unexpected results. Now `blueBird` has all the properties defined inside the `Bird` constructor:

```js
blueBird.name; // "Albert"
blueBird.color; // "blue"
blueBird.numLegs; // 2
```
Just like any other object, it's properties can be accessed and modified:
```js
bluebird.name = 'Elvira';
bluebird.name; // "Elvira";
```

## Extend Constructors to Receive Arguments

The `Bird` and `Dog` constructors from alst challenge worked well. However, notice that all `Birds` that are created with the `Bird` Constructor are automatically named Albert, are blue in color and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:
```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different `Bird` objects, you can design your Bird Constructor to accept parameters:
```js
function Bird(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the `Bird` constructor: `let cradinal = new Bird("Bruce", "red");` This gives a new instance of `Bird` with name and color properties set to Bruce and red, respectively. The `numLegs`property is still set to 2. The `cardinal` has these properties:
```js
caridnal.name; // Bruce
cardinal.color; // red
cardinal.numLegs; // 2
```
The constructor is more flexible. It's now possible to define the properties for each `Bird` at the time it is created, which is one way that JavaScript constructors are so useful. They group objects togehter based on shared characteristics and behavior and define a blueprint that automates their creation.

## Verify an Objects's constructor with instanceof

Anytime a constructor function creates a new object, that object is said to be an ***instance of*** its constructor. JavaScript gives a convenient way to verify this with the `instanceof` operator.
`instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on wether or not that object was created with the constructor. Here's an example:
```js
let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // returns true
```

If an object is created without using a constructor, `instanceof` will verify that it is not an instance of that constructor:

```js
let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2;
};

canary instanceof Bird; // returns false
```

## Understand Own Properties

In the following example, the `Bird` constructor defines two properties:
`name` and `numLegs`:
```js
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` and `numLegs` are called `own` properties, because they are defined directly on the instance object. That means that `duck` and `canary`each has its own separate copy of these properties. In fact every copy of these properties. 

The following case 