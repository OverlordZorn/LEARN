# History

## Logging
As we already know, Git keeps track of every commit that we make. Because of that, we can easliy review them in the so-called `log`.

```
$ git log
```
```
commit ff 698ab
Author: Elliot <elliot@allsafe.com>
Date: Tue Nov 15 14:28 2016
   Add cookie
```
Nice! `git log`brings up the *commit history*, where every commit is displayed with a unique *hash code*.

Lets commit again to see multiple commits in the Git log. This time, let's also add a message.

```
$ touch cat.gif
$ git add cat.gif
$ git commit -m "hello friend"
$ git log
```
```
commit 7c1b0c4 
Author: Elliot <elliot@allsafe.com> 
Date: Tue Nov 15 14:49 2016

      Hello friend  

commit ff698ab 
Author: Elliot <elliot@allsafe.com> 
Date: Tue Nov 15 14:28 2016 

     Add cookie
```

Nice! Now `git log`reveals both of the commits we've made so far. From the commit messages we get an idea of what we've changed.

## Head
The so-called `HEAD`is a*pointer* that points to the *current commit*.

```
$ git show HEAD
```
```
commit 7c1b0c4
Author: Elliot <elliot@allsafe.com>
Date: Tue Nov 15 14.49 2016

    Add cat
```

Sweet! Using `git show`, we can see that the `head`is pointing to the commit with the hash code `7c1b0c4`.

We can easily go back to a previous commit and put the working directory back to the satate it was in at the time.

```
$ git checkout f871379
```
```
Note: checking out 'f871379'.
You are in 'detached HEAD' state.
HEAD is now at f871379... Add cookie
```
Psst: we can either use the *first seven characters* or the whole *hash code*.
Now almost everything is like it was when we made that commit.

When we go back to a previous commit, we can see each file as it was when we made the commit but adding or changing files in there isn't a good idea.

```
$ git checkout f871379
Note: checking out 'f871379'.
You are in 'detached HEAD' state.
HEAD is now at f871379... Add cookie.txt
$ touch cake.txt
$ git status
HEAD detached at f871379
Untracked files:
    
    cake.txt
```

See that? Now the current commit isn't the latest commit anymore, which means we're in detached `head`state, in which commiting can lead to *data losses*.

Be gone, detached `HEAD`, we're going back to the future!

```
$ git checkout master
```
```
Previous HEAD position was f871379
Add cookie.txt
Switched to branch 'master'
```
Psst: now the `HEAD`ponits to the latest commit again.

Using `checkout master`, we can go back to the *latest commit*, where everything is okay again.

## Tagging

Instead of using and having to remember *hash codes*, we can also put *tags* on commits.

```
$ git checkout f871379

    HEAD is now at f871379
    Add cookie and cake

$ git tag v1.2
$ git tag
```
```
v1.2
```
We can use `git tag`with a parameter to add a *tag* and the command **without** any parameters to display the previously added *tags*.

We can also use *tags* in combination with the 'checkout' command.
```
$ git tag
v1.2
$ git checkhour v1.2
```
```
Note: checking out '1.2'.
You are in 'detached HEAD' state.
HEAD is now at f871379
Add cookie and cake
```
Again, we're back at commit f871379. Using *tags* can help us memorize *important commits*.


We can use `git log`to look at previous commits, see who made them, and find out when they were made.


The `HEAD`points to the currently checked-out *commit*. When we check out older commits, we put ourselves in detached-`HEAD`state.


We use `git tag`with a tag name like `v1.3`to create tags and `git add`for staging files.


We use `git checkout`to switch between commits. When we use it with `master`, we can switch to the *latest commit*.


```
HEAD detached at f871379
Untracked files:

    cake.txt
```
`HEAD detached`indicates that we aren't on the latest commit. Also, we can see a list of untracked, or **unstaged** files.