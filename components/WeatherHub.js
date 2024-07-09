import { useEffect, useState } from 'react';

const client_id = 'eccc5903792f4c2d917b6192e55db263'; // Your client id
const client_secret = 'fb5698202cd14ab8a4f015d21e9671d7'; // Your secret
const redirect_uri = 'http://localhost:3000/'; // Your redirect uri
const authorization_code = 'AQB3d43LKeHZr27TWATybhSUmXRQvr15I5wWea7H9CYtjwXl0uiVSsu-1CrgrH-uQDhwpaf9BQZdD4owvW7Gp0xFpyVZLGeDPEbbhjTUjGLiF14biFeKxHehuFCbObj1noIgdVbR2-7q4EMaTXUG0DG9cGhH6iAMb8zjoHy2Prkg_G1UOflt7NDuzNcoAvR2pj4pBsYVttysgpSll34';

const fetchWeatherAndAstronomy = async () => {
  const apiKey = '30cdc141d452409d92a5d032c7799521';
  const lat = '40.7128';
  const lon = '-74.0060';
  const part = 'minutely,hourly';
  const response = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}&units=imperial`
  );
  const data = await response.json();

  console.log(data);
  return {
    sunrise: data.current.sunrise,
    sunset: data.current.sunset,
    weather: data.current.weather[0].main,
    description: data.current.weather[0].description,
    data: data,
  };
};

const fetchRecentlyPlayed = async (accessToken) => {
  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  const data = await response.json();
  console.log(data);
};

const exchangeToken = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
    },
    body: `grant_type=authorization_code&code=${authorization_code}&redirect_uri=${encodeURIComponent(redirect_uri)}`
  });

  const data = await response.json();
  if (data.access_token) {
    fetchRecentlyPlayed(data.access_token);
  }
};

const generateRandomString = (length) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export default function WeatherHub() {
  const [background, setBackground] = useState('');
  const [description, setDescription] = useState('');
  const [song, setSong] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateBackground = async () => {
      const { sunrise, sunset, weather, description, data } =
        await fetchWeatherAndAstronomy();
      const now = new Date().getTime() / 1000; // current time in seconds
      const dayProgress = (now - sunrise) / (sunset - sunrise);
      const temp = data.current.temp; // current temperature in Fahrenheit
      let color1, color2;

      // Adjust colors based on weather
      switch (weather) {
        case 'Clear':
          color1 = 'yellow';
          color2 = 'lightblue';
          break;
        case 'Rain':
        case 'Drizzle':
          color1 = 'gray';
          color2 = 'darkblue';
          break;
        case 'Thunderstorm':
          color1 = 'darkgray';
          color2 = 'black';
          break;
        case 'Snow':
          color1 = 'lightblue';
          color2 = 'white';
          break;
        case 'Clouds':
          color1 = 'lightgray';
          color2 = 'darkgray';
          break;
        case 'Fog':
        case 'Mist':
        case 'Haze':
          color1 = 'lightblue';
          color2 = 'gray';
          break;
        default:
          color1 = 'orange';
          color2 = 'purple';
      }

      // Modify gradient intensity based on temperature
      const tempFactor = Math.max(0, Math.min(100, ((temp - 32) / 68) * 100)); // Scale from 0% to 100% for temperatures 32°F to 100°F

      // Smooth linear gradient background
      const gradient = `linear-gradient(${color1} 50%, ${color2} 100%)`;
      setBackground(gradient);

      // Set the description to include the weather and the day progress and temperature
      setDescription(`${description} and ${data.current.temp}°F`);
    };

    updateBackground();

    const interval = setInterval(() => {
      const nowTime = new Date(); // Create a new Date object
      const formattedTime = nowTime.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    exchangeToken(authorization_code);
  }, []);

  const handleSpotifyAuth = () => {
    const client_id = 'eccc5903792f4c2d917b6192e55db263'; // Your Spotify client ID
    const redirect_uri = encodeURIComponent('http://localhost:3000/');
    const scope = encodeURIComponent('user-read-private user-read-email');
    const state = generateRandomString(16); // You need to implement this function to generate a random string

    window.location.href = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}&state=${state}&show_dialog=true`;
  };

  return (
    <div
      className="h-full w-full rounded-md flex p-4 justify-end items-end"
      style={{ background }}
    >
      <div
        className="text-mono bg-opacity-50 p-4 px-4 rounded-md bg-white 
        bg-blend-overlay w-auto h-12 flex items-center justify-center"
      >
        <div className="text-sm text-gray-900">
          In NYC, it's {currentTime} with {description}. Gradient generated with
          these values.
        </div>
      </div>
      
      {/* <button
        onClick={handleSpotifyAuth}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Connect to Spotify
      </button> */}
    </div>
  );
}
