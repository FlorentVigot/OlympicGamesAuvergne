const weatherIcons = {
    Rain: "wi wi-day-rain",
    Clouds: "wi wi-day-cloudy",
    Sun: "wi wi-day-sunny",
    Snow: "wi wi-day-snow",
    mist: "wi wi-day-fog",
    Drizzle: "wi wi-day-sleet",
  };

  const APIKEY = '371d4d60a167ee04ff060bb18edb0e45';

  let url = 'http://api.openweathermap.org/data/2.5/weather?q=Clermont&appid=371d4d60a167ee04ff060bb18edb0e45&units=metric&lang=fr';
  
  fetch(url).then((response) => 
    response.json().then((data) => 
        {console.log(data);
            document.querySelector('#ville').innerHTML = data.name;
            document.querySelector('#temperature').innerHTML = data.main.temp + '°C';
            document.querySelector('#conditions').innerHTML = data.weather[0].description;
}));
  
  
  