const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cd2d57c0c33155d142b6e6d6c8bd70bb&query='+latitude+','+longitude
    request({url: url, json: true}, (error, response)=> {
 
        const{weather_descriptions, temperature, feelslike} = response.body.current

        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if (response.body.error){
            callback('Unable to find location', undefined)
        }else {
           callback(undefined, weather_descriptions[0]+`. It is currently ${temperature} degrees out and it feels like ${feelslike} degrees out.`)
        }
    })
}

module.exports = forecast