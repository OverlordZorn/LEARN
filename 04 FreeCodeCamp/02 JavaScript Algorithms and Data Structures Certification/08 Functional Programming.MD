# Functional Programming

## Introduction to the Functional Programming Challenges

Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result.

You can combine basic functions in many ways to build more and more complex programs.

Functional programming follows a few core principles:

* Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation.

* Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data

* Functions have minimal side effects in the program

The functional programming software development approach breaks a program into small, testable parts.

This section covers basic functional programming principles in JavaScript.

## Learn About Functional Programming

Functional programming is style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.

`INPUT -> PROCESS -> OUTPUT`

Functional programming is about:

1. Isolated Functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2. Pure functions - the same input always gives the same output

3. Functions with limted side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

### Example
The members of freeCodeCamp happen to love tea.

In the code editor, the `prepareTea` and `getTea` functions are already defined for you.

Call the `getTea` function to get 40 cups of tea for the team, and store them in the `tea4TeamFFC` variable.

```js
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/* Given a function (representing the tea type) and number of cups needed, the following function returns an array of strings (each representing a cup of a specific type of tea). */

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4TeamFFC = getTea(40);
```

## Understand Functional Programming Terminology

The FFC Team had a mood swing and now wants two types of tea:

green tea and black tea. General Fact: Client mood swings are pretty common.

With that information we'll need to revisit the `getTea` function from last challenge to handle various tea requests. We can modify `getTea` to accept a function as a parameter to be able to change the type of tea it prepares. This makes `getTea` more flexible, and gives the programmer more control when client requests change.

But first, let's cover some functional terminology:

*Callbacks* are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in `filter`, the callback function tells JavaScript the criteria for how to filter an array.

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called *first class* functions.
In javaScript, all functions are first class functions.

The functions that take a function as an argument, or return a function as a return value are called *higher order* functions.

When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned cann be called a *lambda*.

### Example

Prepare 27 cups of green tea and 13 cups of black tea and store them in `tea4GreenTeamFCC` and  `tea4BlackTeamFFC` variables respectively.

Note that the `getTea`function has been modified so it now takes a function as the frist argument.

Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.

```js
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the following function returns an array of strings (each representing a cup of a specific type of tea). */

const getTea (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
```

## Understand the Hazards of Using Imperative Code

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.

In English (any many other languages), the imperative tense is used to give commands.

Similarly, an imperative style in programming is one taht gives the computer a set of statements to perform a task.

Often the statements change the state of the program, like updateing global variables.

A classic example is writing a `for` loop that gives exact directions to iterate over the indices of an array.

In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how to computer should perform them. For example, instead of using the `for` loop mentioned above, you could call the `map` method which handles the details of iterating over an array.

This helps to avoid semantic errors, like the `Off By One Errors` that were covered in the Debugging section.

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opend. Let's try to model this using some simple object-oritented code.

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the borwser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for `tabOpen()`, `tabClose()`, and `join()`. The array `tabs` is part of the Window objec taht stores the name of the open pages.

Examine the code in the editor. It's using a method t hat has side effects in the program, causing incorrect behaviour. The final list of open tabs, stored in `finalTabs.tabs`, should be `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', ' GMail', 'Work mail', 'Docs', 'FreeCodeCamp', 'new tab']` but the list produced by the code is slightly different.

Change the `Window.prototype.tabClose` so that it removes the correct tab.

```js
// Tabs is an array of titles of each site open within the window

ar Window = function(tabs) {
    thiis.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
}

// When you close a tab
Window.prototype.tabClose = function (index) {
    
    // ONly change code below this line

    var tabsBeforeIndex = this.tabs.splice(0,index);
        // get the tabs before the tab

    var tabsAfterIndex = this.tabs.splice(index+1);
        // Get the tabs after the tab
    
    this.tabs = tabsBeforeIndex.concat(tabsAfterindex);
        // join them togehter

    return this;
};

// Let's create three borwser windows
var workWindow = new Window(['Gmail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
    // Your mailbox, drive and other work sites

var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
    // Social Sites

var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);
    // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
    .tabOpen()  // open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

### Solutions
#### Solution 1
use `slice()` instead of `splice()`
#### Solution 2
adapt `splice()` accordingly

## Avoid Mutations and Side Effects Using Functional Programming

If you haven't already figured it out, the issue in the previous challenge was with the `splice` call in the `tabClose()` function. Unfortunately, `splice` cahnges the original array it is called on, so the second call to it used a modified array, and gave unexpected results.

This is a small example of a much larger pattern - you call a function on a variable, array, or an object, and the function changes the variable or something in the object.

One of the core principles of functional programming is to not change things. Changes lead to bugs.

It's easier to prevent bugs knowingthat your funtions don't change anything, including the function arguments or any global variable.

The previous example didn't have any complicated operations but the `splice` method changed the original array, and resulted in abug.

Recall that in functional programming, changing or altering things is called *mutation*, and the outcome is called a *side effect*. A function, ideally, should be a *pure function*, meaning that it does not cause any side effects.

Let's try to master this discipline and not alter any variable or object in our code.

## Pass Arguments to Avoid External Dependence in a Function

The last challenge was a step closer to functional programming principles, but there is still something missing.

We didn't alter the global variable value, but the function `incrementer` would not work without the global variable `fixedValue` being there.

Another principle of functional programming is to always declare your dependencies explicitily.

This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are.

Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

## Refactor Global Variables Out of Functions

So far, we have seen two distinct principles for functional programming:

1. Don't alter a variable or object - create new variables and objects and return them if need be from a function.

2. Decalre function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

Adding one to a number is not very exciting, but we can apply these principles when working with arrays or more complex objects.

## Example

Rewrite the code so that global array `bookList` is not changed inside either function. The `add` function should add the given `bookName` to the end of the array passed to it and return a new array (list). The `remove` function should remove the given `bookName` from the array passed to it.

**Note:** Both functions should return an array, and any new parameters should be added before the `bookName` parameter.

```js
// the global variable

var bookList = ["The Hound ofthe Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis principia Mathematica", "Disquistiones Arithmeticae"];

function add(list,newBook) {
    return [...list, newBook];
}

function remove(list,removeBook) {
    return [...list].filter(x => x != removeBook);
}

var newBookList = add(bookList, 'A Brief History Of Time');
var newerBookList = remove(bookList, 'On the Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History Of Time'), 'On The ElectroDynamics of Moving Bodies');

console.log(bookList);
```

## Use the map Method to Extract Data from an Array

So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

It would make sense to be able to pass them as arguments to other functions, and return a function from another function. 

Functions are considered *first class objects* in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

Let's start with some simple array functions, which are methods on the array object prototype.

In this exercise we are looking at `Array.prototype.map()`, or more simply `map`.

The `map` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

When the callback is used, it is passed three arguments. 
The first argument is the current element being processed. 
The second is the eindex of that element and the third is the array upon which the map method was called.

See below for an example using the `map` method on the `users` array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.

```js
const users = [
    {name: "John", age: 34},
    {name: "Amy", age: 20},
    {name: "camperCat", age: 10}
];

const names = users.map(user => user.name);
console.log(names); // ["John", "Amy", "camperCat"]
```

### Example

The `watchList` array holds objects with information on several movies. Use `map` on `watchList` to assign a new array of the objects with only `title` and `rating` keys to the `ratings` variable. The code in the editor currrently uses a `for` loop to do this, so you should replace the loop functionality w ith your `map` expression.

```js

var watchList = [{...},{...},...];

var ratings = watchList.map(
    x => ({
        title: x.Title,
        rating: x.imdbRating
    })
);



console.log(JSON.stringify(ratings));

```

### Other Solutions
#### Solution 1
```js
const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
}));
```
Using ES6 notation, each item in an array is processed to extract title and rating.
Parantheses are needed to return an object.

#### Solution 2
Using parameter destructuring, the title and rating are extracted and returned in an object.
```js
const ratings = watchList.map(({
    Title: title,
    imdbRating: rating
    }) => ({title, rating});
```

## Implement map on a Prototype

As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the `map` method returns an rray of the same length as the one it was called on.

It also doesn't alter the original array, as long as its callback function doesn't.

In other words, `map` is a pure function, and its output depends solely on its input. Plus, it takes another function as its argument.

It would teach us a lot about `map` to try to implement a version of it that behaves exactly like the `Array.prototype.forEach()`.

*Note*: A pure function is allows to alter local variables defined within its scope, although, it's preferable to avoid that as well.

### Exercise
Write your own `Array.prototype.myMap()`, which should behave exactly like `Array.prototype.map()`.
You may use a a `for` loop or the forEach method.

```js
//The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
    var newArray = [];
    // Only change code below this line

    // Only change code above this line

    return newArray,
};

var new_s = s.myMap(function(item) {
    return item * 2;
});
```