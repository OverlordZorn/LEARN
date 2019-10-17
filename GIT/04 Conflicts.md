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

Now if we switch back to `master`and try merge àlternative_reality into it, we'll be presented with an *error message*.

```
$ git checkout master
$ git merge alternate_reality
````
````
Auto-merging cookie.txt
CONFLICT: Merge conflict in cookie.txt
Automatic merge failed;
fix conflicts and then commit the result.
````

