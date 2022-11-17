import axios from "axios";

console.log("Script is running");



async function fetchCountryData(name) {

    // countryName.innerHTML = ``;
    // errorMessage.innerHTML = ``;

        try {
            const response = await axios.get(`https://restcountries.com/v2/name/${name}`)
            const countries = response.data;
            console.log(countries);

            const countryName = document.getElementById('country-name');

            countries.map((country) => {
                countryName.innerHTML = `
            <img src="${country.png}" alt="vlag" /> <h3>${name}</h3>
            <p>Is situated in ${country.subregion}. It has a population of ${country.population} people, 
            and you can pay with ${country.currencies}</p>
            `
            })
        } catch (error) {
            console.error(error);

        }
    }


    const bttn = document.getElementById('button');
    const searchCountry = document.getElementById('searchCountry');
    bttn.addEventListener('submit', () => {
        fetchCountryData(searchCountry.value)
    });
