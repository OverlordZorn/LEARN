# Basic Data Structure 

1. [Basic Data Structure](#basic-data-structure)
   1. [Introduction](#introduction)
   2. [Use an Array to Store a Collection of Data](#use-an-array-to-store-a-collection-of-data)
   3. [Accessing an Array's Contents Using Bracket Notation](#accessing-an-arrays-contents-using-bracket-notation)
   4. [Add Items to an Array with push() and unshift()](#add-items-to-an-array-with-push-and-unshift)
   5. [Remove Items from an Array with pop() and shift()](#remove-items-from-an-array-with-pop-and-shift)
   6. [Remove Items Using splice()](#remove-items-using-splice)
   7. [Add Items Using splice()](#add-items-using-splice)
   8. [Copy Array Items Using slice()](#copy-array-items-using-slice)
   9. [Copy an Array with the Spread Operator](#copy-an-array-with-the-spread-operator)
   10. [Combine Arrays with the Spread Operator](#combine-arrays-with-the-spread-operator)
   11. [Check For The Presence of an Element With indexOf()](#check-for-the-presence-of-an-element-with-indexof)
      1. [Example](#example)
   12. [Iterate Through All an Array's Tiems Using For Loops](#iterate-through-all-an-arrays-tiems-using-for-loops)
      1. [Example](#example-1)
   13. [Create complex multi-dimensional arrays](#create-complex-multi-dimensional-arrays)
   14. [Add Key-Value Pairs to JavaScript Objects](#add-key-value-pairs-to-javascript-objects)
   15. [Modify an Object Nested Within an Object](#modify-an-object-nested-within-an-object)
   16. [Access Property Names with Bracket Notation](#access-property-names-with-bracket-notation)
      1. [Example](#example-2)
   17. [Use the delete Keyword to Remove Object Properties](#use-the-delete-keyword-to-remove-object-properties)
   18. [Check if an Object has a Property](#check-if-an-object-has-a-property)
      1. [Example](#example-3)
         1. [Explaination Every Method](#explaination-every-method)
   19. [Iterate Through the Keys of an Object with a for...in Statement](#iterate-through-the-keys-of-an-object-with-a-forin-statement)
      1. [Example](#example-4)
   20. [Generate an Array of All Object Keys with Object.keys()](#generate-an-array-of-all-object-keys-with-objectkeys)
   21. [Modify an Array Stored in an Object](#modify-an-array-stored-in-an-object)
      1. [Exercise](#Exercise)

## Introduction

Data can be stored and accessed in many different ways, both in JavaScript and other languages.

This section will teach you how to manipulate arrays, as well as access and copy the information within them.

It will also teach you how to manipulate and access the data within JavaScript objects, using both dot and bracket notation.

When you're done with this section, you should unerstand the basic properties and differences between arrays and objects, as well as how to choose which to use for a given purpose.

## Use an Array to Store a Collection of Data

The below is an example of the simplest implementation of an array data structure.

This is known as a **one-dimentional array**, 
meaning it only has one level, 
or that it does not have any other arrays nested within it.

Notice it contains *booleans, strings, and numbers,* among other valid JavaScript data types:

```js
let simpleArray = ["one", 2, "three", true, false, undefined, null];
console.log(simpleArray.length);
```

All arrays have a length property, which as as shown above, can be very easily accessed with the syntax `Array.length`. A more complex implementation of an array can be seen below.

This is known as a **multi-dimensional array**, or an array that contains other arrays.

Notice that this array also contains JavaScript objects, which we will examine very closely in our next section, but for now, all you need to know is that arrays are also capable of storing complex objects.

```js
let complexArray = [
    [
        {
            one: 1,
            two: 2,
        },
        {
            three: 3,
            four: 4
        }
    ],
    [
        {
            a: "a",
            b: "b"
        },
        {
            c: "c",
            d: "d"
        }
    ]
];
```
## Accessing an Array's Contents Using Bracket Notation

The fundamental feature of any data structure is, of course, the ability to not only store data
but to be able to retrieve that data on command.

So, now that we've learned how to create an array, let's begin to think about how we can access that array's information.

When we define a simple array as seen below, there are 3 items in it:

```js
let ourArray = ["a", "b", "c"];
```
In an array, each array item as an **index**. This index doubles as the position of that item in the array, and how you reference it. However, it is important to note, that JavaScript arrays are **zero-indexed**, meaning that the first element of an array is actually at the ***zeroth*** position, not the first.

In order to retrieve an element from an array we can enclose an index in bracktes and append it to the end of an array, or more commonly, to a variable which references an array object.

This is known as **bracket notation**.
For example, if we want to retrieve `"a"` from `ourArray` and assign it to a variable, we can do so with the following code:

```js
let ourVariable = ourArray[0];
// ourVariable equals "a"
```
In addition to accessing the value associated with an index, you can also **set** an index to a value using the same notation:
```js
ourArray[1] = "not b anymore";
// ourArray now equals ["a", "not b anymore", "c"];
```
Using bracket notaion, we have now reset the item at index 1 from `"b"`, to `"not b anymore"`.

## Add Items to an Array with push() and unshift()

An array's length, like the data types it can contain, is not fixed.

Arrays can be defined with a length of any number of elements, and elements can be added or removed over time;

in other words, arrays are *mutable*.

In this challenge, we will look at two methods with which we can programmatically modify an array: `Array.push()` and `Array.unshift()`.

Both methods take one or more elements as parameters and add those elements to the array the mothod is being called on; the `push()` method adds elements to the end of an array, and `unshift()` adds elements to the beginning. Consider the following:

```js
let twentyThree = "XXIII";
let romanNumberals = ['XXI', 'XXII'];

romanNumerals.unshift("XIX", "XX");
// now equals ['XIX', 'XX', 'XXI', 'XXII'];

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII','XXIII'];
```
Notice that we can also pass variables, which allows even greater flexibility in dynamically modifying our array's data.

## Remove Items from an Array with pop() and shift()

Both `push()` and `unshift()` have corresnponding methods that are nearly functional opposites:
`pop()` and `shift()`.

As you may have guessed by now, instead of adding, `pop()` *removes* an element from the end of an array, 
while `shift()`removes an element from the beginning. 

The key difference bewetten `pop()` and `shift()` and their cousins `push()` and `unshift()`, is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

Let's take a look:
```js
let greetings = ["whats up?", "hello", "see ya!"];

greetings.pop();
//now equals ["whats up?", "hello"]

greetings.shift();
//now equals ["hello"]
```
We can also return the value of the removed element with either method like this:

```js
let popped = greetings.pop();
//returns "hello"
// greeings now equals []
```

## Remove Items Using splice()

Ok, so we've learned how to remove elements from the beginning and end of arrays using `shift()` and `pop()`, but what if we want to remove an element from somewhere in the middle?
Or remove more than one element at once?

Well, that's where `splice()` comes in. 

`splice()` can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of `splice()` are integers which represent indexes, or positions, of the array that `splice()` is being called upon.

And remember, arrays are `zero-indexed`, so to indicate the first element of an array, we would use `0`.

`splice()`'s first parameter represents the index of the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.

For example:

```js
let array = ['today', "was", "not", "so", "great"];

array.splice(2,2);

// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
```
`splice()` not only modifes the array it's being called on, but it also returns a new array containing the value of the removed elements:
```js

let array = ["i", "am", "feeling", "really", "happy"];

let newArray = array.splice(3,2);
// newArray equals ["really", "happy"]
```

## Add Items Using splice()


Remember in the last challenge we mentioned that `splice()` can take up to three parameters?

Well, you can use the third parameter, comprised of one or more elements, to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements for another.

```js
const numbers = [10,11,12,12,15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelet, 13,14);
// the second entry of 12 is removed, and we added 13 and 14 at the same index
console.log(numbers);
// returns [10,11,12,13,14,15]
```
Here we begin with an array of numbers. We then pass the following to `splice()`. 

The index at which to begin deleting elements (3), the number of elements to be deleted (1), and the elements (13,14) to be inserted at the same index.

Note that there can be any number of elements (seperated by commas) following `amountToDelete`, each of which gets inserted

## Copy Array Items Using slice()

The next method we will cover is `slice()`.

`slice()`, rather than modifying an array, copies, or *extracts*, a given number of elements to a new array, elaving the array it is called upon untouched. `slice()`takes only 2 parameters. 
The frist is the index at which to begin extraction, 
and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index.

Consider this:
```js
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1,3);
// todaysWeather equals ['snow', 'sleet'];
// weather Condisions remains unchanged
```
In effect, we have created a new array by extracting elements from an existing array.

## Copy an Array with the Spread Operator

While `slice()` allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new *spread operator* allows us to easily copy *all* of an array's elements, in order, with a simple and highly readable syntax.

The spread syntax simply looks like this: `...`

In practice, we can use the spread operator to copy an array like so:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// that Array equals [true, true, undefined, alse null];
// thisArray remains unchanged
```
```js
let thatArray = [thisArray]; 
// this would result in this: [[true, true, undefined, false, null]]
// the spread operator unpacks the elements of an array and lists them individually
```

## Combine Arrays with the Spread Operator

Another huge advantage of the *spread* operator, is the ability to combine arrays, or to insert all the elements of one array into another, at any index. With more traditional syntaxes, we can concatenate arrays, but tis only allows us to combine arrays at the end of one, and at the start of another. Spread syntax makes the following operation extremely simple:

```js
let thisArray = ["sage","rosemary","parsley","thyme"];

let thatArray = ["basil", "cilantro", ...thisArray, "coriander"];
// equals ["basil", "cilantro", "sage", "rosemary", "parsley", "thyme", "coriander"];
```

Using spread syntax, we have just achieved an operation that would have been more complex and more verbose had we used traditional methods.

## Check For The Presence of an Element With indexOf()

Since arrays can be changed, or mutated, at any time,t here's no gurantee about where a particular piece of data will be on a given array, or if that element even still exists.

Luckily, JavaScript provides us with another built-in method, `indexOf()`, that allows us to quickly and easily check for the presence of an element on an array.

`indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or `-1`if the element does not exist on the array.

For example
```js
let fruits = ["apples", "pears", "oranges", "peaches", "pears"];

fruits.indexOf("dates");    // returns -1
fruits.indexOf("oranges");  // returns 2
fruits.indexOf("pears");    // returns 1, the first index at which the element exists
```
### Example
```js
return arr.indexOf(elem) >= 0 ? true : false;
// or
return arr.indexOf(elem) != -1;
```

## Iterate Through All an Array's Tiems Using For Loops

Sometimes when working with arrays, it is very handy to be able to iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria.

JavaScript offers several built in methods that each iterate over arrays in slightly different ways to acheive different results (such as `every()` `forEach()` `map()`, etc,..), however the technique which is most flexible and offers us the greatest amount of control is a simple `for` loop.

```js
function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>10) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

greater ThanTen([2,12,8,14,80,0,1]);
// returns [12,14,80]
```

Using a `for` loop, this function iterates through and accesses each elemnt of the array, and subjcts it to a simple tes that we have created.

In this way, we have easily and programmatically determined which data items are greater than `10`, and returned a new array containing those items.

### Example

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem)===-1) {
      newArr.push(arr[i]);
    }
  }

  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

```

## Create complex multi-dimensional arrays

Awesome! You have just learned a ton about arrays! This has been a fairly high level overview, and there is plenty more to learn about working with arrays, much of which you will see in later sections.

But before moving on to looking at *Objects*, lets take one more look, and see how arrays can become a bit more complex than what we have seen in previous challenges.

One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays.

We have seen arrays that contain arrays in previous challenges, but fairly simple ones. 

However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on.

In this way, an array can very quikly become very complex data structure, known as a *multi-dimensional*, or nested, array.

Consider the following example.
```JS
let nestedArray = [         // top, or first level - the outer most array  
    ["deep"],                   // an array within an array, 2 levels of depth
    [
        ["deeper", "deeper"]    // 2 arrays nested 3 levels deep
    ],
    [
        [
            ["deepest"], ["deepest"] // 2 arrays, nested 4 levels deep 
        ],
        [
            [
                ["deepest-est?"]    // an array nested 5 levels deep
            ]
        ]
    ]
];
```

While this example may seem convoluted, this level of complexity is not unehard of, or even unusual, when dealing with large amount of data.

However, we can still very easily access the deepest levels of an array this copmlex with bracket notation:
```js
console.log(nestedArray[2][1][0][0][0])
// returns "deepest-est?"
```
And now that we know where that piece of data is, we can reset if we need to:
```js
nestedArray[2][1][0][0][0] = "deeeper still";

console.log(nestedArray[2][1][0][0][0]);
// outputs "deeper still"
```

## Add Key-Value Pairs to JavaScript Objects

At their most basic, objects are just collections of *key-value pairs*, 
or in other words, 
pieces of data mapped to unique identifiers tthat we call *properties* or *keys*.

Let's take a look at a very simple example:
```js
let FCC_User = {
    username: "awesome_coder",
    followers: 572,
    points: 1741,
    completedProjects: 15
};
```

The above code defines an object called `FCC_user` that has four *properties*, each of which map to a specific value. If we wanted to know the number of `followers` `FCC_User`has, we can access that property by writing:

```JS
let userData = FCC_User.followers;
// userData equals 572
```
This is called *dot notation*. Alternatively, we can also access the property with brackets, like so:

```js
let userData = FCC_User["followers"];
```

Notice that with *bracket notation*, we enclosed `followers` in quotes(`""`). 
This is because the brackets actually allow us to pass a variable in to be evaluated as a property name (hint: keept this in mind for later!).
Had we passed `followers` in without the quotes, the JavaScript engine would have attempted to evaluate it as a variable, and a `ReferenceError: followers is not defined`would have been thrown.

Using the same syntax, we can also **add new** key-value pairs to objects.
We'e created a `foods` object with three entries. Add three more entries: `banana` with a value of `13`, `grapes` with a value of `35`, and `strawberries` with a value of `27`.

```js
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods.bananas = 13;
foods["grapes"] = 35;

let newFruit = "strawberries";
let newValue = 27;

foods[newFruit] = newValue;
console.log(foods);
// {apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27 }
```

## Modify an Object Nested Within an Object

Now let's take a look at a slightly more complex object.

Object properties can be nested to an arbitrary depth, 
and their values can be any type of data supported by JavaScript, 
including arrays and even other objects. 
```js
let nestedObject = {
    id: 28802695164,
    date: "December 31, 2016",
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13
        }
    }
};
```
`nestedObject` has three unique keys: 
`id`, whose value is a number, `date` whose value is a string, 
and data, whose value is an object which has yet another object nested within it.

While structures can quickly become complex, we can still use the same notations to access the infromation we need.

```js
let userActivity = {
    id: 23894201352,
    date: "january 1, 2017,
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;
//or
userActivity["data"]["online"] = 45;
```

## Access Property Names with Bracket Notation

In the first object challenge we mentioned the use of bracket notation as a way to access property values using the evaluation of a variable.

For instance, imagine that our `foods` object is being used in a program for a supermarket cash register. 
We have some function that sets the `selectedFood` and we want to check our `foods` object for the presence of that food.
```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```
This code will evaluate the value stored in the `selectedFood` variable and return the value of that key in the `foods` object, or `undefined` if it is not present. Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.

### Example

```js
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};
function checkInventory(scannedItem) {
    return foods[scannedItem];
}
console.log(checkInventory("apples"));
// returns 25
```

## Use the delete Keyword to Remove Object Properties

Now you know what objects are and their basic features and advantages. In short, they are key-value stores which provide a flexible, intuitive way to structure data, **and**, they proivde very fast lookup time.

Throughout the rest of these challenges, we will describe several common operations you can perform on objects so you can become comfortable applying these useful data structures in your programs.

In earlier challenges, we have both addded to and modified an object's key-value pair. Here we will see how we can *remove* a key-value pair from an object.

Let's revisit our `foods` object example one last time.

If we wanted to remove the apples key, we can remove it by using the `delete` keyword like this:

```js
delete foods.apples;
```

## Check if an Object has a Property

Now we can add, modify, and remove keys from objects. But what if we just wanted to know if an object has a specific property?

JavaScript provides us with two differnt ways to do this.

One uses the `hasOwnProperty()` method and the other uses the `in` keyword.

If we have an object `users` with a property of `Alan`, we could check for its presence in either of the following ways:
```js
users.hasOwnProperty("Alan");
"Alan" in users;
// both return true(or false)
```
### Example
```js
let users = {
    Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
}


function isEveryoneHere(obj) {
    return ["Alan","Jeff","Sarah","Ryan"].every(name => 
    obj.hasOwnProperty(name)
    );
}
```
Code Explanation
* Uses an array with all of the names which should be present in the object.
* The `every` method is used to validate all of names used in conjunction with the `hasOwnProperty` method result in a value of `true` being returned during each iteration.
* If at least one name is not found using the `hasOwnProperty` method, the `every` method returns `false`.

#### Explaination Every Method

The `every()` method tests wheter all elements in the array pass the test implemented by the provided function. 
It returns a Boolean value.

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1,30,39,29,10,13];

console.log(array1.every(isBelowThreshold));
```

## Iterate Through the Keys of an Object with a for...in Statement

Sometimes you may need to iterate through all the ekys within an object.

This requires a specific syntax in JavaScript called a *for...in* statement.

For our `users` object, this could look like:

```js
for (let user in users) {
    console.log(user);
}
```
In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console.

**Note**:
Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

### Example
We've defined a function `countOnline`, which accepts one argument (a users object). Use a *for...in* statement within this function to loop through the users object passed into the function and return the number of users whose `online` property is set to `true`. An example of a users object which could be passed to `countOnline` is shown below. Each user will have an `online` property with either a `true` or `false`value.

```js
{
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}
```

```js
function countOnline(usersObj) {
    let c = 0;
    for (user in usersObj) {
        usersObj[user].online ? c++: null;
    }
    return c;
}
```

## Generate an Array of All Object Keys with Object.keys()

We can also generate an array which contains all the keys stored in an object using the `Object.keys()` method and passing in an object as the argument.

This will return an array with strings representing each property in the object.

Again, there will be no specific order to the entries in the array.

```js
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}
console.log(getArrayOfUsers(users));
// ["Alan", "Jeff", "Sarah", "Ryan" ]
```

## Modify an Array Stored in an Object

Now you've seen all the basic operations for JavaScript Objects.

You can add, modify, and remove key-value pairs, check if keys exist, and iterate over all the keys in an object. 
As you continue learning JavaScript you will see even more versatile applications of objects.

Additionally, the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 *Map* and *Set* objects, both of which are similar to ordinary objects but provide some additional features.

Now that you've learned the basics of arrays and objects, you're fully prepared to begin tackling more complex problems using JavaScript!

### Exercise

Take a look aththe object we've provided. The `user` object contains three keys. The `data` key contains five keys, one of which contains an array of `friends`. From this, you can see how flexible objects are as data structures. We've started writing a function `addFriend`. Finish writing it so that it takes a `user` object and adds the name of the `friend` argument to the array stored in `user.data.friends` and returns that array.

```js
user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location : {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));
```