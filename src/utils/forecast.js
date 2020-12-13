const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=528ea1f39cb34821a9c740ad71636a35&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to server!", undefined);
    } else if (body.error) {
      callback("Unable to find the co-ordinates!", undefined);
    } else {
      const mystring={
        observation_time: body.current.observation_time,
        temperature: body.current.temperature,
        weather: body.current.weather_descriptions[0],
        feels_like: body.current.feelslike,
        precipitation: body.current.precip,
        humidity: body.current.humidity,
        wind_speed: body.current.wind_speed,
        uv_index: body.current.uv_index
      };
      callback(undefined, mystring);
    }
  });
};

module.exports = forecast;