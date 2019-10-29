# Java Script Summary
### Table of Content
[Basic](#Basic)<br>
[Data Types](#Data-Types)<br>
[Logical Operators](#Logical-Operators)<br>
[Variables](#Variables)<br>
[Increment & Decrement Operator](#Increment-&-Decrement-Operator)<br>
[Conditional Statements](#Conditional-Statements)<br>
[Functions](#Functions)<br>
[IF Function](#If-Function)<br>
[Loops](#Loops)<br>
# Basic
Lines of of code are instructions a computer can follow.
Every line of code need to end with `;`

```JS
console.log("string");
```
console.log("string");

# Data Types

## Boolean
```JS
console.log(true);
console.log(false);
```

## String
```JS
console.log("This is a string, it can contain numbers like 1337 but also true or false while staying a string");
console.log("you can combine string and other types like this: " + 100 + true + "toast" + "but the result will be a string of the combination");
```
A string is defined by the "".

## Numbers

```JS
var test = 0.5 * 100;
console.log(test);
console.log(9000);
console.log(9.99);
console.log(1+2+3);
```

# Logical Operators
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Logische_Operatoren
## Logical AND &&

```JS
10 > 0 && 5 > 0
```
## Logical OR ||

## Locgical Negation !

# Variables

To create a variable you can do the following.
```JS
var city;
```
to update a variable with the value
```JS
city = "noobtown";
```
or to do both at once.
```JS
var city = true;
```
* We use camelCase to name Variables.

* Variable can contain all kind of data Types, but also other variable.

```JS
var whereYourHeartIs = true;
var bestCity = whereYourHeartIs;
```
* We can also use numbers in the variable but only at the end.
```JS
var bestVariable1 = "this one";
var bestVariable2 = "not this one";
```

# Increment & Decrement Operator
```JS
var count = 1;
count++;
```
-> count == 2
```JS
var count = 2;
count--;
```
-> count == 1

# Conditional Statements

## Comparing Values
When compairing, there are only the two boolean results: `true` or `false`.
These results can be stored in variables.
We can compare values as well as variables.

## Equality Operator 
To compare if two numbers are the same we use the equality operator `===`.
To copare if two numbers are not the same, we use the inequality opertaror `!==`.

## Compairing Numbers
1 < 10 -> True  
10 <= 10 -> True

10 > 1 -> False  
10 >= 10 -> True

## Comparing Strings
We can use coparisons to check if a string is equal `===` or not equal `!==` to another.
We can also copare the stored strings of variables with each other. 


# Functions

## Create
to create we use the keyword `function` functionName() { codeBlock };
```JS
function camelCase() {
    console.log("Hello, World!");
}
```
To call thecreated function
```JS
camelCase();
```
## Parameters

We can add **parameters** as placeholders to **pass** values into the function when we call them

```JS
function say(thisParameter) {
    console.log(thisParameter);
}
```
## Multiple Parameters
We cann also use multiple parameters, we seperate them with a `,` within the `()`

But remember, the order we pass values to a function matters.
```JS
function add(number1, number2) {
    return number1 + number2;
}
```
## Return
With the keyword `return` which we use inside a function, we cen define what will be returned by a function.

```JS
function timesTen(num) {
    return num * 10;
}

var test1 = timesTen(10);

console.log(test1);
console.log(timesTen(5));
```

## Anonymous Functions
We can store a function within a variable. Since we are defining a variable, we need to finish the line and close of the code block with an `;`.
```JS
var greet = function(user) {
    return "Hello " + user
};
console.log(greet("Tina"));
```
Storing a function within a variable results in the function not having its own name, instead, to use it, we call the variable.

```JS
var greet = function(user) {return "Hello "+ user};
```


# If Function
```JS

var con1 = 10
if (con1 > 20) {
    console.log(1);
} else if (con1 > 10) {
    console.log(2);
} else {
    console.log(3);
}
```

# Loops

## while Loop
While loops repeat a codeblock while a condition is true, therefore we need to be careful, not to make endless loops!
```js
while (true) {
    console.log("endless loop!");
}
```
```JS
var number = 4;
while (number < 10) {
    console.log("Lets go Nr. "+number);
    number++;
}
```

## For Loops

To make the loop more concise, it's common vonvention to call the counter variable `i`.
```JS
for (var i = 1; 1 < 3; i++) {
    console.log("Round #"+i);
}
```


# Arrays

## Grouping Values into Arrays
In its stimplest form, the array consists of an opening and an closing bracket `[]`.
We can assign an array to a variable.

An array is a list of values, independent of its data type. It can store variables but also another array.

```JS
var items = ["milk", "tomato"];
var numbers = [3, 7, 13, 21];

```

## Index
Every element in an array has a numbered position, an index, but these indicies start at `0`.

```JS
var names = ["Michael", "Jim", "Dwight"];
console.log(names[0]);
```

## Change an Element

```JS
var numbers = [1,2,3,4,5];
numbers[2] = 999;
console.log(numbers);
```

## Push and Pop
With `push()` we can add new values as parameters to the end of the array.
```JS
var num = [ 1,2,3,4,5];
num.push(99, 1337);
```

With `pop()`we remove the last value of an array. parameters are not needed.  
only a single value will entry will be removed.  
It `returns` the value of the removed item on the list, which can be stored in a variable.

```JS
var num = [1,2,3,4,5];
num.pop();
num.pop();
```

## length
with the word `length` we can inqure the length of an array, how many values are store inside the array.

```JS
var num = [1,2,3,4,5];
console.log(num.length);
```


# Objects

# Classes

