const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoianJpb3Nub3MiLCJhIjoiY2tiMTFoajk5MGZ1bTJwbzJlazVwbXoxMyJ9.wKUoxcKOYFf_ra8JyV9kKw&limit=1'
    request({url: url, json: true }, (error, response)=>{
        if(error){
            callback('Unable to connect to location services!')
        }else if(response.body.features.length == 0){
            callback('Unable to find location; try another search', undefined)
        }else{
            const {center, place_name} = response.body.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                location: place_name
            })
        }
    })
}

module.exports = geocode