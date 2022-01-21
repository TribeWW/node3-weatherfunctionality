const request = require("request");

//WeatherForecast

const weatherForecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=58b60d1bfbb8f06f4131ff5db94ed918&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out there. However it feels like ${body.current.feelslike} degrees. The humidity level is ${body.current.humidity}%. There is a ${body.current.precip}% chance of rain.`
      );
    }
  });
};

module.exports = weatherForecast;
