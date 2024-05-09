import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./CommanStyle.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelslike: 24.84,
        temp: 25.05,
        temp_min: 25.05,
        temp_max: 25.05,
        weather: "haze",
        humidity: 47,
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)

    }

    return (
        <div className="text-set">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <br></br>
            <InfoBox info={weatherInfo} />
        </div>
    )
}