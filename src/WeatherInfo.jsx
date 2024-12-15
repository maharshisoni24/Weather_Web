import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function WeatherInfo({info}){

    return(
        <div>
            <div style={{ display:'flex', justifyContent:'center'}}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}   
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temprature: {info.temp}&deg;C <br />
                        Max Temp: {info.tempMax}&deg;C <br />
                        Min Temp.: {info.tempMin}&deg;C <br />
                        Humidity: {info.humidity}&deg;C <br />
                        Wheather can be Described as <i>{info.weather}</i> and feels like {info.feelsLike}
                    </Typography>
                </CardContent>
                </Card>
            </div>
            
        </div>
    )
}