const express = require('express');
const path = require('path');

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');


// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

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
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is about 50 degrees',
        location: 'Taipei, Taiwan',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});