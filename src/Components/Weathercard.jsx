import React, { useEffect } from "react";

const Weathercard = ({
  temp,
  weathermood,
  name,
  speed,
  country,
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;
          
        case "Rain":
          setWeatheState("wi-rain-wind");
          break;
        
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);


  return (
    <>
        <div class="weatherImg">
 <i class= {`wi ${weatherState}`}></i>
 
      </div>
      
      <div class="info">
      <div class="temprature">
        {temp} C°
      </div>
        <div class="weatherMood">
          {weathermood}
        </div>
        
        <div class="country">
        {name},{country}
      
        </div>
        
      </div>
      
    </>
  );
};

export default Weathercard;