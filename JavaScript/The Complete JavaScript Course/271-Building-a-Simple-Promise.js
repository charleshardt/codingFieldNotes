/////////////////////////////////////////////////
// 271-Building-a-Simple-Promise

// New Promise with executor function. It must always end up in either the resolve state or the reject state.
const lotteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('You WIN 🍾');
  } else {
    reject('You lost your money 💩');
  }
});

// .then() needs a callback for resolve state. .catch() will give error for reject state.
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
