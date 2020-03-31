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

### Hints

#### Hint 1
 Create a copy of the second array inside of the function. :This will esure that the original array is not mutated. This can be done by using the slice operation on the second array, and assign it to a variable.

#### Hint 2

Loop through all of the items in the first array. For each item in the first array splice it into the copied array in the index given as argument.

#### Hint 3

Increment the index after performing the splice.

### Solutions

#### Solution 1

```js
function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.splice();
    for (let i = 0; i < arr1.length; i++) {
        localArray.splice(n, 0, arr[i]);
        n++;
    }
    return localArray;
}
```
* Our goal is to take all of the elements from `arr1` and insert them into `arr2` starting with index position `n`. At the same time we must ensure that neither `arr` or `arr2` have been mutated.
* Using the `slice()` function we can create an exact replica of `arr2` and assign the result of the operation to a variable, `localArray`.
* Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the `splice()` function to insert the item into index of `localArray`.
* We increment the index `n` by one. This will esure that every item from the `arr1` is inserted into `localArray` in the proper index position.
* Finally, we return the `localArray` and end the function.

#### Solution 2

```js
function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}
```
* Since our goal is to return the new array without altering `arr1` or `arr2` we create a `localArr` and add all the items fro `arr2`using the `slice()` function.
* Since the `splice()` function will mutate (alter) arrays and can be used to add new elements we will use it to add the contents of `arr1` into `localArr`. `n` is the starting position where our content will be inserted. We won't be deleting any elements so the next argument is `0`. Then we add the entire contents of `arr1` using spread syntax `...`.
* `localArr` is returned and the function is complete.

## Falsy Bouncer

Remove all falsy values from an array.

Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

Hint: Try converting each value to a Boolean.

```js
function bouncer(arr) {
    return arr.filter(x => !x == false);
}
```

### Hints
#### Hint 1
Falsy is something which evaluates to FLASE. There are only six falsy values in JavaScript: ...
#### Hint 2
We need tomake sure we have all the falsy values to compare, we can know it, maybe with a function with all the falsy values...
#### Hint 3
Then we need to add a `filter()` with the falsy values function ...

### Solutions

#### Solution 1
```js
function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}
```
* We create a new empty array.
* We use a for cycle to iterate over all elements of the provided array (arr).
* We use the if statement to check if the current element is `truthy` or `falsy`.
* If the element is truthy, we push it to the new array (newArray). This result in the new array containing only tuthy elements.
* We return the new array.

#### Solution 2
```js
function bouncer(arr) {
    return arr.filter(Boolean);
}
```
* The `Array.prototype.filter` method expects a function that returns a `Boolean` value which takes a single argument and returns `true` for `truthy` values or `false` for falsy value. 
* Hence we pass the built-in `Boolean` function.

## Where do I belong

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise `getIndexToIns([20,3,5],19)` should return `2`because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

```js
function getIndexToins(arr, num) {
    function f1(a,b) {return a - b};
    function f2(a) {return a === num};
    arr.push(num);
    return arr.sort(f1).findIndex(f2);
}
```
### Hints
This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

#### Hint 1
The first thing to do is sort the array from lower to bigger, just to make the code easier.
This is where sort comes in, it needs a callback function so you have to create it.

#### Hint 2
Once the array is sorted, then just check for the first number that is bigger and return the index.

#### Hint 3
If there is no index for that number then you will have todeal with that case too.

### Solutions
#### Solution 1
```js
function getIndexToIns(arr,num) {
    arr.sort(function(a,b) {return a-b;});

    for (var a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }

    return arr.length;
}
```
* First I sort the array using `.sort(callbackFunction)` to sort it by lowest to hightest, from left to right.
* Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are compairing against, then we return the index as an integer.

#### Solution 2
```js
function getIndexToIns(arr,num) {
    // Find my place in this sorted array.
    var times = arr.length; // runs the for Loop once for each thint in the array
    var count = 0;
    for (var i = 0; i < times; i++) {
        if (num > arr[i]) {count++;}
    } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a osrted array
}
```
* I do not sort the array input array
* I run a for loop counting whenever the num input is bigger than an arr input number
* This number is equivalent to what num's position would be in a sorted array.

#### Solution 3
```js
function getIndexToIns(arr,num) {
   arr.sort(function(a,b){return a-b;});
   
   var i = 0;
   while (num > arr[i]) {
       i++;
   }
   return i;
}
```
* Sort existing array.
* Iterate through the array while checking if num is bigger.
* The loop will stop when num is'nt bigger than i and return the last element checked.

#### Solution 4
```js
function getIndexToIns(arr,num) {
   arr.push(num);
   arr.sort((a,b) => {return a-b;});
   return arr.indexOf(num); 
}
```
* First we add the number `num` to the array using `push()`which adds it as the last element of the array.
* Then we use `sort()` with the callback function `(a,b) => {return a-b}`to sort the number sin ascending order.
* Lastly we return the position or index of `num` in the array with the `indexOf()` function.

#### Solution 5
```js
function getIndexToIns(arr,num) {
   // sort and find right index
   var index = arr
        .sort((curr,next)=>{return current - next})
        .findIndex(curr => num <= curr);
    // retunrs proper answer
    return index === -1 ? arr.length : index;
}
```
* First sort the array in ascending order, this is currently done using array functions for minimal footprint.
* Once the array is sorted, we directly apply the `findIndex()` where we are going to compare every element in the array until we find where `num <= curr` meaning where the number we want to insert is less or equal to the current number in the iteration.
* Then we use ternary operations to check wheter we got an index returned or `-1`. We only get `-1` when the index was not found meaning when we get a false for all elements in the array, and for such case, it would mean that `num`should be inserted at the end of the list hence why we use `arr.length`.

#### Solution 6
```js
function getIndexToIns(arr,num) {
   return arr
        .concat(num)
        .sort((a,b) => a - b)
        indexOf(num); 
}
```
* We use method-chaining to invoke one method after another to solve the problem in a single line.
* First we merge `arr` and `num` by invoking the `arr.concat(num)` method.
* Then wie use `sort((a,b)=> a-b)`to sort the numbers in ascending order
* Lastly we return the position or index in the array with `indexOf(num)`

#### Solution 7
```js
function getIndexToIns(arr,num) {
   return arr.filter(val => num > val).length; 
}
```
* Similar to solution #2 but uses the filter method to achieve the same result

## Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, `["hello", "Hello"]`, should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments `["hello", "hey"]` should return false because the string "hello" does not contain a "y".

Lastly, `["Alien", "line"]`, should return true because all of the letters in "line" are present in "Alien".

```js
function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split("");
    let arr2 = arr[1].toLowerCase().Split("");
    
    let test = (cur) => {
        return 0 <= arr1.indexOf(cur);
    };

    return arr2.every(test);
}
```
* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array...

### Hints
#### Hint 1
If everything is lowercase it will be easier to compare

#### Hint 2
Our strings might be easier to work with if they were arrays of characters.

#### Hint 3
A loop might help. Use `indexOf()` to check if the letter of the second word is in the first.

### Solutions
#### Solution 1
```js
function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();

    for (var i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}
```
* First we make the two strings in the array lowercase. `test`will hold what we are looking for in `target`.
* Then we loop through our test characters and if any of them is not found we `return false`.
* If they are *all* found, the loop will finish without returning anything and we get to `return true`.

#### Solution 2
```js
function mutation(arr) {
    return arr[1]
        .toLowerCase()
        .splitz("")
        .every(function(letter) {
            return arr[0].toLowerCase().indexOf(letter) != -1;
        });
}
```
* Grab the second string, lowercase and turn it into an array; then make sure *every* one of its *letters* is part of the lowercased first strhing.

* `Every` will basically give you letter by letter to compare, which we do by using `indexOf()` on the first string. `indexOf` will give you -1 if the current `letter` is missing. We check that not to be the case, for if this happens even once `every` will be false.

#### Solution 3 - Recursive
```js
function mutation([target, test], i = 0) {
    target = target.toLowerCase();
    test = test.toLowerCase();
    return i >= test.length ? 
        true : !target.includes(test[i]) ? 
            false : mutation([target, test], i + 1);
}
```

## Chunky Monkey
Write a function that splits an array (first element) into groups the length of `size` (second argument) and returns them as a two-dimensional array.

```js

```