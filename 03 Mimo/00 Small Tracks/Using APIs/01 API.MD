# Using APIs

# API Basics

## API Intro

In this track we'll cover what an *API* is, why tehy exist, and learn a bit of code to experiment with one.

A web browser is one type of *application* that lets you interact with an API.

Believe it or not, every time you open a website like Twitter, you interact with an API.

By visiting https://twitter.com, you *request* data using Twitter's API.

When visiting Twitter's website, you are making a *GET request* to http://twitter.com

Start a GET request to see how the server responds.

```
Web browser: GET https://twitter.com
```
```HTML
<!Doctype html>
<html lang="en" data-scribe-reduced-action-quene="true">
<head>
<title>Twitter. It's what's happening.
</title>
...
```
When you made a GET request to http://twitter.com, Twiter sent an *HTML file* as a response.

HTML is used to structure content on a website. If we dig into the HTML file Twitter sent us, we can find things like a login button.

```HTML
...
<a class="js-nav EdgeButton" href="/login">Log in</a>
...
```

While an HTML file will display a website, it's not so great when we don't need webpage structuring data.

For that, we can use Twitter's developer API.

```
GET https://api.twitter.com/1.1/statuses/user_timeline.json`screen_name=getmimo
```

```
[{
"created _at": Thu Apr 06 15:28:42 + 0000 2017",
"text": "Happy coding everyone!",
"favorite_count": 1000,
...
}]
```
Twitter's dev API sent back a *JSON file*.

What response do you think devs prefer?
* JSON because it's easier to look through data like Tweets.

Each Tweet is formatted as a *JSON object*.

API stands for *Application Programming Interface* because different apps need responses in different formats.

## Making an API Request
Let's dive into *coding a request* to an API.
## JSON object
When we talked about JSON objects, we were talking about *JavaScript Object Notation*.
```JSON
{
    "Name": "Joe",
    "Nationality": "Ireland"
}
```
## JavaScript
*JavaScript* is a type of programming language. To keep things simple, we'll learn how to make an API request using JavaScript.

## A new request
The first step is to create a new request using the `new` keyword.

Although it seems strange, the way to create a new request is using a tool from JavaScript called `XMLHttpRequest()`.

To make sure we can do diferent things with te request, let's store it in a variable called `request`
```JS
var request = new XMLHttpRequest();
```

Next, well need to specify the URL or the request.

```JS
var request = new XMLHttpRequest();
var url = "https://api.twitter.com/1.1/..."
```

By using `request.open()` we can specify the request.

We need to specify what kind of request we want to make.
Place `"GET"` between the parentheses to specify the type of request.

Next, specify the URL in the request by addinga comma nd using the `url`variable we created.

The final part we need to specify is if we want more advanced code that will work better while it waits for a response from the API. For now we set it to false.
```JS
var request = new XMLHttpRequest();
var url = "https://..."
request.open("GET", url, false);
```

Now that the request is open, we can send it using `request.send().`

The last part is to display the response in a variable on the console.

```JS
var request = new XMLHttpRequest();
var url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=getmimo";

request.open("GET", url, false);
request.send();
console.log(request.response);
```
```
[{ "created_at": "Thu Apr 06 15:28:43 +0000 2017", "text": "Happy coding everyone!", "favorite_count": 1000, ... }]
```
## Making an API Request in Practice

We'll make calls to an API that generates random cat facts.
We'll then format the response, so it's easier to read.

```JS
console.log("Cat Fact");

var request = new XMLHttpRequest();
var url = "https://cat-fact.herokuapp.com/facts/random";

request.open("GET", url, false);
request.send();
var response = request.responseText;
var data = JSON.parse(response);

console.log(data);
```
```
{
    "text":"The average cat sleeps between 12-14 hours a day.",
    "createdAt":"2018-01-04T01:10:54.673Z",
    "source":"api",
    ...
}
```
## Logging the cat fact
Knowing what the response looks like, extract the piece of data most important: the `text`.

```JS
console.log("Cat Fact");

var request = new XMLHttpRequest();
var url = "https://cat-fact.herokuapp.com/facts/random";

request.open("GET", url, false);
request.send();
var response = request.responseText;
var data = JSON.parse(response);
var text = data["text"];
console.log(text);
```
