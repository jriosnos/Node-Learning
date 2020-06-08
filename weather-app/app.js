const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=cd2d57c0c33155d142b6e6d6c8bd70bb&query=37.8267,-122.4233'

request({url: url, json: true}, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service')
    }else if(response.body.error){
        console.log('Unable to find location')
    } else{
        console.log(response.body.current.weather_descriptions[0]+`. It is currently ${response.body.current.temperature} degrees out and it feels like ${response.body.current.feelslike} degrees out.`)
    }
})

// Geocoding
// Addres -> Lat/Long -> Weather
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Philadelphia.json?access_token=pk.eyJ1IjoianJpb3Nub3MiLCJhIjoiY2tiMTFoajk5MGZ1bTJwbzJlazVwbXoxMyJ9.wKUoxcKOYFf_ra8JyV9kKw&limit=1'

request({url: geocodeURL, json: true}, (error, response) =>{
    if(error){
        console.log('Unable to connect to location services')
    } else if(response.body.features.length == 0){
        console.log('Unable to complete location request, check parameters!')
    } else{
       console.log(`The latitude is ${response.body.features[0].center[1]} and longitude is ${response.body.features[0].center[0]}`)
        }
})