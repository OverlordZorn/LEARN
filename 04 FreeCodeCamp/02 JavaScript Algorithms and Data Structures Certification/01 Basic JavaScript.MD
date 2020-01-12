# Introduction To JavaScript

JavaScript is a high-level programming language that all modern web browsers support. It is also one of the core technologies of the web, along with HTML and CSS that you may have learned previously. This section will cover basic JavaScript programming concepts, which range from variables and arithmetic to objects and loops.

## Comment Your JavaScript Code

Comments are lines of code that JavaScript will intentionally ignore.
Comments are great way to leave notes to yourself and to other people who will later need to figure out what that code does.

There are two ways to write comments in JavaScript:

Using `//` will tell Java Script to ignore the remainder of the text on the current line
You can make a multi-line comment beginning with `/*` and ending with `*/`

```js
//this is an in-line comment.
/* this is a multi-
line comment */
```

*Best Practice* As you write code, you should regularly add comments to clarify the function of parts of your code. Good commenting can help communicate the intent of your code-both for others **and** for your future self.

## Declare JavaScript Variables

In computer science, data is anything that is meaningful to the computer.
Javascript provides seven different data types which are:

1. `undefined`
2. `null`
3. `boolean`
1. `string`
1. `symbol`
1. `number`
1. `object`

For example, computers distingush between numbers, such as the number `12`, and `strings`, such as `"12"`, `"dog"`, or `"123 cat"`, which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

**Variables** allow computers to store and manipulate data in a dynamic fashion. They do this by using a "label" to point to the data rather than using the data itself. Any of the seven data types may be stored in a variable.

`Variables` are similar to the x and y variables you use inmathematics, which means they're a simple name to represent the data we want to refer to. Computer `variables`differ from mathematical variables in that they can store differnt values at different times.

We tell JavaScript to create or **declare** a variable by putting the keyword `var` in front of it, like so:

```js
var ourName;
```
creates a `variable` called `ourName`. 

In JavaScript we end statements with semicolons. 
`Variable` names can be made up of numbers, letters, and `$` or `_`, but *may not contain spaces or start with a number*.

## Storing Values with the Assignment Operator

In JavaScript, you can store a value in a variable with the **assignment** operator.

`myVariable = 5;`

This assign the `number` value `5` to `myVariable`.

Assignment always goes from right to left. 

Everything to the right of the `=` operator is resolved before the value is assigned to the variable to the left of the operator.

```js
myVar = 5;
myNum = myVar;
```

This assigns 5 to myVar and then resolves myVar to 5 again and assigns it to myNum.

## Initializing Variables with the Assignment Operator

It is common to initialize a variable to an initial value in the same line as it is declared.

`var myVar = 0;`

This creates a new variable called `myVar`and assigns it an initial value of `0`.

## Undersatnding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of `undefined`.

If you do a mathematical operation on an `undefined`variable your result will be `NaN`which means "Not a Number". 

If you concatenate a string with an `undefined` variable, you will get a literal string of `"undefined"`.


## Understanding Case Sensitivity in Variables

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar`nor `myvar`. It is possible to have multiple distinct variables with the same name but differnt casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

Best Practice

Write variable names in JavaScript in camelCase. in camelCase, multi-word variables names have the frist word in lowercase and the firstletterof eachsubsequent word is capitalized.

Examples
```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsLong;
```

## Add Two Numbers with JavaScript

`Number`is a data type in JavaScript which represents numeric data.

Now let's try to add two numbers using JavaScript.

JavaScript uses the `+` symbol as an additional operator when placed between two numbers.

```js
myVar = 5 + 10; // assigned 15
```

## Subtract One Number from Another with JavaScript

We can also subtract one number from another.

JavaScript uses the `-` symbol for subtraction

```js
myVar = 12 - 6; // assigned 6
```

## Multiply Two Numbers with JavaScript

We can also multiply one number by another.

JavaScript uses the `*` operator for multiplication of two numbers.

```js
myVar = 13 * 13; // assigend 169
```

## Devide One Number by Another with Java Script

We can also divide one number by another.

JavaScript uses the `/` symbol for divison.

```js
myVar = 16 / 2; // assigend 8
```

## Increment a Number with JavaScript

You can easily increment or add one to a variable with the `++` operator.

`i++;`

is the equal of

`i = i + 1;``

*Note*
The entire lines becomes `i++;`, eliminating the need for the equal sign.

Learn More about Arithmetic Operators: 
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_()

## Decrement a Nubmer with JavaScript

You can easily decrement or decrease a variable by one with the `--` operator.

`i--;`

is the equivalent of 

`i = i - 1;`

Note
The entire line becomes `i--;`, eliminating then need for the equal sign.

## Create Decimal Numbers with Java Script

We can store decimal numbers in variables too. 
Decimal numbers are sometimes referred as **floating point** numbers or **floats**.

Note
Not all real numbers can accurately be represented in **floating point**. This can lead to rounding errors.
Details here: https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems

## Multiply Two Decimals with JS

In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.

## Divide One Decimal by Another with JS

...

## Finding a Remainder in JavaScript

The remainder operator `%`gives the remainder of the division of two numbers.

````
5 % 2 = 1 because
Math.floor( 5 / 2 ) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (remainder)
````

*Usage*
In mathematics, anumber can be checked to be even or odd by checking the remainder of the division of the number by `2`.

```
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

*Note*
The remainder operator is sometimes incorrectly referred to as the "modulus" operator. It is very similar to modulus, but does not work properly with negative numbers.

## Compound Assignemnt with Augmented Addition

In programming, it is common to use assignements to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:

`myVar = myVar + 5;`

to add `5` to `myVar`. Since the is such a common pattern, there are operators, which do both a mathematical operation and assignemnt in one step.

One such operator is the `+=`operator.

```js
var myVar = 1;
myvar += 5;
console.log(myVar); //returns 6
```

## Compound Assignment with Augmented Subtraction

Like the `+=` operator, `-=`subtracts a number from a variable.

`myVar = myVar - 5;`

will subtract 5 from `myVar`. This can be rewritten as:

`myVar -= 5;`

## Compound Assignment with Augmented Multiplication

The `*=` operator multiplies a variable by a number.

`myVar = myVar * 5;`

will multiply `myVar` by `5`. This can be rewritten as: 

`myVar *= 5;`

## Compound Assignment with Augmented Division

The `/=` operator divides a variable by a number.

`myVar = myVar / 5;`

will divide `myVar` by `5`. This can be rewritten as: 

`myVar /= 5;`

## Declare String Variables

Previously we have used the code 

`var myName = "your name";`

`"your name"` is called a string literal. It is a string because it is a series of zero or more characers enclosed in single or double quotes.

## Escaping Literal Quotes in Strings

When you are defining a string you must start and end with a single or a double quote. What happens when you need a literal quote: `"`or `'`inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.

`var sampleStr = "Alan said \"peter is learning JavaScript\".";`

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

`Alan said, "Peter is learning JavaScript".`

## Quoting Strings with Single Quotes

String values in JavaScript may be written with single or double quotes, as slong as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

```js
doubleQuoteStr = "This is a string";
singleQuoteStr = 'This is also a string';
```

The reason why you might want to use one type of quote over the other is if you want to use both in a string. This might happen if you want to save a conversation in a string and have the conversation in quotes. Another use for it would be saving an `<a>` tag with various attributes in quotes, all within a string.

```js
conversation = 'Finn exlaimes to Jake, "Algebraic!"';
```

However, this becomes a problem if you need to use the outermost quotes within it. Remmeber, a string has the same kind of quote as the beginning and end. But if you have that same quote somewhere in the middle, the string will stop early and throw an error.

```js
goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
badStr = 'Finn responds "Let's go!"'; // Throws an error
```

in the goodStr above, you can use both quotes safely by using the \ backslash as an escape character.

Note
The backslash \ should not be confused with hte forward slash /. They do not do the same thing.

## Escape Sequences in Strings

Quotes are not the only characters that can be escaped inside a string.

There are two reasons to use escaping characters:

1. To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

We learned this in the previous challenge.

Code        Output
`\'`        single quote
`\"`        double quote
`\\`        backslash
`\n`        newline
`\r`        carriage return
`\t`        tab
`\b`        word boundary
`\f`        form feed

Note that the backslash itself must be escaped in order to display as a backslash.

```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

## Concatenating Strings with Plus Operator

In JavaScript, when the `+` Operator is used with a `string` value, it is called the *concatenation operatior*. You can build a new string out of other strings by concatenating them together.

```js
'My name is Alan,' + ' I concatenate.'
```
Note Watch out for Spaces, Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

```js
var myStr = "This is the start. " + "This is the end.";
```

## Concatenating Strings with the Plus Equals Operator

We can also use the `+=` operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break along string over several lines.

Note
Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

## Constructing Strings with Variables

Sometimes you will need to build a string, Mad Libs style. B using the concatenation operator (+), you can insert one or more variables into a string you're building.

## Appending Variables to Strings

Just as we can build a string over multiple lines out of string **literals**, we can also append variables to a string using the + equals (+=) operator.

## Find the Length of a String

You can find the length of a `String` value by writing `.length` after the string variable or string literal.

`"Alan Peter".length; // 10`

For example, if we created a variable `var firstName = "Charles"`, we could find out how lon the strin "Charles" is by using the `firstName.length` property.

## Use Bracket Notation to Find the First Character in a String

Bracket notation is a way to get a character at a specific `index` within a string.

Most modern programming languages, like JavaScript, dont start counting at 1 like humans do. They start at 0. This reffered to as Zero-based indexing.

For example, the character at index 0 in  the world "chalres" is a "C". So if `var firstName = "Chalres"`, you can get the value of the first letter of the string by using `firstName[0]`.

## Understand String Immutability

In JavaScript, `String` values are **immutable**, which means that they cannot be altered once created.

For example, the following code:
```js
var myStr = "Bob";
myStr[0] = "J";
```
cannot change the value of myStr to "Job", because the contents of `myStr` cannot be altered. Note that this does not mean that myStr cannot be changed, just that the individual characters of a string **literal** cannot be changed. The only way to change `mrStr` would be to assign it with a new string, like this:

```js
var myStr = "Bob";
myStr = "Job";
```


## Use Bracket Notation to Find the Nth Character in a String

You can also use bracket notation to get the caracter at other positions within a string.

Remember that computers start counting at `0`, so the first Character is actually the zeroth character.

## Use Bracket Notation to Find the Last Character in a String

In order to get the last letter of a string, you can subtract one from the stringt's length.

For example, if `var firstName = "Charles"`, you can get the value of the alst letter of the string by using `firstName[firstName.length -1]`.

## Use Bracket Notation to Find the Nth-to-last Character in a String

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `var firstName = "Charles"` by using `firstName[firstName.length -3];`

## Word Blanks

We will now use our knowledge of strings to build a "MadLibs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "MadLibs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choise in a way that the completed sentence makes sense.

Consider this sentence - "It was really \___, and we \___ ourselves \___".

This sentence has three missing pieces - an adjective, a verb and an adverb, and we can add words of our choice to ceomplete it. We can then assign the completed sentence to a variable as follows:

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

## Store Multiple Values in one Variable using JavaScript Arrays

With JavaScript `array` variables, we can store several pieceso fdata in one place.

You start an array declaration iwth an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

`var sandwitch = ["peanut butter", "jelly", "bread"]`

## Nest one Array within Another Array

You can also nest arrays within other arrays, like this:

`[["Bulls", 23], ["White Sox", 45]]`

This is also calleda **multi-dimensional array**.

## Access Array Data with Indexes

We can access the data inside arrays using indexes.

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use **zero-based** indexing, so the first element in an array has an indext of `0`.

Example
```js
var array = [50,60,70];
array[0]; // equals 50
var data = array[1]; //equals 60
```

*Note*
There shouldn't be any spaces between the array nameand the square brackets, like `array [5]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

## Modify Array Data With Indexes

Unlike strings, the entries of arrays are mutable and can be changed freely.

Example
```js
var ourArray = [50, 40, 30];
ourArray[0] = 15; // equals [15, 40, 30]
```

Note
There shouldn't be any spaces between the array name and the square brackets. Although JavaScript is able to process this correctly, this may confuse other pgroammers reading your code.

## Access Multi-Dimensional Arrays with Indexes

One way to think of a **multi-dimensional** array, is as an array of arrays. When you use brackets to access your array, the first set of brackets reers to the entriy in the outer most (the first level array), and each additional pair of brackets refers to the next level of entries inside

Example
```js
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]      // equals [[10,11,12], 13, 14]
arr[3][0]   // equals [10,11,12]
arr[3][0][1]  // equals 11
```

Note

There shouldnt be any spaces between the array name and the square brackets, like `array [0][0]`.
Although JS is able to process this correctly, this may confuse other programmers reading your code.

## Manipulate Arrays with push()

An easy way to append data to the end of an array is via the `push()`function.

`.push()`takes one ore more **parameters** and "pushes" them onto the end of the array.

```js
var arr = [1,2,3];
arr.push(4);
//arr is now [1,2,3,4]
```

## Manipulate Arrays with pop()

Another way to change the data in an array is with the `.pop()` function.

`.pop()` is used to "pop" a value off the end of an array. We can store this "popped off" value by assinging it to a variable. in Other words, `,pop()`removes the last element from an array and returns tat element.

Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```js
var threeArr = [1,4,6];
var oneDown = threeArr.pop();
console.log(oneDown); // returns 6
console.log(threeArr); // returns [1,4]
```

## Manipulate Arrays with shift()

`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works jsut like `.pop()`, except it removes the first element instead of the last.

## Manipulate Arrays with unshift()

Not only can you `shift` elements off of the beginning of an array, you can also `unshift`elements to the beginning of an array. ie. add elements in front of the array.

`.unshift()`works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()`adds the element at the beginnign of the array.

## Shopping List

Create a shopping list in the variable `myList`. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The secound element should be a number representing the quantitiy i.e. `["Chocolate Bar"]

There should be at least 5 sub-arrays in the list.

## Reusable JavaScript with Functions

In JavaScript, we can divide up our code into reusable parts called *functions*.

Here's an example of a function:

```js
function functionName() {
    console.log("Hello World!");
}
```

You cann call or **invoke** this function by using its name followed by parentheses, like this: `functionName();`
Each time the function is called it will print out the message `"Hello World!"` on the dev console. All of the code between the curly braces will be executed every time the function is called.


## Passing Values to Functions with Arguments

**Parameters** are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one ore more parameters. The actual values that are input (or "passed") into a function when it is called are known as **arguments**.

Here is a function with two parameters, `param1`, and `param2`:
```js
function testFun(param1, param2) {
    console.log(param1, param2);
}
```
Then we can call `testFun`: `testFun("Hello", "World");`We have passed two arguments, `"Hello"` and `"World"`. Inside the function `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `testFun()` again with different arguments and the parameters would take on the value of the new arguments.

## Global Scope and Functions

In JavaScript, **scope** refers to the visibility of variables. 
Variables which are defined outside of a function block have *Global scope*. 

This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the `var`keyword are automatically reated in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.

## Local Scope and Functions

Variables which are declared within a function, as well as the function parameters have *local* scope. That means, they are only visible within that function.

Here is a function `myTest` with a local variable called `loc`.
```js
function myTest() {
    var loc = "foo";
    consol.log(loc);
}
mytest(); // logs "foo"
console.log(loc); // loc is not defined
```
`loc` is not defined outside of the function.

## Global vs. Local Scope in Functions

It is possible to have both *local* and *global* variables with the same name. When you do this, the `local` variable takes precedence over the `global` variable.

In this example
```js
var someVar = "Hat";

function myFun() {
    var someVar = "Head";
    return someVar;
}
```
The function `myFun`will return `"Head"` because the `local`version of the variable is present.

## Return a Value from a Function with Return

We can pass values into a function with *arguments*. You can use a `return` statement to send a value back out of a function.

Example
```js
function plusThree(num) {
    return num + 3;
}
var answer = plusThree(5); // 8
```

`plusThree` takes an *argument* for `num` and returns a value equal to `num + 3`.

## Understanding Undefined Value returned from a Function

A function can include the `return` statement but it does not have to. In the case that the funcction doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

Example
```js
var sum = 0;
function addSum(num) {
    sum = sum + num;
}
addSum(3); // sum will be modified but returned value is undefined
```

## Assignement with a Returned Value

If you'll recall from our discussion of Storing Values with the Assignment Operator, 

**everything to the right of the equal sign is resolved before the value is assigned.**

This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function `sum()`which adds two numbers together, then: 

`ourSum = sum(5, 12);`

will call `sum` function, which returns a value of `17` and assigns it to `ourSum` variable.

## Stand in Line

In Computer Science a *queue* is an abstract *Data Structure* where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function `nextInLine` which takes an array (`arr`) and a number (`item`) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The `nextInLine` function should then return the element that was removed.

```js
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
```

## Understanding Boolean Values

Another data type is the *Boolean*. `Booleans` may only be one of two values: `true` or `false`. They are basically little on-off switches, where `true` is "on" and `false` is "off". These two states are mutually exclusive.

**Note**
`Boolean` values are never written with quotes. the `strings` `"true"`and `"false"`are not `Boolean` and have no special meaning in JavaScript.

## Use Conditional Logic with IF Statements

`If` Statements are used to make decisions in code. The keyword `if` tells JavaScript to execute the code in the curly braces under certain conditions, defined in the parentheses. These conditions are known as `Boolean` conditions and they may only be `true` or `false`.

When the condition evaluates to `true`, the program executes the statement inside the curly braces. When the Boolean condition evaluates to `false`, the statement inside the curly braces will not execute.

**Pseudocode**
```
if (condition is true) {
    statement is executed
}
```

**Example**
```js
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}
test(true);     // returns "It was true"
test(false);    // returns "It was false"
```

When `test` is called with a value of `true`, the `if` statement evaluates `myCondition` to see if it is `true`or not. Since it is `true`, the function returns `"It was true"`. When we  call `test`with a value of `false`,`myCondition` is *not* `true`and the statement in the curly braces is not executed and the function returns `"It was false"`.

