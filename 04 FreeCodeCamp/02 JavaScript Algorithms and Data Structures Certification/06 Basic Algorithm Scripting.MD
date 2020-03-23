# Basic Alogrithm Scripting

## Introduction

A computer algorithm is a sequence of steps taht is followed to achieve a particular outcome.

To write an algorithm, you must first understand a problem, and then solve it with coding.

To make solving problems easier, it can be helpful to break them down into many chunks.

Then, each chunk can be solved one by one.

For example, if you are building a calculator, don't try to solve the problem as a whole.

First, consider how to get inputs.

Then, determine each arithmetic operation one by one.

Finally, display the results.

In this section we will learn to solve basic algorithm problems using JavaScript.

This will help you improve your problem solving skills and prepare you to later solve more complex problems

Hint

If you get stuck, try using `console.log()` to log variable values to the console. This will help to debug problems.

## Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times `9/5`plus `32`.

You are given a variable `celsius` representing a temperature in Celsius. Use the variable `fahrenheit` already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

```js
let cToF = c => (c*9/5) + 32;
```

## Reverse a String

Reverse the provided string.

You man need to turn the string into an array before you can reverse it.

Your result must be a string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

### Solution 1

```JS
function reverseString(sr) {
    let rstr = "";
    for (let i = str.length -1; i >= 0; i--) {
        rstr += str[i];
    }
    return rstr;
}
```

### Solution 2

```js
function reverseStr(str) {
    return str.split("").reverse().join("");
}
// OR
function reverseStr(str) {
    return str
    .split("")
    .reverse()
    .join("");
}
```

**Code Explanation**

* Our goal is to take the input `str` and return it in reverse. Our first step is to split the string by characters using `split("")`. Notice that we dont leave anything inbetween the single quotes, this tells the function to split the string by each caharacter.

* Using the `split()` function will turn our string into an array of characters, keep that in mind as we move forward.

* Next we *chain* the `reverse()` function, which takes our array of characters and reverses them.

* Finally, we chain `join()` to put our characters back together into a string. Notice once again taht we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each cahracter.

## Factorialize a Number

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Facotrials are often represented with the shorthand notation `n!`

For example `5! =  1 * 2 * 3 * 4 * 5 = 120`

Only integers greater than or equal to zero will be supplied to the function.

```JS
function factorialize(num) {
    for (let sum = 1; num>0; num--) {sum*=num;}
    return sum;
}
```

### Solutions with focus on Recursion

**Understanding recursion**

Recursion refers to a function repeating (calling) itself. In this case we are basically returning the given number (i.e. 5), multiplied by the function itself but this time the value passed to the num parameter is `num-1` (which initially translates to 4). The very function is goin to run inside itself.

**Understanding the flow**

The first returned value can be visualized better if you think about those parenthesis operations you did in secondary school where you do the math inside every parenthesis from inside out, bracket and square bracket until you get a final result (a total). This time it's the same thing, look at the program flow:

**During the first execution of the function:**

Num = 5

is 5 equal to 1 or 0? No -> Okey, lets continue

**returns**

(5_(secound execution: 4_(third execution: 3_(2 forth execution: 5_fifth execution: 1))))

What it returns can be viewed as (5*(4*(3*(*2(*1)))))


#### Possible Solution 2

```js
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num-1);
}
```
Notice at the frist line we have aterminal condition, ie. a condition to check the end of the recursion.

#### Possible Solution 3  - Tail Recursion

```js
function(num, factorial = 1) {
    if (num == 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}
```
**Code Explaination**
* In this solution, we use **Tail Recursion** to optimize the memory use.

* In traditional head recursion, the typical model is that you perform your recursive calls first, and then you take the return value of the reursive call and calculate the result. In this manner, you don't get the result of your calculation until you have returned from every recursive call.

* In tail recursion, you perform your calculations first, and then you execute the recursive call, passing the results on your currrent step to the next recursive step. This results in the last statement being in the form of `(return (recursive-function params)).

* In this solution, with each evaluation of the recursive call, the factorial is updated. This is different from the head-recursive solution where all evaluation calculations are stored on the stack until the base case is reached.

#### Possible Solution 4
```js
function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
        new Array(num)
            .fill(undefined)
            .reduce(product, val, index) =>product * (index + 1), 1);
    );
}
```
**Code Explaination**
* In this solution we used `reduce()` function to find the factorial value of the number.

* We ahve created an array which has length `num`. And we filled all elements of the array as `undefined`. In this case, wehave to do this because empty arrays couldn't  be reducible. You can fill the array as your wish by the way. This depends on your engineering sight completely.
* In `reduce()` function's accumulator is called `product`, this is also our final value.
* We're setting product's initual value to 1 because if it was zero products gets zero always.
* Also the factorial value can't calculate for negative numbers, first of all, we're testing this.

**Array.reduce()**
```js
const array1 = [1,2,3,4];
const reducer = accumulator, currentValue => accumulator + currentValue;
```

```
arr.reduce(callback[, initialValue])
```
`callback`
Function, which will be executed on each element in the array (except for the frist, if no `initialValue`

the callback(in this case *reducer*) function takes 4 arguments:
1. Accumulator (acc) - accumulates callback's return values.
2. Current Value (cur) - the current element being processed in the array.
3. Current Index (idx) - optional - Starts from 0 unless provided.
4. Source Array (src) - optional - The array reduce() was called upon.

Your reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.


## Find the Longest Word in a String

Return the length of the longest word in the provided sentence.
Your response should be a number.

```js
findLongestWordLength(str) {
    let max = 0, arr = str.split(" ");
    for (let i in arr) {
        if (arr[i].length > max) {
            max = arr[i].length;
        }
    }
    return max;
};
console.log(findLongestWordLength(teststr);
let teststr = "The quick brown fox jumped over the lazy dog.";
```

### Solutions

#### Reduce()
```js
fuction findLongestWordLength(s) {
    return s.split(' ')
            .reduce(function(x,y) {
                return Math.max(x, y.length)
            }, 0);
}
```

#### map()
```js
function findLongestWordLength(s) {
    return Math.max(...str.split(" ").map(word => word.length));
}
```
**Code Explanation**
We provide `Math.max` with the length of each word as argument, and it will simply return the highest of all.

Let's analyze everything inside the `Math.max` parentheses to understand how we do that.

`str.split(" ")` splits the string itno an array, taking spaces as separators. It returns this array: 
`[“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].`

Then, we will make antoher array, madef rom the length of each elements of the `str.split(" ")` array with `map()`.

str.split(" ").map(word => word.length) returns [3,5,5,3,6,4,3,4,3]

Finally, we pass the array as arugment for the Math.ma function with the spread operator `...`.

#### Using Recursion
```js
function findLongestWordLength(str) {
 
    str = str.split(" ");


    if (str.length == 1) {
        return.str[0].length;
    }

    if (str[0].length >= str[1].length) {
        str.splice(1,1);
        return findLongestWordLength(str.join(" "));
    }

 
    if (str[0].length <= str[1].length) {
        return findLongestWordLength(str.slice(1, str.length).join(" "));
    }

}
```
The first line splits the string into indivdual words. Then we check if `str` only has 1 element left then that is the lognest element and we return it. If the first element's length is greater than the second element's (or equal), we remove the second element and recursively call the function `findLongestWord` However, if the second element's length is greater than thefirst element's start

## Return Larest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array.For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an arry with a simple for loop, and access each member with array syntax `arr[i]`.

```js
function largestOfFour(arr) {
    let maxarr = [];
    for (let i = 0; i <arr.length; i++) {
        maxarr.push(Math.max(...arr[i]));
    }
    return maxarr;
}
largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]);
```

### Solutions
#### Procedural Approach

```js
function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i][0];
        for (let j = 0; j < arr[i].length; j++){
            if (max < arr[i][j]) {max = arr[i][j];}
        }
        result[i] = max;
    }
    return result;
}
```

#### Declarative Approach
```js
function largestOfFour(arr) {
    return arr.map(function(group) {
        return group.reduce(function(prev, current){
            return current > prev ? current : prev;
         });
    });
};
```

* we map all items within the main array to a new array using `Array.prototype.map()` and return this array as the final result

* within each inner array, we reduce its contents down to a single value using `Array.prototype.reduce()`

* The callback function passed to the reduce method takes the previous value and the current value and compares the two values

* If the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or return it to the map method callback if it's the last item

#### Declarative Approach
```js
function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
};
```
TLDR We builda special callback function (using the Function.bind method), that works just like `Math.max` but also has `Function.prototype.apply`'s ability to take arrays as its arguments.

* We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.

* Now the need a callback function to find the max of each inner array provided by the map.

So we want to create a function that does the work of `Math.max` and accepts input as an array (which it doesn't by default).

In other words, it would be really nice and simple if this worked by itself:

`Math.max([9, 43, 20, 6]); // resulting 43`

Alas, it doesn't.

* To do the work of accepting arguments in the shape of an array, there is this `Function.prototype.apply` method, but it complicates things a bit by *invoking*  the context function.

i.e. `Math.max.apply(null, [9, 43, 20, 6]);` would invoke something like a `Max.max` method.
What we're looking for ... almost.

Here we're passing `null` as the *context* of the `Function.prototype.apply` method as `Math.max` doesn't need any context.

* Since `arr.map` expects a acallback function, not just an expression, ewcreate a function out of the previous expression by using the `Function.bind` method.

* Since, `Function.prototype.apply` is a static *method* of the same `Function` *object*, we can call `Function.prototype.blind` on `Function.prototype.apply` i.e. `Function.prototype.apply.bind`.

* Now we pass the *context* for the `Function.Prototype.apply.bind` call (in this case we want `Math.max` so we can gain its functionality).

* Since the embedding `Function.prototype.apply` method will also require a context as it's 1st argument, we need to pass it a bogus *context*.

    * so, we pass `null` as the 2nd param to `Function.prototype.apply.bind` which gives a *context* to the `Math.max` method call.

    * Since, `Math.max` is independent of any *context*, hence, it ignores the bogus *context* given by `Function.prototype.apply` method call.

    * Thus, our `Function.prototype.apply.bind(Math.max, null)` makes a new function accepting the `arr.map` values i.e. the inner arrays.

## Confirm The Ending

Check if a string (first argument, `str`)  ends with the given target string (secoung argument, `target`).

This challenge *can* be solved with the `.endsWith()` method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring emthods instead.

```js
function confirmEnding(str, traget) {
    return str.slice(-target.length) === target;
}
```

### Solution - Declarative approach
code as my solution

### Solution - Regular Expression
```js
let re = new RegExp(target + "$", "i");

return re.test(str);
```
* We need to make a pattern from the `target` variable that exists at the end of the string `str`.
* Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object `new RegExp(pattern [, flags])`, so we start with: `new RegExp(target)`. 
* Then we have to check at the end of the string, so we concatenate to the `target` variable the `$` character to match the end: `new RegExp(target + "$")`.
* We use the flag `i` ignore the case of pattern and we have our completed RegExp: `new RegExp(target + "$", "i")`, or we can ommit the flag entirely.
* Finally, we are using our regular expression with the `test` method to the given string, to check if the string ends with the pattern and return true or false accordingly.

## Repeat a string Repeat a String
Repeat a given string `str` (first argument) for `num` times (secound argument).
Return an empty string if `num` is not a positive number.

```js
function repeatStringNumTimes(str, num) {
    let x = "";
    while (num>0) {x += str; num--;}
    return x;
}
```

### Solution Recursive

```js
function repeatStringNumTimes(str, num) {
    if (num<1) {return "";}
    else if (num === 1) {return str;}
    else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}
```

### Declarative approach
* It is similar to the third solution, except it uses the ternary operator form of the `if` statement.
```js
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num -1) : "";
}
```

## Truncate a String

Truncate a string (frist argument) if it is longer than the given maximum string length (secound argument).

Return the truncated string with a `...` ending.

```js
function truncateString(str, num) {
    return str.length <= num ? str : str.slice(0, num) + "...";
}
```

## Finders Keepers

Create a function that looks through an array (frist argument) 
and returns the frist element in the array that passes a truth test (secound argument).
If no element passes the test, return undefined.

```js
function findElement(arr, func) {
    for (let i in arr) {
      if (func(arr[i])) {
          return arr[i]
          };
    }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

### Solutions Array.prototype.find()
```js
function findElement(arr, func) {
    return arr.find(func);
}
```
#### Array.find()
The `find()` method returns the value of the first element in the array that satisfies the provided testing function. Otherwiese `undefined` is returned.

#### Array.map()

```js
function findElement(arr, func) {}
return arr[arr.map(func).indexOf(true)];}
```
1. Look through the array given in the first parameter "arr" usnig the .map() method.
2. Use the function in the 2. parameter as the callback function in arr.map(
3. Acquire the index of the first number that meets the condition in the function.
4. Use that index to display the frist avialbalbe number that meets the condition.

## Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

```js
function booWho(bool) {
    return bool === true || bool === false ? true : false;
}
```

#### typeof operator

```js
function booWho(bool) {
    return typeof bool === "boolean";
}
```
* Uses the operator `typeof` to check if the variable is a boolean. If it is, it will return `true`, otherwise, if it is any other type it will return `false`.
* `typeof value`; returns the type of the value as a string
    * "undefined" / "object" / "boolean" / "number" / "bigint" / "string" / ...

## Title Case a Sentence

Return the provided string wtih the first letter of each word capitalized. 
Make sure the rest of the words is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

### Hints

* You should start by splitting the string into an array of words.
* Split the sentence.

* You should maek the word lowercase before making the first letter uppercase.
* Use replace method on each word to capitalize the first letter of each word.

* You will need to create a new string with pieces of the previous one and at the end merge everything into a single string agian.
* in replace method, give first argument as the position of the first letter using charAt. For second argument write a function to return the capitalized letter as the replacement.

```js
function titleCase(str) {
    let f1 = word => {return word[0].toUpperCase() + Word.slice(1);}

    return str.toLowercase().split(" ").map(f1).join(" ");
}
```

## Slice and Splice

You are given two arrays and an index.

Use the array methods `slice` and `splice` to copy each element of the first array into the second array, in order.

Begin inserting elements at index `n` of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

