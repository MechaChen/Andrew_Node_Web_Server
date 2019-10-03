const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Benson',
            age: 25,
        }, 
        {
            name: 'Rebecca',
            age: 29,
        }
    ]);
});

// 
// Goal: Setup two new routes
// 
// 1. Setup an about route and render a page title
// 2. Setup a weather route and render a page title
// 3. Test your work by visiting both in the browser

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/weather', (req, res) => {
    res.send('Show weather');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});