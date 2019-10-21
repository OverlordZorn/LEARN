# Grouping Values into Objects

In code, we often need to represent real-life things. one of the coreways of doing that is through data structures called *objects*.

## Why Objects?

It can be tough to keep track of two very similar objects and all the properties that make them unique. Like two *car models*.

```java
var carModel1 = "BMW";
var carColor1 = "Blue";

var carModel2 = "Tesla";
var carColor2 = "silver";
```

## Grouping

Thankfully, we can group variables that belong together in an object. Let's call this object `car`.

```java
var car = {
    model: "Tesla",
    color: "silver"
};
```
## Formula
We create an object much like any other variable. We use `var`, a name, and an equal sign. But then we put the values between { }.

#### Properties

The values inside objects are called *properties*. We create them by providing a name, a **colon** and a value.

#### Multiple properties

To add multiple properties to an object, we separate them with *commas*.

```java
var name = { prop1:Value1, prop2:Value2, ... };
```

With properties, we can create detailed objects that have different types of values.

## Displaying Objects

When we need to, we can use the object's name to retrieve all of its properties.


```java
var car = {
    model: "Tesla",
    color: "silver",
    horsepower: 259
};

console.log(car);
```
```java
{ model: "tesla", color: "silver", horsepower: 259 }
```

# Using Object Porperties

Just like in the real world, the properties of an object can change.

Luckily, there are lenty of ways to change objects with code. Let's see how we can access and update properties.

## Accessing

To access an ojbect's property, we use the *object name*, a *peroid*, and the *property*.

```java
var laptop = {
    model: "Dell",
    processor: "i7",
    price: 2000;
}
console.log(laptop.price)
```
```java
2000
```

## Updating

Just like variables, we can update object properties. For example, we can update the price when there's a doorbuster discount.

```java
var laptop = {
    model: "Dell",
    processor: "i7",
    price: 2000
};

laptop.price = 1799;
console.log(laptop.price);
```
```java
1799
```

## Self-assignment

And just like with variables, we can use *self-assignment*.

```java
var laptop = {
    model: "Dell",
    processor: "i7",
    price: 2000
};

laptop.price = laptop.price / 2;
console.log(laptop.price);
```
```java
1000
```
## Adding properties
We can also add properties to an object. To add a property, we use the object name, a period, and the property. and then we give it a value.

When we add a propterty after we first create the object, the object get updated.

The new property always appears at the end of in the lit of object properties.

```java
var phone = {
    model: "Pixel 3"
};

phone.price = 899;
phone.color = "black";
console.log(phone.price);
console.log(phone);
```

```java
899
{ model: "Pixel 3", price: 899, color: "black" }
```

# Object Methods

Imagine we want to make a car drive across the screen in a video game.

We can create objects so that they can have properties and *behavior*.

We represent these behaviors as *functions*. When we store a function inside an object, we call it a *method*.

Methods can interact with object properties and even change them. Like increasing the speed of a car.

## showType

We can use a method to display the `type`property of a `car` object in a game. 

A method is a property that contains a function.

After the property name, we can add the function.
We start with the function-keyword, then add () and {}.

#### Method vs. Function
An object method is just a function inside an object. It behaves exactly like a regular function, including returning or displaying values. 
Everything you can do with functions, you can do inside methods.

## This
To access properties while inside the object, 
we need the `this` keyword followed by a period and the property name.

`this.property`

Here, the keyword `this` stands for the object itself.
When writing `this.type` we want to access **this** `car` *object's* `type` *property*.


```java
var car = {
    type: "Tesla Model 3",
    speed: 0,

    showType: function() {
        console.log("Type: " + this.type);
    };
}
```
## Accessing methods

We access a method the same way we access a property. The only difference is that we add parentheses at the end. ()

```java
var car = {
    type: "Tesla Model 3",
    speed: 0,

    showType: function() {
        console.log("Type: " + this.type);
    }
}

car.showType();
```
```java
Type: Tesla Model 3
```
## Accelerate
Methods often represent *behaviors*. To kae the car in our game drive across the screen, it needs to accelerate.

Methods allow us to *change* properties from within the object. To make the car accelerate, we need to increase its `speed` property.

Methods change a property's value only when called.

```java
var car = {
    type: "Tesla Model 3",
    speed: 0,
    showType: function() {
        console.log("Type: " + this.type);
    }
    accelerate: function() {
        this.speed = this.speed + 50;
        console.log(this..speed + "km/h");
    }
};

car.accelerate();
```
```java
50 km/h
```
