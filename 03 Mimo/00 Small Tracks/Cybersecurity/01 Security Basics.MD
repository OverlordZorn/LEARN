# Security Basics

## Thinking like a hacker

Hello Friend! In this track, we'll discover hacking, password security, crytography, and tons more.

But what does it even mean to be a hacker?

### Hacker mindset

As hackers, we want to think about the world in a vertain way. Can you describe the *hacker mindset*?
*Everything has a weakness
Recognizing that there's a weakness is **everything** is crucial to thinking like a hacker.

### Reasons to Hack

So hacking is about seeking *vulnerabilities* in software. But why would we, or others, become hackers?
* out of curiosity
* As a challange
* to steal data
All of these can be reasons t hack.

### hacker types

Our intentions help us choos what type of hacker we want to be.

Which of these do you think are *hacker types*?
* White-hat hackers
* Black-hat hackers
Now let's find out how these two types of hackers differ.

### Black hats

*Black hats*, or crackers, have malicious motivations and are what many people consider the classic definition of hackers.

As a black hat, why would we want to hack a system?
* Money
* Chaos
* Revenge
No matter what our intentions are, hacking a system without permission is illegal. But there **are legal ways** to hack.

## White hats

As *white-hat hackers*, we're hacking in the legal zone, which is why we also need to follow a basic set of steps.

In what order would we perform a white-hack hack?

1. Get permission from the system's owner
2. Hack the system
3. Tell the owner about the vulnerabilities
If we follow these steps, we'll be true white hats.

### Ethical hacker

What might be another way to describe a white-hat hacker?
* An ethical hacker
White hats are *ethical hackers* who help improve systems.

### Hacking is omprtant
Ethical hacking sounds like a lot of work, doesn't it? Well, that's because it's an actual *job*.

Why might white-hat hacking be so important?
* Hackers can help keep society safe
* Software affects every life in some way
* Hackers can help keep businesses safe
Almost **everything** is vulnerable to hacking nowadays. So white hats hack software to find out how to improve it.

As hackers, we **actively* search for *security holes*.

Hacking is just a *tool*. It's our responsibility to decide what to use it for.

As white hat's we need to get *permission* from the system's owner and tell them about any *vulnerability* we've found.

## Cryptography

*Crypthography* is the science of writing in secret code. Cryptography uses *ciphers* to transform plain text into *disguised text*.

What do you think describes words in disguised, or *ciphered text*?
* They're present but hidden
**Enciphering** text disguises it and only the intenden recipient can **decipher** it because they know the **key** to cipher.

Cryptography has been used for **thousands** of years. Early, or *classical ciphers* simply subsittuted letters of a word with *different letters*.

What do youthink makes *modern ciphers* so much more *complex*?
* Computers
Computers **reinvented** cryptography and led to strong *encryption*.

### The Caesar cipher

The *Caesar cipher* is simple and well-known. The transformation aligns the standard alphabet with a *shifted alphabet*.

```
a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p ...
b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q ...
```
Can you decipher `"Ju xbt Hsffl up nf"`?
* It was Greet to me

You came, you saw, you *deciphered*.

Now, let's **encipher** a message using the *Caesar cipher*!

Can you encipher `"Ides of March"`?
* Jeft pg Nbsdi
Nevertheless, a shift by one isn't very secure, is it?


### Atbash cipher

The *Atbash cipher* is an ancient encoding system. The transformation aligns the standard alphabet with a *reversed alphabet*.

```
a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p ...
z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k ...
```
Can you decipher "Gsild z yzhs"?
* Throw a bash

Can you encipher "party time"?
* kzigb grnv

### Polybius Square

A *Polybuius Square* is a table used to translate letters into numbers.

```
  | 1  2  3  4  5  
--+---------------- 
1 | A  B  C  D  E  
2 | F  G  H I/J K  
3 | L  M  N  O  P  
4 | Q  R  S  T  U  
5 | V  W  X  Y  Z
```
Now, can you decipher "341454112451"?
* Square

Can you encipher "Roman"?
* 2443231133

### Rail Fence

The *Rail Fence cipher* writes plain text downwards and diagonally on *rails* of an *imaginary fence*.

Let's try a three-row fence with "LET US HACK"
```
L . . . S . . . K
. E . U . H . C .
. . T . . . A . .
```
NOw we can rad the rows and get `"LSKEUHCTA" as *cipher text*.

### Deciphering

Examining a hacked computer, you spot a *hidden file* that reads `"LEEEVMHRAEE"`. It seems like someone is testing your *deciphering skills*.
What do they want you to do?
```
L . . . E . . . E . . 
. E . V . M . H . R .
. . A . . . E . . . E
```
That's it! Let's leave the file on the computer, then!

### Cryptographic hasing

With *cryptographic hashing*, the transformation is *one-way*, meaning there's no way to reverse the enciphering.

What might this be useful for storing?
* Passwords
Storing passwords by hashing means they're disguised and *can't be reversed* to their original form, keeping them safe from hackers.

### Hashed output

When you hash something, the output is usually 32 characters or more in length, no matter how long the original input.

How might a hash of the password `admin` look?
* 21232f297a57a5a743894a0e4a801fc3
With a hash, no matter how long the input text, the output will always be the same length.

### Comparing hashes

Hashing is useful because it allows us to compare if *two inputs are the same*, without ever knowing the content of the original inputs.

How might this be possible?
* By comparing if the hashed outputs are the same
The same input will always generate *the same output*.
Useful for checking passwords, while still *maintaining privacy*.

### Avalanche!

Thanks to something called the *avalanche effect*, even the slightest change in input results in a *totally different* output.

`21232f297a57a5a743894a0e4a801fc3`is `admin`'s hash, what about `admin1`?
* e00cf25ad42683b3df678c61f42c6bda
Even a one letter change means the resultinghash will be *unrecognizable* from the original.

### Hash types

Cryptographc hashing is usually done with a computer. Like ciphers, there are different types, such as *SHA-1* and *MD5*.

How do you think they might differ?
* Method of transforamtion
* Output length
The output length and method of transformation are the primary way hash functions differ. For example *SHA-1* is 40 characters long.

### Vulnerabilities

Weaknesses have been discoverd in some hash functions like *MD-5*, making it *not safe* to store important data with anymore.

How might we make that data safe again?
* ~~By hashing the data twice~~
* By changing to a more secure hash
Using a more secure hash such as *bcrypt* or *SHA-256* will keep your data safe for years to come.

### Quiz
What do you think *cryptography* can do?
* Hide words
* ~~Encode photographs~~
* Secure written communication
* Provide secrecy

Can you dfine *enciphering*?
* Transforming plain text to disguised text
* ~~Decoding secret text~~

Which of these apply to *cryptographic hashing*?
* It's one-way
* Output lengths are the same size
* ~~It's reversible~~

## Passwords

### Common passwords

The use of *strong passwords* can slow down or defeat our hacking attempts.

That said, waht do you think most passwords look like?
* Short and simple

Fortunately for us, many users choose short and simple passwords.

### What's a weak password?

People often choose passwords that are *easy to remember*, which also makes them *easy to crack*.

What might an `admin` have choosen as their password here?

```
Username:admin
Password:admin123
```

The odds that we can guess and crack such a *weak password* are very high.

### Guesswork

Often times, we can crack *weak passwords* simply by **guessing** them.

Which of these passwords are some of your *family members* or *friends* likely to have?
* password
* querty
We an guess these passwords without breaking a sweat.

At a coffee place, you've overheard an X Corp. employee talk about her son Michael having his seventh birthday.

Her laptop was left behind, can you guess her company login?
```
Login name: MsPrice
Password: michael2011
```
You guessed her *weak password*.

### What's a strong password?

The *strength* of a password greatly increases the *longer* it is.

Which of these passwords would be considered more secure?
* bagballpen90!
Suprisingly, adding just a few characters to a password can add hundreds of years to the time it takes to crack it.

### Good passwords

A great way to come up with a strong password is to string togehter some meaningful words into a *password phrase*.
*BigPurpleTreehouse!
A combination of words is a great way to come up with a strong and memorable password.

### Great passwords

To make a truely great password it's ag ood idea to add some *randomness* and *complexity* to the password phrase.

How could the *BigPurpleTreehouse* password be improved?
* By adding special characters and numbers
Indeed! `B#gPurpletre^house6!`is now very strong, and almost impossible to guess or crack.

### Online dictionary attacks

We can use *automated programs* to attempt password logins on a website using a *dictionary file*, which contains a list of common passwords.

Can you think of ways how websites might **prevent** a *dictionary attack*?
* By llimiting the amount of login attempts
* By using CAPTCHA on the login form
These *tactics* can help protect websites against our *dictionary attacks*.

### Passwords and cryptography

Since systems keep apsswords in databases, *cryptography* can be used to disguise the stored data.

Can you pick the true statements below?
* Once a password is **encrypted**, only those with the **key** can **decrypt** it
* A **crytographically hassed** password is very difficult to crack
* ~~It's impossible to crack an encrypted password~~~
Cryptography makes it difficult to crack a password (but it's still possible).

### Offline dictionary attacks

An *offline dictionary attack** occurs when we use an automated program to decrypt an encypted copy of a *password database*.

How might we get to such a copy of a password database?
* By posing as a colleague and asking for it
* Through a security vulnerability in a website
* ~~By creating it from scratch~~
This way, we can decrypt the databse in the comfort of our hideout.

### Dictionary-attacking X Corp.

You're asked to perform an *online dictionary attack* on X Corp., for which you got a bunch of *resources*.

Which of the resorces might help you with your attack?
* A text file with leaked passwords from other websites
* A program to automatically attempt logins
* A vocabulary list with words in several languages
We can use the *program* wwith the *leaked passwords* and the *vocabulary* to automate the login attempts.

### Quiz
Which of the follwoing items would you use in a *strong password*?
* Symbols like !, @, $, and #
* Numbers
* Uppercase letters
* Lowercase letters
A strong password should contain all of these elements.

Which of these *obstacles* can help a website protect its passwords?
* Encryting stored passwords
* Limiting unsuccessful login attempts
* Requiring users to change passwords often
All of these measures will make it more difficult for us to hack the website.

