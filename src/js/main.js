import tamplateCard from '../templates/contry-template.hbs';
import countriesList from '../templates/countries-list-template.hbs'
import debounce from 'lodash.debounce';
import API from './api-service.js';
import getRefs from './refs.js'
import { infoNotify, noCountry, onError } from './notify.js'; 

const refs = getRefs()

refs.input.addEventListener('input', debounce(onSearch, 500))

function onSearch(e) {
    e.preventDefault()
    const searchQuery = e.target.value
    API.fetchCountry(searchQuery)
        .then(searchCountry)
        .catch (onFetchError)
        .finally(clearMarkup)
};

function searchCountry(countries) {
    if (countries.length === 1) {
        clearMarkup();
        countryMarkup(countries)
    } else if (countries.length >= 2 && countries.length <= 10) {
        clearMarkup();
        return countriesListMarkup(countries)
    } else {
        onFetchError(countries);
    }
}

function onFetchError(countries) {
    if (countries.length > 10) {
        clearMarkup();
        return infoNotify();
    } else if (countries.status === 404) {
        clearMarkup();
        return noCountry();
    }
    else {
        clearMarkup();
        return onError();
    }
}

function countryMarkup(country) {
    const markup = tamplateCard(country);
    refs.countriesContainer.insertAdjacentHTML('afterend', markup)
}

function countriesListMarkup(countries) {
    const markup = countriesList(countries)
    refs.countriesContainer.insertAdjacentHTML('afterend', markup)
}

 function clearMarkup() {
      refs.input.value = '';
      refs.countriesContainer.innerHTML = '';
}




 
