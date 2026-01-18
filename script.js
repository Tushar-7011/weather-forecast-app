function getWeather() {
    let city = document.getElementById("city").value.trim();
    let apiKey = "4152b57658eb8f3379dfe2dcb4be65b9";

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("City not found");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("temp").innerHTML =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("humidity").innerHTML =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("condition").innerHTML =
            "Condition: " + data.weather[0].main;
    })
    .catch(error => {
        alert("City not found! Please check spelling.");
    });
}
