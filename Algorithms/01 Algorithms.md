# Understanding Algorithms

Let's try to figure out a real-world situation. We have two glasses, one with *water*, one with *soda*.
How could we *swap* the liquid placed inside of the glasses? It doesn't seem possible without mixing the two liquids, does it?

## Temporary

If we want to swap the liquids, we'll need to *temporarily* add an *empty* glass.

This way, we cann add the contents of one container into the other. We'll do that again and again until we've swapped the liquids.

We just went through an *algorithm*: a set of *instructions* that are in a *specific order* which result in a completed task.

This is called *swapping* and is a key step in a lot of programming algorithms.

Here's how the algorithm looks like when written in a programming language called Python.

```py
glass_1 = "water"
glass_2 = "soda"

temp = glass_1
glass_2 = temp

print('glass_1 = ' + str(glass_1))
print('glass_2 = ' + str(glass_2))
```
```
glass_1 = soda
glass_2 = water
```

## Sorting
Algorithms can come in all shapes and sizes. For example, this is a sorting algorithm that uses the swapping technique as well:

```py
arr = [3,7,1,4,9,2,5]

length = len(arr)

for i in range(length):
  for j in range(0, length-i-1):
    if arr[j] > arr[j+1]:
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
print(arr)
```
```
[1, 2, 3, 4, 5, 7, 9]
```
See how useful *swapping* can be in programming?

## Sorting and searching
For now, we'll focus on just two types of algorithms: *searching* and *sorting*. Two fundamental problems in computer science.

# Algorithms in Practice

Time to put what we've learned so far into practice. We'll do that by creating an algorithm that *swaps* values between two variables.

```py
var_1 = 5
var_2 = 10
temp = var_1

print('var_1 = ' + str(var_1))
print('var_1 = ' + str(var_2))
print('temp = ' + str(temp))

var_1 = var_2
var_2 = temp

print('var_1 = ' + str(var_1))
print('var_1 = ' + str(var_2))
print('temp = ' + str(temp))
```

## Algorithms Revise
What's an algorithm?
* A set of instructions in a specific order resulting to a completed task.

# Linear Search

Algorithms are important for efficiently searching through data, since data is useless without ways of looking through it.

After all, would you ever find what you need without a *search engine*?

We usually search through a collection of ata that has a basic structure. A good example is a list.

A *list* is just a sequence of values.

Just like your grocery list, computers go through lists one by one.

However, computers can't go through the whole list all at once. They can only go through each item *one* at a time.

That's why it's very important to number the items in a list.

We call the position of a value in the list its *index*. Think of an index as an *address*.

*Indicies* are pretty weird though. They start at `0` instead of `1`.

This means that the inddex of the last position will always be the length of the list minus `1`.

We can use indices to search a list. One of the simplest search algorithms is called *linear search*.

It is simple: we go through each value one by one and check if it's the value we want.

In Python, creating a list is pretty simple. We just add a variable name, and then the values in between *brackets* and separated by *commas*.

We can use indicies to access specific values of a list. We just need to add the name of the lsit and the value between brackets.

To go through each position of a list, we'll use a loop. We'll use a for loop in this example and look for `2` as the target value.

We'll use the `len` function to get the size of the list. That way, the for loop knows when to stop.

```py
values = [5,3,2,7,9]
target = 2
for i in range(len(values)):
    if values[i] == target:
        print(i)
```

# Bubble Sort
We learned how to search through a list and find what we need. But wouldn't it be easier if the list was *sorted*?

Sorting is a very important problem in computer science, and there are plenty of algorithms to tackle it.

A simple way to sort values is called *bubble sort*. It works by comparing two values and finding out which is bigger.

It then *swaps* places between them, moving the bigger value up the list. It's just like **bigger** buttles moving up faster in a glass of soda.

We have to do this several times to move all values from small to big.

Here's how the code would look so far. Notice that we're using the swap function we learned in the first chapter?

```py
list = [5,3,2,7]
length = len(list)
for i in range(length):
  for j in range(length-1):
    if list[j] > list[j+1]:
      temp = list[j]
      list[j] = list[j+1]
      list[j+1] = temp
print(list)
```

If we take a closer look at the code for bubble sort, we might notice that we have two *for loops*. Let's talk a bit about how they work.

The first loop executes the same number of times as the length of the list minus `1`. However, we shouldn't forget we start from `0`.

```py
...
for i in range(length):
  print(i)
```
```
0
1
2
3
```

The secound loop compares values. `j`is the index used to get one value and `j+1` is used to get the value to it's right.

'j' starts off as `0`at the beginning and goes through the list.

Because we use `j+1`, the second loop doesn't need to reach the last value.
This means the for loop only goes until `length-1', or '4-1=3'.
```py
...
for j in range(length-1):
  if list[j] > list[j+1]:
    print(str(list[j]) + ' and ' + str(list[j+1]))
```
```
5 and 3
3 and 2
2 and 7
...
```
Might not seem to matter, but this makes the algorithm more efficient and makes sure there are no errors.

Although we go through tle ist as many times as the length, we don't have to check the **entire** list each time.

That's because each time we go through the list, we've added another final value at the end.

After having sorted the frist element, the secound time we go through the list we only have to compare every element **except** the last one.

When we go through the list the third time, the last *two elements* are already sorted and at the end of the list.

This means that we only have to check every element except the last two.

To *optimize* bubble sort, all we have to do is subtract how many values we've already sorted. That's i!

```py
list = [3,7,1,4,9,2,5]
length = len(list)
for i in range(length):
  for j in range(length-i-1):
    if list[j] > list[j+1]:
      temp = list[j]
      list[j] = list[j+1]
      list[j+1] = temp
print(list)
```

## Bubble Sort in Practice

Let's practice our knowledge of *bubble sort*. we'll do that by creating a simple, *non-optimized* version of the algorithm.

```py
list = [3,7,1,4,9,2,5]
length = len(list)

for i in range(length):
  for j in range(length-1):
    if list[j] > list[j+1]:
      temp = list[j]
      list[j] = list[j+1]
      list[j+1] = temp
print(list)

