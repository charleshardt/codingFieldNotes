/////////////////////////////////////////////////
// 270-Event-Loop-in-Practice

// executes call stack first. Promises stored in the microstack queue are next priority, then callback queue.
console.log('Test start');
setTimeout(() => console.log('0 second timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 3000000000; i++) {}
  console.log(res);
});
console.log('Test end');

// If the microtask queue is delayed, the Timeout will also be delayed. Timers cannot be trusted for high-precision because the microtask queue can delay them.
