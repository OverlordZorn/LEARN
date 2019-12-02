# Responsive Web Design Principles

## Introduction

Today, there are many types of devices that can access the web. They range from large desktop computers to small mobile phones. These devices have different screen sizes, resolutions, and processing power. Responsive Web Design is an approach to designing web content that responds to the constraint of different devices. The page structure and CSS rules should be flexible to accommodate these differences. In general, design the page's CSS to your target audience. If you expect most of your traffic to be from mobile users, take a ' mobile-first' approach. Then add conditional rules for larger screen sizes. If your visitors are desktop users, then design for larger screen with conditional rules for smaller sizes. CSS gives you the tools to write diferent style rules, then apply them depending on the device displaying the page. This section will cover the basic ways to use CSS for Responsive Web Design.

## Create a Media Query

Media Queries are a new technique introduced in CSS3 that cahnge the presentation of content based on different viewport sizes. 

The viewport is a user's visible area of a web page, and is different depending on the device used to access the site.

Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.

Here's an example of a media query that returns the content when the device's width is less than or equal to 100px:

`@media (max-width: 100px) { /* CSS rule */ }`

and the following media query returns the content wihen the device's height is more than or equal to 350px:

`@media (min-height: 350px) { /* css rules */ }`

Remember, the CSS inside the media query is applied only if the media type matches that of the device being used.


## Make an Image Responsive

Making images responsive with CSS is actually very simple. Instead of applying an absolute width to an element:

`img { width: 720px; }`

you can use:

```css
img {
    max-width: 100%;
    display: block;
    height: auto;
}
```

The `max-width` property of 100% scales the image to fit the width of its container, but the image won't stretch wider than  its original width.

Setting the `display` property to blick changes the image from an inline elment (its default), to a block elment on its own line.

The `height` property of auto keeps the original aspect ratio of the image.

##