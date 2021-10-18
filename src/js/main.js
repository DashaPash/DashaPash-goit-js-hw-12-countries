import tamplateCard from '../templates/contry-template.hbs';
// import countryTempl from './country-templ.js'
import debounce from 'lodash.debounce';

const refs = {
    input: document.querySelector('.search-bar')
}
 


refs.input.addEventListener('input', debounce(onSearch, 1000))

function onSearch(e) {
    e.preventDefault()

    const searchQuery = e.target.value

fetchCountry(searchQuery)
.then(countryTempl)
.catch(error => {
    console.log(error)
    })
}


 
function fetchCountry(name) {
    return fetch(`https://restcountries.com/v2/name/${name}`)
    .then(response => {
        return response.json()
     }) 
}

function countryTempl (country) {
    const markup = tamplateCard(country);
    refs.input.insertAdjacentHTML('afterend', markup)
}
