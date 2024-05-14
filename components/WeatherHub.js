import { useEffect, useState } from 'react';

const client_id = 'eccc5903792f4c2d917b6192e55db263'; // Your client id
const client_secret = 'fb5698202cd14ab8a4f015d21e9671d7'; // Your secret
const redirect_uri = 'http://localhost:3000/'; // Your redirect uri

async function getAccessToken(code) {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirect_uri}`,
  });
  const data = await response.json();
  return data.access_token;
}

async function getRecentlyPlayedTracks(access_token) {
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  const data = await response.json();
  return data.items.map((item) => item.track.name).join(', '); // Returns a string of track names
}

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
      if (weather === 'Clear') {
        color1 = 'yellow';
        color2 = 'blue';
      } else if (weather === 'Rain') {
        color1 = 'gray';
        color2 = 'darkblue';
      } else {
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
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      getAccessToken(code).then((token) => {
        getRecentlyPlayedTracks(token).then((trackNames) => {
          setSong(trackNames);
        });
      });
    }
  }, []);

  const handleSpotifyAuth = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}&scope=user-read-recently-played`;
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
          In NYC, it's {currentTime} with {description}. Gradient generated with these values.
        </div>
      </div>
      {/* <div
        className="text-mono bg-opacity-50 p-4 rounded-md bg-white 
        bg-blend-overlay w-auto h-fit flex flex-col items-start justify-center"
      >
        <div className="italic text-sm">Recent song from Spotify {song}</div>
      </div>
      <button
        onClick={handleSpotifyAuth}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Connect to Spotify
      </button> */}
    </div>
  );
}
