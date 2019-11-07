# Understanding Video Games

## How games work


### What are games?

Have you ever wondered **how** games work? What do gamers mean when talking about *frames per secound*, *GPUs*, *rendering*, and *game engines*?

### Input/Output

Simply put, a *video game* is a game on a n electronic device. It uses a display for *output* and devices like controllers for *input*.

### Frames per Secound

When displaying images on a screen, there's one factor that usually determines how *smooth* a game feels: the *FPS*.

Frames per Secound is a key element on making games look and feel smooth.

### How Many

PFS refers to how many images, known as frames, are *shown* during *one secound*. A good game displays between 30-60 FPS.

Let's divide a second by `30` to see how long a frame lasts on screen when we play at 30 FPS.
```
1/30 = 0.033333
```
That not a lot of time at all!

### Rendering

This means that a video game has only a fraction of a secound to *create* the next frame. Creatinga frame is called *rendering*.

To render, the game takes information about the current state of the game like colors, positions, and physics and then creates the frame.

### Processing

Games work better when they have a lot of *processing power*. For that, the machine we're playing on needs a good *GPU* and *CPU*.

### GPU

Cayn you guess what GPU stands for?
* Graphics Processing Unit

### GPU Explained

The GPU is in charge of creating the *look* of your game. It helps render the color, lighting, effects, and much more.

Everything you see in a game is made with the help of the GPU.

### CPU

The CPU stands for *Central Processing Unit*.

It's a chip that handles all of the logic and hpysics of the game, like jumping or defeating an enemy.

## Game Engines

### A log going on

Video games have a lot of things going on: sound, graphics, physics, networking and much more.

Where do we start when we want to create one?

We could start from scratch and figure out a way of assembling all of these different pieces together.

Or, much easier, we can use a *game engine*.

### Game engine

Games are powered by *game engines*, which are programs that handle the details of common game-related tasks.

What do you think game engines can do for us?
* Simulate physics
* Render grahpics with the help of the GPU

### Physics

Game engines are esssential because they can do all of the important calculations for thins like jumping or falling.

They even let you choose between 2D and 3D physics depending on the type of game you want.

### Logic & Rules

Besides graphics and physics, there's antoher important part of making games. It's how we implement a game's *logic* and *rules*.

Can you guess what this part is?
* Programming

We define a game's logic and rules with the help of programming.

### Scripts

When using a programming language to create a game, we usually work with *scripts*. Scripts are files that we can use multiple times.

```
void Update() {
    if (wallCollision == true)
        moveLeft = true;
        ...
}
```

We can create one script from movement and reuse it for every element that needs to do the same actions.

### Update

The most important part of any game is the part of the code that *updates* the game.

Why would it be so important though?

### FPS
We mentioned that games have different FPS, also known as Frames per secound.

In video games, an update function is called *every time we render a frame*.

### Checks

We use update functions to check the current state of the game, if we're interacting with objects, or if anything needs to be triggered.

Every time we want to render a frame, we'll need to call an update function, check for any changes and add them to the image.

## Graphics

### Amazing Graphics

Today, most video games have amazing graphics.

While some look like real life and others look more like fantasy, they all rely on many of the same technologies to work.

### Resolution

The most important part of graphics is the *resolution*. The higher the resolution, the better the graphics.

You've probably come across resolution sizes before: 1024x576, 1280x720, 192ßx1080 and so on. But what do they mean?

### Pixel
Simply put, the resolution is the number of *pixels* in one image. A pixel is nothing more than a **very** small square on a screen. Every image you've ever seen was made out of **a lot** of pixels.

### 1080p

The total number of pixels is the result of multiplying how many pixels there are widthwise and heightwise.

Let's see how many pixels an image that is `1920`pixels wide and `1080` pixels tall has.

```
1920x1080= 2 073 600
```
Wow! Anytime you've selected `1080p` on a n onlien video you were seing over two million pixels during each frame.

### Jaggies

But pixels can't overlap, and this leads to a problem. Since we can only display images with these small squares, diagonal lines are tricky.

This causes them to have jagged edges, hence the informal name of *jaggies*. the formal term of this is *aliasing*.

### Anti-Aliasing

To fix tis, video games have an *anti-aliasing* setting. This changes the color of pixels around the edge in order to smoothen the lines.

Depending on your hardware, it might take a bit to process, but it helps make games look a lot better!

### Screen tearing

Another common problem for graphics is called *screen tearing*.

Screen tearing is when two or more *different frames* appear on the screen at the *same time*.

### Refresh Rate

The reason screen tearing happens is because the monitor has a different *refresh rate* than the number of frames per secound rendered.

For example, if the game is rendering the game at 120FPS, a monitor that updates 60 times per secound won't be able to keep up.

### Do the math

Let's say  monitor has a refresh rate of `75 Hz`. This means the monitor can update `75` times a secound. The game, however, has `120` FPS.

Let's devide the FPS to the monitor's refresh rate.

```
120/75=1.6
```
That means that during one secound, the monitor recieves more than just one frame, which can caus screen tearing.

### Vsync

To fix that, games have a *Vsync* setting that synchronizes the refresh rate with the FPS, getting rid of any tears.

