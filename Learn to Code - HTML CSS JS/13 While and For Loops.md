# While Loops

Let's dive into reapeating codee with while loops.

We often need to repeat the same task over and over again.
Like increasing a variable by 1 and displaying it in the console.

Imagine how tedious it would be to repeat these lines even a handful of times!

There's no need to us to write the same set of lines over and over again, though. We can use loops for that.

The *while loop* is a kind of a loop. It repeats lines of code **while** a certain condition is `true`.

We use the `while`keyword to create *while loops*.

Directly after while, we add the condition we want to check inside parentheses.

To mark the beginning and the end of the lines we want to rpeat, we use curly braces.

```java
while (true) {
    console.log("Polly wants a cracker!")
}
```

Since the condition is always `true`, this wile loop will never end. we call such a loop that never ends an *infinite loop*.

To control when to start and stop a loop, we can reate a variable outside the loop and use it as the condition.

```java
var isHungry = true;
 
while (isHungry) {
    console.log("Polly wants a cracker!");
    isHungry = false;
}
```

Since the condition uses true or false to decide when to stop, we can use *comparison* as conditions.

```java
var number = 1;

while (number <4) {
    number++;
    console.log(number);
}
```
Variables like `number`are *counter variables*. They count to control the number of times a loop repeats.

# For Loops

A special loop called *for loop* is great when we know how many times a loop should run.

To greate a for loop, we start with the `for` keyword.

Just like a while loop, we place () and {} after the keyword.

We can create a counter variable, like `number`, directly inside a for loop's parentheses. We just have to make sure to add the semicolon!

The condition of a for loop also goes inside the (), right after creating the counter variable!

In a for loop, we even include incrementing the counter variable inside (). This time without a semicolon ; .

```java
for (var number = 1; number <3; numer++) {

}
```

To make the for loop more concise, it's common convention for developers tocall the counter variable `i`.

```java
for (var i = 1; i < 3; i++) {

}
```

We can change the counter variable's value to decide when to start the loop.

Changing the condition tells the for loop when to stop.

## Practice
```java
console.log("Start MRI Mashine");

for (var i = 1; i < 4; i++) {
    console.log("Scan #" + i);
}
```