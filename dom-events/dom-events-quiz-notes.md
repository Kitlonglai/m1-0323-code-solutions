# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
for code output and debugging
- What is the purpose of events and event handling?
purpose of events is to perform an action to an object and event handling is reacting to an event, in which a block of code is ran
- Are all possible parameters required to use a JavaScript method or function?
no, it can be optional
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
addeventlistener
- What is a callback function?
function passed into another function as an argument, invoked inside outer function to complete an action
- What object is passed into an event listener callback when the event fires?
event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
the dom element that caused the event, MDN for more info
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
handleclick will call the function when the element is clicked and handleclick() will be called right away returns callback of addeventlistener

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
