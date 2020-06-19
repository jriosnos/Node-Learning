const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if(process.argv[2]){
  geocode(process.argv[2], (error, data)=>{
    if(error){
      return console.log(error)
    }
      
    forecast(data.latitude, data.longitude, (error, forecastData) => {
    if(error){
      return console.log(error)
    }
    console.log(data.location)
    console.log(forecastData)
    })
  })
}else{
  console.log("Please provide a location using command line")
}


