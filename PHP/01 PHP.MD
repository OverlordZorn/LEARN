# PHP

## Introduction

heya! In this course, we'll master *PHP*, a programming language that's used by millions of websites.

Let's hit the ground running and check out what this little PHP script does.

```PHP
<?php
    echo "Welchome, Friend!";
```
Ah! IN this capter, we'lL find out what we just did here.

### Additon by Jan
> Jan:  
>> You dont need fucking clsoing tags .. if it is not a template

## Capabilities

PHP can do tons of things, making it a great choise for almost any website.

What might these things include?
* We can build dynamic webpages with it
* It can talk to databases
* It can take user input from forms

That's why even big companies like *Facebook* and *Tesla* use PHP.

## Tags

PHP programs, or scripts as they're called, start with a *opening tag* and with an *closing tag*.

```PHP
<?php
    echo "Welchome, Friend!";
```
These tags form the beginning and the end of every script.


## Echo-Echo-Echo

Do you remember the *special word* we used to display our message?

The `echo` keyword displays, or **prints**, the plain text we put in the *quotation marks* after it.

## Semicolons

also, there's aspecial symbol at the end of every line.

What kind of symbol was that again?

`;`

The *semicolon* tells the server that it can move to the next line.

## Numbers

Apart from plain text, however, PHP can also handle *numbers* and do math with them.

```PHP
<?php
    echo 2 * 4;
```
Psst: Numbers have no quotation marks around them!

The `*` sign is an *operator* that multiplies two numbers.
The `+` sign is an *operator* that will add two numbers.

## Variables

To create some more complex scripts, we need a way to remember information. so-called *variables* help us do just that.
```PHP
<?php
    $name = "Slim Shady";
    echo $name;

```
Variables start with a `$`sign and have a name.  
We can pass them information using the `=` sign.

## Comments

Comments are lines that can help us understand a script. We introduce them with two slashes.

```PHP
<?php
// Create a variable and display its content:

```

When a line starts with `//`, it's ignored by the server.

## A server-side language

Now, PHP is a so called *server-side language*, which makes it different from languages like JavaScript.
Why might that be?

* Any PHP script needs to run on a server
* Only the results of a script are displayed in the browser
* ~~Any PHP script can run in a browser~~

PHP scripts run on a server, which is the computer that sotres them. Only the results are delivered to the browser.

## PHP und HTML

When we combine PHP with *HTML*, we can create dynamic webpages.

```HTML
<html>
    <body>
    <?php
        echo "Hi, I'm written in PHP";
        ?>
    </body>
</html>
```

When we open this webpage, the server processes the script and sends only the *output* to the browser.

## PHP files

If we include a PHP script in an HTML file, we need to save it with a `.php` extension.

Why mgiht that be?
* The extension tells the server that it needs to process the file
* ~~Browsers can't display files with a .html extension.~~
* ~~servers can't store files with a .html extension~~

The .php extension tells the server that there's PHP code in the file that it needs to process.

## Quiz

What's true about PHP?
* We need a server to run it
* We can build dynamic webpages with it
PHP can make webpages dynamic. But as a *server-side language*, it's quite differnt from JavaScript.

Opening Tag?
`<?php` with `?>` as the closing tag.

Variables need a `$` to identify them.

# Variables and Types

## Variables
Variables are containers that can store information, so called *values*.
```PHP
<?php
    $name = "Slim Shady";

```
## Strings

`"Slim Shady"` is a so called *string, a sequence of characters wrapped in *single or double quotes*.
```PHP
<?php
$first = 'Slim ';
$secound = "Shady";
echo $first, $secound;

```
It doesn't matter if we use single or double quotes, as long as we want them to be part of the string.

## Combining Strings
We can do lots of fun things with strings. For example, we can add them together.

```PHP
<?php
$intro = "Hi, my name is ";
$name = "Slim Shady";
echo $intro. $name;

```
The `.` operator combines the values of two or more strings.

## Integers

Let's talk numbers. An *integer* is another data type that can represent whole numbers.
```PHP
<?php
 $number = 720;
 echo $number;

```
We've stored an *integer*, which can be positive or negative. It also doenst need any quote-signs.

## Floats

a Float, or floating-point number, is a data type for numbers with a *decimal point*.

```PHP
<?php
$number = 5.28;
echo $number;

```

## Operators

We can use *operators* to do math with numbers.
```PHP
<?php
$number1 = 49;
$number2 = 7;
echo $number1 + $number2;

```
The `-`, `*` and the `/` signs also work as well.
The `+` sign adds the numbers together just like a regular calculator.

## Shortcuts

If we want to increase the value of a variable by, say, `10`, we can use a *shortcut*.
```PHP
<?php
$number = 16;
echo $number += 10;
```
`+=` , `-=`, `*=` and `/=` give the result of the operation back to the variable.

## Boolean

A *boolean* is a data type that cn only be `true` or `false`.
```PHP
<?php
$bool = true;
echo $bool;
```

```
1
```
See that? When we use `echo` with a `true`boolean, `1` is printed. If the boolean were `false`, `0` would be printed.

## Constants
Finally, *constants* are almost like variable, execpt that their values are, well, constant.
```PHP
<?php
define ("PI", 3,14114926535898);
echo PI;

```
We don't need the `$` sign with constants and usually write their names in *uppercase letters*.

## Quiz

Variables are containers that can store data. They start with a $ sign and have names.

# Conditional Statements

## Conditions
We can use so called *conditional statements* to run a segment of  a script onyl if a certain condition is met.

```PHP
<?php
if (true) {
    echo "Hi there!";
}

```
The code in the braces of an *if statement* only runs if its condition hat the boolean value of `true`.

## Comparison Operators

That's why *boolean values are so much more useful than they seem to be. For example, they're the result of *comparisons.
```PHP
<?php
    $hour = 9;
    if ($hour < 12){
        echo "hello there!";
    }

```
We can use `>` and `<` to check if a value is **greater** or **less** than another.

## Equality
We can also check wheter a value or variable is *equal* or *not equal* to something.

```PHP
<?php
    $hour == 12;
    if ($hour = 12) {
        echo "Equal!";
    }
    if ($hour != 1) {
        echo "Not equal!";
    }

```
The `==` and the `!=` signs are the *comparison operators* that check if two values are the same or not.

## Else

Also, we can run code when the condition in the if statement **isn't** met.
That's what we call an *else statement*.

```PHP
<?php
    $hour = 12;
    if ($hour <12 ) {
        echo "Good Morning!";
    } else {
        echo "Good Afternoon!";
    }

```
The code in the braces of the else statement runs when the condition that comes before it returns `false`.

## More Comparion operators

Another set of comparison opterators can check for equality and inequality at the same time.

```PHP
<?php
   $hour = 20;
   if ($hour >= 18) {
       echo "Good evening!";
   } 

```
The `<=` and `>=`signs check if a value is **greater than or equal** or **less than or equal** to another value.

## Else IF

We can also combine the `else` and `if` keywords to account for *multiple conditions*.
```PHP
<?php
   $hour = 20;
   if ($hour <12) {
       echo "Good Morning!";
   } elseif ($hour < 18) {
       echo "Good afternoon!";
   } else {
       echo "Good evening!";
   }

```
The `elseif` keyword allows us to add as many conditions as we want to check for.

## Logical Operator && 
What if we want to tst if two conditions are true at the same time, tough?
For that we use something called the *logical and*.
```PHP
<?php
   $hour = 12; 
   if ($hour >= 0 && $hour <24) {
       echo "Triggered!";
   }

```
The *logical and* `&&` needs both conditions to be met for the code inside to be executed.

## Logical operator ||
When we want to test if *at least* one conditions is true, we use something called the *logical or*.
```PHP
<?php
   $hour = xx;
   if ($hour == 0 || $hour < 24) {
       echo "Triggered!";
   } 

```
The *logical or* operator requiers only one condition to be true in the statement for the code inside to be executed.

## Switching

When we want to compare a variable with many different values, *switch statements* might be the better option.
```PHP
<?php
    $season = "Winter";
    switch($season) {
        case "Winter";
            echo "Frozen season";
            break;
        case "Fall";
            echo "Cool season";
            break;
        default:
            echo "Other season";
    }

```
`case` checks for a scenario, 'break' ends the code, and 'default' triggers when there are no matches.

## Free-Falling

What if we want *multiple cases* in a switch statement to trigger the same code? In n that case we group them together.

```PHP
<?php
   $year =  3;
   switch($year) {
       case 1:
        echo "You're a freshman";
        break;
       case 2:
       case 3:
       case 4:
        echo "You're not a freshman";
        break;
       default:
        echo "Are you still in school?";   
   }

```
Cases without a `break` keyword will **fall trough* to the next `break` keyword or to the end.

# Arrays

## Whats an array?
An *array* is a speical kind of variable that can store *multiple values* in a single variable.

```PHP
<?php
   $friends = array(); 
?>
```
We just created an array with `array(), the so-called *array constructor*.

## Values
An empty array doesn't really serve a purpose, though. How do we give it some values?
```PHP
<?php
   $friends = arra("Caroline", "Max"); 

```
We can create an array with values by putting them in the *parentheses* of `array()`.

## Accessing
But how can we access the *contents* of an array?

```PHP
<?php
   $friends = array("Caroline", "Max"); 
   echo $friends[0];

```
Psst: this position is zero-based, which means that it starts at `0`.

We can access a value by putting its position in *brackets* after the array's name.

## Adding Values
We can also *add values* to an array.
```PHP
<?php
   $friends = array("Caro", "Max");
   $friends[] = "Christine"; 

```
We can add a value by giving it to the array with *brackets* but *without a position*.

## Replacing
How might we be able to **replace** a value?
```PHP
<?php
   $friends = array("Caroline","Caro");
   $friends[1] = "Chestnut"; 
   var_dump($friends);

```
```
array(2) {
    [0]=>
        string(8) "Caroline"
        [1]=>
        string(8) "Chestnut"
}
```
Psst: `var_dump()` is a so callend *function* that displays information about a variable. It allows us to see the whole array.
We can replace a value by storing a new value at a position that already exists.

## Counting
We can ind out the *number of items* in an array as well.
```PHP
<?php
   $friends = array("Caroline","Max");
   echo count($array); 

```
```
2
```
We can use the `count()` function to find out how many values an array has.

## Sorting
We can also sort an array. Let add some more values and get the arry in *alphabetical order*!
```PHP
<?php
   $friends = array("Caroline", "Max", "Earl", "Oleg", "Han");
   sort($friends);
   var_dump($friends); 

```
```
array(5) {
    [0]=>
    string(8) "Caroline"
    [1]=>
    string(4) "Earl"
    [2]=>
    string(3) "Han"
    [3]=>
    string(3) "Max"
    [4]=>
    string(4) "Oled"
}
```
Psst: another function called `rsort()` sorts an array in decending order.

The `sort()`function orders the items of an array in *ascending order*, be they numbers or strings.

# Loops
## Looping
Sometimes we need to repeat a task over and over again.

```PHP
<?php
   $friends = array("Caroline", "Max", "Earl", "Oleg", "Han");
   echo $friends[0].", ";
   echo $friends[1].", ";
   echo $friends[2].", ";
   echo $friends[3].", ";
   echo $friends[4];

```
```
Caroline, Max, Earl, Oleg, Han
```
Look at all these lines of code! Might a *loop* be more *readable* without *repeating* ourselves?

## While Loops
A so-called *while loop* runs a block of code as long as a vertain condition is `true`.
```PHP
<?php
    §number = 1;
    while ($number < 4) {
        $number += 1;
        echo $number . ", ";
    }

```
```
2, 3, 4,
```
This while loop increases `$number` by 1 as long as it's less than 4. Once 4, the condition turns false and the loop stops.

## Do while loops
A *do while loop* is a type of while loop that *first runs the block o code*, then checks if the condition is `true`.
```PHP
<?php
   $number = 1;
   do {
       $number += 1;
       echo $number;
   } while ($number > 4);

```
```
2
```
Psst: notice that the do while loop ends with a *semicolon*.

See that? No matter what the condition, the loop runs at least once.


## For loops

The *for loop* is a very popular type of loop. It has 3 parts: the value, the condition, and a way to change the value.
```PHP
<?php
   for ($i = 0; $i < 4; $i++) {
       echo $i.", ";
   } 

```
Psst: $i++ is an even shorter version of `$i += 1`.

`$i` starts at 0 and increases as lng as the condition is `true`. Once it returns `false`, the loop stops.

## Foreach loop
Now, the so-called *foreach* loop works **only on arrays*, because it goes through each of their elements.
```PHP
<?php
   $heros = array("Batman", "Robin", "Batgirl");
   foreach ($heros as $hero) {
       echo $hero.", ";
   } 

```
```
Batman, Robin, Batgirl,
```
In every so-called *iteration*, the value of an element is stored in `$hero`.

# Functions

## Functions
A *function* is a block of code that we can reuse whenever we want.
```PHP
<?php
   function sayHi() {
       echo "Hi there!";
   } 

```
We need the `function` keyword, a *name* and some parentheses. The code in the races runs when we use the function.

## Calling
We need to *call* a function to make it run.
```PHP
<?php
    function sayHi() {
        echo "Hi there!";
    }
    sayHi();

```
Whenever we want to call a function, we use its name and add parentheses at the end.

## Arguments
We can also pass information to functions trough *arguments*.
```PHP
<?php
   function sayHi($name) {
       echo "Hi there, $name!";
   } 
   sayHi("Joe");

```
Psst: notice how we can put variable names right into a string!

When we use an argument with `sayHi()`, we can access it trough `$name` variable.

## Returning
In addition to performing tasks, *functions* can *return values* as well.
```PHP
<?php
   function sum($n1, $n2) {
       $sum = $n1 + $n2;
       return $sum;
   } 
   echo "1 + 7 = ". sum(1,7);

```
We use the `return`keyword to give back a value whenever the function is called.

## Managing strings
PHP has a lot of *built-in functions* as well. Some of them help us manage strings.

How might we convert a string to lowercase?
```PHP
<?php
    echo strtolower("Here's the LOWDOWN.");

```
Psst: ´strupper()`will convert strings to uppercase.
`strlower()` will convert strings to lowercase.

## Replacing characters
What if we want to replace characters in a string with other characters?
```PHP
<?php
    $greeting = "Howdy y'all!";
    echo str_replace("y'all", "Joe"), $greeting);

```
Psst: Notice that `str_replace()` is case-sensitive.

`str_replace()` takes 3 arguments: the value to replace, it's replacement, and the string it's in.

## Getting a substring
We can get part of a string with the `substr()`function.
It has 3 parts: the *string*, the *index to start at*, and the *number of characters* to get from there.
```PHP
<?php
   $text = "You: a constant in the sea of variables.";
   echo substr($text, 0, 15); 

```
```
You: a constant
```
We extract different parts of a string by changing the index and the number of characters to get.

## Counting words
We can also count the *number of words* in a string with a built-in function.
```PHP
<?php
   echo str_word_count("You: a constant in the sea of variables.");

```
```
8
```
## Rounding off numbers
Other built-in functions handle integers and floats. This rounds a number.
```PHP
<?php
    echo round(1.5);

```
```
2
```
## Exploding a string
With the `explode()` function, we can spit a string into an array. It takes 2 arguments: a delimter, and a string.
```PHP
<?php
   $game = "rock, paper, scissors";
   $items =explode(", ", $game);
   var_dump($items); 

```
Psst: var_dump(), of course, is also a function.
The *delimiter* is the string that seperates the values in the original string.
