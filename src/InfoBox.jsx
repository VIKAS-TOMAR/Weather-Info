import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./CommanStyle.css";

export default function InfoBox({ info }) {
    return (
        <div className='card-sty'>
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.unsplash.com/photo-1553984840-ec965a23cddd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>humidity = {info.humidity}</p>
                            <p>Weather = {info.weather}</p>
                            <p>TempMax = {info.temp_max}&deg;C</p>
                            <p>TempMin = {info.temp_min}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}