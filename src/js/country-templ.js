import countryTempl from '../templates/contry-template.hbs';
const refs = {
    input: document.querySelector('.search-bar')
}
// import fetchCountry from './fetchCountries.js'

// const imput = document.querySelector(".search-bar")

// imput.insertAdjacentHTML('afterbegin', (e) => {
//     // console.log(e.target.value)
//     fetch('https://restcountries.com/v2/name/peru')
//   .then(response => {
//     return response.json()
//   })
//   .then()
// })

// function countryTempl (country) {
//     const markup = tamplateCard(country);
//         console.log(markup)
//         refs.input.insertAdjacentHTML('afterend', markup)
// }