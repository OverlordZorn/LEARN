# Repositories
## Remote repositories

What makes Git so great is that it allows *multiple people* to work on the *same project* at the *same time*.

But how can we coordinate work when our repository is stored on our *local computer*?
````
$ git remote
````
That's it! We can create *remote repositories* on websites like GitHub and share them publicly or privately with others.

## Cloning

As soon as we have a link to a *remote repository*, we can download or *clone*, it to our lcoal computer.

````
$ git clone https://github.com/Elliot/WhiteRose.git
````
````
Cloning into 'WhiteRose' ...
remote: Counting objects: 51, done.
remote: Total 51, reused 0
Unpacking objects: 100% (51/51), done.
Checking connectivity... done.
````
When we use `git clone` whith the link to the repository, Git downloads the repository to the directory we're currently in.

## Viewing remotes

Now that we've cloned `WhiteRose`, let's take a *closer look* at the remote repository!

````
$ cd WhiteRose
$ git remote
````
````
origin
````
Using `git remote`, we can see that the `git close`command from earlier added `WhiteRose` as `origin`.

## Origin

But where does the `origin` remote **actually** point to?

```
$ git remote show origin
```
```
* remote origin
Fetch URL: https://github.com/Elliot/whiteRose.git

Push URL: https://github.com/Elliot/whiteRose.git
HEAD branch: master
Remote branch:
master tracked
...
```
Psst: `origin` ist just a *convention*, a name that's automatically given to a remote for which we don't specify a name.

Using `gitremote show`with the *short name* of the remote, we can see that it points to *URL*s and that its `head` points to `master` branch.

## Fetching changes

If the remote has *changes* in its, say, `master` branch that we want to bring to our *local repository*, we need to fetch them.

```
$ git fetch origin master
```
```
remote: Counting objects: 3, done. 
remote: Total 3, reused 0 
Unpacking objects: 100% (3/3), done. 
From https://github.com/Elliot/WhiteRose.git  
* branch master -> FETCH_HEAD    
c07222e..1b18076 master -> origin/master
```

Using `git fetch` with ` origin` and `master` brings these chagnes to a branch in our local repository called `origin/master`.

## Merging fetched changes

Now that we've fetched the changes, we need to *merge* them from the `origin/master` branch into `master`.

```
$ git merge origin/master master
```
```
Updateing 4b45192..c239b52
Fast-forward cookie.txt
1 insertion(+), 5 deletions(-)
```

We've used `git merge` to bring the changes we fetched into `origin/master` to the `master` branch of our *local repository*.

## Pulling changes

Now, pulling is what we do to bring a *branch* in our *local repository* up-to-date with its remote version.

```
$ git pull origin master
```
```
remote: Counting objects: 3, done.
remote: Total 3, reused 0 
Unpacking objects: 100% (3/3), done. 
From https://github.com/Elliot/WhiteRose.git  
* branch master -> FETCH_HEAD    
c07222e..1b18076 master -> origin/master 
Updating c07222e..1b18076 
Fast-forward cookie.txt 
1 file changed, 2 insertions
```
Psst: we shouldn't have any uncommited local changes before we use `git pull`.

## Pushing changes

Finally, let's find out how we can get our *local changes* to the *remote repository*"

```
$ git add README.md
$ git commit -m "Add title to README"
$ git push origin master
```
```
Counting objects: 3, done.
Writing objects: 100% (3/3), 292 bytes
Total 3, reused 0
To https://github.com/Elliot/WhiteRose.git
1b18076..c7222e master -> master
```
Psst: we need to commit changes before we can push them to the remote.

Nice! `git push`, well, **pushes** commits from our *local repository* to the *remote*.

## Quiz

Whats true about remote repositories?
- We can create them on websites like GitHub
- They allow us and others to work on the same projects at the same time
*Remotes* allow *teams* to work on the same project at the same time and can be created and **hosted** on *websites* like GitHub.


Whats up with this *repository?*
```
$ cd /Developer/Projects
$ git clone https://github.com/fs/HackSIM.git
Cloning into 'HackSIM.git'...
remote: Counting objects: 9, done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 9 (delta 2), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (9/9), done.
```
- It consists of 9 directories and files
- It has been cloned to `/Developer/Projects/HackSIM`
- The remote is hosted on GitHub
The repository was cloned into the *current directory* in and includes 9 files and directories in the *remote repository* on *GitHub*.


What's the deal with`origin`?
- It's the name we normally use when we fetch from a remote repository
`origin` is the *default short name* for remote repositories when we clone or fetch them.


Which command can we use to get changes from a n `origin` remote into a local`master` branch?
- git pull origin master
We need to use `git pull` followed by the *remote* and the *branch* we want to merge into the *current branch*.


What's important to remember when *pushing* changes to a remote?
- We need to make sure that we commit changes before pushing
- We need to use `git push` with the remote and the branch we want to push
- The remote needs to be listed when we use `git remote`
We need to make sure that we commit changes before pushing with `git push`. If the remote isn't listed when we use `git remote`, we need to add it.

