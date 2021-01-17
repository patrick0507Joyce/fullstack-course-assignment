import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryWeather = ({ countryCapitalName }) => {

  const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const [weather, setWeather] = useState('');

    const weatherHook = () => {
        axios
        .get(
            `http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${countryCapitalName}`
        )
        .then((response) => {
            console.log(response);
            const currentData = response.data.current;
            console.log(currentData.weather_icons);
            setWeather({
                temperature:currentData.temperature,
                windDegree: currentData.wind_degree,
                windDirection: currentData.wind_dir,
                weatherImageUrl: currentData.weather_icons,
            })
        });
    };

    useEffect(weatherHook, []);

  return (
    <div>
        <p><b>temperature:</b> &nbsp;{weather.temperature} Celcius</p>
        <img src={weather.weatherImageUrl} />
        <p>
            <b>wind:</b> 
            &nbsp; 
            {weather.windDegree} 
            &nbsp; 
            direction 
            &nbsp; 
            {weather.windDirection}
        </p>
    </div>
  );
};

export default CountryWeather;
