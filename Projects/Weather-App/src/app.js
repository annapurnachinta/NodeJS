const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('../src/utils/geocode')
const forecast = require('../src/utils/forecast')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        footer: 'Annapurna'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather',
        footer: 'Annapurna'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
        // console.log(latitude, longitude, location,(req.query.address))
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecastData: forecastData,
                location,
                address: req.query.address
            })
            
        })
    })
})

app.get('/help/*', (req,res) =>{
    res.render('404-error', {
        title: 'Weather',
        message: 'The page not found',
        footer: 'Annapurna'
})
})


app.get('*', (req,res) =>{ 
    res.render('404-error', {
    title: 'Weather',
    message: '404 error',
    footer: 'Annapurna'
})
})

app.listen(port, () =>{
    console.log('server is up on port' + port)
})