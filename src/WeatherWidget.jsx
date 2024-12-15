import { useState } from "react"
import SearchBox from "./SearchBox"
import WeatherInfo from "./WeatherInfo"

export default function WeatherWidget(){
    let[weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike:13.76,
        humidity:44,
        temp:15.05,
        tempMin:15.05,
        tempMax:15.05,
        weather:"haze"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    let [err,setErr]=useState(false);


    return(
        <div style={{textAlign: "center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo} setErr={setErr}/>
        {err ? <p style={{color:"red"}}>No such city exist</p> : <WeatherInfo info={weatherInfo}/> }   
        </div>
       
    )
}