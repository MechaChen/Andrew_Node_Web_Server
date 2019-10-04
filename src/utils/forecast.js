const request = require('request');
const moment = require('moment');

// 
// Goal: Add new data to forecast
// 
// 1. Update the forecast string to include new data
// 2. Commit your changes
// 3. Push your changes to Github and deploy to Heroku
// 4. Test your work in the live application!

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/d4950cfcd7848f7f38a8e24385427d0e/${latitude},${longitude}?units=si`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature}°C out. The highest temperature is ${body.daily.data[0].temperatureHigh}°C at ${moment(body.daily.data[0].temperatureHighTime).format('LTS')} today. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    })
}

module.exports = forecast;