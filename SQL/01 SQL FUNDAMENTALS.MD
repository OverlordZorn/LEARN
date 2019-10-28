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


