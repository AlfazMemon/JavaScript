function FetchWeather() {

    let city = document.getElementById("city").value.trim().toLowerCase();

    fetch("http://localhost:3000/cities")
        .then((res) => res.json())
        .then(data => {

            let weather = data.find(item =>
                item.city.toLowerCase() === city
            );

            if (!weather) {
                alert("City not found");
                return;
            }
            
            document.getElementById("cityName").innerText = weather.city;
            document.getElementById("temp").innerText = weather.temperature + "°C";
            document.getElementById("condition").innerText = weather.condition;
            document.getElementById("feels").innerText = weather.feels_like + "°C";
            document.getElementById("humidity").innerText = weather.humidity + "%";
            document.getElementById("wind").innerText = weather.wind_kph + " km/h";
        })
        .catch(error => console.log(error));
}