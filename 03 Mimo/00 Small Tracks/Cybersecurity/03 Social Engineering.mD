# Social Engineering

## Man in the mimddle

### What's a man-in-the-middle attack?
a *man-in-the-middle attack* occurs when we eavesdrop on *unsecured chatter* between people and websites.

Who should **encrypt** communcation between their website and its users?
* Financial institutions
* Employers
* Social media networks
Everyone's websites benefit from securing traffic over HTTPS, a *cryptographc* protocol that prevents us from listening in.


### What's its impact?

Man-in-the-middle atatcks seriously affect websites since we can eavesdrop wile *remote* and *undetected*.

So, how could we place ourselves in the middle of *website communication*?
* By installing malware on a user's PC
* By setting up an unsecured WiFi Hotspot
* By using a sniffer to intercept traffic
We can use these methods to intercept and, possible alter *website traffic*.

### Evil-twin-in-the-middle
We can set up a *WiFi hotspot* to entrap people and steal, or sniff, their unsecured *website traffic*.

Assuming that we're at *Hot Stuff coffee shop*, which *hotspot name* might we use to lure people?
* hotstuff-free
That's a clever name for a fraudulent hotspot. This type of man-in-the-middle is called an *evil twin attack*.

### Evil twinning at X Corp.
We've managed to set up an *evil twin* at a cafè close to X Corp.'s headquaters.

Do you see any *interesting traffic* in our *network sniffer*'s log?
```
tls-http:443 - GET bank.com
tls-http:443 - POST bank.com
tcp-http:80 - GET xcorp.com
tcp-http:80 - POST xcorp.com
```
* There's unencrypted data that could be password information
There's *unencrypted data* sent, or posted, to `xcorp.com`without HTTPS that could be *password information*.

### Preventing by taking care
*Evil twin attacks* are preventable by carefully consigering networks before connecting.

Which of the following *oddities* might indicate an evil twin?
* Frequent WiFi disconnects
* Strange WiFi locations
* Promises of fast WiFi networks
* ~~Password-secured Wifi networks~~
Yes! Disconnects, strange locations, and promises of fast WiFi networks can be *signals* for an evil twin.

### Preventing with HTTPS

In order to ensure safe browsing, webistes often communicate with web browser over *HTTPS*.

What do you think HTTPS uses for *secure communication*?
* Cryptography
Remember the lesson on the importance of cryptography? Here's why!

### Quiz

Can you order these mesures to use a *secure connection* for your bank business?
1. Connect to a familiar, secured WiFi network
2. Ensure the bank's website uses HTTPS
3. Log in at the bank's website
Avoid evil twin attacks starts with connecting to a familiar, secured WiFi network.

What do you think is at the *root* of the best defense agains man-in-the-middle attacks?
* Cryptography
Securing website traffic over HTTPS, a *sryptographic protocol that uses *ciphers*, is the best defense against our attacks.

Why would we use a *network sniffer*?
* View details of unencrypted requests
* Monitor network traffic
* Detect network vulnerabilities
* ~~Decrypt data sent over HTTPS~~
You could use a network sniffer or, *packet analyzer*, for these reasons.

## Social engineering

### What's social engineering?

*Social engineering* is manipulating people into giving away confidential information and plays a part in many hacks.

In order to steal private information, who might you pose as?
* A police officer
* a company colleauge
* A PC support technician
Typically, we'll pose as a *trusted person of authority*.


### What's its impact?

*Social Engineering* can have a devestating impact on systems and people's confidence.

How might posing as a PC support techician be useful to us?
* We could infect a PC with avirus
* We could steal bank account infromation
* We could access private files
These are only a few things that we could do with access to a user's PC.


### Pretexting

*Pretxting* involves creating an elaborate scenario to trick folks into saying or doing something and requirs *prior research*.

What might we be looking for in the *research phase*?
* Birthdates
* E-Mali addresses
* Bank names
That's right! Nothing is off limits when building a convincing *pretxt* or backstory.

### Do you even pretext?
In the chat below, we've hijacked Bob's *instant chat account*.

How hould you continue the pretext to convince Alice?
```
<Bob> Hey, Alice, I need help!
<Alice> What's wrong, Bob?
<Bob> Could you send me cash?
<Alice> Well, what for?
```
```
<Bob> My car broke down on my roadtrip and I need money to get it repaired.
```
By inventing an elaborate story, or *pretext*, we've convinced Alice to send cash your way.


### Pishing
*Pishing* is the most common way to pbtain private inforamtion. A *phisher* poses a legit business and uses a fraudulent website.

As a phisher, what *kind of information* might you ask a user to verify?
* Credit card number
* Bank account password
* Social security number
You'd ask the user to verify this on a website that looks and feels legitimate often with a real company's logo.

### Gone pishing at X Corp.

Now that we've got X Corp.'s employee data, elt's go *phishing*!

Can you complete the *message* to an inexperienced X Corp. employee?

```
<Subject> Important message about your account
<Message> Your password has expired. In order to reset it, please visit x.corp.biz/reset
```
That's it! We've directed the employee to enter old and new passwords on our *look-alike* website. Trickster!

### Vishing
*Vishing* is *voice phishing* by phone. It often uses a recording and asks people to enter information like their bank PIN.

During a vishing attack, why would you **reject** somebody's *PIN entry*?
* You want them to try a few different PINs
There's a chance that they'll try **all** of their valid PINs, allowing us to pbtain more information.


### Prevention
*Social engineering attacks* are successful because the lies are convincing.

Which of these *mesures* offer *protection* from these attacks?
* Always thinking twice before providing personal information by phone
* Knowing that banks won't use email for sensitive information
* Educating employees about social engineering attacks

### Counterpunch
You want to steal the *password* of an X Corp. employee but it seems like she's onto you.

How would you respond below?

```
<you> Please supply your password here.
<Eve> No way, X Corp never asks for my password over chat!
<you> There has been a policy change.
<you> For verification, your employee ID is 3823 and your SSN is 575-14-5488.
```
Offering *personal inforamtion* from your *research phase* often creates a convincing case.

### Quiz

In a *vishing attack*, who could you impersonate when phoning somebody?
* The government
* A friend of the victim
The scheme can involve hearing from anybodythe victim trusts.


*How* or *where* are people likely to fall victim to a social engineering attack?
* At their office
* On a social networking website
* By SMS

What would you like a user to do after recieving your *phishing email*?
* Click the link and enter their sensitive information
* ~~Check the legitimacy of your email with their bank~~
* ~~Hover over the links to check your URLs~~
Correct! We want the user to enter *sensitive information* on our website without hesitation.