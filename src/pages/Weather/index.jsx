import React, { useState, useEffect } from "react";
import "./styles.css";
import Clock from "../../components/Clock";

const Weather = () => {
  const apikey = "591f64f63d870c7987d0436ded1364b9";
  // const [changeCity, setChangeCity] = useState("");
  const [WeatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const setTheCity = (e) => {
    setCity(e.target.value);
  };
  const getWeather = (event) => {
    console.log(city, "check");
    if (event.key === "Enter" || event === "onClick") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch(console.log("Error !!! Please enter a valid City.... "));
    }
  };

  const getWeatherD = (event) => {
    console.log(event);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch(console.log("Error !!! Please enter a valid City.... "));
  };

  const changeToCelsius = () => {
    let temp = WeatherData?.main?.temp - 273.15;
    return parseInt(temp);
  };
  return (
    <div className="weather-container">
      <Clock />
      <div className="weather-input-container">
        <input
          onChange={setTheCity}
          value={city}
          type="text"
          onKeyPress={getWeather}
          placeholder="Enter City..."
        ></input>
        <button
          className="weather-search-button"
          value={city}
          onClick={getWeatherD}
        >
          Search{" "}
        </button>
      </div>
      <div className="weather-heading">
        <h1>
          {WeatherData.name === undefined
            ? "Hi! Please Enter City to check weather... "
            : WeatherData.name}
        </h1>
      </div>
      {console.log(WeatherData, city, "weather data ")}{" "}
      {
        <div>
          <div className="weather-error"></div>
          {/* <div className="weather-city-name weather-output">
            {WeatherData.name}{" "}
          </div> */}
          <div className="weather-degree weather-output">
            <h2>{WeatherData?.main?.temp && changeToCelsius() + "°C"}</h2>
          </div>
          <div className="weather-wind-speed weather-output">
            <h2>
              {WeatherData?.wind?.speed && WeatherData?.wind?.speed + "km/h"}
            </h2>
          </div>
        </div>
      }
      {/* 
      <div className="cities_container">
        <div
          className="city"
          value={"Delhi"}
          onClick={(e) => setTheCity(e) && getWeatherD(e)}
        >
          Delhi
        </div>
        <div className="city" value={"Paris"}>
          Paris
        </div>
        <div className="city" value={"Londan"}>
          Londan
        </div>
        <div className="city" value={"New York"}>
          New York
        </div>
      </div> */}
      {/* <div className="citesOutputContainer">
        {
          <div>
            <div className="weather-error"></div>
            <div className="weather-city-name weather-output">
              {WeatherData.name}{" "}
            </div>
            <div className="weather-degree weather-output">
              {" "}
              {WeatherData?.main?.temp && WeatherData?.main?.temp + "`f"}
            </div>
            <div className="weather-wind-speed weather-output">
              {" "}
              {WeatherData?.wind?.speed && WeatherData?.wind?.speed + "km/h"}
            </div>
          </div>
        }
      </div> */}
    </div>
  );
};

export default Weather;
