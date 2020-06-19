const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cd2d57c0c33155d142b6e6d6c8bd70bb&query='+latitude+','+longitude
    request({url: url, json: true}, (error, response)=> {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error){
            callback('Unable to find location', undefined)
        }else {
           callback(undefined, response.body.current.weather_descriptions[0]+`. It is currently ${response.body.current.temperature} degrees out and it feels like ${response.body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast