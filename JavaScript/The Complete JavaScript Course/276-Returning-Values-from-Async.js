/////////////////////////////////////////////////
// 276-Returning-Values-from-Async

const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
  <h3 class="country__name">${data.name.official}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row">
    <span>👫</span>${(+data.population / 1000000).toFixed(1)}
    </p>
    <p class="country__row">
    <span>🗣️</span>${data.languages.eng}
    </p>
    <p class="country__row">
    <span>💰</span>${Object.values(data.currencies)[0].name}
    </p>
    </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${dataGeo.countryCode}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}`;
  } catch (err) {
    console.error(err);
    renderError(`💥"${err.message}"💥`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Getting location');

// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}💥`))
//   .finally(() => console.log('3: Finished getting location'));

// mixing async/await with .then() and .finally() is not ideal because it mixes the old and the new and defeats the purpose. Use an IIFE to make it all async:

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}💥`);
  }
  console.log('3: Finished getting location');
})();
