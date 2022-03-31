const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7abe65817bf3abd4daceea88910d5236&query='+ encodeURIComponent(latitude)+','+ encodeURIComponent(longitude) +'&units=m'

    request({ url, json: true}, (error,{ body }) => {
        if (error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        }else {
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out.' + ' Feels like: ' + body.current.feelslike)
        }
    })
}

module.exports = forecast