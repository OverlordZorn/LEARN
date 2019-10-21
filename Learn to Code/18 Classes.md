# Using Classes

As we code complex programs, we'll need to create many similar but distinct objects. 

For example, all the books in the library.

But creatinga new object for thousands of books would take a lot of time and could lead to errors.

```java
var book 100 {
    author: "William Shakespear",
    title: "The Da Vinci Code"
};

console.log(book100);
```
```
{ author: 'William Shakespear', title: 'The Da Vinci Code'}
```

To make this process less error-prone and more efficient, we can use data structures called *classes* as templates.

Once we create a template with the properties we'll want for all similar objects, we can use it to create new objects faster.

## Creating a Class

To create a new class, we start with the `class` keywoard, a name, and braces.

Any time we create a new class, we have to make sure the name starts with an *uppercase letter*.


```java
class Book {

}
```

## Constructor

To create new objects, classes need a special method called the `constructor()`.

This method sets the property values for a new object.

```java
class Book {
    constructor() {

    }
}
```

## Parameters
We need a way of specifying the unique values a new object will have. We do that by sending *parameters* to the constructor method.

Here, we add `author` and then `title` as parameters to the construction method.

```java
class Book {
    constructor(author, title) {

    }
}
```
## This

Before creating a new object property, we need a special keyword: `this`.

We use `this` to refer to the object that is being created.

To create a new object property, we need to use the keyword `this` followed by a period and the property name.

To finish creating the new object property, we'll assign the `author` parameter as a value to `this.author` variable.

```java
class Book {
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}
```

## Creating Objects with Classes

Time to use our class. We start the same way we'd crate a variable, but then add the `new`keyword followed by `Book()`.

```java
var book1 = new.Book()
```

We can then add the values we want to set for the new object inside the parentheses.

```java
class Book {
    constructor(author,title) {
        this.author = author;
        this.title = title;
    }
}

var book1 = new.Book("Leo Tolstoy", "War and Peace");

console.log(book1);
```
```
Book { author: 'Leo Tolstoy, title: 'War and Peace' }
```

We can use classes to easily create as many books as we want now, with way les code.

