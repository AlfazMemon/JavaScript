function FetchWeather() {

    let city = document.getElementById("city").value.trim().toLowerCase();

    fetch("http://localhost:3000/cities")
        .then((res) => res.json())
        .then((data) => {
            Display(data, city)


        })
        .catch(error => console.log(error));
}
function Display(data, city) {
    let weather = data.find(item =>
        item.city.toLowerCase() === city
    );

    if (!weather) {
        alert("City not found");
        return;
    }

    let store = `
    <div id="weather-card" class="card">

            <h2 id="cityName">${weather.city}</h2>

            <h1 id="temp">${weather.temperature}°C</h1>

            <h3 id="condition">${weather.condition}</h3>

            <div class="details">
    <div>
        <p>Feels Like</p>
        <h4>${weather.feels_like}°C</h4>
    </div>

    <div>
        <p>Humidity</p>
        <h4>${weather.humidity}%</h4>
    </div>

    <div>
        <p>Wind</p>
        <h4>${weather.wind_kph} km/h</h4>
    </div>
</div>

        </div>
`;

    document.getElementById('result').innerHTML = store;
}

window.addEventListener('DOMContentLoaded',()=>{
    document.getElementById("city").value = "Ahmedabad"
    FetchWeather();
})