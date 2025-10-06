import React from 'react';

// Import icons
import clearIcon from '../assets/icons/clear.svg';
import cloudIcon from '../assets/icons/cloud.svg';
import hazeIcon from '../assets/icons/haze.svg';
import stormIcon from '../assets/icons/storm.svg';
import snowIcon from '../assets/icons/snow.svg';
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';

function WeatherDisplay({ weather }) {
  if (!weather) return null;

  const { location, current } = weather;

  // Decide which icon to show
  const getIcon = () => {
    const condition = current.condition.text.toLowerCase();

    if (condition.includes('rain')) return icon1;           // rainy
    if (condition.includes('cloud')) return cloudIcon;     // cloudy
    if (condition.includes('sun') || condition.includes('clear')) return clearIcon; // sunny
    if (condition.includes('snow')) return snowIcon;       // snowy
    if (condition.includes('storm') || condition.includes('thunder')) return stormIcon; // storm
    if (condition.includes('fog') || condition.includes('haze') || condition.includes('mist')) return hazeIcon; // mist/fog/haze
    return icon2; // fallback for unknown
  };

  const icon = getIcon();

  return (
    <div className="weather-display">
      <h2>{location.name}, {location.country}</h2>
      <img src={icon} alt={current.condition.text} style={{ width: 100, height: 100 }} />
      <p>Temperature: {current.temp_c} °C</p>
      <p>Condition: {current.condition.text}</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind: {current.wind_kph} km/h</p>
    </div>
  );
}

export default WeatherDisplay;
