# SQL CORE

# QUERIES

## Manipulation

So now that we're equipped with lots of *statements* and *clauses*, let's look into *queries* with more detail!
```SQL
WHOL TALBE?
```
We've got the following fields now: `id`, `first_name`, `last_name`, `age`, `email`, and `city`!

For this chapter, our `people` talbe has been extended to make room for more *queries*.

How about we get to know all of the people in our table?
```SQL
SELECT first_name, last_name FROM people;
```
```
first_name / last_name
----------------------
Bob / Jones
Smith / Agent
...
``` 
We can seperate our fields with *commas*! Again, our results are stored in a *temporary result table*.

## Sorting

How would we go about finding the cities our people live in and showing them in *ascending order*?

```SQL
SELECT city, first_name FROM people ORDER BY city ASC;
```
Psst: Just using 'city' would work as well since that would ask is *implied* when using ORDER BY.

## Limitaions
So this screen is a bit small to keep showing us all of the records in a table.

How do we limit these to 5?

```SQL
SELECT last_name, email FROM people LIMIT 5;
```

## Multiple Conditions
Say we want to see a *record* where 3 *conditions* are *true.

```SQL
SELECT email FROM people
WHERE city = 'London'
AND age > 50
AND last_name = 'Holmes';
```
We can chain together as many *conditions* as we like with `AND`.

## Even more Conditions

We can use *multiple conditions* with different clauses as well!

```SQL
SELECT email, age FROM people
WHERE city = 'London'
AND (AGE > 50 OR age <50);
```
We can use OR to determine either condition as true, which means we'll get a result set that fits both bills.

## Intermittent
Wait aminute, doesn't that look similr to another clause we learened about?
```SQL
SELECT email, age FROM people
WHERE age BETWEEN 36 AND 45;
```
Note that if we don't *specify* an *order*, the result set will order itself by the *record's position* in the table.

Ok, so it's not the same. The comparison operator we used in the last lesson (> and <) are not inclusive, wheras `BETWEEN`, is!

## Patterns

How can we use *patterns* to find *multiple fields* in our table?

```SQL
SELECT first_name, city FROM people
WHERE first_name LIKE '%ob';
```
That's it! % matches *any* characters that come before ob in this case!

## Specific Patterns
What if want a very specific pattern?
```SQL
SELECT email FROM people
WHERE email LIKE '_______@%';
```
Ha! We've asked for emails that have 7 characters before the @.
Remember, each _ represents an idividual character, and % represents any.

## Negation
Let's work with some negation and sorting. Let's sort *last names* in *decending order*, as long as the city for the record is not `London`.
```SQL
SELECT first_name, last_name
FROM people
WHERE city NOT IN ('London')
ORDER BY last_name DESC;
```
We can also use `!=` instead of `NOT IN`.
Did you notice that SQL sorts *Capital letters first*?

## Compedium

A *query* is used to *extract* data from a table, and always uses the `SELECT` statement. `WHERE` is a *clause* we can use with `SELECT`, and we use a different *statement* to add data to tables.

* How do we query for *specific* fields?
By seperating column names with `,`
    - When using a `SELECT` statement, we declare the fields we want in our result set, and seperate them using `,`. `*`will give us *whole* records.

* We have alot more ages now. How do we get the *average* age?
```SQL
SELECT AVG(age) FROM people;
```
We have to pass a *parameter* to our function, so it knows what values to calculate with! *Clauses* don't accept *aggregate* function.

# Functions

## Aggregate Functions

SQL also has bult in *functions*. a *function* combines *many lines of code* into one word we can use.

*Aggregate functions* give us a *single value* from a calculation performed on *all* values in a *column*.

```SQL
FUNCTION(column_name)
```
This is the conventional *syntax* for *aggregate functions*.

## Scalar Functions

But calculating *values* isn't the only thing we can do.

*Scalar functions* return a *value* ased on the *input* we have given.

```SQL
FUNCTION(input)
```
The input we give a *function* is called a *parameter*. All *parameters* are placed in between *parentheses*.

## COUNT()
This *aggregate* function counts the *number of records* in whatever field we give it.

```SQL
SELECT COUNT(*) FROM people;
```
```
count
-----
10
```
That's pretty simple, isn't it? We're asking for a *count* of *all* records in the `people` table!

## MAX()

This *function* works with *integers* and will give us the *largest* number in a field.
```SQL
SELECT MAX(age) FROM people;
```
```
max
---
800
```

## MIN()
This will give us the *minimum* value of a *column*.
```SQL
SELECT MIN(age) FROM people;
```
```
min
---
15
```

## SUM()
This will give us the sum of all values of a column.
```SQL
SELECT SUM(age) FROM people;
```
```
sum
---
1209
```

## AVG()
This will give us the average of all values of a column.
```SQL
SELECT AVG(age) FROM people;
```
```
avg
---
120.90000000000000
```
It's very percice, isnt it?

## Round()
This function will automatically round up.
Also, we can put *functions inside functions*.

```SQL
SELECT ROUND(AVG(age)) FROM people;
```
```
round
-----
121
```
Since we need something to round, the avg function gets called first.

## LENGTH()

What about those moments when we want to know *how long a text field is?*
```SQL
SELECT LENGTH(email) FROM people;
```
```
length
------
16
15
18
21
15
...
```
This brings up the *length of each* record's email address.

## CASE

We can also *modify the result set* as it is returned to us.

```SQL
SELECT frist_name, UCASE(last_name) FROM people;
```
```
first_name / upper
------------------
Bob / JONES
Smith / AGENT
...
```
Pretty cool, huh? Can you think of cases where it could be sueful to have results sets that are all upper or lower case?

## Compedium

Now we know how to work with *aggregate* and *scalar* functions,  
how would you find out the number of people who live in London?

```SQL
SELECT COUNT(*) FROM people WHERE city = 'London';
```
Psst: we can also use the `IN` statement instead of `=`.

* What is an *aggregate function*?
An *aggregate function* performs predefined processes where it returns a *single value* as a *calcuclation* of all values in a column.

* What is a scalar function?
A *scalar function* performs processes *on given parameters* and returns one or multiple values based on that input!

* How do we count the number of records where the agefield is less than 50?
```SQL
SELECT COUNT(age) FROM people WHERE age < 50;
```

* Say we want to know how long is the *longest* first name in our table is?
```SQL
SELECT MAX(LENGTH(first_name)) FROM people;
```

# Keys and constrains
## NOT NULL
We've seen a few times before. But let us iterate that it is valid for *any data type*, not just integers.
```SQL
CREATE TABLE playlist(
    id INT NOT NULL,
    song_title TEXT NOT NULL,
    length INT,
    album_id INT);
```
By default, fields can be `NULL`. in other words, have no value, can be empty.

## UNIQUE
Another useful *constraint* is `UNIQUE`. We add a *unique* column slightly differently.
Let's modify the `id` in the table we just created. We may have many songs in our playlist, but each one is *unique*.

```SQL
ALTER TABLE playlist ADD UNIQUE (id);
```
`UNIQUE` constraint requires a *value* fora field, but this value *cannot be duplicated* anywhere in that column.


## CHECK

There is a constraint that **checks** wether a value we want to add meets a vertain *condition*.

Let us make sure that songs in the playlist table can not be less than *tree minutes long!*

```SQL
ALTER TABLE playlist (
    ADD CONSTRAINT length
    CHECK (length >= 3));
```
With the `CHECK`constraint, we can make sure that any value in the `length`column is greater than 3.

## DEFAULT

When we do not have a value to add to a column, we can set a `DEFAULT` constraint taht will will it in for us.

If we're just building a playlist, surely we haven't played the song yet!
```SQL
ALTER TABLE playlist
    ADD played BOOLEAN
    DEFAULT true;
```
If we don't specify wether or not we've played a song, it will automatically be filled in as true.

So we're adding a new column that accepts the data type boolean to our table.

## Dropping Columns

You know, i dont think we need the length column. How do we get rid of it?

```SQL
ALTER TABLE playlist
    DROP length;
```
Now that column, and any constraints associated with it, have been dropped from the table.

## Keys

*Keys* are an important concept in *relational databases*.

They are primarily used to create relationships among the different tables in a database. Remember we did this?
```SQL
CREATE TABLE playlist(
    id INT NOT NULL);
```
But if we assign a *key* constraint to a field, that field will automatically be populated with a unique integer every time we add a new record to a table.

A *key* is essentially an *id*, much like the one we illustrate above.

## PRIMARY KEY

We have mentioned that all records need *unique* identifiers and have used a number of constraints to build that field.

However, `PRIMARY KEY` does that for us.
```SQL
ALTER TABLE playlist
    ADD PRIMARY KEY(id);
```
This automatically requires that the field be unique *and* that it cannot be empty. a *primary* key can only be useid in *one* field per table.

## Multiple Tables

With SQL, we can use *multiple* tables, and relate them to each other in order to *compartmentalize* information.

How relevant is it to our `playlist` table to have every song's album information on it?

```SQL
CREATE TABLE albums(
    id INT PRIMARY KEY,
    name TEXT,
    year INT,
    artist TEXT);
```
We can just create a new table that has album information and *relate* it to our `playlist`!

## FOREIGN KEY

It's important to understand that tables in the same database *relate* to one another through *keys*.

a *foreign* key in a table is a *primary key* from a different table.

```SQL
ALTER TABLE playlist
    ADD FOREIGN KEY (album_id)
        REFERENCES albums(id);

```
We're using the primary key from our new `albums` table in the `album_id`field in the `playlist` table.

## Reiteration

Have a look at our related Tables:

```
-------- albums table ---------
 id |   name   | year | artist
----+----------+------+--------
  1 | Jazz     | 1978 | Queen
  2 | The Game | 1980 | Queen

  ------- playlist table --------
 id |    song_title     | album_id 
----+-------------------+----------
  1 | Save Me           |        2 
  2 | Don't Stop Me Now |        1
  3 | Bicycle Race      |        1
```
Unlike *primary* keys, a table can have *multiple* foreign keys, and *foreign keys* can be empty fields.

Two songs in our playlist belong to the same album. SQL is pretty cool, huh?

## Compendium

Great! Since we've covered *primary* keys, *foreign* keys and *consraints*, lets recap and make sure that the `artist` field in the `albums`table cannot be empty.

```SQL
ALTER TABLE albums
    ALTER COLUMN artist SET NOT NULL;
```
Now we will always have to provide an artist name when creating a *new* record for this table.

* What is a constraint?
A *constraint* determines a *condition* a value must meet in order to be inserted into the table, but does not limit the size of the table or the columns' data type.

* What does `CHECK` do?
    * only allows vertain values in a column
    * limits the value range for a field
The `CHECK` constraint only allows values that are *within its declared range* to be entered into a column.

* What *constraint* do we use to automatically fill a field?
    We pass `DEFAULT` a value when we declare it, and unless we provide a different value for a new record, it will turn to its *default* constraint.

* What defines a primary key?
    * every record in a table has one
    * it is a keyword
    * it is a unique identifier
A Primary key is a unique identifier and is declared as a keyword. Every record in a table must have one.

* What are *foreign keys*?
    * They represent a primary key fora a record in a different table
    * a talbe can have many of them
A foreign key is the primary key of a record from another table, and a table can hold multiple foreign keys.

