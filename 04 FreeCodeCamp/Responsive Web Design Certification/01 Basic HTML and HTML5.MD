# Basic HTML / HTML5

## Comments

<!--
This text is commended
-->

## HTML5 Elements

HTML5 introduces more descrivtive HTML tags. These include 
`main`, `header`, `footer`, `nav`, `video`, `article`, `section`, and others.

These tags give a descriptive structure to your HTML, make your HTML easier to read, and help with Search Engine Optimization (SEO) and accessibility. The `main` HTML5 tag helps search engines and other developers find the main content of your page.

Example usage, a `main` element with two child elements nested inside it:

```html5
<main>
  <h1>Hello World</h1>
  <p>Hello Paragraph</p>
</main>
```
Note: Many o the new HTML5 tags and their benefits are covered in the Applied Accessibility section.

## Images

<img src="https://www.your-image-source.com/your-image.jpg">

All img elements MUST have an alt alttribute. The text inside the alt attribute is used for screen readers to improve accessibility and is dislpayed if the image fails to load.

If the image is purely decorative, using an empty alt attribute is a best practice.

Ideally the alt attribute should not contain special characters unless needed.

## Link to external Pages with Anchor Elements

You can use a `a`(anchor) elements to link to content outside of your web page.

`a` elements need a destination web address called an `href`attribute. They also need anchor text. Here's an example:

`<a href="https://freecodecamp.org"> This links to freecodecamp.org</a>

Then your browser will display the text "this links to freecodecamp.org" as a link you can click.

## Link to internal sections of a page with anchor elements

anchor elements can also be used to create internal links to jump to different sections within a webpage.

To create a internal link, you assign a link's href attrribute to a hash symbol plus the value of the id attribute for the element that you want to internally link to, usually further down the page. You then need to add the same `id` attribute to the element you are linking to. An `id`is an attribute that uniquely describes an element.

Below is an example of an internal anchor link and its target element:
```html5
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```
When users click on the Contacts link, they'll be taken to the section of the webpage with the *Contacts* header element.

target="_blank" attribute causes the linked document to open in a new window tab.

## Dead Links using the Hash Symbol

Sometimes you want to add `a` elements to your website before you know where they will link.

This is also handy when you're changing the behavior of a link using `Java Script`, which we'll learn about later.

## Turn an image into a link

```html5
<a href="#"><img src="https://bit.ly/ffc-running-cats"></a>
```

## Bullted Unordered List

<ul>
  <li>nr1</li>
  <li>nr2</li>
</ul>

## Text Fields

`input` elements are a convenient way to get input from your user.

You can create a text input like this:

```html
<input type="text">
```

Note that input elements are self-closing.

## Placeholde TExt to a Text field

Placeholder text is what is displayed in your input element before your user has inputted anything.

You can create placeholder text like so:

```html
<input type="text" placeholder="this is placeholder text">
```

## create a form element

You can build web forms that actually submit data to a server using nothing more than pure HTML. You can do this by specifying an action on your form element.

```html
<form action="/url-where-you-want-to-submit-form-data"></form>
```

## Add a Submit Button to a Form

Let's add a submit button to your form. Clicking this button will sned the data from your form to the url you specified with your form's action attrubute.

```html
<button type="submit">This button submits the form</button>
```

### Use html5 to requre a field

You can require specific form fields so that your user will not be able to submit your ofrm until he or she has filled them out.

For example, if you wanted to make a text input field required, you can just add the attribute `required`within your `input` element. Like this:
```html
<input type="text" required>
```

## Create a set of Radio Buttons

You can use radio buttons for questions where you want the user to only give you one answer out of multiple options.

Radio buttons are a type of input.

Each of your radio buttons can be nested within its own `label` element.
By warpping an `input` element inside of a `label` element it will automatically associate the radio button input with the label element surrounding it.

All realated radio buttons should have the same `name` attribute to create a radio button group. By creating a radio group, selecting any single radio button will automatically deselect the other buttons within the same group ensuring only one answer is provided by the user.

```html
<label>
  <input type="radio" name="indoor-outdoor">Indoor
</label>

It is considered best practice to set a `for` attribute on the `label` element, with a value that matches the value of the `id` attribute of the `input`element. This allows assistive echnologies to create a linked relationship between the label and the child `input` element. For example:
```html
<label for="indoor">
  <input id="indoor" type="radio" name="indoor-outdoor">
</label>
```

## Create a Set of Checkboxes
Forms commonly use checkboxes for questions that may have more than one answer.

Checkboxes can be nested within its own `label` element. By wrapping an `input` element inside of a `label` element it will automatically associate the checkbox input with the label element surrounding it.

All related checkbox inputs should have the same `name` attribute.

It is considered best practice to explicitly define the relationship between a checkbox `input` and its corresponding `label`by setting the `for` attribute on the `label` element to match the `id` attribute of the associated `input`element.

```html
<label for="loving"><input id="loving" type="checkbox" name="personality"> Loving </label>
```

## Use the value attribute with radio buttons and checkboxes

When a form gets submitted, the data is sent to the server and includes entries for the options selected. Inputs of type `radio` and `checkbox` report their values from the `value` attribute.

```html
<label for="indoor">
  <input id="indoor" value="indoor" type="radio" name="indoor-outdoor">Indoor</label>
<label for ="outdoor">
  <input id="outdoor" value="output" type="radio" name="indoor-outdoor">Outdoor</label>
```
Here, you have two `radio` inputs. When the usersubmits the form with the `indoor` option selected, the form data will include the line: `indoor-outdoor=indoor`. This is from the `name` and `value` attributes of the "indoor" input.

If you omit the `value` attribute, the submitted form data uses the default value, which is `on`. IN this scenario, if the user clicked the "indoor" option and submited the form, the resulting form data would be "indoor-outdoor=on", which is not useful. So the `value` attribute needs to be set to something to identify the option.

## Check radio buttons and checkboxes by default

You can set a checkbox or radio button to be checked by default using the `checked` attribute.

To do this, just add the word "checked" to the inside of an input element.
```html
<input type="radio name="test-name" checked>
```

## Nest many Elements within a single div Element

The `div` element, also known as division element, is a general purpose container for other elements.

The `div` element is probalbly the most commonly used HTML element of all.

Just like any other non-self-closing element, you can open a `div`element with <div> and close it on another line with </div>.
Hint: Tryp putting your opening div tag above your things cats love p element and your closing div tag after your closing ol tag so that both of your lists are within one div.

## Declare the doctype of an THML Document

The challenges so far have covered specific html elemments and their uses. However, there area a few elements that give overall structure to your page, and should be included in every HTML document.

At the top of your document, you need to tell the browser which version of HTML your page is useing. HTML is an evolving language, and is updated regularly. Most major browsers support the latest specification, which is HTML5. However, older web pages may use previous versions of the language.

You tell the browser this information by adding the `<!DOCTYPE ...>` tag on the first line, where the `...` part is the version of HTML. for HTML5, you use <!DOCTYPE html>.

The `!` and uppercase  `DOCTYPE` is important, especially for older browsers.

The `html`is not case sensitive.

Next, the rest of your THML code needs to be wrapped in `html` tags. The opening `<html>` goes directly below the `<!DOCTYPE html>` line, and the closing `</html>` goes at the end of the page.

```html
<!DOCTYPE html>
<html>
    <!-- Your HTML code goes here>
</html>
```

## Define the Head and Body of an HTML Document

You can add another level of organization in your HTML document within the `html`tags with the `head` and `body` elements. Any markup with information about your page would go into the `head` tag. Then any markup with the content of the page (what displays for a user) would go into the `body` tag.

Metadata elements, such as `link`, `meta`, `title`, and `style`, typically go inside the `head`element.

Here's an example of a page's layout.

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- metadata elements -->
  </head>
  <body>
    <!-- page contents -->
  </body>
</html>
```
