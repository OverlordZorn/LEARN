# Introduction to the Intermediate Algorithm Scripting Challenges

The following challenges are part of FCC's Intermediate Algorithm Scripting Challenges.

These should prepare you to complete the final challenges for the JavaScript Algorithms And Data Structures Certification.

These challenges will allow you to test how much you ahve learned and which parts you may need to review again before starting the projects.

With that being said-

Have fun and rememer to use the Read Search Ask method if you get stuck.

## Sum All Numbers in a Range

We'll pass you an array of two numbers.

Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not alwas come first.

For example, `sumAll([4,1])` should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

```js
function sumAll(arr) {
    arr.sort((a,b) => a-b);

    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }
    return sum;
}
```
### Solutions
#### Solution 1 - Math.min/max + loop
```js
function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let temp = 0;
    for (let i = min; i <= max; i++) {
        temp += i;
    }
    return temp;
}
```

#### Solution 2 
```js
const sumAll = arr => {
    const startNum = arr[0];
    const endNum = arr[1];

    const numCount = Math.abs(startNum - endNum) + 1;

    return ((startNum + endNum) * numCount) / 2;
}
```

#### Solution 3 Recursive Solution
```js
function sumAll([first, last]) {
    const step = first - last < 0 ? 1 : -1;
    return first !== last
        ? first + sumAll([first + step, last])
        : first;
}
```

## DiffTwo Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.

In other words, return the symmetric difference of the two arrays.

**Note**
You can return the array with its elements in any order.

```js
function diffArray(arr1, arr2) {
    let workArr = arr1.concat(arr2);
    let output = [];
    let temp;

    while (workArr.length > 0) {
        temp = workArr.splice(0,1)[0];
        let index = workArr.findIndex(temp);
        if(index === -1) {
            output.push(temp);
        } else {
            workArr.splice(index,1);
        }
    }
    return output;
}
```
### Solutions
#### Solution 1
```js
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                // Pushing the elements unique to first to newArr
                newArr.push(first[i]);
            }
        }
    }
    return newArr;
}
```

#### Solution 2
```js
function diffArray (arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter( item => !arr1.includes(item) || !arr2.includes(item))
}
```

#### Solution 3
```js
function diffArray(arr1, arr2) {
    return [...diff(arr1,arr2), ...dif(arr2, arr1)];

    function diff(a,b) {
        return a.filter(item => b.indexOf(item) === -1);
    }
}
```

## Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.

Remove all elements from the initial array that are of the same value as these arguments.

**Note**
You have to use the `arguments` object.

```js
function destroyer(arrI, ...arrR) {
    return arrI.filter( item => !arrR.includes(item));
}
```

### Solutions
This problem is a bit tricky because you have to familiarize yourself with Arguments, as you will have to work with two or more but on the script you only see two.

Many people hardcode this program for three arguments. You will remove any number from the first argument that is the same as any other other arguments.
