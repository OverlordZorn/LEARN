# Creating Parameters

Let's learn more about using functions, what we can add t othem, and how we can use them.

We an create and use *variables* inside functions.

```java
function greetRon () {
    var name = "Ron";
    console.log("Hello, " + name);
}
```

```java
Hello, Ron
```

Notice how the print statement uses the variable we created?

But what if we want to greet someone else? we can create another function with different value.
```java
function greetLeslie () {
    var name = "Leslie";
    console.log("Hello, " + name)
}
```
```java
Hello, Leslie
```

## Function Call
But instead of creating two very similar functions, we can send, **or pass**, a value to a customizable function.

In this code snippet, we're using the `greet()` function and **passing** it the value `"April"`.

```java
greet("April");
```

Call the `greet()` function and pass it the value `"April"`.

```java
function greet(name) {
    console.log("Hello, " + name);
}

greet("April");
```
```java
Hello, April
```
To pass a value to a function, we put it between the parentheses when we call the function.

```java
function greet(name) {
    console.log("Morning, " + name);
}

greet("April");
```
```java
Morning, April
```

The special variable inside the parentheses of a function is called a *parameter*. In this case, the parameter is `name`.

```java
function greet(name) {

}
```
When we pass a value to a function, the parameter acts like a variable that stores the value.

When we call a function multiple times and pass it the same value, the result is always the same.
Of course we can also call the function multiple times with *different values*.

We can call a function anywhere we want. Even before the function itself.

```java
greet("Burt Macklin");

function greet(name) {
    console.log("Hello, " + name);

}
```
# Returning Values

In this skill, we'll learn how to return a value from a function with the help of the *return statement*.

the return keyword makes a function return a value.

```java
return
```

Let's take a look at how it looks inside a function.

After `return`, we add the *value* we want to return. It can be any type of value, like a string, number or boolean.

We can only return a single value with the `return` keyword.

We can use the *return value* of a function like any other value. We just need to call the function.
We can also store the return value of a function in a *variable*.


```java
function giveMeFive() {
    return 5;
}
var result = giveMeFive();
console.log(giveMeFive());
console.log(result);
```
```java
5
5
```
The value of the function parameter can be used to help create the return value too.

```java
function addFiveTo(number) {
    return number + 5;
}

var result = addFiveTo(10);
console.log(result);
```
```java
15
```
# Using Multiple Parameters

Let's dive into using functions with multiple parameters.

We can add *more than one parameter* to a function when we need a result from more than one input.

```java
function sayName (first, last) {
console.log("My name is:");
conosle.log(first + " " + last);
}

sayName("alex", "Morgan");
```
```java
My name is:
Alex Morgan
```

Did you notice the comma between the frist and last parameters? We use *commas* to seperate *multiple parameters* in a function.

Our fun with functions doesn't end with two parameters, because we cann ad as *man parameters* as we'd like.

Remember, the order we pass values to a function matters.

Passing multiple parameters means that we can use them to return a new value. 

For example, this function returns the sum of `numberA` and `numberB`.

```java
function addNumbers(numberA, numberB) {
    return numberA + numberB;
}

var result = addNumbers(1,2);
vonsole.log(result);
```
```java
3
```