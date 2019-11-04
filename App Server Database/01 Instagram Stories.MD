# Instagram Stories

## Uploading a Photo

Have you ever wondered how Instagram Stories works?

Altough it may feel like magic, it's just computers communicating with each other.

In this track, we'll learn how Instagram's app and servers work to create such a fun experience for you and your friends.

To get started, let's walk through the steps of adding a photo to your story on the *Instagram app*.

1. Take a photo.
2. Add the photo to your Instagram story
3. View Photo in your story

When you add a photo to your story, you're uplaoding a photo to Instagram.

What do you think happens when you *upload a photo*?
* I am sendinga photo from my phone to an instagram computer.

The computers at instagram that get your uploaded photos are called *servers*.

Can you order the steps an Instagram server might take when you upload your photo?

1. save the photo
2. check if the photo is safe
3. send back a message saying the photo is saved

When your photo *fails to upload*, it's usually because the Instagram app is having a tough time communicating with servers.

What could make it difficult for the Instagram app to communicate with a server?
* a bad internet connection

With a good internet connection, your friends can use their photos to view the photos you've uploaded.

What might an instagram server do when your friend's app asks the server to *see your story*?

1. Find your account
2. Check if your account is private
3. send back the photos in your story if your friend has access

By uploading your photos to a server, your photos can be seen by your friends whenever they want.

With a bit of an understanding of apps and servers, we can dive into how the code on Instagram works and the tools they use to get the job done.

## Finding Photos

Let's dive deper into how the data of Instagram Stories works.

The core part of Instagram are photos and videos. To keep things simple, let's focus on some data stored for a photo.

What *data* might Instagram servers store when a photo is uploaded?

* The image file
* the user account
* The photo is part of an istagram story.

Formatting data makes it easier to design and understand programs.

Try formatting `Photo` data the same way a programmer at Instagram might do it.

```sql
Photo {
    image_file
    user_account
    is_story_photo
}
```
Formatting data makes it possible for a server to work with a *database*. A database is structured set of data.

Try filling out the data of a *Photo* for a database when Joe uploads a cat photo to his story.

```sql
Photo {
    image_file: cat.png
    user_account: joe
    is_story_photo: true
}
```
The database at Instagram has over *40 billion photos*. It has a bunch of different photos uploaded by different users.

Let's tell the server to give us a peek of what's inside Instagram's database.

```sql
Find first three Photos
```
```
Photo { 
    image_file: coolbook.png 
    user_account: emmawatson 
    is_story_photo: true }  
Photo { 
    image_file: soccerball.png 
    user_account: cristiano 
    is_story_photo: false }    
Photo { 
    image_file: learntocode.png 
    user_account: getmimo 
    is_story_photo: true }  
```
Each photo has their `image_file`, `user_account`, and `is_story_photo` set to a specific value.

Can you outline the step a server would take to find photos from joe?

```sql
find photos where user_account is joe
```

To find the photos tha tbelong to Joe's Story, we'll need to tell that to the database using `and`.
```sql
Find Photos where
  user_account is joe
  and is_story_photo is true
```

Photos on your Instagram story 'disappear' after 24 hours though.

So let's add an `upload_date` so we can check if the photo should be visible.

```SQL
Photo {
    image_file
    user_account
    is_story_photos
    upload_date
}
```
With the updated data structure, the server can find photos that were uploaded less than 24 hours ago.

```SQL
find Photos where
  user_account equals joe
  and is_story_photo equals true
  and upload_date is less than 24 hours ago
```

### Server and database
The logic for saving and finding photos is the interaction between the instagram server and database.

*SQL* is one tool used to code this logic.

## SQL

You might be surpries to find out the program you've been outlining and how it's written in SQL aren't so different:

```
Find Photos where 
 user_account is joe 
 and is_story_photo is true
```

```SQL
SELECT *
FROM Photos WHERE
  user_account IS "joe"
  AND is_story_photo IS TRUE
  ```

## Viewing a Story

With `Photo` data structured, we can take a look at how viewing a story on the Instagram app works.

When you open a story, wou'll usually see a loading indicator before you see the frist photo. Whats happening?

* The Instagram app is requesting photos from an Instagram server


Can you order the steps the Instagram app and server make while a story is loading?

1. App: Request Joe's Story
2. Server: Find PHoto where user_account is joe and uploaded_at was less than 24 hours ago
3. Server: Sort photos by uploaded-at with newest photos first
4. Server: Send back Photo Data
5. App: Display first photo

You just outlined the steps the Instagram app and servers use to display Stories on your phone. From the app to the server and back.

When the Photo data gets sent back to the Instagram app, it just goes through one more step before you can see it in your app.

Do you know what it is?

```sql
Photo {
    image_file: cat.png
    user_account: joe
    upload_date: 6 hours ago
}

Photo {
    image_file: house.png
    user_account: joe
    uploaded_date: 8 hours ago
}
```
It gets formatted and displayed in the app

### Formatting OS app data

For formatting data on Android and iOS applications, developers use different sets of tools.

Have you heard of tools used for building iOS apps?
* Swift and Objective-C

For developing Android apps, the set of tools are different. Do you know what they are?
* Java and Kotlin

Can you describe how we would lay out the *image container* if we were to code the Instagram Stories feature?

* Set the image container to spawn the width and height of the screen

Can you order the steps for how we would lay out the image container and the text that displays the username?

1. Lay out the image container.
2. Lay out text for username.

With an image container and text laid out, we can display the data from the server in the app.

```
Photo {
    image_file: cat.png
    user_account: joe
    upload_date: 6 hours ago
}
```
```
username.text = user_account
image_container.image = image_file
```

And there you have it!

We saw how a photo is uploaded to a server, saved on a database, and retrieved to be displayed on the Instagram app.

