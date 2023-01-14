var weatherSite = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f5066864c3fe71507dc336a37aed3041`;
var searchButton = document.getElementById("search-button");

localStorage.setItem("cities", "");
document.getElementById("input-area").focus();


// Storing search criteria into Local Storage and displaying search result onto screen
function storeCities(event) {
    event.preventDefault();
    var cityInput = document.getElementById("input-area");

    if (cityInput.value.trim() === "") {
        alert("Please input a City Name");
        return;
    }

    if (localStorage.getItem("cities") === "") {
        var searchedCities = new Array();
        searchedCities[0] = cityInput.value.trim();
        localStorage.setItem("cities", JSON.stringify(searchedCities));
    } else {
        var newSearchedCities = JSON.parse(localStorage.getItem("cities"));
        for (i=0; i<newSearchedCities.length; i++) {
            if (newSearchedCities[i] === cityInput.value.trim()) {
                alert("This city has been searched previously. Please click the button corresponding with this City Name.");
                return;
            }
        }
        newSearchedCities[newSearchedCities.length] = cityInput.value.trim();
        localStorage.setItem("cities", JSON.stringify(newSearchedCities));
    }

    cityInput.value = "";
    cityInput.focus();
    buildCityHistory();
}

function buildCityHistory() {
   var storedCityButtons = JSON.parse(localStorage.getItem("cities"));
   var divCities = document.getElementById("search-history");
   
   divCities.innerHTML = "";
   
   $.each(storedCityButtons,function(key,val) {
    let btn = document.createElement("button");
    btn.innerHTML = val;
    btn.class = "button is-dark block"
    divCities.appendChild(btn);

   }) 

}

searchButton.addEventListener("click", storeCities);

// Make search history a clickable link which fetches data

// Write fetch request to call lat and long API
    // Fetch the city using lat and long coordinates

// Create a template which can display the weather conditions

// Use received data and display it to the screen with template created