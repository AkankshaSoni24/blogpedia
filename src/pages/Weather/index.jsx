import React, { useState } from "react";
import "./styles.css"
import Header from "../../components/Header";

const Weather = () => {
    const apikey = "591f64f63d870c7987d0436ded1364b9"
    const [WeatherData, setWeatherData] = useState([{}])
    const [city, setCity] = useState()
    const setTheCity = (e) => {
        setCity(e.target.value)
    }
    const getWeather = (event) => {

        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
            ).then(response => response.json()
            ).then(
                data => setWeatherData(data)
            ).catch(console.log("Error !!! Please enter a valid City.... "))
        }

    }

    const getWeatherD = (event) => {

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        ).then(response => response.json()
        ).then(
            data => setWeatherData(data)
        ).catch(console.log("Error !!! Please enter a valid City.... "))


    }
    return (
        <div className="weather-container">
            <Header title="BLOGPEDIA" />
            <div className="weather-heading">
                <h2> Hi! Please Enter City to check weather...</h2>
            </div>
            <div className="weather-input-container">
                <input onChange={setTheCity}
                    value={city}
                    onKeyPress={getWeather}
                    type="text"
                    placeholder="Enter City...">
                </input>
                <button className="weather-search-button" value={city} onClick={getWeatherD}>Search </button>
            </div>
            { 
                <div>
                <div className="weather-error"></div>
                    <div className="weather-city-name weather-output">{WeatherData.name}  </div>
                    <div className="weather-degree weather-output">  {
                        WeatherData?.main?.temp && WeatherData?.main?.temp + "`f"
                    }</div>
                    <div className="weather-wind-speed weather-output"> {
                        WeatherData?.wind?.speed && WeatherData?.wind?.speed + "km/h"
                    }</div>
                </div>
            }
        </div>
    )
}

export default Weather