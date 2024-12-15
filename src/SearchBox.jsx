
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox( {updateInfo,setErr}){
    let [city,setCity]=useState("");
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="3a439a718a45bce90bfbb8861741e239"

    let getWeatherInfo = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse= await response.json();
            console.log(jsonResponse);
            let result={
                city: jsonResponse.name,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(er){
            console.log(er);
            throw er;
        }
        
    }
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            let newInfo= await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setErr(false);
        }catch(er){
            setErr(true);
            console.log(er);
        }
    }

    return(
        <div className='searchBox'>
        <form onSubmit={handleSubmit}>
            <TextField 
            id="outlined-basic" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange}/>
             <br /><br />
            <Button variant='contained' type='submit' endIcon={<SearchIcon/>} >Search</Button>
        </form>
        </div>
    )
}