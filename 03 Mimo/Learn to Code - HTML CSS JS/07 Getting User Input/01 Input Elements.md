# Input Elements

## Intro

Websites come to life withuser input: when visitors add comments, send messages, or share posts with their friends.

## The Input Element

We get user input with the `input`element, which is an empty element.

Add an `input` element to the webpage.

````
<!doctype html>
<html>
<body>
<h1>Sign up</h1>
<input>
</body>
</html>
````

## Input Text

To define the tye of user input, the input element needs an attribute called type.

Set the type attribute to "text" to make the input element a text field.
```
<input type="text">
```

## Setting a placeholder

A placeholder helps users understand what to type into a text field.

Set the placeholder attribute to "name" and see how it displays on the webpage.

````
<input type="text" placeholder="Name">
````

## The Text Area element

Input elements can only be text fields with a single line.
To create a multiple-line text area, we use the textarea element.

Create a text area using <textarea> and </textarea> tags.

To control the size of the text area, we use the rows attribute to set the rows of text and cols attribute to set the numbers of characters.

<text area rows="3" cols="15"></textarea>

# Interacting with Input Elements
## Getting Input Value

To access user input from an included script, we need to add .value at the end of document.getElementById().

````
var username = document.getElementById("UsernameInput").value;
````
After accessing user input, wecan use it like any other value.

Knowing how to get user input, wecan use it to update a webpage.

Assemble the code so that the value of username appears on the webpage when clicking on the register button.

Accessing user input from a textarea element works the same way.

## Quiz
Why do we need a button and a function to access user input from an input element?
- Because the element's value changes when a user interacts with it

What do we need to add after document.getElementById() to access user input from an included script?
- .value

What happens if we set an input element's value to an empty string, ""?

If a user types nothing into an input element with placeholder="search", what will be the value? - empty string
.