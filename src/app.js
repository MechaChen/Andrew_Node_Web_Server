const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Benson Chen',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Bencons Chen',
    });
});

app.get('/help', (req, res) => {
    res.render('help', { 
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Benson Chen',
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({
            error: 'You must provide an address',
        });
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error });
        }

        forecast(latitude, longitude, (error, forecast) => {
            if (error) {
                return res.send(error);
            }

            res.send({ 
                location, 
                forecast,
                address: req.query.address,
            });
        })
    })
});

// 
// Goal: Wire up /weather
// 
// 1. Require geocode/forecast into app.js
// 2. Use the address to geocode
// 3. Use the coordinates to get forecast
// 4. Send back the real forecast and location

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term',
        });
    } 

    res.send({
        products: [],
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Benson Chen',
        errorMessage: 'Help artical not found',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Benson Chen',
        errorMessage: 'Page not found',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});