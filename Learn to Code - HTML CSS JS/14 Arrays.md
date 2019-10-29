# Grouping Values into Arrays

When we build big apps, we often need to create a lot of variables.

To keep track of three items on a shopping list, we need to create three variables.

It can be cumbersome to create multiple variables for a variety of reasons.
Fortunately, there is a sipler and better way!

To kee ptrack of multiple values, we use lists.

we call these lists *arrays*.

In it's simplest form, an array consists of an opening and a closing *bracket*.

```java
[]
```

We can assign an array to a variable just like a string or a number.

```java
var items = [];
```

After assigning an array to a variable, we can use it like any other variable.
For example, we can display it with `console.log()`.

```java
var items = [];
console.log(items);
```

To add a value to an array, we put it inbetween the brackets. Let's start with a string from the shopping list.

```java
var items = ["milk"];
console.log(items);
```

To add two values to an array, we need to put a comma between them.

```java
var items = ["milk", "tomato"];
console.log(items);
```

Of course an array can take more than two values as well. In fact, we can fit any number of items into an array.

String values are displayed with double quotes when inside and array.

# Changing Arrays
Lets dig deeper into arrays, what they can store and how we can use them.

Arrays can also store values other tahn strings. Like numbers.

```java
var numbers = [3,7,13,21];
console.log(numbers);
```
```java
[3, 7, 13, 21]
```

Arrays can store pretty mch any value. In fact, they can even store variables.

```java
var first = "John";
var secound = "Joseph";
var third = "Donnie";
var winners = [first, secound, third];
console.log(winners);
```
```java
["John", "Joseph", "Donnie"];
```
## Index

Every element in an array has a numbered position, an *index*.

But these indices start at `0`. So the first element in an array is at index `0`.
The secound element is at index `1`, and so on.

Although indicies aren't always visible, we can count on them to, well, count.

Once we know that the frist element is at index 0, we just continue counting as normal, to figure out the other indices.

## Retrieve an Element

We can use indicies to access *specific elements*. For that, we use the name of the array and the index of the index of the element between *brackets*.

```java
var names = ["Michael", "Jim", "Dwight"];
var name = names[0];
console.log(name);
```
```java
Michael
```
## Change an Element
We can also use the index to change the value of an element.
Using the `=` sign, we can give the element a different value.

```java
var names = ["Michael", "Jim", "Dwight"];
names[0] = "Helen";
console.log(names);
```
```java
["Helen", "Jim", "Dwight"]
```

We an change the value of any element in an array as long as the index exists.

# Pushing and Popping Arrays
We can add elements an array or remove elements from it.

Like when we forgot an item on a shopping list and want to add it, or added two of same item and need to remove the duplicate.

## Add an Element with push()

To add a value to an array, we use the array name, a peroid and `push()`.
The value goes inside the parenthesis.

Let's take a look at this code that adds `"fennel"`to the `items` array.

```java
var items = ["onion", "celery"];
items.push("fennel");
```

```java
var animals = ["rabbit", "sheep"];
animals.push("cow");
```

When we add a value with `push()` it's added to the *end* of the array.

Display the `animals` array tosee the result of adding the value `"cow"`.

```java
var animals = ["rabbit", "sheep"];
animals.push("cow");

console.log(animals);
```
```java
["rabbit", "sheep", "cow"]
```

We can add more than one value with `push()` by separating the different values with a comma.

In this example, we're adding two values, `"Sally"` and `"Kadie"`, to the `agents` array.

```java
var agents = ["Garcian", "Dan"];
agents.push("Sally", "Kadie");

console.log(agents);
```
```java
["Garcian", "Dan", "Sally", "Kadie"]
```

## Remove an Element with pop()
To remove a value from an array, we use the array name, a peroid, and the word `pop` with empty parentheses.

In this example, we're removing the value `"brick"` from the `tools` array.

```java
var tools = ["Hammer", "nail", "brick"];
tools.pop()
```

When we use `pop()`, it removes the *last element* in the array.

`pop()` removes one value at a time. To remove multiple values, we need to use `pop()` multiple times.

```java
Var tools ["Hammer", "nail", "brick"]
tools.pop();
tools.pop();
console.log(tools);
```
```java
["hammer"]
```
## New Variable
When we assign `pop()` to a *variable*, the variable stores the value we're removing.

In this example, `pop()` is used on the `colors` array and the removed value `"black"` is stored in the `color` variable.

```java
var colors = ["blue", "red", "black"];
var color = colors.pop();
console.log(color);
```
```java
black
```

```java
var devices = ["tablet", "phone", "keyboard"]
var item = devices.pop();

console.log(devices);
console.log(item);
```
```java
["tablet", "phone"]
keyboard
```

# Deciding with Arrays

## Counting and decision-making

Let's find out how we can count the elements in array and use this information in smart ways.

We use the word `length` after the array name and a period to get to the number of elements in an array.

We can also store the length of an array in a variable.


```java
var tasks = ["dishes", "windows", "vacuum"];

var length = tasks.length;

console(tasks.length);
```
```java
3
```

No matter how many elements there are in an array, length will count them for us.

Even if the `tasks` array is empty, `tasks.length` gives us the number of elements in it.

```java
var tasks = [];
console.log(tasks.length);
```
```java
0
```

We can use the length of an array to create *conditional statements* that depend on its numbers of elements.

```java
var tasks = ["dishes", "windows", "vacuum"]

if (tasks.length > 0) {
    console.log("Ugh, more work!");
}
```

We can also use the length of an array to create *for loops* that go trough all of its elements.

For that, we repeat a loop as many times as there are elements in the array.

```java
var friends = ["ana", "eve", "sam"];

for (var i = 0; i < 3; i++ ) {
    console.log(i);
}
```
```java
0
1
2
```

But instead of specifying that i needs to be less than 3, we can also use the length of the array.

```java
var friends = ["ana", "eve", "sam"];

for (var i = 0; i < friends.length; i++ ) {
    console.log(i);
}
```

The counter variable `i` stores the values 0,1 and 2 as the loop repeats. but 0, 1 and 2 are also the indices of the lements in friends!

So every time a loop repeats, i stores an index of an element in the friends array. And we can use the index to access the element.

```java
var friends = ["Anna", "Tim", "Eve"];

for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
```
```java
Anna
Tim
Eve
```
