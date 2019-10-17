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

