/////////////////////////////////////////////////
// 278-Promise-Combinators-race-allSettled-any.js

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// Promise.race receives an arr of promises and returns a promise. The first settled promise wins the race. Very useful.

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/austria`),
    getJSON(`https://restcountries.com/v2/name/france`),
    getJSON(`https://restcountries.com/v2/name/italy`),
  ]);
  console.log(res[0]);
})();

const timeout = function (ms) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, ms);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(40)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled() receives an array of promises and returns an array of all settled promises. Never shortcircuits

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

// Promise.any() [ES2021]

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
