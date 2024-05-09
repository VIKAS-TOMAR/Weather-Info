import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5f103ffeddbeb1ce34805b8c6711ef98";



    let handler = (evt) => {
        setCity(evt.target.value)
    }

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let responseJason = await response.json();
        console.log(responseJason);
        let result = {
            city: city,
            temp: responseJason.main.temp,
            temp_max: responseJason.main.temp_max,
            temp_min: responseJason.main.temp_min,
            weather: responseJason.weather[0].description,
            humidity: responseJason.main.humidity,
        }

        return result;
    }

    let submitHanler = async (evt) => {
        evt.preventDefault()
        console.log(city)
        setCity("")
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
    }
    return (
        <div className='SeacrchBox'>
            <form onSubmit={submitHanler}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handler} />
                <br></br>< br></br>
                <Button variant="contained" type="submit" >Search</Button>
            </form>
        </div>
    )
}