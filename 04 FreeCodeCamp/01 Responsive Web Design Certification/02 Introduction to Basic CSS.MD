
## Basic CSS

Cascading Style Sheets (CSS) tell the browser how to display the text and other content that you write in HTML.

Note that CSS is case-sensitive so e careful with your capitalization. CSS has been adopted by all major browsers and allows you to control:

* color
* fonts
* positioning
* spacing
* sizing
* decorations
* translations

There are three main ways to apply CSS styling. You can apply inline styles directly to HTML elements with the `style` attribute. Alternatively, you can place CSS rules within `style` tags in an HTML document.

Finally, you can write CSS rules in an external style sheet, then reference that file in the HTML document. Even though the first two options have their use cases, most developers prefer external style sheets because they keep the styles seperate from the HTML elements. This impoves the readability and reusability of your code. The idea behind CSS is that you can use a selector to target an HTML element in the DOM (Document Object Model) and then apply a variety of attributes to that element to change the way it is displayed on the page.

In this section, you'll se how adding CSS styles to the elements of your CatPhotoApp can change it from simple text to something more.

## Change the Color of Text

Now let's change the color of some of our text.

We can do this by changing the `style`of your `h2`element.

The property that is responsible for the color of an element's text is the `color` style property.

Here's how you would set your `h2`elements text color to blue:

```html
<h2 style="color: blue;">CatPhotoApp</h2>
```

Note that it is a good practice the end inline `style` declarations with a `;`.

## Use CSS Selectors to Style Elements

With CSS, there are hundereds of CSS properties that you can use to change the way an element looks on your page.

When you entered `<h2 style="color: red;">CatPhotoApp</h2>`, you were styling that individual `h2` element with inline CSS, which stands for Csacading Style Sheets.

That's one way to specify the style of an element, but there's better way to apply CSS.

At the top of your code, create a `style` block like this:
```html
<style>
</style>
```

Inside that style block, you can create a CSS selector for all `h2` elements. For example, if you wanted all `h2` elements to be red, you would add a style rule that looks like this:

```html
<style>
  h2 {
      color: red;
  }
</style>
```

Note that it's important to have both opening and closing curly braces ( `{}`) around each element's style rule(s). You also need to make sure that your element's style definition is between the opening and closing style tags.

Finally, be sure to add a semicolon to the end of each of your element's style rules.

## Use a CSS Class to Style an Element

Classes are reusable styles that can be added to HTML elements.

Here's an example CSS class declaration:

```html
<style>
  .blue-text {
      color: blue;
  }
</style>
```

You can se that we've created a CSS class called `blue-text`within the `<style>` tag.

You can apply a class to an HTML element like this: 
`<h2 class="blue-text">CatPhotoApp</h2>`.

Note that in your CSS style element, calss names start with a period. IN your HTML elements' calss attribute, the class name does not include the period.

## Style Multiple Elements with a CSS Class

Classes allow us to use the same CSS styles on multiple HTML elements.

## Change the Font Size

Font size is controlled by the `font-size` CSS property.
```html
h1 {
    font-size: 30px;
}
```

## Set the Font Family of an Element

you can set which font an element should use, by usining the `font-family`property.

For example, if you wanted to set your `h2` element's font to `san-serif`, you would use the following CSS:
```
h2 {
    font-family: san-serif;
}
```


## Import a Google Font

IN addition to specifying common fonts that are found on most operating systems, we can also specify non-standard, custom web fonts for use on our webiste. There are many sources for web fonts on the Internet. For this example we will focus on the Google Fonts libary.

[Google-Fonts](https://fonts.google.com) is a free library of web fonts that you can use in your CSS by referencing the font's URL.

So let's go ahead and import and apply a Google font (note that if Google is blocked in your country, you will need to skip this challenge).

To import a Google Font, you can copy the font(s) URL from the Google Fonts library and then past it in your HTML. For this challenge, we'll import the `Lobster` font. To do this, copy the folowing code snipped and paste it into the top of your code editor (before the opening style element):

```html
link href="https://fonts.googleapis:com/css?family=Lobster" rel="stylesheet" type="text/css">
```

Now you can use the `Lobster`as the FAMILY_NAME as in the following example:
`font-family: FAMILY_NAME, GENERIC_NAME;`.

The GENERIC_NAME is optional, and is a fallback font in case the other specified font is not available. This is covered in the next challenge.

Family names are case-sensitive and need to be wrapped in quites if there is a space in the name. For example, you need quotes to use the "Open Sans" font, but not to use the `Lobster` font.

## Specify How Fonts Should Degrade

There are several default fonts that are available in all browsers. These generic font families include `monospace`, `serif` and `sans-serif`.

When one font isn't available, you can tell the browser to "degrade" to another font.

For example, if you wanted an element to use the `Helvetica` font, but degrade to the `sans-serif` font when `Helvetica` isn't available, you will specify it as follows:
```html
p {
    font-family: Helvetica, sans-serif;
}
```
Generic font family names are not case-sensitive. Also, they do not need quotes because they are CSS keywords.

## Size Your Images

CSS has a property called `width` that controls an element's width. Just like with fonts, we'll use px(pixel) to specify the image's width.

For example, if we wanted to create a CSS class called `lager-image`that gave HTML elements a width of 500 pixels, we'd use:
```html
<style>
  .lager-image {
      width: 500px;
  }
</style>
```

## Add Borders Around Your Elements

CSS borders have properties like `style`, `color` and `width`.

For example, if we wanted to create a red, 5 pixl border around an HTML elememnt, we could use this class:
```html
<style>
  .thin-red-border {
      border-color: red;
      border-width: 5px;
      border-style: solid;
  }
</style>
```

## Add Rounded Corners with border-radius

Your cat photo currently has sharp corners. We can round out those corners with a CSS property called `border-radius`.

## Make Circular Images with a border-radius

In addition to pixels, you can also specify the `border-radius`using a percentage.

## Give a Background Color to a div Element

You can set an element's background color with the `background-color` property.

For example, if you wanted an element's background color to be `green`, you'd put this within your `style` element.

```
.green-background {
    background-color: green;
}
```

## Set the ID of an Element

In addition to calsses, each HTML element can also have an `id` attribute.

There are several benefits to using `id` attributes: You can use an `id` to style a single element and later you'll learn that you can use them to select and modify specific elements with JavaScript.

`id` attributes should be unique. Browsers won't enforce this, but it is a widely agreed upon best practice. So please don#t give more than one element the same `id` attribute.

Here's an example of how you give your `h2` element the ide of `cat-photo-app`:
`<h2 id="cat-photo-app">

## Use an id Attribute to Style an Element

One cool thing about `id` attributes is that, like calsses, you can style them using CSS.

However, an `id` is not reusable and should only be applied to one element. An `id` also has a higher specificity (importance) than a class so if both are applied to the same element and have conflicting styles, the styles of the `id` will be applied.

Here's an example of how you can take your element with the `id` attribute of `cat-photo-element` and give it the background color of green. In your style element:
```html
#cat-photo-element {
    background-color: green;
}
```
Note that inside your `style`element, you always reference calsses by putting a `.` in front of their names. You always reference ids by putting a `#` in front of their names.

## Adjust the Padding of an Element

Now let's put our Cat Photo App away for a little while and learn more about styling HTML.

You may have already noticed this, but all HTML elements are essentially little rectangles.

Three important properties control the space that surrounds each HTML element:
* padding
* margin
* border

An elements padding controls the amount of space between the element's content and its border.

Here we can see that the blue box and the red box are nsted within the yellow box. Note that the red box ahs more padding than the blue box.

When you increase the blue box's padding, it will increase the distance between the text and the border around.

## Adjust the Margin of an Element

An element's `margin` controls the amount of space between an element's `border` and surrounding elements.

Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has a bigger `margin`than the blue box, marking it appear smaller.

When you increase the blue box's margin, it will increase the distance between its border and surrounding elements.

## Add a Negative Margin to an Element

An element's margin controls the amount of space between an element's border and surrounding elements.

If you set an element's margin to a negative value, the element will grow larger.

## Add Different Padding to Each Side of an Element

Sometimes you will want to customize an element so taht it has different amounts of `padding`on each of its sides.

CSS allows you to control the `padding`of all four individual sides of an element with the 
* padding-top
* padding-right
* padding-buttom
* padding-left
properties.

## Add Different margins to each Side of an Element

Sometimes you will want to customize an element so that it has a different `margin` on each of its sides.

CSS allows you to control the `margin`of all four individual sides of an element with the `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` properties.

## Use Clockwise Notation to Specify the Padding of an Element

Instead of specifing an element's top, right, bottom and left padding properties individually, you can specify them all in one line, like this:
`padding: 10px, 20px, 10px, 10px;`

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

## Use Clockwise Notation to Specify the Margin of an Element.

Instead of specifying an element's top, right, bottom and left margin properties individually, you can specify them aswell all in one.
`margin: 10px 20px 30px 40px;`

These four values work like a clock, Top, right, bottom, left.

## Use Attribute Selectors to Style Elements

You ahve been given `id` or `class` attributes to elements that you wish to specifically style. These are known as ID and calss selectors. There are other CSS Selectors you can use to select custom groups of elements to style.

Let's bring out CatPhotoApp again to practice using CSS Selectors.

For this challange, you will use the `[attr=value]` attribute selector to style the checkboxes in CatPhotoApp. This selector matches and styles elements with a specific attribute value. For example, the below code changes the margins of all elements with the attribute `type` and a corresponding value of `radio`:
```css
[type='radio'] {
    margin: 20px 0px 20px 0px;
}
```
## Understand Absolute versus Relative Units

The last several challenges all set an element's margin or padding with pixels(px). Pixels are a type of length unit, which is what tells the browser how to size or space an item. IN addition to `px`, CSS has a number of different length unit options that you can use.

The two main types of length units are absolute and relative.

Absolute unites tie to physical units of length. For example, `in`and `mm`refer to inches and millimeters, respectivly. Absolute length units approximate the actual measurement on a screen, but there are some differentes depending onf a screen's resolution.

Relative units, such as `em` or `rem`, are relative to another length value. For example, `em` is baes on the size of the element's font. If you use it to set the `font-size` property itself, it's relative to the parent's `font-size`.

Note: There are several erelative unit options that are tied to the size of the viewport: they are covered in the Responsive Web Design Principles section.

## Style the HTML Body Element

Now let's start fresh and talk about CSS inheritance.

Every HTML page has a `body` element.

## Inherit Styles from the Body Element

Now we've proven that every HTML page has a `body` element, and that it's `body` element can also be styled with CSS.

Remember, you can style your `body` element just like any other HTML element, and all your other elements will inherit your `body` element's styles.

## Prioritize One Style over Another

Sometimes your HTML elements will recieve multiple styles that conflict with one another.

For example, your `h1` element cant be both green and pink aht the same time.

Let's see what happens when we create a class that makes text pink, then apply it to an element. Will our class **override** the `body` element's `color: green;` CSS property?

## Override Styles in Subsequent CSS

Our "Pink-text" class overrode our `body` element's CSS declaration!

We just proved that our classes will override the `body`element's CSS. So the next logical question is, what can we do to override our `pink-text` class?

Create an addititonal CSS class called `blue-text`that gives an element the color blue. Make sure it's below your pink-text class declaration.

Apply the 'blue-text' class to your `h1`element in addition to your pink-text class and lets see which one wins.

Applying multiple class attributes to an HTML element is done with a space between them like this
`class="class1 class2"`

Note: It doesn't matter which order the classes are listed in the HTML element.

However, the order of the 'class' declarations in the `<style>`section are what is important. The secound declaration will always take precedence over the first. Because `.blue-text`. is ceclared secound, it overrides the attributes of `.pink-text`.

## Override Class Declarations by Styling ID Attributes

We just proved that browsers read CSS from top to bottom on order of their declaration. That means that, in the event of a conflict, the browser will use whichever CSS declaration came last. Notice that if we even had put `blue-text` before `pink-text`in our `h1` element's classes, it would still look at the declaration order and not the order of their use!

But we're not done yet. There are other ways that you can override CSS. Do you remember id attributes?

Let's override your `pink-text` and `blue-text`classes, and make your `h1` element orange, by giving the `h1`element an id and then styling that id.

Note: it doesn't matte rwheter you declare this CSS above or below pink-text class, since id attribute will always take precedence.

## Overrice Class Declaration with Inline Styles

So we've proven taht id declarations override class declarations, regardless of where they are declared in your `style` element CSS.

There are other ways that you can override CSS. Do you remember inline styles?

Use an inline style to try to make our `h1` element white. Remember, in line styles look like this:
`<h1 style="color: green;">`

## Override All Other Styles by using Important

Yay! We just proved that inline styles will override all the SS declarations in your `style` element.

But wait. There's one last way to override CSS. This is the most powerful method of all.But before we do it, let's talk about why you would ever want to override CSS.

In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use `!important`.

Let's go all the way back to our `pink-text` class delcaration. Remember that our `pink-text`class was overridden by subsequent class declarations, id declarations and inline styles.

Let's add the keyword `!important` to your pink text elements color declaration to make 100% sure that your h1 element will be pink.

An example of how to do this: 
`color: red !important;`

## Use Hex Code for Specific Colors

Did you know there are other ways to represent colors in CSS? One of these ways is called hexadecimal code, or hex code for short.

We usually use decimals, or base 10 numbers, which use the symbols 0 to 9 for each digit. Hexadecimals (or hex) are base 16 numbers. This means it uses sixteen distinct symbols. Like decimals, the symbols 0--9 represent the valeus zero to nie. Then, A, B, C, D, E, F represent the values ten to fifteen. Altogether, 0 to F can represent a digit in hexadecimal, giving us 16 total possible values. You can find more information about hexadecimal numbers here: https://en.wikipedia.org/wiki/Hexadecimal.

In CSS, we can use 6 hexadecimal digits to represent colors, two each for the red, green and blue components. For example `#000000` is black and is also the lowest possible value. You can find more information about the RGB color system here. https://en.wikipedia.org/wiki/RGB_color_model

## Use Hex Code to Mix Colors

To review, hex codes use 6 hexadecimal digits to represent colors, two each for red, rgreen and blue.

From these three pure colors, we can vary the amounts of each to create over 16 million other colors!

For example, orange is pure red, mixed with some green and no blue. in hex code, this translates to being #ffA500.

The digit 0 is the lowest number in the hex code, and represents a complete absence of color.

The digit F is the highte number in hex code, and represents the maximum possible brightness.

## Use Abbreviated Hex Code

Many people feel overwhelmed by the possibilities of more than 16 million colors. And it's difficult to rember hex doe. Fortunately, you can shorten it.

For example, red's hex code can be shortend to #f00. This shortend form gives one digit for red, one for green, one for blue.

This reduces the total number of possible colors to around 4000. But browsers will interpret #ff0000 and #f00 as exactly the same color.

## Using RGB Values to Color Elements

Another way you can represent colors in CSS is by using RGB values.

the RGB value for black looks like this:

`rgb(0,0,0)`

while the RGB value for white looks like this:
`rgb(255,255,255)`

INstead of using six hexadecimal digits like you do with hex code, with RTG you specify the brightness of each color with a number between 0 and 255. If you do the math, the two digit for one color equals 16 times 16, which gives us 256 total values. So RGB, which start counting from zero, has the exact same number of possible values as hex code.

Here's an example of how you'd change the body background to orange using it's RGB code.

```css
body {
    background-color: rgb(255,165,0);
}
```
## Use RGB to mix Colors
Just like with hex code, you can mix colors in RGB by using combinations of different values.

## Use CSS Variables to change several elements at once

CSS Variables are a powerful way to change many CSS style properties at once by changing only one value.

In the `penguin` class, change the black value to `gray`, the `gray`value to white, and the yellow value to orange.

## Create a custom CSS Variable

To create a CSS variable, you just need to give it a name with two hyphens in front of it and assign it a value like this:

```css
--penguin-skin: gray;o
```
This will create a variable named `--penguin-skin` and give it a value of `gray`.


## Use a custom CSS Variable

After you create your variable, you can assign its value to other CSS properties by referencing the name you gave it.

```css
background: var(--penguin-skin);
```

## Attach a Fallback value to a CSS Variable

When using your variable as a CSS property value, you can attach a fallback value that your browser will revert to if the given variable is invalid.

Note: This fallback is not used to increase browser compatibility, and it will not work on IE browsers. Rather, it is used so that the browser has a color to display if it cannot find your variable.

Here's how you do it
```css
background: var(--penguin-skin, black);
```

## Improve Compatibility with Browser Fallbacks

When working with CSS you will likely run into browser compatibility issues at some point. This is why it's important to provide browser fallbacks to avoid potential problems.

When your browser parses the CSS of a webpage, it ignores any properties that it doesn't recognize or support. For example, if you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will revert to the default value, which is typically not ideal.

This means that if you do want to provide a browser fallback, it's as easy as providing another more widely supported value immediately before your declaration. That way an older browser willl have something to fall back on, while a newer browser will just interpret whatever declaration comes later in the cascasde.

```
background: red;
background: var(--variable, rose);
```

## Inherit CSS Variables

When you create a variable, it is available for you to use inside the selector in which you create it. It also is available in any of that selector's decendants. This happens because CSS variables are inherited, just like ordinary properties.

To make use of inheritance, CSS variables are often defined in the :root element.

`:root` is a **pseudo-class** selector that matches the root element of the document, usually the `html` element. By creating your variables in `:root`, they will be available globally and can be accessed from any other selector in the style sheet.

## Change a variable for a specific area

When you create your variable in `:root` they will set the value of that variable for the whole page.

You can then over-write these variables by setting them again within a specific element.

## Use a media query to change a variable

CSS Variables can simplify the way you use media queries.

For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.

In the `:root` selector of the `media query`, change it so `--penguin-size` is redefined and iven a value of `200px`. Also, redefine `--penguin-skin` and give it a value of `black`. Then resize the preview to see this change in action.

