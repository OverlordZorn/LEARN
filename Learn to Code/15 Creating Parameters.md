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
But instead of creating two very similar functions, we can send, **or pass**, a value toa customizable function.

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
