const BASE_URL = 'https://restcountries.com/v2'

function fetchCountry(name) {
    return fetch(`${BASE_URL}/name/${name}`)
    .then(response  => response.json())
    .catch (error => alert(error));
};

export default { fetchCountry }; 