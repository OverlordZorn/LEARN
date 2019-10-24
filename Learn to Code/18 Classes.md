# Using Classes

As we code complex programs, we'll need to create many similar but distinct objects. 

For example, all the books in the library.

But creatinga new object for thousands of books would take a lot of time and could lead to errors.

```java
var book 100 {
    author: "William Shakespear",
    title: "The Da Vinci Code"
};

console.log(book100);
```
```
{ author: 'William Shakespear', title: 'The Da Vinci Code'}
```

To make this process less error-prone and more efficient, we can use data structures called *classes* as templates.

Once we create a template with the properties we'll want for all similar objects, we can use it to create new objects faster.

## Creating a Class

To create a new class, we start with the `class` keywoard, a name, and braces.

Any time we create a new class, we have to make sure the name starts with an *uppercase letter*.


```java
class Book {

}
```

## Constructor

To create new objects, classes need a special method called the `constructor()`.

This method sets the property values for a new object.

```java
class Book {
    constructor() {

    }
}
```

## Parameters
We need a way of specifying the unique values a new object will have. We do that by sending *parameters* to the constructor method.

Here, we add `author` and then `title` as parameters to the construction method.

```java
class Book {
    constructor(author, title) {

    }
}
```
## This

Before creating a new object property, we need a special keyword: `this`.

We use `this` to refer to the object that is being created.

To create a new object property, we need to use the keyword `this` followed by a period and the property name.

To finish creating the new object property, we'll assign the `author` parameter as a value to `this.author` variable.

```java
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}
```

## Creating Objects with Classes

Time to use our class. We start the same way we'd crate a variable, but then add the `new`keyword followed by `Book()`.

```java
var book1 = new.Book()
```

We can then add the values we want to set for the new object inside the parentheses.

```java
class Book {
    constructor(author,title) {
        this.author = author;
        this.title = title;
    }
}

var book1 = new.Book("Leo Tolstoy", "War and Peace");

console.log(book1);
```
```
Book { author: 'Leo Tolstoy, title: 'War and Peace' }
```

We can use classes to easily create as many books as we want now, with way les code.

## Exercise

```java
class Character {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    
}

var hero = new Character("Margaret", "Knight");
var villain = new Character("Tim", "Enchanter");

console.log(hero);
console.log(villain);
```
```
Character { name: 'Margare', type: 'Knight' }
Character { name: 'Tim', type: 'Enchanter' }

```

# Instances

Let's see how classes let us create a lot of similar objects at the beginning and then change them individually over time.

We'll do that by taking a closer look at the users of a social media platform that were created from an initial class.

Every time we create an Object from a class, we're creating what is called an *instance* of that class.

```java
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}

var user1 = new User("Arya");
```

## Independent

Each instance is independent. That means when we create a new instance it doesn't affect any other instances.

```java
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}

var user1 = new User("Ayra");
var user2 = new User("Bran");

console.log(user1);
console.log(user2);
```
```
User {name: 'Arya', isOnline: true }
User {name: 'Bren', isOnline: true }
```

Changing an instance also doens't affect any other instances.

```java
class User {
    constructor(name) {
        this.name. = name;
        this.isOnline = true;
    }
}

var user1 = new User("Ayra");
user1.isOnline = false;
console.log(user1);

var user2 = new User("Bran");
console.log(user2);
```
```
User { name: 'Arya', isOnline: false }
User { name: 'Bren', isOnline: true }
```

Notice how after we have changed `user1.isOnline` to `false`, `user2.isOnline` still has the value `true` set from the `User` class?


Because instances are independent, they let uns keep track of complicated data like a huge number of users on a website.

In this example, we keep track of four users and wether they're online. A real webste might keep track of hundreds.

```java
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}

var user1 = new User("Arya");
var user2 = new User("Bran");
var user3 = new User("Sansa");
var user4 = new User("Jon");

user1.isOnline = false;
user3.isOnline = false;
```

## Changing

Changing a class affects all instances of that class.

Add a `status`porperty so that all users have a short status description form now on.

```java
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
        this.status = "Hey'm I'm using Mimo";
    }
}

var user1 = new User("Arya");
var user2 = new User("Theon");

console.log(user2.status);
```
```
Hey, I'm using Mimo
```

## Method
When changing a class, we can change both its properties **and** its *methods*.

Call the newsly added `sayHi()`method that belongs to the `User`class to see how all instances of `User`can use it.

```java
class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
        this.status = "Hi mimo";
    }

    sayHi () {
        console.log("Hi, I'm " + this.name);
    }
}

var user1 = new User("Arya");
var user1 = new User("Jon");

user1.sayHi();
user2.sayHi();
```
```
Hi, I'm Arya
Hi, I'm Jon
```

## Constructor

The Consctructor is what creates an instance. But it doesn't **always** need to have properties inside of it. It works even when *empty*.

Set the `constructor()` method as  empty for this `User` class. This means there's nothing between the braces.

```java
class User {
    constructor() {

    }

    sayHi() {
        console.log("Hello!");
    }
}

var user1 = new User();
user1.sayHi();
```
```
Hello!
````
## Default Constructor
We don't even have to add a constructor. It's so essential that a default constructor kicks in when it's not there.

In this case, the `user1` instance is created with an empty constructor added behind the scenes when we run the code.


```java
class User {
    sayHi() {
        console.log("Hello!");
    }
}

var user1 = new User();
user1.sayHi();
```
```
Hello!
```

# Extending Classes
## Inherritance

Imagine we're making a zoo game. The animals in the zoo have alot in common, but they're also different in many ways.

That's where *inheritance* come to play.

We can create an `Animal` class and bundle the *main features* of the animals.

Then, using inheritance, we can **extend** it with *additional functionality* for the differnt kinds of animals.

To inherit features from a class, we need to use the `extends` keyword in the class definition.

Type in `extends` to make the `Dog` class inherit from the `Animal` class.

```java
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {

}
```

Inheritance gives a class all the *properties* of the class it's extending, or inheriting from.


See it for yourself: create an object from the `Dog`class and display it.


```java
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {

}

var dog = new Dog("Pug");
console.log(dog);
```
```
Dog { name: 'Pug' }
```

## Subclass and superclass

Since `Dog` inherits from `Animal`, it's a *subclass* of the `Animal` class. The `Animal` class, then is its *superclass*.

Make sure the `Dog`class inherits the properties of its superclass, `Animal`.

## Constructor inheritance

If a subclass doesn't have a `constructor()` method, the superclass's constructor beomes the *default constructor*.

The `name` property of dog gets created trough the `Animal` class's constructor. Try and access it.

```java
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {

}

var dog = new Dog("Pug");
console.log(dog.name);
```
```
Pug
```

## Method inhertiance

A subclass also inherits its superclass's *methods*.

Try calling the `eat()` method trough the `Dog`instance.

```java
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animals {

}

var dog1 = new Dog("Chocolate Lab");
dog1.eat();
```
```
Chocolate Lab is eating
```

## Multiple Subclasses

We can create as many subclasses of `Animal` as we want. They'll **all** have access to the properties of the `Animal` class.

Make `Bird` class inherit from the `Animal` class and call `eat()`on a `Bird` object.

```java
class Animal {
    constructor() {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating".);
    }
}

class Dog extends Animal {
}

class Bird extends Animal {
}

var dog = new Dog("Chocolate Lab");
car bird = new Bird("Blue Jay");

dog.eat();
bird.eat();
```
```
Chocolate Lab is eating.
Blue Jay is eating.
```

## Additional functionality
Inheritance becomes useful when sublcasses have *additional functionality*, like their own methods.

Only dogs can bark. Add a `bark()` method to the `Dog` class and call it.


```java
class Animal {
    constructor(name) {
        this.name = name;
    }
    eats() {
        console.log(this.name + " is eating.")
    }
}

class Bird extends Animal {
    chrip() {
        console.log("PiuPiu!");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!"):
    }
}
var dog = new Dog("Poodle");
dog.bark();
```
```
Woof!
```


## One-way inhertitance

Inheritance works *one way* only. Not all instances of `Animal` are a kind of `Dog`, so they can't access specific `Dog` functionality.

Run the example and open it in the code background. Add `bird.bark()`; and see for yourself that `bird` can't use `bark()`.

```java
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof!");
    }
}

class Bird extends animal {
    chirp() {
        console.log("PiuPiu!");
    }
}

var dog = new Dog("Sparky"):
dog.bark();

var bird = new Animal("Parrot");
bird.bark();
```
```
Woof!

```

# Overriding Methods

Say we're developing a role-playing game with humans and wizards.
Wizards are special humans who can attack with magic spells.

That's where method overriding comes in handy.

We can create a `Human` class and have a `Wizard` class extend it.

Then, using method overriding, we can chagne the `Wizard` class's attacking behavior.

## Overriding

Overriding a mehtod replaces the code of the method in the superclass with taht of the subclass.

Call the `recieveDamage()` method from the `Wizard` class to see what happens to the `health` property.

```java
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    recieveDamage() {
        this.health = this.health - 10;
    }
}

class Wizard extends Human {
    recieveDamage() {
        this.health = this.health - 5;
    }
}

var wizard = new Wizard("staff");
wizard.recieveDamage();
console.log(wizard.health);
```
```
95
```

## Same Name

To overrie a method, we give it the **same** name and parameters as the method in the superclass.

Type in the correct name to make this method override `recieveDamage()`.
Then add the parentheses, `()`.

```javascript
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    recieveDamage() {
        this.health = this.health - 10;
    }
}

class Wizard extends Human {
    recieveDamage() {
        this.health = this.health - 5;
    }
}

var wizard = new Wizard("Staff");
wizard.recieveDamage();
console.log(wizard.health);
```
```
95
```

## Customized heavior

Overriding means that we can have the same **Method** in the subclass but **customize** its behavior for what's needed in the subclass.

Call the `recieveDamage()` method on `human` and `wizard` to see their similar behavior but different results.

```java
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }

    recieveDamage() {
        this.health = this.health - 10;
    }
}

class Wizard extends Human {
    recieveDamage() {
        this.health = this.health - 5;
    }
}

var human = new Human("ax");
human.recieveDamage();
console.log(human.health);

var wizard = new Wizard("staff");
wizard.recieveDamage();
console.log(wizard.health);
```
```
90
95
```
## Super

If we need the behavior from the superclass's method, we can call it with the `super` keyword.

Type in the correct keyword to call the `attack()` method from the Human class.

```Java
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    recieveDamage() {
        this.health = this.health -10;
    }
    attack () {
        console.log("Swing " + this.weapon)
    }
}

class Wizard extends Human {
    attack () {
        super.attack();
    }
}

var wizard = new Wizard("Staff");
wizard.attack();
```
```
Swing staff
```

## Something Extra

When overriding, we can build on the subclass behavior. After swinging their staff, a wizard can say a spell.

Add wizard-specific behavior to the Wizard class's `attack()` method.

```java
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }
    attack () {
        console.log("Swing " + this.weapon);
    }
}

class Wizard extends Human {
    attack() {
        super.attack();
        console.log("Zimzalabim!");
    }
}

var wizard = new Wizard("Staff");
wizard.attack();
```
```
Swing Staff
Zimsalabim!
```
## Apply

Joe is involved in developing an adventure game. He's in charge of the humand and pirate characters.

```java
class Human {
    constructor(name) {
        this.name = name;
    }
    say(stuff) {
        console.log(this.name + ": " + stuff);
    }
}


class Pirate extends Human {
    say(stuff) {
        super.say(stuff);
        console.log(this.name + ": Yarr!");
    }
}

var human = new Human("Frances");

var pirate = new Pirate("Long John");

human.say("G'day, Sir!");
pirate.say("Ahoy!");
```
```
Frances: Good day, sir!
Long John: Ahoy!
Long John: Yarr!
```

# Coding Subclass Properties

Imagine we're expanding the role-playing game with a character: the warrior. Warriors wear armor and use a war cry when they attack.

Since subclasses can have their own *properties*, we can easily add these extra features to a character.

## Super

First, we need to create a subclass that has the same properties at its superclass. We'll do that by calling the `super()` method.

Add the `super()` method to call the constructor of the superclass.

```java

class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }

    recieveDamage() {
        this.health = this.health - 10;
    }

    attack() {console.log("Swings " + this.weapon);
    }
}

class Warrior extends Human {
    constructor(weapon) {
        super(weapon);
    }

    receiveDamage() {
        this.health = this.health - 5;
    }

    attack() {
        super.attack();
        console.log("Barritus!");
    }
}

var warrior = new Warrior("Sword");
console.log(warrior.weapon);
```
```
Sword
```

We want the `Warrior` class to have the same `weapon` property as the Human class.

Use `super(weapon)` to call the `Human` class's constructor and create the `weapon` property.

### Porperty

We can make the Warrior subclass more specific by adding properties to it. We need to add any extra properties after super().

Let's add warCry parameter to the constructor and store it as a property.

```java
class Human {
    constructor(weapon) {
        this.weapon = weapon;
        this.health = 100;
    }

    recieveDamage() {
        this.health = this.health - 10;
    }

    attack() {
        console.log("Swing " + this.weapon);
    }
}

class Warrior extends Human {
    constructor(weapon, warCry) {
        super(weapon);
        this.warCry = warCry;
    }
    recieveDamage() {
        this.health = this.health - 5;
    }
    attack() {
        super.attack();
        console.log(warCry);
    }
}

var alexander = new Warrior("sword", "Alala!");
var leonidas = new Warrior("spear", "Molon labe!");

alexander.attack();
leonidas.attack();
```
```
Swing sword
Alala!
Swing spear
Molon Labe!
```

## Apply

```java

class Video {
    constructor(length) {
        this.length = length;

    }
} 

class Loop extends Video {
    constructor(length, start, end) {
        super(length);
        this.start = start;
        this.end = end;
    

    }
}

var loop = new Loop(10.5, 3,2, 7.4);

```