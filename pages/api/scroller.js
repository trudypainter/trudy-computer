import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  let views = createView(req, res);
  let songs = getSongs(req, res);
  let weather = getWeather(req, res);

  let promiseList = [views, songs, weather];
  Promise.all(promiseList).then((values) => {
    promiseList = values;
    let data = `Website Views: ${values[0]}  |  Songs Listened to Today: ${values[1]}  |  Boston's Current Weather: ${values[2]}`;
    res.status(200).json({
      data: [data, data, data].join('  | ') + '  |  ',
    });
  });
}

async function getSongs(req, res) {
  const d = new Date();
  let m = d.getMonth() + 1;
  let Y = d.getFullYear();
  let date = d.getDate();

  let resp = await fetch(`https://www.trudy.tube/api/${m}.${date}.${Y}`);
  let songs = await resp.json();
  return songs['songs'].length;
}

async function getWeather(req, res) {
  let resp = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=boston&appid=3fc9710dd566f607ef8248e37e80416a&units=imperial`
  );
  let weather = await resp.json();
  return (
    Math.round(weather['main']['temp']) +
    ' and ' +
    weather['weather'][0]['description']
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ')
  );
}

async function createView(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.view.create({
      data: {},
    });
    return newEntry['id'];
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating view', success: false });
  }
}
