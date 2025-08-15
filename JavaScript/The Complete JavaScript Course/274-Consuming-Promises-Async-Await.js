/////////////////////////////////////////////////
// 274-Consuming-Promises-Async-Await

// async/await is syntactic sugar of .then() promises, however they are used a lot together.

// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// ); // is exactly the same as:

// const res = await fetch(`https://restcountries.com/v2/name/${country}`);
// console.log(res);

const countriesContainer = document.querySelector('.countries');
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
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse geocoding
  const resGeo = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const dataGeo = await resGeo.json();

  // Country data
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${dataGeo.countryCode}`
  );
  const data = await res.json();
  renderCountry(data[0]);
};

whereAmI();
