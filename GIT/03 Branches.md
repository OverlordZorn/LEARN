# Branches
## What's a branch?
*Branches* allow us and others to work on *different things*, like features, at the *same time*. Let's find out what branch we're on!

```
$ git branch
```
```
* master
```

Psst: as soon as we have additional branches, git branch will display those branches as well.

The `master`branch is the *default branch* of every repository. Every time we add a commit, we're moving along the `master` branch.

## Creating a branch

We can create branches to work in *isloated enviroments.* A new branch is just an *offshot* of an *existing branch*.

Let's create another branch called `develop`.

```
$ git branch develop
$ git branch
```
```
* master
develop
```
Psst: the `*`indicates that we're still on the `master`branch.

Using `git branch`with a *branch name*, we can create a new branch, an enviroment for commits that won't change the `master`branch.

## Switching Branches

With *multiple branches*, we can have *different versions* of `fortune_cookie.txt`that we can access by moving between branches.

Let's create an `alternate_reality`branch and switch to it!

```
$ git branch alternate_reality
$ git checkout alternate_reality
```
```
Swiched to branch `alternate_reality`
```
Our reliable `checkout`command can be used with the *branch name* to switch to another branch.

## Committing again

Whenever we commit something, it'll be committed to the *currently checked-out branch*.

Let's switch back to `master`and commit to it.

```
$ cat cookie.txt
Chocolate Chip Cookie
$ git branch alternate_reality
$ git checkout master
$ echo Frosted Snowman Cookie > cookie.txt
$ git add .
$ git commit -m "Modify cookie"
```
```
[master a8ed121] Modify cookie 
1 file changed, 1 insertion(+), 1 deletion(-)
```

We switched to `master`, so the commit happend in that branch. If we would switch to `alternate_reality`, so would the commit.

## Logging with flags

There's a way to display *logs* that makes reading them a lot easier.

```
$ git log --graph
```
```
* commit 86b289d 
| Author: Elliot <elliot@allsafe.com> 
| Date: Tue Nov 15 11:41 2016 |  
|    Add cake 
| 
* commit 52ebf24   
Author: Elliot <elliot@allsafe.com>     
Date: Tue Nov 15 11:36 2016

        Add cookie
```

Way Better! with *flags* like `--graph`,we can specify what we want Git to do in a more percise way.

## Logging with branches

There's also a *flag* that allows us to view *branches* and the *divergence* of commits.
```
$ git log --graph --all
```
```
* commit 86b289d 
| Author: Elliot <elliot@allsafe.com> 
| Date: Tue Nov 15 11:41 2016 
|  
|    Add cake 
| 
| * commit 168291b 
|/ Author: Elliot <elliot@allsafe.com> 
| Date: Tue Nov 15 11:38 2016 
| 
|    Change cookie 
| 
* commit 52ebf24   
Author: Elliot <elliot@allsafe.com>   
Date: Tue Nov 15 11:36 2016
       Add cookie
```
When we use the `--all`flag along with the `log --graph`, we can see *all commits* from *all branches*.

## Information overflow

When there are *tons* of commits, however, we might not want to see all of the available information at once.
```
$ git log --graph --all
```
```
* 86b289d Add cake 
| * 168291b Change cookie 
|/ 
* 52ebf24 Add cookie
```
Psst: `--oneline`is a short version of `--pretty=oneline --abbrev-commit`.

What a beautiful piece of condensed information we have there!

## Quiz

Whats true about `.git` folder?
- We can view its contents with ls .git
- It contains a file taht specifies the `HEAD``
- It's a hidden folder

Great! `.git`is a *hidden folder* and contains all the details about the *repository*.

How can we view all the *branches* in a repository?
The `git branch`command, used without any additional parameters, displays all the branches in a repository.


What's git checkout used for?
- Switching to anouther commit
- Switching to an existing branch

We can use `git checkout`with a *branch name* to switch to a branch or with a *hash code* or **tag** to move the `HEAD`to another commit.


Which of these flags can we use with `git log`to view *branches and their *divergence*?
- --all
- --graph
We just put the `--all`and `--graph`flags at the end of the `log`command.


Can you order the commands to create a new branch and then stage and commit a `readme.md`to the new branch?
- $ git branch experiment
- $ git checkout experiment
- $ add README.md
- $ git commit
Nice! We use `git branch`to create the `experiment`branch and `git checkout` to switch to it. Then we can stage `README.md` and commit to the branch.


