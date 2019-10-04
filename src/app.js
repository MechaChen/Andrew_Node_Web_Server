const express = require('express');
const path = require('path');
const hbs = require('hbs');

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
    res.send({
        forecast: 'It is about 50 degrees',
        location: 'Taipei, Taiwan',
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

// 
// Goal: Create and render a 404 page with handlerbars
// 
// 1. Setup the template to render the header and footer
// 2. Setup the template to render an error message in a paragraph
// 3. Render the template for both 404 routes
//    - Page not found
//    - Help article not found.
// 4. Test your work. Visit /what and /help/units

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});