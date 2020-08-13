const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setting up handlebars engine and location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

//Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Julien Rios'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Julien Rios'
    })
})

app.get('/help', (req, res)=> {
    res.render('help',{
        title: 'Help',
        paragraph: 'This is the help page where all your answers can be questioned to possibly help you',
        name: 'Julien Rios'
    })
})

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'Cloudy',
        location: 'Toronto'
    })
})

app.get('/help/*', (req, res) =>{
    res.render('error',{
        emessage: 'Help article not found'
    })
})

app.get('*', (req, res) =>{
     res.render('error',{
        emessage: 'Page not found'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000.')
})