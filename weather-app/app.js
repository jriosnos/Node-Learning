const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// const url = 'http://api.weatherstack.com/current?access_key=cd2d57c0c33155d142b6e6d6c8bd70bb&query=37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log('Unable to find location')
//     } else{
//         console.log(response.body.current.weather_descriptions[0]+`. It is currently ${response.body.current.temperature} degrees out and it feels like ${response.body.current.feelslike} degrees out.`)
//     }
// }) 

// geocode('Boston', (error, data)=>{
//     console.log('Error', error)
//     console.log('Data', data)
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(37.8267,-122.4233, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})