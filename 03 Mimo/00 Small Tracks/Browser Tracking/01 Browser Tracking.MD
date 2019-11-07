# Browser Tracking
## What are cookies

*Cookies* are a tool that can make online life more straigthforward, but they have a dark side too.

In this track, we'll dive into what cookies are, how to make one with JavaScript and why they can be controversial.

Cookies are structured *plain text* files stored locally on your computer. There are no special tools required to read or understand them.

Which of these is most likely a plain text cookie?
* "user=kevinMcK; expires=Wed, 26 Dec 2019 12:00:00 UTC;"

Cookies are simple plaintext files. Sometimes you can figure out a cookie's purpose just by reading it.

When browsing the web, we make reqeusts to a server for a web page. The page is recieved, but most likely some *cookies* are saved too.

Can you arrange these steps into their most logical flow?
1. Make request for page from server
2. Server repsonds with page and cookies
3. Browser displays page and saves cookies

That's right! Along with recieving the page you requested, some cookie information is sent to your browser too.

The browser saves the recieved cookie *locally* to the device. Cookies are simple, they contain at least one `name-value pair* and are under 4KB.

Can you assemble the most logical version of the name-value pair in this cookie?
```js
username = KevinMcAllister
```
Cookies have a name, in this case `username`, and a value.

Cookies can only be valid for *one domain*. By default, it's the host of the *current location* excluding subdomains.

If a cookie is from `getmimo.com`, for which of these options would the cookie be valid?
* getmimo.com

Exactly, by default, the cookie is only valid for the host of the current location and not valid for any other domains.

If it's possible to make a cookie valid for *all subdomains* by adding a specific domain property like `google.com`.

If we set the domain property of a cookie to `facebook.com`, for which of these links will the cookie be valid?
* ads.facebook.com
* blog.facebook.com
* about.facebook.com

If we set the domain property, then the cookie will be valid for all subdomains.

Websites primarily use cookies for identifying users and their preferences, but they're also for tracking behavior across the internet.

Which two of these might be stored in a cookie?
* User Interface Settings
* Online Status

As cookies can only be 4KB they aren't used for storing media or large amounts of data.

Cookies also enable users to visit websites they have an account with, without logging in each time.

They achieve that by creating a unique cookie in the browser after a user has logged in with their credentials.

The website ties the unique cookie to the account that logged in. Each time a new request is sent, the authentication cookie is included.

Can you finish creating this name-value pair?
```
UserID = B76SDFE44LN
```
The website can check if it's already seen the unique cookie. If it doesn, it doesn't need to authenticate the password again.

Without storing the unique authentication cookie in the browser, the website would require the user to authenticate themselves every time.

Can you order the steps of using a cookie for authentication?
1. Visit website that requires login
2. Website checks for authentication cookie
3. Website checks if authentication cookie is valid
4. Bypass login

That's why we dont need to enter a password each time we visit a site like Amazon or Facebook.

Storing cookies makes the process of browsing the internet *convenient*.

When cookies are created, they usually created with an *expiry time* too. The expiry portion of a cookie requiers the name-value pair of Èxpires` and a date.
```
UserID=B76SDFE44LN; Expires=Wed, 24 Dec 2019 00:00:00 GMT;
```

By adding an expiry time, cookies become invalid when the expiry time has passed.

Adding an expiry date means that we'd eventually need to input our login details again.

Can you think of a reason for addin an expiry date?
* Safety

Without adding an expiry date, the authentication cookie would be valid forever. Anyone using the device could access the account.

If someone manages to steal an authentication cookie, they might be able to access the account of that user.

How might a website provide extra layer of security to prevent this?
* Check if the same browser logging in is the same as before

Exactly! Usually, sites have extra layers of security to prevent someone who steals a cookie from loggin in.

Next up, we'll learn how to create a real browser cookie.


## Cookie Tracking

That's jsut one side of cookies though.
Cookies also play a significant role in tracking your online behavior.

Cookies use the very same mechanism to track you online as they do for authenticating you.

Which of these would most likely function as a tracker?
* A unique tracking cookie

Exactly, in much the same way a unique authentication cookie is used for authentication, a tracking cookie is used for tracking.

Generally, websites use powerful *third-party tracking tools.* These tracking tools reside outside of the domain the browser requested.

What's the benefit of the tracker residing outside of the domain?
* It can record activity across different websites

Everytime the browser requests a website that supports the tracking cookie, the tracking id is sent too.


### Tracking Pixel

A *tracking pixel* is a small piece of the web page that's requested from the tracking domain to insert the cookie.

The tracking pixel is usually invisible to the user on the page. Which one of these would be a good candidate?
* <img height="0" width="0" alt="" src="http://track.com"/>

Correct. This `img` tag would be invisible to the user, but would still send a request to the tracking server and store the tracking cookie.

When the browser requests a page from a website with the tracking pixel, the unique tracking id is then stored in a cookie.

Can ouu assemble this tracking cookie?
```
TrackingID = 3984720234;
```
These type of cookies use a name and a unique identifier value for tracking.

The tracking cookie can then relay information about the sites the browser is visiting back to its servers.

Can you fill out the extra information included in this tracking cookie?
```
TrackingID=3984720234; Ip=11.0.1.1; origin=stuff.com
```
The unique identifier present in the cookie means that browsing history can be tied together.

All websites that use this analytics software will know the sites visited by the browser since the tracking identifier remains the same.

That is how advertisements for prior items become visible on unrelated websites, or service providers know which competitors were considered.

What might be the main companies target advertisements in this manner?
* To drive sales
Advertising in this manner help drive sales.

Tracking companies have become very sophisticated over time and can build up a detailed profile of indivudual users.

Who might these detailed user profiles be of interest to?
* Governments
* Other advertisers
* Companies

This information is valuable to many ifferent entities and has been the subject of many privacy concerns.

That's why websites now ask for sonsent before storing cookies in your browser.

This way you're aware of waht might be happening behind the scenes.

## Creating a Cookie

Cookies might sound like magic, but they're quite simple to create. Let's see how easy it is to make one in JavaScript.

We'll create a function that tores an *authentication cookie*. Then we'll take a look at where it gets stored.

If you've created a function in any programming language, you'll be able to follow along.

### Function
Create a function called add Cookie with parentheses and curly braces.

We'll use this JavaScript function to create cookies.

Next, add the first parameter `cname`, and the secound parameter `value`.
`cname` refers to the name and `value` will be used for the value of the cookie.

To create the cookie in the browser, add `document.cookie` and then add the = sign.
Now we jsut need to add the cookie using JavaScript.


Crate a `username` cookie by calling the addCookie function with two parameters.

```JS
function addCookie(cname, value) {
    document.cookie = cname + "=" + value + ";";
}

addCookie("username", "KevinMcAllister");

console.log("document.cookie");
```
```
username=kevinMcallister;
```
