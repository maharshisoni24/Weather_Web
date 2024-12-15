import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function WeatherInfo({info}){
    let img_url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVCdn8OtuIxN_TaqEt0LEDwPSRUeZRaBEdw&s'
    if(info.humidity > 90){
        img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIhCESoyPiadpWc1mUVqTXVNFVS-sJGXhe-g&s"
    }else{
        if(info.temp < 10){
            img_url="https://quatr.us/wp-content/uploads/2017/08/snowing-300x168.jpg"
        }else{
            if(info.temp > 32){
                img_url="https://thumbs.dreamstime.com/b/heat-wave-extreme-sun-sky-background-hot-weather-global-warming-concept-temperature-summer-season-summer-heat-wave-147982844.jpg"
            }
        }
    }


    return(
        <div>
            <div style={{ display:'flex', justifyContent:'center'}}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}   
                    image={img_url}
                    title="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temprature: {info.temp}&deg;C <br />
                        Max Temp: {info.tempMax}&deg;C <br />
                        Min Temp.: {info.tempMin}&deg;C <br />
                        Humidity: {info.humidity} <br />
                        Wheather can be Described as <i>{info.weather}</i> and feels like {info.feelsLike}
                    </Typography>
                </CardContent>
                </Card>
            </div>
            
        </div>
    )
}