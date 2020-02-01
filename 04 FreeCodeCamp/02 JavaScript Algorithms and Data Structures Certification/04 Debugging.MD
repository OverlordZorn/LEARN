# Debugging

## Introduction to the Debugging Challenges

Debugging is valuable and (unfortunately) necessary tool for programmers. It follows the testing phase of checking if your code works as intendend, and discovering it does not.

Debugging is the process of finding exactly what isn't working and fixing it.

After spending time creating a brilliant block of code, it is tough realizing it may have errors.

These issues generally come in three forms:

1. syntax errors that prevent the program from running
2. runtime errors when code fails to execute or has unexpected behavior
3. semantic (or logical) errors when code doesn't do what it's meant to.

Modern code editors (and experience) can help identify syntax errors.

Semantic and runtime errors are harder to find. They may caue your program to crash, make it run forever, or give incorrect output. 

Think of debugging as trying to understand why your code is behaving the way it is. Example of a syntax error - often detected by the code editor:

```js
funtcion willNotWork(
    console.log("Yuck");
}
// "function" keyword is misspelled and there's a) and { missing 
```
Here's an example of a runtime error - often detected while the program executes:

```js
function loopy() {
    while(true) {
        console.log("Hello World!");
    }
}
// Calling loopy starts an infinite loop, which may crash your browser 
```
Example of a semantic error - often detected after testing code output.
```js
function calcAreaOfRect(w,h) {
    return w + h; // this should be w * h
}
let myRectArea = calcAreaOfRect (2, 3);
// Correct syntax and the program executes, but this gives the wrong awnser
```

Debugging is frustrating, but it helps to develop (and follow) a step-by-step approach to review your code. 

This means checking the intermediate values and types of variables to see if they are what they should be. 

You can start with a simple process of elimiation:

For example, if function A Works and returns what it's supposed to, then function B may have the issue. Or start checking values in a block of code from the middle to try to cut the search space in half. A problem in one spot indicates a bug in the first half of the code. If not, it's likely in the second.

This section will cover a couple helpful tools to find bugs, and some of the common forms they take.

Fortunately, debugging is a learnable skill that just requires a little patience and practice to master.

## Use the JavaScript Console to Check the Value of a Variable

Bot Chrome and Firefox have excellent JavaScript consoles, 
also known as DevTools, for debugging your JavaScript.

You can find Developer Tools in your Chrome's menu or Web Console in Firefox's menu.

If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.

The `console.log()` method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. 

Placing it as strategic point in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at waht it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.

Here's an example to print 'Hello World!' to the console:
```js
console.log('Hello World!');
```

## Understanding the Differences between the freeCodeCamp and Browser Console

You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.

The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.

When you run ordinary JavaScript, the browsers console will display your `console.log()` statements the exact number of times you requested..

The freeCodeCamp console will print your `console.log()` statement for each test of that challenge, as well as one more time for any function calles that you have in your code.

This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect to see only once may print out many more times.

If you would like to see only your single output and not have to worry about running through the test cycles, you can use `console.clear()` and check the browsers console.

## Use typeof to Check the Type of a Variable

You can use `typeof` to check the data structure, or type, of a variable. 
This is useful in debugging when working with multiple data types.

If you think you're adding two numbers, but one is actually a string, the results can be unexpected. 

Type errors can lurk in calculations or function calls. Be careful especially when you're accessing and working with external data in the form of a JavaScript Object Notation (JSON) object.

Here are some examples of using `typeof`:
```JS
console.log(typeof "");     // outputs "string"
console.log(typeof 0);      // outputs "number"
console.log(typeof []);     // outputs "object"
console.log(typeof {});     // outputs "object"
```

JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String` and `Symbol` (new with ES6) and one type of mutable items: `Object`.

Note that in JavaScript, arrays are technically a type of object.

## Catch Misspelled Variable and Function Names

The `console.log()` and `typeof` methods are the two primary ways to check intermediate values and types of program output.

Now its time to get into the common forms that bugs take.

One syntax-level issue that fast typer can commiserate with is the humble spelling error.

Transposed, missing, or mis-paitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error.

JavaScript variable and function names are case-sensitive.

## Catch Unclosed Parentheses, Bracketes, Braces and Quotes

Another snytax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. 

Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a menthod.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, then move the curser back between them and continue coding. Fortunately, most modern code editors generate the second half of the pair automatically.

## Catched Mixed Usage of Single and Double Quotes

JavaScript allows the use of both single `'` and double `"` quotes to declare a string. Deciding which one to use generally comes down to personal preference, with some exceptions.

Having two choices is great when a string has contractions or another piece of text that's in quotes. Just be careful that you don't close the string too early, which causes a syntax error.

Here are some examples of mixing quotes: 

```js
//These are correct
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying i was mis-quoted.'";
//This is incorrect:
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```
Of course, it's okey to use only one style of quotes. You can escape the quotes inside the string by using the backslash (`\`) escape character:
```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

## Catch Use of Assignemnt Operator Instead of Equality Operator

Branching programs, i.e. ones that do different thigns if certain conditions are met, rely on `if`, `else if`, and `else` statements in JavaScript.
The condition sometimes takes the form of testing whether a result is equal to a value.

This logic is spoken (in English, at least) as "if x equals y, then ..." which can literally translate into coe using the `=`, or assignement operator.
This leads to unexpected control flow in your program.

As covered previously, the assignment operator (`=`) in JavaScript assigns a value to a variable name. And the `==` and `===` operators check for equality (the triple `===` tests for strict equality, meaning both value and type are the same).

The code below assigns `x` to be 2, which evalutes as `true`. Almost every value on its own in JavaScript evaluates to `true`, except what are known as the `falsy` values: `false`, `0`, `""`(an empty string), `NaN`, `undefined` and `null`.

```js
let x = 1;
let y = 2;
if (x = y) {
    //this code blcok will run for any value of y (unless were originally set as a falsy)
} else {
    // this code blcok is what should run (but won't) in this example
};
```

## Catch Missing Open and Closin Parenthesis after a Function Call

When a function or method doesn't take any arguments, you may forget to include the (empty) opening and closing parentheses when calling it.

Often times the reuslt of a function call is saved in a variable for other use in your code. This error can be detected by logging variable values (or their types) to the console and seeing that one is set to a function reference, instead of the expected value the function returns.

The variables in the following example are different:

```js
function myFunction() {
    return "You rock!";
};
let varOne = myFunction;    // set to equal a function
let varTwo = myFunction();  // set to equal the string "You rock!"
```

## Catch Arguments Passed in the Wrong Order When Calling a Function

Continuing the discussion on calling functions, the next bug to watch out for is when a function#s arguments are supplied in the incorrect order.

If the arguments are different types, such as a function expecting an array and an integer, this will likely throw a runtime error.

If the arguments are the same type (all integers, for example), then the logic of the code won't make sense.

Make sure to supply all required arguments, in the proper order to avoid these issus.

```js
function raiseToPower(b,e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power); // 9
```
```js
let power = raiseToPower(base, power);
console.log(power); // 8
```

## Catch Off by One Errors When using Indexing

*Off by one errors* (sometimes called OBOE) crop up when you're tryping to target a specific index of a string or array (to slice or access a segment), or when looping over the indices of them.

JavaScript indexing starts at zero, not one, which means the last index is always one less than the length of the item. If you try to access an index equal to the length, the program may throw an "index out of range" reference error or print `undefined`.

When you use string or array methods that take index ranges as arguments, it helps to read the documentation and understand if they are inclusive (the item at the given index is part of what's returned) or not. Here are some examples of off by one errors:
```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i < len, i++) {
    loops one to many times at the end
    console.log(alphabet[i]);
}
```
## Use Caution When reinitializing Variables Inside a Loop

Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. 

A potential issue is when variables either should be reinitialized, and aren't or vice versa.

This is particulary dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

Printing variable values with each cycle of your loop by using `console.log()` can uncover buggy behavior related to resetting or failing to reset a variable.

The follwoing function is supposed to create a two-dimensional array with `m` rows and `n` columns of zeros. Unfortunately, it's not producing the expected output because the `row` variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like `[[0, 0],[0, 0],[0, 0]]`.

```js
function zeroArray(m,n) {
    // Creates a 2-D array with m rows and n columns of zeros
    let newArray = [];
    let row = [];
    for (let i = 0; i <m; i++) {
        //Adds the m-th row into new Array

        for (let j = 0; j < n; j++) {
            // Pushes n zeros into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3,2);
console.log(matrix);

// returns this: [ [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0 ] ]
```

we let the loop for the rowsrun inside the first loop, therefor it would be executed 3 times.
After it has been executed 3 times, it pushed the rows to the arrays.

To solve this, we move the loop outside of the 2. loop so it can run, define the rows, and then the next loop will be executed after to add the individual rows to it.
```js
function zeroArray(m,n) {
    let row = [];
    let newArray = [];
    for (let i = 0; i < n; i++) {row.push(0);};
    for (let j = 0; j < m; j++) {newArray.push(row);}
    return newArray;
}

let matrix = zeroArray(3,2);
console.log(matrix);
```

## Infinite Loops with a Valid Terminal Condition

To final topic is the dreaded infinite loop.

Loops are great tools when you need your program to run a code block a certain number of times or until a condition is met, but they need a terminal condition that ends the looping. 

Infinite loops are like to freeze or crash the browser, and cause general program execution mayhem, which no one wants.

There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the while loop inside `loopy()`. Do NOT call this function

```js
function loopy() {
    while(true) {
        console.log("Hello world!");
    }
}
```

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is eventually reached. 

One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition.

Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

### Example
The `myFunc()` function contains an infinite loop because the terminal condition `i != 4` will never evaluate to `false`(and break the looping) - `i` will increment by 2 each pass, and jumping right over 4 since `i` is odd to start. Fix the comparison operator in the terminal condition so the loop only runs for `i` less than or equal to 4.

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}

```