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


