# Attacks and Defenses

## SQL injection

### Whats SQL injection?

*SQL injection* is a very common *website attack* that can help us expose a website's *database*.

Why do you think that SQL injection attacks are so **common**?
* Many websites use SQL databases
* There are plenty of scripts to automate these attacks
* It's pretty straight-forward
Yes! SQL databases are so *prevalent* that there are *scripts* to automatically find and exploit vulnerable websites.

### What's its impact?

Using *SQL injection*, we can run *unintended commands* against website databases.

Can you think of things that we can do with the database?
* Downlaod all of its data
* Tamper with user data
* Become the database administrator
Again, we cann do **all** of these thigns with SQL injection.

### Normal user input

Typically, we use *input fields* on *website forms* to inject SQL.

Do you know how it looks behind the scenes when sending a login form?
Let's find out!
```SQL
SELECT * From users WHERE username = '@UserName'
```
```
1 User found
```
See that? The form uses *SQL* to check the user's account in the database. That's valuable information!

### Malicious user input

If webistes handle input fields like *login forms* the wrong way, we can use them to inject SQL.

```SQL 
Username: ' OR '1'='1'
```
```SQL
SELECT* FROM users WHERE username = '' OR '1'='1'
```

This input will change the query and elad to, well, *unintended results* for the website.

### Dropping tables at X Corp.

A fellow sneaker clued you into a *vulnerable form* on X Corp.'s webiste.

Can you use *SQL injection* to delete, or drop, their `payment` table?
```SQL
Username: ''; Drop TABLE payment
```
```SQL
SELECT * FROM users WHERE username = ''; DROP TABLE payment
```

### Prevention by sanitizing inputs

Here's the thing: by cleaning, or sanitizing, input, we can **reject** suspicious form data.

What might be examples of sanitizing input?
* Ensuring that inputs don't contain certain symbols
* Using regular expessions to validate data
* Rejecting whitespace characters
These are **all** ways to sensure clean form input.

### Prevention with parameterizing

*Parameterized SQL* is the best defense against SQL injection attempts. Parameters are placeolders and ensure input is safely used in SQL.

Can you **parameterize** the SQL below?
```SQL
SELECT * FROM users WHERE username = @USERNAME
```
Database drivers interpret *parameters* and *safely* handle input data in SQL.

### Quiz

Which of these *website forms* could be **vulnerable to *SQL injection?*
* Login forms
* Registration forms
* Contact forms
* Checkout forms
Any form on a awebsite could be exploited during your SQL injection attempts.

Do SQL injection attacks **always** use a `'`character?
* Nope, there are other ways! `'` isn't the only method. There are many characters like -- that you could use to **exploit** input.

What do you think is another name for *parameterized SQL*?
* Prepared SQL
Only the *placeholders* change, so the statement is safe, reliable, and *prepared* for execution.


## Session hijacking

### What's session hijacking?
Whenever we log into a website, the server and browser exchange a so-called *session ID* to identify the visit.

What kind of *session ID* might webmasters use to prevent hacking?
* lengthy, random, and unique
If a session ID is long, unique and complex, we'll have ahard time trying to jijack it.

### Whats the impact?

Weak session ID's can expose people's *profile* and *payment information* and allow us to access a website **without** authentication.

Which do you think is a *strong session ID*?
* ~~729853~~
* 7AD4VtmWjB
Just like a *strong password*, this session ID is lengthy and random to prevent you from stealing user data.

## Hijacking a session

If a website uses short, predictable session IDs, we can hijackt them with a *script*.

What do you think this script should do?
* Generate potential session IDs
* Test generated session IDs
* Find and log valid session IDs
Your script will *enumerate* potential session IDs and then try to access the website with them.

### Hijacking from x Corp. Session

A sneaker at *bsociety* gave us a *script* that tries to guess session IDs.

Can you spot a valid X Corp. session ID in your *script output*?
```
Trying 87326521 - HTTP 500 ERR
Trying 87326522 - HTTP 404 MISSING
Trying 87326523 - HTTP 301 MOVED
Trying 87326524 - HTTP 200 OK
Trying 87326525 - HTTP 403 FORBID
```
`87326524` returned an `OK` status. X Corp. shouldn't be using predictable session IDs that we can figure out with a script, huh?

### Preventing with web frameworks

Many webmasters rely on *web frameworks* to generate safe, strong session IDs.

How might a *web framework* prevent session hijacking?
* Deactivate session IDs after 20 minutes
* Change session IDs after each request
* Prevent reuse of session IDs
* ~~Eliminate the need for session IDs~~

Modern web frameworks will do these things to prevent your hijacking attempts.

### Preventing by signing cookies
Some web frameworks will even *sign* the cookeis that hold the session IDs.

Why might webmaster use *signed cookies*?
* To detect tampering with the session ID
If the *magic cookie* is signed, a manipulated session will be *deactived* and useless to you.

### Quiz
What do you think the magic cookie contains?
* A user's authentication and session information
The magic cookie is often your target because it hold valuable session data.

What do you think it means to sign acookie?
* Append encoded text to the cookie data
Correct! The digital signature is an enciphered value that can only be deciphered by the website. It's cryptography!

What *types* of hacker could write a script to guess session IDs?
* Black hats
* Elites
* Novices
Guessing *predictable session IDs* is so simple that pretty much *any* hacker can do it.

## Path traversal

### What is path traversal?

A *path traversal* attack exploits improper handling of filenames in a website's *query string*.

What would we be looking for during this attack?
* ~~Typical browser iles like HTML and CSS~~
* Private files not inteded for the browser

We'd exploit the query string to access files with *sensitive data*.

### What's its impact?

Path traversals can allow you to access *private files* on a web server.

What do you think these files could contain?
* Server configuration elements
* Employee health records
* Payment data
These files could contain **all** of these sensitive data.

### Traversing directories

Can you tamper with the *query string* below to access a *private file*?
```
domain.com/?file=../passwords.txt
```
```
Starting download ...
```
You accessed a *private file* of passwords. Path traversal is sometimes called a *dot-dot-slash attack* since `"../"`climbs server directories.

### Traversing X Corp. directories

We've recieved a hint about where X Corp. keeps their *employee data*.

Can you traverse *three dicrectories* in order to get to X Corp.'s *personnel file*?
```
xcorp.com/?get=../../../staff.csv
```
You've downloaded a personnel file that contains X Corp. employee data.

### Preventing by segregating files

Path traversal attacks are prevented by *segregation* so that public and private files are kept in *different locations*.

If *public files* are on server `Alpha`, where would you host *private files*?
* On asecure file server `Beta`
* In a secure partition on server `Alpha`
* ~~In the same location on server `Alpha`~~
If public and private files don't exist in the same location, hacking becomes much harder.

### Preventing by restricting permissions

Many hacks, including `"../"` attacks, can be prevented by *restricting permissions* on the server.

What do you think is the *principle of least privilege*?
* Systems operating with the least amount of privilege necessary
* ~~Systems running only one type of privilege at a time~~
Just like a *need-to-know basis*, this principle limits *system privileges* to create a defense against hacks.

### Quiz
Will blocking the use of *../* in qury strings *alwas* prevent a *path traversal attack*?
* No way, it's more cmplicated than that
Dicrectories are climbed in *many was*. We've got options!

Which of these *measures* do you think will also **prevent** path traversal attacks?
* Not relying on user input for filenames
* Sanitizing paths for illegal character patterns
* Keeping ther server OS up-to-date
Yes! All of these can help keep our paws out of private directories.

What *types of files* do you think are susceptible to path traversal attacks?
* ZIP
* PDF
* CGI
* TXT
All file types could be susceptible, expecially if the web server is **too permissive**.