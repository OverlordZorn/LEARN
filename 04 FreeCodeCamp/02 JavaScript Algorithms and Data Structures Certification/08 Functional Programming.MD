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

### Solutions
#### Solution 1 - forEach()
* Solve this challenge using `this` and the forEach method
* The `this` keyword gives us access to the object we are calling myMap on.
* From there we can use the forEach method to add elements to already declared empty array as we modify each element with the given callback method.

```js
//The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
    var newArray = [];
    // Only change code below this line
    this.forEach(a => newArray.push(callback(a)));
    // Only change code above this line

    return newArray,
};

var new_s = s.myMap(function(item) {
    return item * 2;
});
```

#### Solution 2 - for loop
* Solve this challenge using a for loop and `this`
* The use of a for loop allows us to apply the callback function to every item in a the Global array and then push the modified items to the empty new array that is returned in the end.

```js
// The global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
    var newArray = [];

    // Add your code below this line

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }


    // Add your code above this line
    return newArray;
};

var new_s = s.myMap(function(item) {return item * 2;});
```

#### Solution 3 - recursion

```js
// The global Array
var s = [...];

Array.prototype.myMap = function(callback, arr = [], i = 0) {
    return i < this.length
    ? this.myMap(callback, arr.concat(callback(this[i])), i+1)
    : arr;
};

var new_s = s.myMap(function(item)) {
    return item * 2;
}
```

## Use the filter Method to Extract Data from an Array

Another useful array function is `Array.prototype.filter()`, or simply `filter()`.

`filter` calls a function on each element of an array and returns a new array containing only the elements for which that function returns `true`.

In other words, it filters the array, based on the function passed to it.

Like `map`, it does this without needing to modify the original array.

The callback function accepts three arguments.

The frist argument is the current eleent being processed. The second is the index of that element and the third is the array upon which the `filter` method was called.

See below for an example using the `filter` method on the `users` array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.

```js
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 }
];

const usersUnder30 = users.Filter(user => user.age < 30);
console.log(usersUnder30); 
// [{name: "Amy", age: 20}, {name: "camperCat", age: 10}]
```

### Exercise

The variable `watchList` holds an array of objects with information on several movies. Use a combination of `filter` and `map` on `watchList` to assign a new array of objects with only `title` and `rating` keys. The new array should only include objects where  `imdbRating` is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

```js
// The global variable 

var watchList = [    {...:...}, {}, ...    ];

let fnc_a = function(a) {
    return {title: a.Title, rating: a.imdbRating };
};

let fnc_b = function (b) {
    return Number(b.rating) >= 8;
};

var filteredList = watchList.map(fnc_a).filter(fnc_b);

console.log(filteredList);
```

### Solution
#### Solution 1
In the beginner solution we're mapping over the watchList array to reduce the amount of data we have to work with and only returning the two items we need.

Once we've reduced the items to what we're interested in (Title and imdbRating) we're filtering through and only returning the remaining items that meet the critertia.

In this case it's having an imdbRating of 8.0 or higher.

```
see Exercise
```
#### Solution 2
```js
var filteredList = watchList
    .map(function(e) {
        return {title: e["Title"], rating: e["imdbRating"] };
    })
    .filter(e => e.rating >= 8);
```

## Implement the filter Method on a Prototype

It would teach us a lot about the `filter` method if we try to implement a version of it that behaves exactly like `Array.prototype.filter()`.

It can use either a `for` loop or `Array.prototype.forEach()`.

Note: A pure function is allowed to alter local variables defined within its scope, although, it's preferable to avoid that as well.

### Exercise
Write your own `Array.prototype.myFilter()`, which should behave exactly like `Array.prototype.filter()`. You may use a for loop or the `forEach()` method.

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

    var newArray = [];
    let fnc_a = function(a) {
        if ( callback(a) ) {
            newArray.push(a)
        }
    }

    this.forEach(fnc_a);

};

var new_s = s.myFilter(function(item){
    return item % 2 === 1;
});
```

### Solutions
#### forEach()
```js
Arrayprototype.myFilter = function(callback) {
    let newArray = [];

    this.forEach( function(x) {
        if (callback(x)) {
            newArray.push(x);
        }
    });
    return newArray;
}
```

## Return Part of an Array Using the slice Method

The `slice` method returns a copy of certain elements of an array. It can take two arguments, 

the first gives the index of where to begin the slice, 

the second is the index for where to end the slice ( and it's non inclusive).

If the arguements are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate for original array, but returns a new one.

Here is an example: 
```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1,3);
// sets new Array to ["Dog", "Tiger"] 
```

### Exercise
Use the `slice()` method in the `sliceArray` function to return part of the `anim` array given the provided `beginSlice` and `endSlice` indices.
The function should return an array.

```js
function sliceArray(anim, beginSlice, endSlice) {
    return anim.slice(beginSlice, endSlice);
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

sliceArray(inputAnim, 1,3);
```

## Remove Elements from an Array Using slice Instead of splice

A common pattern while working with arrays is when you want to remove items and keep the rest of the array. 
JavaScript ofers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove.

If the second argument is not provided, the default is to remove items through the end.

However, the `splice` method mutates the original array it is called on.

Here's an example:
```js
var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3,1);
// cities is now ["Chicago", "Delhi", "Islamabad", "Berlin"]
```

As we saw in the last challenge, the `slice` method does not mutate the original array, but returns a new one which can be saved into a variable.

Recall that the `slice` method takes two arguments for the indicies to begin and end the slice (the end is non-inclusive), and returns those items in a new arry. Using the `slice`method instead of `splice` helps to avoid any array-mutating side effects.


### Exercise

Rewrite the function `nonMutatingSplice`by using `slice` instead of `splice`. It should limit the provided `cities` array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.

```js
function nonMutatingSplice(cities) {
    return cities.slice(0,3);
}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

nonMutatingSplice(inputCities);
```

## Combine Two Array Using the concat Method

*Concatenation* means to join items end to end. JavaScript offers the `concat` method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to `concat`, which is added to the end of the frist array. 

It returns a new array and does not mutate either of the original arrays. Heres an example:

```js
[1,2,3].concat[4,5,6];
// returns a new array [1,2,3,4,5,6]
```

## Add Elements to the End of an Array Using concat instead of push

Functional programming is all about creating and using non-mutating functions.

The last challenge introduced the `concat` method as a way to combine arrays into a new one without mutating the original arrays.

Compare `concat` to the `push` method. `Push` adds an item to fthe endo fthe same array it is called on, which mutates that array. Here's an example:

```js
var arr = [1,2,3];
arr.push([4,5,6]);
// arr is changed to [1,2,3, [4,5,6]];
// not the functional programming way
```

`Concat` offers a way to add new items to the end of an array without any mutating side effects.

## Use the reduce Method to Analyze Data

`Array.prototype.reduce()`, or simply `reduce()`, is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the `reduce` method.

The `reduce` method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as special applications of `reduce`. The `reduce` method iterates over each item in an array nd returns a single value (i.e. string, number, object, array).

This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments.

The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which `reduce` is called.

In addition to the callback function, `reduce` has an additional parameter which takes an initial value for the accumulator.

If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the frist element of the array as the accumulator.

See below for an example using `reduce` on the `users` array to return the sum of all users' age.

For simplicity, the example only uses the first and second arguments.

```js
const users = [
    {name: 'John', age: 34},
    {name: 'Amy', age: 20},
    {name: 'camperCat', age: 10}
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64
```
In another example, see how an object can be retruned containing the names of the users as properties with their ages as values.

```js
const users = [...];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log(userObj); // {John: 34, Amy: 20, camperCat: 10}
```

### Exercise
The variable `watchList` holds an array of objects with information on several movies.

Use `reduce` to find the average IMDB rating of the movies **directed by Christopher Nolan**. Recall from prior challenges how to `filter` data and `map` over it to pull what you need. You ay need to create other variables, and return the average rating from `getRating` function.

Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

```js
var watchList = [{},{},{},...];

function getRating(watchList) {
    let i = 1;
    var averageRating = watchList
            .filter(item => item.Director == "Christopher Nolan")
            .map(item => Number(item.imdbRating))
            .reduce(function(acc,cur) {
                i++;
                return acc = acc + cur;
            }) / i;
return averageRating;
}
console.log(getRating(watchList));
```

### Solutions
#### Solution 1 === myExample
#### Solution 2
```js
var watchList = [{},{},{},...];

function getRating(watchList) {
    var count = 0;
    var averageRating = watchList
            .reduce((sum,movie) =>  {
                if (movie.Director == "Christopher Nolan") {
                count+=1;
                return sum + parseFloat(movie.imdbRating);
            }
    return sum;
  }, 0) / count;
return averageRating;
}
console.log(getRating(watchList));
```

#### Solution 3
```js
var watchList = [{},{},{},...];

function getRating(watchList) {
    const averageRating = watchList.reduce(
        ({sum, count}, {Director: dir, imdbRating: rating}, idx, arr) => {
        if (dir === 'Christopher Nolan') {
            count++;
            sum+= Number(rating);
        }

        return idx === arr.length - 1 ?
            sum / count : { sum, count };
            
    }, { sum: 0, count: 0 });
    return averageRating;
}
```

## Use Higher-order Functions map, filter or reduce to Solve a Complex Problem

Now that you have worked through a few challenges using higher-order functions like `map()`, `filter()`, and `reduce()`, you now get to apply them to solve a more complex challenge.

### Exercise

We have defined a function named `squareList`.
You need to complete the code for the `squareList` function using any combination of `map()`, `filter()`, and `reduce()` so that it returns a new array containing only the square of *only* the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
An example of an array containing only real numbers is `[-3, 4.8, 5, 3, -3.2]`.

**Note**: Your function should not use any kind of `for` or `while` loops or the `forEach()` function.

```js
const squareList = (arr) => {
    return arr
            .filter(number => (number >= 0) && (number % 1 === 0))
            .map(number => number*number);
};
```

### Solutions
#### Solution 1 - filter and map
```js
const squareList = arr => 
    arr
        .filter( num => num > 0 && num % parseInt(num) === 0 )
        .map( num => Math.pow(num, 2) );
```

#### Solution 2 - reduce
```js
const squareList = arr => {
    return arr.reduce((sqrIntegers, num) => {
        return Number.isInteger(num) && num > 0 ?
            sqrIntegers.concat(num*num) :
            sqrIntegers;
    }, []); 
};
```

## Sort an Array Alphabetically using the sort Method

The `sort()` method sorts the elements of an array according to the callback function.

For example:

```js
function ascendingOrder(arr) {
    return arr.sort(function(a,b) {
        return a - b;
    });
}
assendingOrder([1,5,2,3,4]);
// returns [1,2,3,4,5]

function reverseAlpha(arr) {
    return arr.sort(function(a,b){
        return A === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// returns [ 'z', 's', 'l', 'h', 'b']
```

JavaScript's default sorting method is by string Unicode point value, which may return unexpected results.

Therefore, it is encouraged to provide a callback function to specify how to sort the array items.

When such a callback function, normally called `compareFunction`, is supplied, the array elements are sorted according to the return value of the `compareFunction`:

If `compareFunction(a,b)` returns a value less than 0 for two elements `a` and `b`, then `a` will come before `b`.

If `compareFunction(a,b)` returns a value greater than 0 for two elements `a` and `b`, then `a` will come before `b`.

If `compareFunction(a,b)` returns a value equal to 0 for two elements `a` and `b`, then `a` and `b` will remain unchanged.

### Exercise

Use the `sort` method in the `alphabeticalOrder` function to sort the elements of `arr` in alphabetical order.

```js
function alphabeticalOrder(arr) {
    return arr.sort(function(a,b) {
        return a === b ? 0 : a > b ? 1 : -1 ;
    })
}
```

## Return a Sorted Array Without Changing the Original Array

A side effect of the `sort` method is that it chagnes the order of the elements in the original array. In other words, it mutates the array in place.

One way to avoid this is to first concatenate an empty array to tthe one being sorted (remember that `slice` and `concat` return a new array), then run the `sort` method.

### Exercise

Use the `sort` method in the `nonMutateSort`function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the `globalArray` variable.

```js
var globalArray = [5,6,3,2,9];
function nonMutatingSort(arr) {
    return arr.concat().sort((a,b) => a-b);
    //OR
    return arr.slice().sort((a,b) => a-b);
    //OR
    return [].concat(arr).sort((a,b)) => a-b);
}
```

## Split a String into an Array Using the split Method

The `split` method splits a string into an array o strings.

It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression.

For example. if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

Here are two examples that split one string by spaces, then another by digits using a regular expression:

```js
var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// sets byDigits to ["How", "are", "you", "today"]
```

Since strings are immutable to `split` method makes it easier to work with them.

### Exercise
```js
function splititfy(str) {
    return str.split(/\W/);
}
splitify("Hello World,I-am code");
// returns ["Hello", "World", "I", "am", "code"]
```
## Combine an Array into a String Using the join Method

The `join` method is used to join the elements of an array together ot create a string. It takes an argument for the delimiter that is used to spearate the array elements in the string.

Here's an example:
```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
// Sets str to "Hello World"
```

### Exercise

Use the `join` method (among others) inside the `sentensify` function to make a sentence from the words in the string `str`. The function should return a string. For example, "I-like-star-wars" would be converted to "I like Star Wars". For this challenge, do not use the `replace` method.
```js
function sentensify(str) {
    return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");
// returns "May the force be with you"
```

## Apply Functional Programming to Convert Strings to URL Slugs

The last several challenges covered a number of useful array and string methods that follow functional programming principles. We've also learned about `reduce`, which is a powerful method used to reduce problems to simpler forms.

From computing averages to sorting, any array operation an be achieved by applying it.
Recall the `map` and `filter` are special cases o `reduce`.

Let's combine what we've learned to solve a practical problem.

Many content management sites (CMS) have the titles of a post added to part of the URL for simple bookmarking purposes.

For example, if you write a Medium post titled "Stop Using Reduce", It's likely the URL would have some form of the title string in it (".../stop-using-reduce").

You may have already noticed this on the freeCodeCamp site.

### Exercise

Fill in the `urlSlug` function so it converts a string `title` and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use `replace`.

Here are the requirements.

The input is a string with spaces and title-cased words.

The output is a string with the spaces between words replaced by a hyphen (`-`).

The output should be all lower-cased letters.

The output should not have any spaces.

```js
function urlSlug(title) {
    return title
        .split(/\W/)
        .map(item => item.toLowerCase())
        .filter(x => x != "")
        .join("-")
}
```

### Solutions
#### Solution 1
```js
function urlSlug(title) {
    return title
        .split(/\W/)
        .filter(obj => obj !== "";)
        .join("-")
        .toLowerCase();
}
```
#### Solution 2
```js
function urlSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .join("-");
}
```

## Use the every Method to Check that Every Element in an Array Meets a Criteria

The `every` method works with arrays to check if `every` element passes a particular test.
It returns a Boolean Value - `true` if all values meet the criteria, `false` if not.

For example, 
the following code would check if every element in the `numbers` array is less than 10:

```js
var nubmers = [ 1, 5, 8, 0 10, 11];
numbers.every(item => currentValue < 10);
// returns false
```

## Use the some Method to Check that Any Elements in an Array Meet a Criteria
The `some` method works with arrays to check if *any* element passes a particular test.

It returns a Boolean value - `true` if any of the values meet the criteria, `flase` if not.

Example:
```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(value => value < 10);
// returns True
```

## Introduction to Currying and Partial Application

The *arity* of a function is the number of arguments it requires.
*Currying* a function means to convert a function of N arity into N functions of arity 1.

In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

Here's an example:
```js
//Un-curried function
function unCurried(x,y) {
    return x + y;
}

//Curried function
function curried(x) {
    return function (y) {
        return x + y;
    }
}

// Alternative using ES6
const curried = x => y => x + y
```

This is useful in your program if you can't supply all the arguments to a function at one time.

You can save each function call into a variable,
which will hold the returned function reference that takes the next argument when it's available.

Here's an example using the curried function in the example above:
```js
// Call a curried function in parts:
var funcForY = curried(1);
funcforY(2);
// returns 3
```

Similary, *partial application* can be described as applying a few arguments to afunction at a time and returning another function that is applied to more arguments.

Here's an example:
```js
// Impartial function
function impartial (x,y,z) {
    return x + y + z;
}

var partialFn = impartial.bind(this, 1, 2);
partialFn(10); 
// Returns 13
```