/////////////////////////////////////////////////
// 271-Building-a-Simple-Promise

// New Promise with executor function. It must always end up in either the resolve state or the reject state.
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');

  // Encapsulate some async behaviour into this promise
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰💰🍾🍾');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 1000);
});

// .then() needs a callback for resolve state. .catch() will give error for reject state.
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// We usually only consume promises, but we use this pattern to wrap old callback-based functions into promises. That is called "promisifying": converting callback-based async behaviour to promise-based.

// Promisifying setTimeout(). Create a function and return a promise, thereby encapsulating the async behaviour. That is essentially what fetch() does.

// const wait = function (seconds) {
//   // no reject needed since setTimeout cannot fail:
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

wait(1)
  .then(() => {
    console.log('Hey, I just waited for 1 second.');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for another second. Too easy.');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds, it\s all cool.');
    return wait(1);
  })
  .then(() => console.log('I waited for one last second. No big deal.'));

// That chain is way better than this callback hell:

setTimeout(() => {
  console.log('\t\tJust over 1 second has passed');
  setTimeout(() => {
    console.log('\t\tJust over how many? seconds passing passed will pass');
    setTimeout(() => {
      console.log('\t\tJust over 3? time units? passing rhzhfff');
      setTimeout(() => {
        console.log(
          '\t\tToo many seconds passed, so messy, so buggy, mrffzxqchhhk-k-k-k-k...'
        );
      }, 1001);
    }, 1001);
  }, 1001);
}, 1001);

// Make a fulfilled or rejected promise immediately

// A static method on the Promise constructor and a handler:
Promise.resolve('Resolved value').then(x => console.log(x));
Promise.reject(new Error('Rejected value')).catch(x => console.error(x));
