import { refs } from './refs';

function createSingleCardMarkup(data) {
  refs.countryCard.innerHTML = '';

  return data.map(
    ({
      name: { officail },
      capital,
      population,
      flags: { svg },
      languages,
    }) => ` 
            <img src="${svg}" alt="${official}" />
            <h2>${officail}</h2>
            <p>Capital: ${capital}</p>
            <p>Population: ${population}</p>
            <p>Languages: ${Object.values(languages)}</p>
          `
  );
}

function createCountryListMarkup(data) {
  refs.countryList.innerHTML = '';

  return data
    .map(
      ({ flags: { svg }, name: { official } }) =>
        `
      <li class="contry-list__item">
        <img src="${svg}" alt="${official}">
        <h2>${officail}</h2>
      </li>
    `
    )
    .join('');
}

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryCard.innerHTML = '';
}

export { createSingleCardMarkup, createCountryListMarkup, clearMarkup };
