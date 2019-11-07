# SQL Introduction 

SQL stands for Structured Query Language and is a pgrogramming language we use with databases.

```sql
SELECT name
FROM friends;
```
```
id | name   
----+-------   
1 | Robin
```

## Database

A database helps us search, select and store information in an organized way.

## Tables

Within a database, a table is a collection of data that i's organized into columns and rows.

Might `friends` be a table?

```sql
SELECT *
FROM friends;
```
```
 id | name  | age  | height  
----+-------+------+--------
  1 | Robin |   42 |   1.72 
```

Indeed! `friends` is a *table* and `id`, `name`, `age` and `height` are its *colums*. A row in this table represents a unique `friend` and is reffered to as a *record*.

## Data Types
*Data Types* are like guidelines that we give the columns, or fields, to follow so that they store the right kind of values.

`names` are a `TEXT`-type field for *strings*,  
while `age` is an `INT`-type field for *whole numbers*  
and `height`can take *decimal numbers* of type `FLOAT`.

## Syntax

Any task we want to perform requires a *statement*, which starts with a keyword and ends with a semicolon.

```sql
CREATE DATABASE adventure;
```
```
Query OK, 1 row affected (0.01 sec)
```

With the `CREATE DATABASE` statement, we create a *database* and give it a *name*.

## Statements
For example, we can build a statement to get data from a table.

```sql
SELECT name
FROM friends;
```
```
name
--------
Robin
```

The *select statement helps us get, or retrieve, data from a table. `SELECT` and `FROM`.

## Identifiers

When we write a statement, we often provide so-called *parameters*.

```SQL
SELECT name
FROM friends;
```
We often use the names of the fields and tables we want to perform a task on as parameters.

## Clauses

The lines of such statements are what we call *clauses*. In a select statement, we use a `SELECT` clause for the columns and a `FROM` clause for the tables.

```SQL
SELECT name
FROM friends
WHERE name = 'Robin';
```
```
name
------
Robin
```

Psst: some database systems require *single quotes* ' 'for values, which is why we'll use them over double quotes " ".

We can  use a `WHERE` clause to get data based on certain *conditions*. If we skipt it, we get every row of a table.

## Results

Queries are statements that display, or **return**, data based on parameters.
We get these results as *temporary tables*.

The select statement is a query that returns a temporary table with the `name` column from the `friends` table.

* we start with `SELECT`, provide a *table* in the FROM clause, and set a *condition* in the `WHERE` clause.
```SQL
SELECT *
FROM books
WHERE title = "Harry Potter";
```

* Queries are statements that return data as a *temporary table*, which is true for the select statement.
```sql
SELECT name FROM friends;
```


# Table Manipulation

## Tables

So, back to *tables*. We've heard that they're made up of the related date that's stored in *colums* and *rows*.

Before we move on to create a table, let's have a last look at `friends` using a *select statement!*

```SQL
SELECT name, age, height
FROM friends;
```
```
name | age | height  
-------+-----+-------- 
Robin | 42 | 1.72
```
See that? we can seperate columns, or *fields*, with *commas*.
Each row is reffered to as a *record*.

## Creating

But hwo do we actually *create* a *table* like`friends`? Well, there's a *statement* for that.

```SQL
CREATE TABLE friends;
```
```
ERROR 1113 (42000): A table must ahave at least 1 column
```

Whoa! What happend? as it tourns out, we need to add at least a single *column* at the same time we create a *table*.

## Colums and data types

Let's add that column, then! but which *data type* should the `name`column expect?

```SQL
CREATE TABLE friends (
  name TEXT
);
```
```
Query OK, 0 rows affected (0.01 sec)
```

Right! Because we'll use the `name` column for *strings*, the `text` type is an ideal fit. We use data types like `INT` and `FLOAT` to store `numbers`.

## Identifiers

What if there are records with the same `name` value, though? Well' that's why we want every *record* in a table to have a unique *identifier*, or `id`.

```SQL
CREATE TABLE friends (
  ID INT NOT NULL,
  name TEXT
);
```
Sweet! We've also applied a so-called *constraint* to `id`: `NOT NULL`, which means that the column **must** contain a *value*.

## Altering tables

Alright, we have a *table* with an `id` and a `name` column. That isn't a lot, is it? Let's add an `age` and `height` column!

```SQL
ALTER TABLE friends
ADD name VARCHAR(20) NOT NULL,
ADD age INT;
```
```
Query OK, 0 rows affected (0.01 sec)
```

Psst: `VARCHAR` is similar to `TEXT` but allows us to set a *maximum length* or a *string* and, therefore, save space.

Great! In an `ALTER TABLE` statement, we c an use as many `ADD`clauses as we want, as long as we *seperate* them with *commas*.

## Inserting a full row

Alright, we have a `friends` table, but there's nothing in it. Let's use an *insert statement* to, well, *insert* a record, shall we?

```SQL
INSERT INTO friends
VALUES (1, 'Robin', 43, 1.72);
```
```
Query OK, 1 row affected (0.01 sec)
```

Psst: if we don't specify the *columns* we want to insert values into, we have to provide *values* for **all** of them.

Nice! With an *insert statement*, we insert the values we provide in the *parentheses* of the `VALUES` clause into the sequential `columns`of the table.

## Inserting specific values

We can also *insert* records with *specific values* into a table and leave other fields blank.

```SQL
INSERT INTO friends (id, name)
VALUES (2, 'Win');
```
```
Query OK, 1 row affected (0.00 sec)
```

Perfect! The fields that don't recieve a value use their *default value* or `NULL`. We can't skip fields that have a `NOT NULL` constraint, though.

## Updating

What if we want to change, or *update, information* to an already existing record?

```SQL
UPDATE friends
SET age = 12
WHERE name = 'Win';
```
```
Query OK, 1 row affected (0.01 sec)
```
That's it! We can use an *update statement* with `SET` and `WHERE` clauses to set a different *value* for `age` in the record where the `name` equals `'Win'`.

## Deleting

You know, we can *remove* records from tables and the statement starts with a *keyword* that sounds very much like what it's for.

```SQL
DELETE from friends
WHERE id = 2;
```
```
Query OK, 1 row affected (0.01sec)
```
Pooof! the *record* with an `id` of `2`, is gone from the `friends` table.

## Selecting

Last but by no means least, let's revisit the *select statement* and have the *results* include *multiple columns*!

```SQL
SELECT *
from friends
Where name = 'Robin';
```
```
id / name / age / height
1 / Robin / 42 / 1.72
```
Psst: again, a *select statement* needs at least a `SELECT` and a `FROM` clause to indicate the *table* that we want to *query*.

Nice! We can use a `*` sign to select `all` of columns at once.

## Compendium

*Tables* are a fundamental concept of SQL. We've learned how to *create*, *alter* and *delete* them and have seen ways to work with their *records*.

```SQL
CREATE TABLE team (
  number INT NOT NULL,
  name VARCHAR(20)
);
INSERT INTO team
VALUES (23, 'Michael');
SELECT number, name
FROM team
WHERE number = 23;
```
```
number/name
23/ Michael
```

Aren't they great, those *tables*?

## Quiz
* Tables consists of *rows*, or *records*, and *columns*. We create them with a *create statement* and display them with `SELECT`.

* `INT`, `VARCHAR(20)` and `FLOAT` are *DATA TYPES*, along with `TEXT` and `BOOLEAN`.


```SQL
INSERT INTO things
(id, name)
VALUES
(1, 'raindrops'),
(2, 'roses');
```
* We start an *insert statement* with an `INSERT INTO` clause, provide the *column names*, continue with `VALUES` and finish with, well, the *values*.

* We need a select statement with three clauses: `SELECT`, which only selects the `name` column, `FROM` tablename with `WHERE`.

* To add a *column* to an existing table we use `ALTER` with a new column name and its data type.
```SQL
ALTER TABLE team 
ADD position VARCHAR(20);
```
# Clauses

## Statements and clauses

As we already know, *satetements* help us interact with databeses and are made up of *clauses*.

* SELECT
* UPDATE
* DELETE
* INSERT INTO

Usually, the *name of the clause* that a statement starts with is also the *name of the statement*.

## Syntax

*Clauses* start with a *keyword* and contine with an *identifier*, a so-called *expression* or some other parameter.

```SQL
SELECT name
FROM friends
WHERE name = 'Robin';
```
```
name
---
Robin
```

In a *select statement*, the `SELECT`and `FROM`keywords take *identifiers* and the `WHERE` keyword requiers an *expression*.

## WHERE // Boolean Expressions

How can we use a `WHERE`clause to find a *records* in the `family` table where the `age` is *greater than*, say, `40`?

```SQL
SELECT *
FROM family
WHERE age > 40;
```
```
id / name / age
---------------
1 / dad / 50
2 / mom / 48
```
Psst: again, the *splat operator* asks for **every** column in the record.

With `age > 40`, a so-called *boolean expression*, we only select records where the expression evaluates to `TRUE`.

## AND

We also have a *keyword* that we can use to *chain clauses*, which allows us to get more specific.

How can we get another expression into this query?

```SQL
SELECT *
FROM family
WHERE age > 40
AND name = 'Dad';
```

We want *records* where the `age` is greater than 40 and the `name` is equal to 'Dad'.

## OR

Say we want a *result set* that requires at least one out of two *expressions* to evaluate to `TRUE`.
```SQL
SELECT name
FROM family
WHERE age > 40
OR name = 'Dad';
```
```
name
-----
Dad
Mom
```

We can use an `OR` clause to select *records* which are true to this or that condition.

## ORDER BY

With an ORDER BY clause, we can *sort* a result set by any column.

Let's insert some more redords into the `family` table, select them and sort the whole thing by `id` in descending order.

```SQL
INSERT INTO family (id, name, age)
VALUES (3, 'robin', 12),
(4, 'Win', 12);
SELECT *
FROM family
ORDER BY id DESC;
```
```
id / name / age
---------------
4 / Win / 12
3 / Robin / 12
2 / Mom / 48
1 / Dad / 50
```

If we would order by age alone, without specifying the order, the result would be sorded in *ascending order*.

We can use the `DESC`keyword to specify a `*decending order*. If we wanted an *ascending order*, we would have used the `ASC` keyword.

## DISTINCT

*Columns* other than `id` can contain *duplicate values* but at times, we only want to retrieve the different, or *distinct*, values.

Did you notice the duplicate values in the `age` column of the `family` talbe?

```SQL
SELECT DISTINCT age 
FROM family;
```
```
age
------
50
48
12
```

The `DISTINCT`keyword, which we can use in a `SELECT` clause, only selects the *distinct values* in the column and skips the duplicate 12.

## LIMIT

Depending on the number of records, in a table, sometimes we get larger *results sets* than we bargained for. That's why we can use a `LIMIT` clause.

```SQL
SELECT *
FROM family
Limit 2;
```
```
id / name / age
----------------
1 / Dad / 50
2 / Mom / 48
```
The `LIMIT` claue requires an `INT`-type value with the *maximum number* of records we want to hvae in the result set.

## LIKE

What if we don't have specific values but *patterns* that we want to query for? Well, that the `LIKE` keyword, or *OPERATOR* is for.

```SQL
SELECT *
FROM friends
WHERE name LIKE '%in%';
```
```
id / name / age
---------------
3 / robin / 12
4 / Win / 12
```

Because the `%` sign fills in for *any characters* before and after `in`, the `LIKE` operator looks for records that contain `in`.

## Wildcards

There's another so-called *wildcard* that we can use with the `LIKE` operator, which fills in for *any single character*.

```SQL
SELECT *
FROM friends
WHERE name LIKE '_in';
```
```
id / name / age
----------------
4 / Win / 12
```

We can use the `_` sign to look for records with a `name` field that consists of *three characters* and ends with `in`.

## Compedium

Brilliant! In this chapter, we've taken a closer look at *clauses* like `WHERE`, `AND`, `OR`, `ORDER BY` and `LIMIT` as well as the keywords `DISTINCT` and `LIKE`.

So, what if we want to see the record in the *pole position* of the `family` table?

```SQL
SELECT *
FROM family
LIMIT 1;
```
```
id / name / age
----------------
1 / Dad / 50
```

We've limited our results set to `1`, and since the table is ordered by `id`by default, we got the first record!

## Quiz

What is a *clause*?
* It's a keyword with an identifier, an expression, or some other parameter
* It's what makes up a statement

What is that `*` sign in some select statements about?
* It's called called the *splat operator*
* It returns every column, or field, of a record.
*While it's a wildcard, it doesn't replace characters in strings.

Can you order these lines into a *select statement* with additional clauses?
```SQL
SELECT *
FROM team
WHERE name = 'Michael'
or number = 23;
```
We start with SELECT, use FROM to specify a table, add WHERE with an expression and finish with a further OR clause + expression.

Which of these clauses sort a result set in ascending order?
* ORDER BY age
* ORDER BY age ASC
Yes, ORDER BY sorts in ascending order *by default*.

# Operators

## Assignments

IN SQL, one of the most widely used operators is `=`, the assignment operator.

```SQL
UPDATE friends
SET age = 24;
```

## Comparisons
We can also use `=` as a *comparison operator* though.

```SQL
SELECT *
FROM friends
WHERE age = 24;
```
Psst: because age = 24 can eather be TRUE or FALSE, it's also known as a boolean statement.

In this context, the = compares if age is equal to 24.

## Boolean Statements
With comparison operators like = > and < we can form conditions, or boolean statements.

## Negations

Negation operators look for results that don't match a condition.

```SQL
SELECT *
FROM friends
WHERE age != 99;
```

For comparisons, we can combine ! with other operators.  
!= is not equal to
!> is not greater than
!< is not less than

## BETWEEN

There's a *logical operator* that helps us look at *ranges* and works very well with the AND operator.

```SQL
SELECT id, name, age
FROM friends
WHERE age BETWEEN 0 AND 99;
```
This is an *INCLUSIVE RANGE*, which means that 0 and 99 are part of it.

## NOT BETWEEN

If we want to exclude any records that have fields between certain values, we use the art of ngegation.

```SQL
SELECT *
FROM people
WHERE age NOT BETWEEN 10 AND 50;
```

## IN
We can get results based on wether or not a record has a specific field.

```SQL
SELECT * 
FROM people
WHERE age IN ('75', '20');
```
We can add *multiple values* to the `IN` operator, and it'll give us **all** of the records that meet the *condition*.

## NOT IN
We can *negate*, exclude conditions as well!

```SQL
SELECT * FROM people
WHERE age NOT IN ('75', '20');
```
Have you noticed how easy it is to read these *queries* in plain english?

## IS NULL
In programming, we tend to refer to *empty* as `NULL`. With this *operator*, we can find empty fields in our *records*.

```SQL
SELECT * FROM people WHERE age IS NULL;
```

## IS NOT NULL
```SQL
SELECT * FROM people WHERE age IS NOT NULL;
```


## Compedium
So we've ventrued into assignment, logic, comparison, negation operators.
