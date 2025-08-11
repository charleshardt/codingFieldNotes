/////////////////////////////////////////////////
// 263-Promises-and-the-Fetch-API
// ES6 feature

// OLD BAD WAY:
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/usa`);
// request.send();

// New GOOD Way:
const request = fetch('https://restcountries.com/v2/name/usa');
console.log(request);

// A promise is an object used as a placeholder for the future result of an asynchronous operation.

// It is a container for an asynchronously-delivered value.

// It is a container for a future value, like a response from an AJAX call.

// Advantage: no longer need events and callbacks to handle results

// Advantage: can chain promises FTW for a sequence of asynchronous operations, thereby escaping CALLBACK HELL.

// Advantage: we have ways of handling states resulting from the promise life cycle.

// Promise Life Cycle:
// <Pending>: before future value is available. Async task is working in the background.
// <Settled>: the async task is finished. They are then either
// <Fulfilled>: you got the value from the API, or
// <Rejected>: there was an error.
