/////////////////////////////////////////////////
// 264-How-to-Consume-a-Promise

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row">
    <span>👫</span>${(+data.population / 1000000).toFixed(1)}
    </p>
    <p class="country__row">
    <span>🗣️</span>${data.languages[0].name}
    </p>
    <p class="country__row">
    <span>💰</span>${data.currencies[0].name}
    </p>
    </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];
      // const neighbor = 'dflksdf';

      if (!neighbor) throw new Error('No neighbor found');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Neighbor country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbor'))
    .catch(err => {
      console.error(`💩 ${err} 💩`);
      renderError(`Something went awry. 💩 ${err.message}.`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

// getting a country that doesn't exist throws an error
getCountryData('australia');

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         // throw terminates the function, like return, and the promise immediately rejects
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders?.[0];

//       // this neighbor throws an error
//       const neighbor = 'dflksdf';

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         // throw terminates the function, like return, and the promise immediately rejects
//         throw new Error(`Neighbor country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbor'))
//     .catch(err => {
//       console.error(`💩 ${err} 💩`); // catch any errors in the whole promise chain. Errors will propagate down the chain until caught. If not caught, the uncaught error will appear.
//       renderError(`Something went awry. 💩 ${err.message}.`);
//     })
//     .finally(() => {
//       // something that always happens, e.g. hide a spinner
//       countriesContainer.style.opacity = 1;
//     });
// };
// // .then() is called if promise is fulfilled
// // .catch() is called if promise is rejected
// // .finally() is called whether fulfilled or rejected
