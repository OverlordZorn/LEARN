# Mashine Learning

## Intro

Machine learning is basically making *software* that is able to *learn* how to do a *task* without us telling it *how* to do it.

It's different from normal software that only executes tasks a developer specified through code.

For example, we can write a simple instruction that displays the title of a book.
`print("Superintelligence");``
That's just a simple instruction that leads to simple output.

With machine learning, we an make software that learns *how* to write on its own.

It could then write totally **new** sentences, paragraphs, or even entire books, all on its own.

Let's look at another example. We could easily write a simple program that can draw a basic shape like a circle.

```js
...
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FF0000';
ctx.stroke();
...
```
We can see taht this is just af ew simple lines of code.

But what if we want to make software that can *draw* anything? Let's say we told a computer to draw a cat as a first task.

How would we do it?

Writing code that explains how to draw one cat would take a **very long time**. Writing code how to draw in general would take even longer.

Instead, we can show the software **what we want**, and let it *decide* which instructions it needs to carry out to draw something.

So we show it an example of a cat, and then it decides what characteristics it needs to replicate.

However, one example isn't enough. It needs a lot of *different* examples from which it can get information.

The examples we give the software are known as *data*.

It can lead to software that developers dont understand.

## Supervised Learning

We've learned that for machine learning to work, we have to give the algorithm a lot of data.

With the help of the data, the algorithm figures out how to get to the right output by **itself**.

Although the algorithm figures out what steps to take, it needs help knowning when it's *right*. To do that, we need to *train* the alogrithm.
One common training method is called *supervised learning*.

In supervised leanring, we show the algorithm amny *pairs* of data. These pairs are made out of *inputs* and *outputs*.

```
Input    |   Output
--------------------
Ireland  |   country
France   |   country
Paris    |   city
```

Data pairs can be as simple as these ones or **much** more complex.

## Abstactions

usually these *inputs and outputs* end up being very abstract numbers. We won't go into too much detail about how they get abstracted.

However, let's take alook at a simple example of how the algorithm tries to figure out the correct steps from input to output.

Let's think a bit like an algorithm. We're given a set ov values, `4, 5, 6` as input and `6,7,8` as output.

We need to change thefunction `result()` to get from the input to the output. For a start, let's try adding `1`.

```py
def result(x):
  print(x+1)

result(4)
result(5)
result(6)
```

We can see that the output we have is not the output we want, but we got *closer* to what we want. Let's tweak the code a bit.

This time, we'll try something different. Remember, the output should be 6,7,8.

```py
def result(x):
  print(x+2)

result(4)
result(5)
result(6)
```
That's it! We just needed to figure out steps we need to take to get the desired output. The awnser is adding 2.

That was a straightforward example that required only a few steps.

Algorithms go through many more examples of data and try *thousands* of ways to achieve the desired output.

As a final note, it's good to know that because algorithms work with abstract data and figure out their own ways of acheiving a result it is possible that humans aren't able to understand the solutions they develop or even know how they work.

## Unsupervised learning

Another way of training an algorithm is though *unsupervised learning*.

Algorithms that are trained this way can find patterns between data and create their **own** *categories*.

Compared to supervised learning, we dont need to provide any desired output, only input.

When using unsupervised learning, we dont need to specify any output.

Data with no specified featrues is called *unlabelled data*.

Since we don't have labels, we don't have any clear goals. This means it's hard to compare unsupervised leanring algorithms with other ones.

Let's look at an elementary example. What would be a good number of categories for the follwoing numbers.

```py
numbers = [-2,4,5,3.14,-5000]
```
We can see that we have negative numbers, positive numbers and decimals as categories.

Unsupervised learning can be beneficial for things like learning about user behavior or characteristics when developing apps.

With enough data, it's possible to split up users into categories such as education, age and time of use among many others.

