# Self assigned variables.

Let's learn how variable values can change to keep track of numbers that increase or decrease in value.

Sometimes we need to use a variable often, like when we start counting form a specific number.

```java
var count = 1;

console.log(count);
console.log(count + 1);
console.log(count + 1 + 1);
```

In this example, we're always adding by 1 more number to count upwards.

If we dont want to add a 1 for each time we count upwards, we can use something called *self-assignment* instead.

Self-assigning makes it easy if we want to gradually change a variable in a consistent way, like always adding `1`.

Let's reassign count + 1 to itself twice to see what happens.

Always adding 1 is an incremental change. As a matter of fact, it's called *incrementing*.

And there is even an operator for that.

We can increment in more concise way by using the ++  operator. When using it, we can write it like this: variable++ and it works.


```java
var count = 10;
console.log(count);

count++;

console.log(count);
```

To subtract one from a variable, use the *decrement operator (`--`)* instead.

We can change the value of a variable based on vertain conditions. For that, we can use an if statement.

