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
      callback(
        undefined,

        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees. It feels like " +
          body.current.feelslike +
          " degrees. There is " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
