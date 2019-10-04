console.log('Client side javascript file is loaded');

const weatherForm = document.querySelector('.main-content');
const search = document.querySelector('input');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location);
                console.log(data.forecast);
            }
        });
    });
});

// 
// Goal: Use input value to get weather
// 
// 1. Migrate fetch call into the submit callback
// 2. Use the search text as the address queyr string value
// 3. Submit the form with a valid and invalid value to test