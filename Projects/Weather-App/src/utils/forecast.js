const postman_request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url='http://api.weatherstack.com/current?access_key=324d74d0878fa57af5815b1e2e06f5a3&query=' + latitude + ',' + longitude

postman_request({ url, json: true }, (error, { body }) => {
    if(error){
        callback('Unable to connect', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
    } else{
        callback(undefined , body.current.weather_descriptions[0] + '! It is currently ' + body.current.temperature +' degress out. It feels like ' + body.current.feelslike + ' degress out.')
    }
})}

module.exports = forecast