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

### Quiz

* The Pipe commad uses the output of a command as the input for another.

* to redirect the content of a file for the input of an command, we use command < file

* we use > to (over-)write some data into a file
* we use >> to attach at the end, some data into a file

* The > command directs the output of a command to a file
* to direct some output toa a command, we need to pipe it with |


## Permissions

### Permissions and accessing

Every file on a computer has *permission settings*; while some files can't be edited, others can only be accessed by some users.

Whenever we use a computer, we have to identify with a *user name*.

```
$ whoami
user
```
WE can use the `whoami` command to display out *user name*.

### Classes of permission

Every file on a computer has three *classes* of permission: `user`, `group`, and `others`.

```
$ ls -l
-rwxr--r-- 1 user staff 42 Jun 24 22:00 readme.txt
```
Psst: characters 2,3 and 4 refer to the permissions of `user`, 5,6,7 refer to `group`, and 9,8,10 to `others`.

We can see the *permissions* when we use the *long format* of the `-l` command.

### Permissions of classes

Also, there are three different *kinds* of permission: *reading*, *writing*, and *executing*.

```
$ ls -l readme.txt
-rwxr--r-- 1 user staff 42 Jun 24 22:00 readme.txt
```
Psst: characters 2,3,4 (rwx) show that user can read, write, and execute.
The `staff` group and `others` only have reading permissions.

Let's ignore the rest of the output and look at the *permissions*.

### Viewing permissions

We've already looked at how to *view* the *permissions* of files. Do you remember?
```
$ ls -l
-rwxr--r-- 1 user staff 42 Jun 24 22:00 readme.txt
```
We can also see the *owner:* `user` and the *group:* `staff`.

In order to view the permissions and long-format details, we use the ls -l option, ether alone or with other options.

### Directories 
Let's look ath what the *frist character* means in the *first column* of the long listing.
```
$ mkdir Poetry
$ touch leaves_of_grass.txt
$ ls -l
drwxr-xr-x 4 user staff 68 Jun 24 22:00 Poerty
-rwxr--r-- 1 user staff 12 Jun 24 22:00 leaves_of_grass.txt
```
See that? Directories start with a `d`, as opposed to files, which have a - in the very beginning.

### Changing permissions

How can we *change permissions* with the `chmod` commad. Let's add *write permissions* to `notes.txt` for group.
```
$ chmod g+w notes.txt
$ ls -l
-rw-rw-r--1 user staff 12 10 Sep 15:47 notes.txt
```
We provide the *letter* of the *class*, 
either `+` to add or `-`to remove a permission and
the *permission* itself.

### Superuser
The *superuser*, or `root`, has *permissions* for **everything** on a computer.

Look what happens when we try to access something **without** a permission!

```
$ open protected.txt
LSOpenURLsWithRole() failed with error -5000 for the file /Users/user/Documents/protected.txt.
```
Because we lack the *permission* to open the file, we're presented with an *error*.

### Switching users

If necessary, we can switch to *root* using the *switch user command*.
```
$ su
Password:
```
Sweet! When we use `su`, we'll be prompted to enter the *root password*. When we provide a *user name*, we can also switch to **any** user.

### Sudo

With the `sudo` command, we can get around permission issues by using `sudo`. Let's use `sudo` to remove a file for which we **don't** have *write permissions*!.

```
$ sudo rm protected.txt
Password: 
```
When we use `sudo`, we need to enter the *root password* for the command to work.

### Quiz

* superuser on mac is called `root`.

## Environment

### What's an Environment?

The Terminal knows a lot about the *environment* arount it, like our *user name*, *working directory*, or *language*.

```
$ echo $USER
user
```
It keepts these details in special variables that are called *environment variables*.

### Environment Variables

IN a nutshell, environment variables are stored as *key-value pairs*.

```
$ env
TERM_PROGRAM=Apple_TerminalSHELL=/bin/bash
USER=user
PWD=/Users/user/Documents
HOME=/Users/user
```
Looking at the `HOME` variable, `HOME` is the *key* and `/Users/user` is the *value*.

The `env` command brings up all the environment variables of the current *Terminal session*.

### Path

While your computer might have slightly different *environment variables*, it'll have a `PATH` variable for sure.

```
$ echo $PATH
/usr/local/bin:
/usr/bin:
/bin:
/usr/sbin:
/sbin:
```
Whenever we attempt to runa *command* or *prgoram*, the Terminal will look in these directories for an *executable file* with that name.

### Which path
So, where can we find the *commands* that we've been using so far?
```
$ which echo
/bin/echo
```
Psst: we can even use the `which`command with **itself**.

When we use `which` with a *command*, the Terminal gives us the location of the *executable file*.

### Echo and the environment

As we've seen in some examples so far, we can use the `echo` command to`view` an environment variable.

```
$ echo $HOME
/Users/user
```
We just write the *variables name* after `echo`.

### Setting environment variables

In order to *set* an envrionment variable, we can use the `export` command.

```
$ export SECRET_PASSWORD=123456789
```
Psst: `export`will only save the vraiable for this very *session*. When we close the Terminal window, the variable will be gone.

After the `export` command, we write the *variable's name*, an `=` and the *variable's value*.

### Modifying variables

We can also use `export` to *modify* an existing environment variable. Let's try to add something to `$PATH`!
```
$ export PATH=$PATH:/Users/user
```
We follow `export` with the *envrionment variable* to modify and assign the *directory* to it.
We have to include `$PATH` so it doesn't lose its current content.

### Profile files
If we want to keep these variables, we can use *redirection* to append the environment variable to the so-called *profile file*.

```
$ echo "export PATH=$PATH:/Users/user" >> ~/.bash_profile
```
This *profile file* sets environemnt variables at the *beginning* of a Terminal session.

Fnatastic! With `>>` we can *append* a `PATH` to the end of the `.pash_proifle` file.

### Quiz

* The `PATH` environment variable is a *list of directoryies* that programs can be run from without specifying the diretory.
    * It contains the directories that the Terminal will look into when we try to run a program.

```
$ export API_KEY=123
$ export API_KEY=987
$ echo $API_KEY
987
$ echo "export $API_KEY" >> ~/.bash_profile
```
We ue `export` to *set* and *change* the `API_KEY`, `echo` to *display* it and `echo` with `>>` to *append* it to the end of the *profile file*.


## Extras

### A few mor useful commands

There's just a few *additional commands* that we should know before we'll be Terminal heros.

How do you think can we find the *manual* for a command?

```
$ man ls
```
```
LS(1)                     BSD General Commands Manual                    LS(1)  NAME 
ls -- list directory contents 
...
```
Psst: we can quit the manual using the *Q* key.

The `man` command brings up a *full manual* for a command. Using `man` with `ls`, for example, displays all the details of the `ls`command.

### Searching
The `grep` command helps us searching for files and akes two *arguments*:  
the *text* and the *files* we're looking for.

```
$ grep Mimo *.txt
Mimo
```
See that? If a `.txt` file contains that text, we'r presented with the *full line*. `grep` comes in quite handy with the `*`, the *wildcard command*.

### Finding

Now, `find` does what it says on the tin - it finds *file names* that match a given *text*.

```
$ find . -name "*.txt"
./.readme.txt
./readme.txt
```
Sweet! `.` tells the `find` command to look in the *current directory*, `-name` searches the *names* and the text in  `""` is, well, the *text* to match.

### Processes

Whenever we run a program on a computer, *processes* that belong to the program will *execute* in the background.

```
$ ps
12300 ttys000 0:00.39 -bash
```
If we ust use `ps`, we're presented with the processes of the *current session*. `ps x` displays **all** of the active processes.

### Less is more

The `less` command is similar to `cat` but much more useful for *longer text files*.

```
$ less favorite_things.txt
Raindrops on roses
Whiskers on kittens
Bright copper kettles
Warm woolen mittens
```
The Q key takes us back to the Terminal session.

With `less`, we can use the *arrow keys* to scroll through text files, revealing the full documents in the Terminal windows.

### Head

Using `head` we can specify **how much** of a *text file* we want to see.

Which of these do you think will -2 output here?
```
$ head -2 favorite_things.txt
Raindrops on roses
Whiskers on kittens
```
Psst: if we don't provide a *number*, the command will display *ten lines*.

We specify the file name after `head` and provide an *option* that specifies the *number of lines* to display.

### Tail

No Supprieses; `tail` is the *opposite* of `head`. We can use it to view the contents of a file from the bottom.

```
$ tail -3 favorite-things.txt
When i'm feeling sad,
I simply remember my favorite things,
and then I dont feel so bad.
```
While the `-3` option shows the **last** three lines, `-2` displays the **last** two lines of `favorite_things.txt`.

### Sorting

There's also a *command* that allows us to *sort* the tontents of a *text file*, either alphabetically or numerically.

These are the initial contents of fruit.txt: apples oranges pears kiwis bananas
```
$ sort fruits.txt
apples
bananas
kiwis
oranges
pears
```
The `sort`command put them in alphabetical order!

### Uniques

There is a gread command to *filter* the content of a text file and display only *unique entries*.
```
$ cat friends.txt
Elliot
Elliot
Mr. Robot
$ uniq friends.txt
Elliot
Mr. Robot
```
The `uniq`command filters through `friends.txt`and skips lines that are duplicates.

### Quiz

We use the `find` command with . to search the *current directory*  
and `-name` followed by `"*.mp3"` to specify the *extension*.

`less` allows us to display longer text files. We can scroll through its output with our *arrow keys* and exit with *Q*.

 