# State Guidelines

- Use a state variable for any data that the component should keep track of "remember" over time. This is data that will change at some point. In Vanilla JS, that's a let variable, [], or {}.
- Whenever you want something to be dynamic, crete a piece of state related to that thing, and update when the thing should change.
- If you want to change the way a component looks, or the data it displays, update its state. This usually happens in an event handler function.
- When building a component, imagine its view as a reflection of state changing over time.
- For data that should not trigger component re-renders, don't use state. Use a regular variable instead.
