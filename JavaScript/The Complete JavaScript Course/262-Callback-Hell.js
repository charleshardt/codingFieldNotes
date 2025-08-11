/////////////////////////////////////////////////
// 262-Callback-Hell

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // AJAX call: country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbor country (2)
    const neighbor = data.borders?.[0];
    if (!neighbor) return;

    // AJAX call: country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbor');
    });

    /* Welcome to callback hell: many nested callbacks executing asynchronous tasks in sequence. Please avoid in the future. Thank you. That is all. */
  });
};

getCountryAndNeighbor('hungary');

// Another example of callback hell having nothing to do with AJAX:

setTimeout(() => {
  console.log('Just over 1 second has passed');
  setTimeout(() => {
    console.log('Just over 2 second has passed');
    setTimeout(() => {
      console.log('Just over 3 second have passed');
      setTimeout(() => {
        console.log('Just over how many? seconds passing passed will pass');
        setTimeout(() => {
          console.log('Just over 5? time units? passing rhzhfff');
          setTimeout(() => {
            console.log(
              'Too many seconds passed, so messy, so buggy, mrffzxqchhhk-k-k-k-k...'
            );
          }, 1001);
        }, 1001);
      }, 1001);
    }, 1001);
  }, 1001);
}, 1001);
