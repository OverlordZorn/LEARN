# Network Intros

# Networks

Have you ever wondered what an IP address is or what a router does?

Or how your computer uses these to communicate with people that might be on another side of the globe?

In this track, we'll learn the fundamentals about the networks we use to communicate every day.

In the most basic sense, a network consists of *two or more* connected devices.

Can you order the most logical steps involved in setting up a simple network?

* Add frist device
* Add secound device
* Connect the devices

For something to be considered a network, there should be at least two connected devices.

One of the earliest network types was a LAN or *local area network*.

These types of networks are still prevalent today.

Local area networks are usually located in one geographic area and don't spread over long distances.

In early local area networks, devices at the same location communicated through *physical* means.

Devices often *shared* the same physical connection to exchange information.

Early local area networks were usually found in large institutions with sufficient funds to build them.

Early lans were too expensive for small businesses or homes.

In the beginning, there were many competing standards for connecting devices. The most popular ended up being the *Ethernet* standard.

Ethernet connected different devices through physical cables.

Ethernet is still a popular standard today. You've probably networked some devices in your home with a modern version of an Ethernet cable.

If multiple devices connect through the same Ethernet cable, what would be **necessary** to ensure you reach the *right device*?

An address for the device you want to connect to! Without being able to specify which device you want to communicate with, it would be difficult to ensure you reach the right one.

To ensure each device finds the right destination device on the network, addresses are used. These addresses are known as *MAC* addresses.

A MAC address is like a postal address. It's an abbreviation of *media access controll address*.

A MAC address contains *six groups* of *two identifiers*. Every device in a lcoal area network should have it's own unique MAC address.

Which of these looks like a correctly formatted MAC address?

```x
12-34-56-9A-BC
```

Mac addresses should be unique for each device that connects to the network.

## Interconnected

If you picture asimple Ethernet local area network, it looks like a bunch of devices connected through a single cable.

When devices want to communicate, they create a message with their own MAC address and the MAC address of the destination device.

Let's construct an example communication sent from `DeviceA` to `DeviceD`.

```x
Sender: DeviceA MAC address
Reciever: DeviceD MAC address
Message: Hi!
```

The sender includes their address, the reciever's address and the data that's communicated.

All of the devices in the network listen for communcations that might have their address in them.

If there are a lot of devices trying to communicate and listen at the same time, the network gets *congested* and data migth get lost.

To fix that, a *network switch* helps ease congestion. Imagine the switch splitting one network into two smaller connected networks.

Communication between the two sides of the network only occurs when data needs to pass across the switch.

If DeviceA needs to communicate with DeviceC the message do not congest the network for the devices on the other side of the switch.

## Internet

You might have heard of the *internet*. Well, the internet is just a series of interconnected networks separated by switches.

This interconnected network spans the globe, and there are almost endless paths that devices can use to communicate with each other.

To transfer data efficiently across such a massive web of networks, engineers created the *Internet Protocol* with a new address.

When communicting across networks, connections are assigned an *IP address*. The IP address identifies routes across different networks.

Devices are then able to communicate across many interconnected networks.


Instead of picking just one route to send all the data along, data is split up into parts and sent along different routes.

This way, data could travel across three different routesinstead of only one.

There are two kinds of IP adresses: IPv4 has four sets of numbers seperated by a period, while IPv6 is lnoger and separated by *colons*.

```x
IPv4: 11.981.192.140
IPv6: 0:0:0:0:0:ffff:36dd:d0f1
```
There aren't enough IPv4 addresses to go around, so the IPv6 address was created to meet demand.

Unlike MAC addresses, IP addresses are not unique. A device IP address might change each time it connects to the network.

Internet service providers can assign different IP addresses to devices to help ensure data is moving across the network efficiently.

## Home Network

Both MAC and IP addresses work together to allow communication between devices on different ends of the globe.

The IP address helps data ravel from one network to another network, while the MAC address helps identify devices inside a single network.

IP addresses are most important at network boundaries, while MAC addresses are essential at the individual device level.

You probably have a lot of different devices that you use to connect to the internet at home.

Your internet service provider (IPS) provided you with a *modem* and maybe even a *router* to connect all your devices to the internet.

### Router

Your router is assigned a public IP address from the ISP; this is the IP address that it uses to communicate with all outside networks.

The router uses IP addresses to direct information to and from different places on the internet.

### Modem

To get a message from your device through your router to the internet, you need to connect your router to a *modem*.

A modem looks a lot like a router, but its sole function is to connect your router to the *internet*.

A router routes traffic while a modem makes the connection to the internet.

You may think your home network doesn't have a modem because your devices are only connecting to a router.

However,s ome routers for home networks have both a router and modem inside of them.

Knowing how your home network connects to the internet, we can dive into the world wide web.

# The World Wide Web

## Domains

When visiting a website, a computer sends a message through the router, through the modem, and then, into the *World Wide Web*.

The World Wide Web is just a bunch of files stored on computers *across different networks*.

If websites are located o *different networks*, what type of address is needed for your router to find the right place?

The *IP address* is used to locate computers on other networks.

Mimo hosts a website on a computer with the ip address: `167.99.129.42`.
Let's put togehter the message your computer would send to access it.

```x
Sender: My IP adress
Reciever: 167.99.129.42
Message: I want to access your website
```

Of course, not many people can remember IP addresses for every website they want to visit.

So we use *uniform resource locators (URL's)* which are easy to remember, to direct messages to different IP addresses instead.

```x
Direct  https://www.getmimo.com
Too     167.99.129.42
```

A URL consists of multiple *domains* which help *organize* all the websites on the World Wide Web.

The domains are separated by periods . , so for https://www.getmimo.com the three domains are `www` , `getmimo` and `com`.

## Domain Name Server

All the domains and their IP addresses on the World Wide Web make up the *Domain Name Server (DNS)*.

The special groups of computers used to store domains and their IP Addresses are called *DNS Servers*. They keep track of data like this.

```x
Direct www.getmimo.com
To     167.99.129.42
-----------------------
Direct www.facebook.com
To     163.75.144.65
-----------------------
Direct www.snapchat.com
To     165.94.189.42
```
Only *13* DNS servers organize the eintire World Wide Web!

## Searching Domains

Domains get searched from *right to left*.

When searching for `www.getmimo.com`, your message is sent to the DNS server storing the `com`domain first.

## Top Level Domains TLD 

The `com` domain is called a *top-level domain TLD*. Top-level domains are the largest category of organization on the web.

* `.org` for organizations
* `.com` for commercial use
* `.at`, `.br` and `.cn` for countries like Austria, Brazil, and China

## Subdomain

Every domain inside the TLD is a *subdomain*.

When acessing the Mimo website, the DNS server hosting the `com` domain gets searched  to find the subdomain `getmimo`.

The smallest domain for `www.getmimo.com` is `www`which stands for the `world wide web`.

This is where the IP address on the DNS server is found.

The www subdomain exists for historical reasons and isn't technically needed.

The www subdomain gets, in most cases, directed to the same IP address as the main subdomain.

You'll find that almost all webistes do this just for people wo are used to typing in `www`.

Websites usually add a subdomain different than `www` when they want the message to get directed to a different IP address or web page.

# HTTP und HTTPS

We got a taste of the World Wide web and how websites get located using domains.

But what does *HTTP* stand for in an URL?

HTTP stands for *HyperText Transfer Protocol*

HyperText is a *text* that can be viewed *immediately*.

Think about how fast a website loads when you type in its URL. That content might be traveling from the other side of the globe!

The "Tranfer Protocol" in HTTP stands for the type of *formatting* the messages use when being sent across the internet.

Why do you think it's crucial for messages sent through the internet to be formatted the same way?

So any computer on any network can understand and direct messages it recieves.

Using *HyperText Transfer Protocol*, any computer connected to the internet can read messages it recieves.

HTTP works with *requests* and *responses*.

For example, when you visit http://getmimo.com you make an HTTP request and get an HTTP response.

Each request and response contains a *header* which olds he information for where to direct the message and the protocol.

For example, when you type `http://getmimo.com` into your browser, the URL is split up and put into the header.

If the header contains the information for where the message should get sent, what might we find in the *message*?

The content of a web page

The message in an HTTP request and response is optional.

Thats where *HTTPS* comes into play. HTTPS stands for HyperText Transfer Protocol *Secure*.

What do you think HTTPS might do?

HTTPS encrypts messages so others can't read it. That's why your web browser will give you a warning when visiting sites using http in the url and not https.

Visiting the Mimo Website using HTTPS makes sure only your computer and the servers at Mimo can read the messages you send to each other.
For example, the embarrassing message we saw before would be *tough to decrypt* if you intercepted it while it traveled though the internet.