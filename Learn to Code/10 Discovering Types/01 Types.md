# Types

We've already seen and used a lot of different kinds of values. In programming lingo, these diffferent kind of values are called types.

One type we've already worked with is *string*. Strings are characters between quotes `" "`, like the value `"Cookies"`.

*Number* is another type we've already used. It represents numerical values like 42.

The type *boolean* contains only two values: the special avlues `true` and `false`.

What is a variable assignment?
- Storing a value inside a variable

## working with types

`+` is th ejoining or adding sign. When joining to variables, we can get different results depending on their types.

Join the values and take a look at the difference between using `+` with strings and with numbers.

```
console.log("10" + "10");
console.log(10 + 10);
```
```
1010
20
```

When joining number with strings, the numers will be automatically transformed into a string.

```
console.log("10" + 10);
-> 1010

Adding a number to a string also workes when we use a variable.

We can also join strings and booleans.

Adding a boolean to a string stores them both as strings

