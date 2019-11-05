# Conflicts
## Merging branches

We can *merge branches* to bring their changes together.

```
$ git checkout alternate_reality
$ git merge master
$ git log --graph --all --oneline
```
```
* 4b45192 Merge commit 
|\
| * 1b18076 Add cake 
* | c07222e Add cookie 
|/ 
* f8eff11 Initial commit
```
Psst: as long as the files in the brances don't *conflict*, the merge will go ahead smoothly.

We switch to the branch we want to *merge into* and use `git merge`followed by the *branch name* we want to take the changes from.

## Conflicts
If there are versions of a file with *different changes* in branches we want to merge, we'll face a conflict that we need to resolve.

```
$ git log --graph --all --oneline
*1b18076 Modify cookie
| * c07222e Modify cookie
|/
* f8eff11 Add cookie
```
See that? Both *branches* have modiied `cookie.txt`. If we try to merge that branches, we'll see a *conflict*.
## Help me, a conflict!
Now if we switch back to `master`and try merge `alternative_reality` into it, we'll be presented with an *error message*.

````
$ git checkout master
$ git merge alternate_reality
````
````
Auto-merging cookie.txt
CONFLICT: Merge conflict in cookie.txt
Automatic merge failed;
fix conflicts and then commit the result.
````
Merging `alternate_reality` into `master`causes a *merge conflict* and Git doesn't know which version we want to keep.

## Locating conflicts

Trying to merge `alternate_reality`into `master` resulted in a *merge conflict*. But what exactly does sucha conflict look like?

```
$ cat cookie.txt
```
```
<<<<<<< HEAD 
Chocolate Chip Cookie
=======
Frosted Snowman Cookie 
>>>>>>> alternate_reality
```
There The *special markings* in `cookie.txt` reveal that we've added `"Chocolate Chip cookie"` in `master`and `"Frosted Snowman Cookie"` in `alternate_reality`.

## Resolving conflicts
Now that we've located the *merge conflict*, how can we resolve it?

- Decide which version we want to keep
- Open a text editor and delete the other version along with the special markings
- Commit the file

Great! Because Git doesn't know which version of the file it should keep, we have to decide, delete everything we don't need and commit the file.

## Merge tools

As projects grow, more and more merge conflicts appear. Wouldn't it be great to have a *tool* to review and resolfe them? Well, that's what *merge tools* are for. 

> There are a number of tools for macOS and Windows but **_SemanticMerge_** is a good choice if you're not sure which tool to go for.

## Quiz

Whats the deel with merging?
- It brings the changes from a branch into another
- We use `git merge` with the branch we want to merge into the current branch
Using git `git merge`with a  branch brings the changes from that branch into the one we're currently on.


What's true about this *graph log*?

````
* 1b18076 Modify cookie
| * c07222e Modify cookie
|/
* f8eff11 Add cookie
````
- There are two branches in this repository
- Merging the branches may result in a merge conflict
There are *two branches* which commits that have changed the *same file*, which may lead to a *merge conflict*.


What happend here?
````
$ cat cookie.txt
<<<<<<< HEAD
Chocolate Chip Cookie
=======
Frosted Snowman Cookie
>>>>>>> alternate_reality
````
- Git added special markings to cookie.txt
- We've created a merge conflict
- We've made changes in different branches
The *special markings* indicate that we've made changes in *different branches* and created a *merge conflict*.


How can we resolve *merge conflicts* in files?
- We can use a merge tool
- We can use a text editor to remove ther version we don't want to keep
Git wouldn't know which versions to keep, which is why we need a *merge tool* or a *text editor* to resolfe merge conflicts.


What's true about the content of `cookie.txt`?
```
<<<<<<< HEAD
Chocolate Chip Cookie
=======
Frosted Snowman Cookie
>>>>>>> alternate_reality
```
- There's a merge conflict
- `"Chocolate Chip Cookie"` is a change we made in the current branch
A calssic *merge conflict*: `"Chocolate Chip Cookie"` is a change in the current branch, `"Frosted Snowman Cookie"` is achange from `alternate_reality`.