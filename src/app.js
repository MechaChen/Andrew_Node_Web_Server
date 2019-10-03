const express = require('express');
const path = require('path');

console.log(__dirname);
console.log(__filename);

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const aboutPath = path.join(__dirname, '../public/about.html');
const helpPath = path.join(__dirname, '../public/help.html');

app.use(express.static(publicDirectoryPath));
app.use(express.static(aboutPath));
app.use(express.static(helpPath));

// 
// Goal: Create two more HTML files
// 
// 1. Create a html page for about with "About" title
// 2. Create a html page for help with "Help" title
// 3. Remove the old route handlers for both
// 4. Visit both in the browser to test your work

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is about 50 degrees',
        location: 'Taipei, Taiwan',
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});