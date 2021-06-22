
 const BASE_URL = 'https://restcountries.eu/rest/v2';
 
 function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/name/${searchQuery}`)
  .then(response => {
    if(response.ok) {
     return response.json()
    }
  })
}

fetchCountries()
.then(country => {
  return country;
})
.catch(error => {
  console.log(error);
});

export default {fetchCountries};
