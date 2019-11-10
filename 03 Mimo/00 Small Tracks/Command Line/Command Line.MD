# Command Line
## Introduction
### The Terminal
HEy There! This course is all about the *terminal*, or *command-line interface*, which helps us interact with computers on a a deeper level.

Let's give the computer something to repeat!

```
$ echo Dennis
```
```
Dennis
```
See that? WE'll discover that the Terminal is fun to use and a *powerful tool* for everybody, nut just Linux beards.

### Shell Prompt

Have you noticed the `$`sign at the very beginning of the *command line*?
That sign is also known as the *shell prompt* and indicates that the Terminal expects *commands* from us.

### Echoes

So Let's give it a *command*, shall we?
```
$ echo Joe
```
Psst: on your computer, hitting *Enter* will run a command.
With the `echo` command we can display, or output something in the Terminal.

### Listing

HOw about something a little more useful like displaying the *contents* of a folder, or directory?

```
$ ls
```
```
Applications 
Documents
Downloads
Library
Pictures
Videos
```
We use the `ls`, or list command, to reveal the dicrectories and files in a directory.

### Where are we?

Sometimes we navigate around so much that we can lose track of where we are. Luckily, there's a *command* toprint the *working directory*.
```
$ pwd
```
```
/Users/user/Document
```
Psst: on your computer, user will be your *user name*.

Ah, there we are! `pwd` stands for "print working directory" - the address, or *path* of the *directory* we're in.

### Navigating

With that, we're ready to explore the *directories* of the computer. We can hop between directories using the `cd` command.

```
$ cd Documents
$ pwd
```
If the directory after `cd` exists **within** the directory we're currently in, the command will take us right there.

### Navigating further


Let's look at *going up* by a directory in the so-called *directory tree*!

```
$ cd ..
$ pwd
```
By putting `..` after `cd`, we can point to the directory that the current directory belongs to.

### Making directories

Did you know that we don't need a graphical user interface (GUI) to create, or *make*, *directories*?

```
$ mkdir Secrets
```
Great! `mkdir` and a *name* will creat a *directory* in the current dicrectory. We can use `ls` to make sure that the directory is actually there.

### Making files

With the `Secrets` directory in place, let's go there and *create a file* within it!
```
$ cd Secrets
$ touch readme.txt
```
Psst: don't forget any necessary *file extensions*!

It's not quite like the mkdir command. `touch` followed b a file name will *create a new file*.

### Opening the Terminal

If you're on *macOS*, it's great idea to use the *Terminal app* every now and then in order to familiarize with it.

Psst: if you don' have Mac, you can also use an *online environment* like Clound 9.

The *Finder* can help you locate it in the *Utilities* folder in the *Applications* folder.


## Manipulation

### Listing again

Do you remember the *command* that we used to reveal *directories* and *files* in a directory?

```
$ ls
```
```
readme.txt
```

Now, let's look at *other ways* to use it!

### Options

We can add *options* at the *end of commands* to make them more specific.

```
$ ls -a
```
```
readme.txt .secret_readme.txt
```
Using the `-a` option, we can also see *hidden directories* and *files*, which start with a `.`.

### Long listing

There's more to directories and files that their name, like *access permissions* and *last modified date*. Might there be an *option* for those as well?

```
$ ls -l
```
```
-rw-r--r-- 1 user staff 14 Sep 30 14:26
readme.txt
```
As it turns out, we can use the `-l` option to view a *long listing* of a directory.

### Listing by Time

At times it's handy to list the contentsof a directory by the *time* they where *last modified*.
```
$ ls -t
```
The `-t` option will start the list with the most recently modified directories and files.

### Combining options

Now that we know about those options, let's take things a step further and *combine* them in a single `ls` command!

```
$ ls -alt
```
Easy peasy! We can use *multiple options* at the same time by combining them into a *single option*.

### Copying

A big part of manipulating directories and files is *copying*, for which we use `cp`, the *copy command*.

```
$ cd Documents
$ mkdir .secret
$ cp readme.txt .secret
$ cd .secret
$ ls
```
```
readme.txt
```
Psst: these things are called *arguements*.

The `cp` command needs the *file* we want to copy and the *path* we want to copy it to.

### Copying to an existing file

If we use the `cp` command with a *destination file* that already exists, that file is *overwritten*.

```
$ cd Documents
$ ls
leaves_of_grass.txt readme.txt
$ cp leaves_of_grass.txt readme.txt
```
Now we have two *identical files*.

### Arguments

So, *arguments* are special parameters that make commands more specific.

When we pass a *file name* to `ls`, for example, itreturns all files that match the *argument*.

```
$ cd Documents
$ ls readme.txt
readme.txt
```
See that? If we usea file name that exists, `ls` will list it; if it doesn't we're presented with an *error message*.

### Wildcards
The `*` sign, or *wildcard character*, allows us to make *broad searches* because it matches **any** character.

```
$ cd Documents
$ ls *.mov
ls: *.mov: No such file or directory
```
When we combine the `*` sign with a *file extension*, we can search for files with that extension.

### Moving

How can we *move* a directory or file to a different place? Well, there's a *command* for that, and it works just like `cp`.

```
$ cd Documents
$ ls
readme.txt
$ mv readme.txt ../readme.txt
$ cd ..
$ ls
... readme.txt ...
```
There it is! When moving files, we need to provide the *source file* and the *destination*.

### Removing

When directories or files become obsolete, we can use `rmdir` or `rm` to *get rid* of them.

```
$ cd Documents
$ ls
readme.txt
$ mkdir Trash
$ touchTrash/trashme.txt
$ rm -rf
$ ls
readme.txt
```
Psst: we have to be careful when we remove things because there's often no way to recover them.

We can use `rmdir` to remove **empty** *directories* and `rm` for *files*. By adding `-rf` to rm we can remove the directory with all the files.

## Redirection

*Redirection* is all about changing the *input* and *output* of commands.

```
$ echo Joe > readme.txt
Joe
```
See that? The `>` sign redirects the *output* of the *echo* command to `readme.txt`.

### Reading Files

How can we see the *contents* of `readme.txt`, though? As always, there's a *command* for that!

```
$ echo LEAVE ME HERE > readme.txt
$ cat readme.txt
LEAVE ME HERE
```
That's it! The `cat` command reads the file and displays its content in the *output*.

### Counting Words

Another comand we'll use throughout this chapter is the *word count* command.

```
$ ls
more_words.txt words.txt
$ wc words.txt
3 3 12 words.txt
```
Psst: we can use `-l`, `-w`, `-c` as *options* to specifically count lines, words, or characters.

The `wc` command counts and displays the *lines*, *words*, and *characters* followed by the *file name*.

### Redirecting output

We can redirect the *output of a command to a *file* rather than the Terminal.

```
$ ls
readme.txt
$ touch trashme.txt
$ cat readme.txt > trashme.txt
$ cat trashme.txt
LEAVE ME HERE
```
We just created a `trashme.txt` file that we redirected the contents of `readme.txt`to.

### Redirecting input

By default, input comes from the *keyboard*. We can use *input redirection* to change that though.

```
$ wc < readme.txt
1 3 14
```
Using the `<`sign, we're redirecting the **contents** of the `readme.txt` as the input.

### Redirecting more output

Let's look at another use of the *putput redirection, shall we?
```
$ touch word_count.txt
$ wc -l readme.txt > word_count.txt
$ cat word_count.txt
1 readme.txt
```
Great! We can *output* the `wc -l` command to the `word_count.txt` file rather than having it output to the terminal.

### Appending to files

There's a command that allows us to *append* output to the *end of a file*.

```
$ echo Kittens >> favorite_things.txt
$ cat favorite_things.txt
Raindrops
Roses
Whiskrs
Kittens
```
Way to go! While the `>` sign *overwrites* the contents of a file, the ``>>` command *addts the output to the end of the file*.

### Pipes
The *pipe command* takes the *putput* of a command and uses it as the *input* of another.

```
$ echo LEAVE ME HERE | wc -c
13
```
Great! Instead of displaying the output of `echo`, we're using the *pipe command* to make it the *input* for the `wc` command.


## Permissions

## Environment

## Extras
