/////////////////////////////////////////////////
// 202-Event-Propogation-Bubbling-Capturing

/* 
Important to understand:

- A link in a page: document > html > body > section > p > a
- Clicking on the link generates an event.
- The event is generated at the top of the DOM tree: the <document> level, not the <a> level
- Capturing Phase: the event travels down from document to target element (a in this case), passing through every element on the way
- When the event reaches the target, the Target Phase begins where events can be handled right at the target. Event listeners handle that.
- In the Bubbling Phase, events "bubble up from the target to the root," passing up through all parent elements up to <document> (not any siblings).

What this means is that generating an event in a child element is as if you did it in each of the parent elements. This allows us to implement powerful patterns.

By default, events can only be handled in the target and bubbling phases. But it is possible to set up event listeners that listen to events in the capturing phase instead.

Not all events have a capturing and bubbling phase.

Capturing and Bubbling is event propogation.
 */
