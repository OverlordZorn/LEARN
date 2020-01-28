# Regular Expressions
## Introduction

Regular expressions are special strings that represent a search pattern. 

Also known as "regex" or "regexp", they help rogrammers match, search, and replace text.

Regular expressions can appear cryptic because a few characters have special meaning. 

The goal is to combine the symbols and text into a pattern that matches what you want, but only what you want.

This section will cover the characters, a few shortcuts, and the common uses for writing regular expressions.

## Using the Test Method

Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word `"the"` in the string `"The dog chased the cat"`, you could use the following regular expression: `/the/`.

Notice that quote marks are not required within the regular expression.

JavaScript has multiple ways to use regexes. 

One way is to test a regex is using the `.test()` method. The `.test()` method takes the regex, applies it to a string (which is placed inside the parentheses), and returns `true` or `false` if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// returns true
```

## Match Literal Strings

In the last challenge, you searched or the world `"Hello"` using the regular expression `/Hello/`.

That regex searched for a literal match of the string `"Hello"`. Here's another example searching for a literal match of the string `"Kevin"`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
//returns true
```
Any other forms of `"Kevin"` will not match. 
For example, the regex `/Kevin/` will not match `"kevin"` or `"KEVIN"`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
//returns false
```
A future challenge will show how to match those other forms as well.

## Match a Literal String with Different Possibilities

Using regexes like `/coding/`, you can look for the pattern `"coding"` in another string.

This is powerful to search single strings, but it's limited to only one pattern.
You can search for multiple patterns using the `alternation` or `OR` operator: `|`.

This operator matches patterns either before or after it. For eample, if you wanted to match `"yes"` or `"no"`, the regex you want is `/yes|no/`.

You can also search for more than just two patterns. You can do this by adding more patterns with more `OR` operators separating them, like `/yes|maybe|no/`.

### Example
```js
let petString = "James has a pet cat.";
let pexRegex = /dog|cat|bird|fish/;
let result = petRegex.text(petString);
```

## Ignore Case While Matching

Up until now, you've looked at regexes to do literal matches of strings. 
But sometimes, you might want to also match case differences.

Case(or sometimes letter case) is the difference between uppercase letters and lowercase letters.

Examples of uppercase are `"A"`, `"B"`, and `"C"`.
Examples of lowercase are `"a"`, `"b"`, and `"c"`.

You can match both cases using what is called a flag.
There are other falgs but here you'll focus on the flag that ignores case - the `i` flag.
You can use it by appending it to the regex. 

An example of using this flat is `/ignorecase/i`. This regex can match the strings `"ignorecase"`, `"igNoreCase"`, and `"IgnoreCase"`.

### Example
```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
```

## Extract Matches

So far, you have only been checking if a pattern exists or not within a string.

You can also extract the actual matches you found with the `.match()` method.

To use the `.match()` method, apply the method on a string and pass in the regex inside the parentheses. Here's an example:
```js
"Hello world!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]
```

## Find More Than the Frist Match

So far, you have only been able to extract or search a pattern once.

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
// returns ["Repeat"]
```

To search or extract a pattern more than once, you can use the `g` flag.

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// returns ["Repeat", "Repeat", "Repeat"]
```
**Note**: You can have multiple flags on your regex like `/search/gi`

## Match Anything with Wildcard Period

Sometimes you won#t (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a missspelling would take a long time. Luckily, you can save time using the wildcard character: `.`

The wildcard character `.` will match any one character. The wildcard is also called `dot` and `period`.

You can use the wildcard character just like any other character in the regex. For example, if you wanted to match `"hug"`, `"huh"`, `"hut"`, and `"hum"`, you can use the regex `/hu./` to match all four words.

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // returns true
```



## Match Single Character with Multiple Possibilities

You learned how to match literal patterns (`/literal/`) and wildcard characters (`/./`).

Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for literal patterns with some flexibility with *character classes*. Character classes allow you to define a group of chracters you wish to match by placing them inside square (`[` and `]`) brackets.

For example, you want to match `"bag"`, `"big"`, and `"bug"` but not `"bog"`. You can create the regex `/b[aiu]g/` to do this. The `[aiu]` is the character class that will only match the characters `"a"`,  `"i"`, or `"u"`.

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[iau]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bggStr.match(bgRegex); // Returns null
```

## Match Letters of the Alphabet

You saw how you can use *character sets* to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). 
Fortunately, there is a built-in feature that makes this sort and simple.

Inside a character set, you can define a range of characters to match using a hypen character: `-`.

For example, to match lowercase letters `a` through `e` you would use `[a-e]`.

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let gbRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

## Match Numbers and Letters of the Alphabet

Using the hypen (`-`) to match a range of characters is not limited to letters.
It also works to match a range of numbers.

For example, `/[0-5]` matches any number between `0` and `5`.

Also, it is possible to combine a range of letters and numbers in a single character set.
```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
//matches all letters and numbers in jennyStr
jennyStr.match(myRegex)
```

## Match Single Characters Not Specified

So far, you have created a set of characters that you want to match, 
but you could also create a set of characters that you do **not** want to match.

These types of character sets are called *negated character sets*.

To create a negated character set, you place a caret character (`^`) after the opening bracket and before the chrachters you do not want to match

For example, `/[^aeiou]/gi` matches all characters that are not a vowel. Not that chracters like `.`, `!`, `[`, `/` and white spaces are matched, the negated vowel character set only excludes vowel characters.


## Match Characters that Occur One or More Times

Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You can use the `+` character to check if that is the case.

Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

For example, `/a+/g` would find one match in `"abc"`and return `["a"]`. Because of the `+`, it would also find a single match in `"aabc"`and return `["aa"]`.

I it were instead checking the string `"abab"`, it would find two matches and return `["a", "a"]`because the `a` charachters are not in a row - there is a `b` between them.

Finally, since there is no `"a"` in the string `"bcd"` it wouldn't find match.

## Match Characters that Occur Zero or More Times

The last challenge used the `+` sign to look for characters that occur one ore more times. there's also an option that matches characters that occur zero or more times.

The charachter to do this is the asterisk or star: `*`.
```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);  // returns ["goooooooo"]
gPhrase.match(goRegex);     // returns ["g"]
oPhrase.match(goRegex);     // returns null
```


## Find Characters with Lazy Matching

In regular expressions, a **greedy** match finds the lognest possible part of a string that fits the regex pattern and returns it as a match. 
The alternative is called a **lazy** match, which finds the smallest possible part of the string that satisfies the regex pattern.
You can apply the regex `/t[a-z]*i/` to the string `"titanic"`. This regex is basically a pattern that starts with `t`, ends with `i`, and has some letters in between.

Regular expressions are by default greedy, so the match would return `[“titani"]`. It finds the largest sub-string possible to fit the pattern.

However, you can use the `?` character to change it to lazy matching. `"titanic"` mached against the adjusted regex of `/t[a-z]*?i/` returns `["ti"]`.

**Note**
Parsing HTML with regular expressions should be avoided, but patttern matching an HTML string with regular expressions is copmletely fine.

## Find One or More Criminals in a Hunt

Time to pause and test your new regex writing skills. A group of criminals escaped from jail and ran away, but you don't know how many.

However, you do know that they stay close gogether when they are aroudn other people. You are responsible for finding all the criminals at once.

Here's an example to review how to do this:

The regex `/z+/` matches the ltter `z` when it appears one or more times in a row. It would find matches in all of the following strings:
```js
"z"
"zzz"
"ABCzzzz"
"zzzABC"
"abczzzzzabc"
```
But it does not find matches in the following strings since there are no letter `z` characters:
```js
""
"ABC"
"abcabc"
```
Write a greedy regex that finds one or more criminals within a group of other people A criminal is represented by the capital letter `C`.

```js
//example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
let reCriminals = /C+/;
let matched criminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```

## Match Beginning String Patterns

Prior challenges showed that regular expressions can be used to look for a number of matches.

They are also used to search for patterns in specific positions in strings.

In an earlier challenge, you used the caret character (`^`) inside a character set to create a negated character set in the form `[^thingsThatwillNotbeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```js
let firstString = "Ricky is first and can be found.";
let fristRegex = /^Ricky/;
firstString.test(firstRegex); // Returns true
let notFirst = "You cant find Ricky now.";
firstRegex.test(notFirst);    // Returns false
```

## Match Ending String Patterns

In the last challenge, you learned to use the caret character to search for patterns at the beginning of strings. 
There is also a way to search for patterns at the end of strings.

You can search the end of strings using the dollar sign charachter `$` at the end of the regex.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);         // true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);          // false
```

## Match All Letters and Numbers

Using character classes, you were able to serach for all letters of the alphabet with `[a-z]`.
This kind of character class is common enought that there is a shortcut for it, although it includes a few extra characters as well.

The closest charachter class in JavaScript to match the alphabet is `\w`. This is shorutcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore charachter (`_`).

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);     // returns true
shortHand.test(numbers);    // returns true
longHand.test(varNames);    // returns true
shortHand.test(varNames);   // returns true
```

These shortcut character calsses are also known as **shorthand charachter classes**.

## Match Everything But Letters and Numbers

You've learned that you can use ta shortcut to match alphanumerics `[A-Za-z0-9_]` using `\w`. A natural pattern you might want to search for is the opposite of alphanumerics.

You can search for the opposite of the `\w`with `\W`. Note, the opposite pattern uses a capital letter.
This shortcut is the same as `[^A-Za-z0-9_]`.

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);   // returns ["%"]
sentence.match(shortHand);  // returns ["!"]
```

## Match All Numbers

You've learned shortcuts for common string patterns like alphanumerics. Another common pattern is looking for just digits or numbers.

The shortcut to look for digit characters is `\d`. This is equal to the character class `[0-9]`, which looks for a single chracter of any number betweeen zero and nine.

## Match all Non-Numbers

The last challenge showed how to search for digits using the shortcut `\d` with a lowercase `d`. You can also search for non-digits using a similar shortcut that uses an uppercase `D`instead.

The shortcut to look for non-digit charachters is `\D`. This is equal to the charachter class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

## Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what gives users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

1) Usernames can only use alpha-numberic characters.

2) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

3) Username letters can be lwoercase and uppercase.

4) Usernames have to be at elast two characters long. A two-character username can only use alphabet letters as characters.

```js
let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+[0-9]*)$/i; // Change this line
let result = userCheck.test(username);
console.log(result);
```

## Match Whitespace

The challenges so far have covered matching letters of the alphabet and numbers.
You can also match the whitespace or spaces between letters.

You can search for whitespace using `\s`, which is a lowercase `s`. 
This pattern not only matches whitespace, but also arriage return, tab form feed, and new line characters.

You can think of it as similar to the charachter class `[ \r\t\f\n\v]`.
```js
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// returns [" ", " "]
```

## match Non-Whitespace Characters

You learned about searching for whitespace using `\s`, which a lowercase `s`. 
You can also search for everything except whitespace.

Search for non-whitespace using `\S`, which is with an uppercase `S`. 
This pattern will not match whitespace, carraige return, tab, form feed, and new line characters.
You can think of it being similar to the character class `[^ \r\t\f\n\v]`.

```js
let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length // Returns 32
```

## Specify Upper and Lower Number of Matches

Recall that you use 
the plus sign `+` to look for one or more characters 
and asterik `*` to look for zero or more characters.
These are convenient but sometimes you want to match a certain range of patterns.

You can specify the lower and upper number of patterns with *quantity specifiers*.

Quantity specifiers are used with curly brackets `{}`. You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between `3` and `5` times in the string `"ah"`, you regex would be `/a{3,5}h/`.

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); //returns true
multipleA.test(A2); // returns false
```

## Specify Only the Lower Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.

Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string `"hah"` with the latter `a` appearing at least `3` times, your regex would be `/ha{3,}h/`.

## Specify Exact Number of Matches

You can specify the lower and upper number of patterns with quantity specifiers using curly brackets.

Sometimes you only want a specific number of matches.

To specifiy a certain number of patterns, just have that one number between the curly brackets.

For example, to match only the word `"hah"` with the latter `a` `3` times, you regex would be `/ha{3}h/`.

## Check for All or None

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can specify the possible existence of an element with a question mark, `?`.
This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differnces in American and British English and you can use the question mark to match both spellings.

```js
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // returns true
rainbowRegex.test(british); // returns true
```

## Positive and Negative Lookahead

*Lookaheads* are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: *positive lokahead* and *negative lookahead*.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it.
A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
A negative lookahead is used as `(?!...)`where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.
```js
let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);    // returns ["q"]
noquit.match(qRegex);   // returns ["q"]
```
A more practical use of lookaheads is to check thwo or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

## Check for Mixed Grouping of Characters

Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.

If you want to find either `Penguin` or `Pumpkin` in a string, you can use the following Regular Expression: `/P(engu|umpk)in/g`

Then check weither the desired string groups are in the test string by using the `test()`method.

```js
let testStr = "Pumpkin";
let testRegex = "/P(engu|umpk)in/g";
testRegex.test(testStr);    // returns true
```

## Reuse Patterns Using Capture Groups

Some patterns you search for will occur multiple times in a string. 
It is wasteful to manually repeat that regex.
There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substring susing *capture groups*.

Parentheses, `()`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parenteses.

To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be `\1` to match the first group.

The example below matches any word that occurs twice separated by a space:
```js
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;

```

## Use Capture Groups to Search and Replace

Searching is useful. However, you can make searching even more powerful when it also changes (or replaces) the text you match.

You can search and replace text in a string using `.replace()` on a string. 
The inputs for `.replace()` is first the regex pattern you want to search for.
The second parameter is the string to replace the match or a function to do something.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // returns "The sky is blue."
```


You can also access capture groups in the replacement string with dollar sings (`$`).
```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$1 $2'); // returns "Camp Code"
```

## Remove Whitespace from Start and End

Sometimes whitespace characters around strings are not wahted but are there. Typcial processing of strings is to remove the whitesprace at the start and end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

**Note**
The `.trim()` method would work here, but you'll need to complete this challenge using regular expressions.

```js
let hello = "    Hello, World!   ";
let wsRegex = / ^\s+|\s+$/g; 
let result = hello.replace(wsRegex, "");

```