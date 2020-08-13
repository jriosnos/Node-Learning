const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=cd2d57c0c33155d142b6e6d6c8bd70bb&query=40,-75'


const request = http.request(url, (response)=>{
    let data =''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })
    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})
request.on('error', (error)=>{
    console.log('An error', error)
})
request.end()