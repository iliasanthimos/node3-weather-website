const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=YOURWEATHERSTACKAPIKEY&query='+ encodeURIComponent(latitude)+','+ encodeURIComponent(longitude) +'&units=m'

    request({ url, json: true}, (error,{ body }) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        }else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' Celsius' + ' degress out.' + ' Feels like: ' + body.current.feelslike + ' Celsius degress. ' + ' UV Index: ' + body.current.uv_index + ' Wind Speed: ' + body.current.wind_speed + 'k/h' + ' Humidity: ' + body.current.humidity + '%')
        }
    })
}

module.exports = forecast
