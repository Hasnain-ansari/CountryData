let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
// let result = document.getElementById("result")

document.addEventListener('DOMContentLoaded', () =>{
    countryInp.value = 'india';
    let url = `https://restcountries.com/v3.1/name/${countryInp.value}?fullText=true`;
    console.log(url);
    fetch(url)
        .then((response) =>response.json())
        .then((data) =>{

            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h1 style='background-image: url(${data[0].flags.svg})' id="cName">${data[0].name.common}</h1>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
                     - ${Object.keys(data[0].currencies)[0]}   </span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper maps">
                    <h4>Maps:</h4>
                    <span><a href=${data[0].maps.googleMaps}>click to see on map</a></span>
                </div>
            </div>
            `
        })
        .catch(()=>{
            if(countryName.length === 0){
                result.innerHTML = `<h3> the input field cnnot be empty</h3>`
            }
            else{
                result.innerHTML = `<h3>enter a valid country</h3>`
                
            }
        })
    
    
});

searchBtn.addEventListener('click', () =>{
    let countryName = countryInp.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
    fetch(url)
        .then((response) =>response.json())
        .then((data) =>{

            result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h1 style='background-image: url(${data[0].flags.svg})' id="cName">${data[0].name.common}</h1>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                    <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                    <span>${data[0].population}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                    <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
                     - ${Object.keys(data[0].currencies)[0]}   </span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Common Languages:</h4>
                    <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
                </div>
            </div>
            <div class="wrapper">
                <div class="data-wrapper maps">
                    <h4>Maps:</h4>
                    <span><a href=${data[0].maps.googleMaps}>click to see on map</a></span>
                </div>
            </div>
            `
        })
        .catch(()=>{
            if(countryName.length === 0){
                result.innerHTML = `<h3> the input field cnnot be empty</h3>`
            }
            else{
                result.innerHTML = `<h3>enter a valid country</h3>`
                
            }
        })
})

