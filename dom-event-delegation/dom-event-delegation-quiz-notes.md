# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
It is the element that causes the event to fire
- Why is it possible to listen for events on one element that actually happen its descendent elements?
Due to Event bubbling which occurs when an event happens on an element and first runs handlers on the event then moves up onto the parent and its ancestors and event capturing which the event goes down the element which makes up event delegation, so so we can have one event listener for the parent element that applies to the child elements
- What DOM element property tells you what type of element it is?
Tagname property
- What does the `element.closest()` method take as its argument and what does it return?
Selector and returns closest ancestor that matches the selector
- How can you remove an element from the DOM?
Remove method or remove child method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
Event delegation which you will add event listener to the parent element that listens for events for its child element

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
