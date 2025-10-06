import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import Footer from './components/Footer';
import About from './pages/About';
import './App.css';

// Import GIFs for backgrounds
import sunnyBg from './assets/backgrounds/sunny.gif';
import cloudyBg from './assets/backgrounds/cloudy.gif';
import rainyBg from './assets/backgrounds/rainy.gif';
import snowyBg from './assets/backgrounds/snowy.gif';
import stormyBg from './assets/backgrounds/stormy.gif';
import foggyBg from './assets/backgrounds/foggy.gif';

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [background, setBackground] = useState(sunnyBg);
  const [recentCities, setRecentCities] = useState([]);
  const apiKey = 'ac84fdbe187f4de28c293333250610';

  const getWeather = useCallback(async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      const data = await response.json();

      if (data.error) {
        alert(data.error.message);
        setWeather(null);
      } else {
        setWeather(data);
        setBackground(getBackgroundStyle(data.current.condition.text));
        addToRecent(city);
      }
    } catch (error) {
      alert('Network error');
      setWeather(null);
    }
  }, [apiKey]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          getWeather(`${lat},${lon}`);
        },
        () => getWeather('New York')
      );
    } else {
      getWeather('New York');
    }
  }, [getWeather]);

  const addToRecent = (city) => {
    setRecentCities((prev) => {
      const updated = [city, ...prev.filter(c => c.toLowerCase() !== city.toLowerCase())];
      return updated.slice(0, 5);
    });
  };

  const getBackgroundStyle = (condition) => {
    condition = condition.toLowerCase();
    if (condition.includes('rain')) return rainyBg;
    if (condition.includes('cloud')) return cloudyBg;
    if (condition.includes('sun') || condition.includes('clear')) return sunnyBg;
    if (condition.includes('snow')) return snowyBg;
    if (condition.includes('storm')) return stormyBg;
    if (condition.includes('fog') || condition.includes('haze') || condition.includes('mist')) return foggyBg;
    return sunnyBg;
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 1s ease-in-out',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div className="main-content">
        <div className="content">
          <h1>Weather App</h1>
          <WeatherForm onSearch={getWeather} />
          <div className="recent-cities city-buttons">
            {recentCities.map((city, idx) => (
              <button key={idx} onClick={() => getWeather(city)}>
                {city}
              </button>
            ))}
          </div>
          <WeatherDisplay weather={weather} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
