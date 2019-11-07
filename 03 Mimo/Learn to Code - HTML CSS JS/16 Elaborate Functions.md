# Elaborate Functions

Functions help us reuse **any** kind of code Let's look at what else we can do with them.

```java
function launchRocket() {
    console.log("3 2 1");
    console.log("Ready for takeoff!");
}
launchRocket();
```
```java
3 2 1
TakeOff!
```
## if statement

Consider an *if statement* that acts as a height check for a merry-go-round.
```java
var height = 45;
if (height < 59) {
    console.log("Hop on");
}
```
```java
Hop on
```
## if & functions

There's no need to create such an if statement for every kid in line. We can use the if statement within a function.

```java
function checkHeight() {
    var height = 45;
    if (height < 59) {
        console.log("Hop on");
    }
}
```
## Parameter

To enable the checkHeight() function to check any height, we need to make height a parameter.

```java
function checkHeight(height) {
    if (height<59) {
        console.log("Hop on");
    }
}
checkHeight(45);
```
```java
Hop On
```
## Else statement

We can add an else statement to make the function even more adaptable.

```java
function checkHeight(height) {
    if (height < 59) {
        console.log("Hop on");
    } else {
        console.log("Too tall");
    }
}
check Height(45);
```
## Loops
We can also use *loops* within functions. We can wrap a function around a loop and make it reusable.

```java
function countToFive() {
    var count = 3;
    while (count <= 5) {
        console.log(count);
        count++;
    }
}
countToFive();
```
```java
3
4
5
```
We startet at three, so we got `3`followed by `4`and then `5`.
But what if want to start with another number?

## Parameters
If we want to avoid reusing loops that always do the same thing, we can add parameters.

```java
function countToFive(count) {
    while (count <= 5) {
        console.log(count);
        count++;
    }
}
countToFive(2);
```
```java
2
3
4
5
```
## Revise
We can use conditionale satements as well as loops inside functions to make smart, adaptable code.


# Anonymous Functions

Now that you know how to return a value from a function, let's tackle a concept that's easy to use with returns and expressions.

We'll take a look at another way of defining a function. It all starts with storing it in a variable.

## Saving

Let's declare the variable that stores the function.
To begin with, we'll assign the keyword for functions to it.

```java
var greet = function;
```
## Parameter

A function stored in a variable can have parameters like any other function.

Let's make our function take one argument - a username.

```java
var greet = function(user);
```

## Function Block / Body
Let's write a line that returns agreeting for the name saved in the user parameter, then add it between curly braces.

```java
var greet = function(user) {
    return "Hello "+ user
};
```
Have you noticed anything unusual about this function?
## Unusual semicolon
Anonymous functions always end in a semicolon `;`, just like any variable assignment.

```java
var greet = function(user) {
    return "Hello " + user
};
```
Now the function is complete.


## Usage
What's different about this function definition is that there is no specified name. That's why it's alled an *anonymous function*.

```java
var greet = function(user) {
    return "Hello " + user
};

```
The anonymus function start with the keyword, followed by the parameters.

You can call an anonymous function by the name of the variable that stores it.

```java
var greet = function(user) {
    return "Hello "+user
};

greet("tina");
```

In order to see the output in the console. we need to *print* the result of the function call.

Like before, the function call *stands for* the returned value. Give it a go.

```java
var greet = function(user) {
    return "Hello "+user
};

console.log(greet("tina"));
```
```java
Hello tina
```

`greet` returns different values for different inputs. To save a vertain return value, store the function call in a variable.

```java
var greet = function(user) {
    return "Hello "+user
};

var greetTina = greet("Tina");
```
Except for the name part, you can call an anonymous function like any other function.

You might be tempted to think that variable `greet` **contains** the return value of the function.

But if you print `greet`, you'll se that it just stores the proocess of getting to the return value: the function's code.

```java
var greet = function(user) {
    return "Hello "+user
};
console.log(greet);
```
```java
function(user){return "hello "+user}
```

## One-line function

Noticed how when you printed greet the function definition was formatted differently?

```java
var greet = function(user) {return "Hello "+user};
console.log(greet);
```
```java
function(user){return "hello " + user}
```