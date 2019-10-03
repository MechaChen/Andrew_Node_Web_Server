const express = require('express');
const path = require('path');

console.log(__dirname);
console.log(__filename);

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath));

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

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
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