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

