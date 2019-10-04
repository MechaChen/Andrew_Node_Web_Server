fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});

// 
// Goal: Fetch weather! 
// 
// 1. Setup a call to fetch weather for Boston
// 2. Get the parse JSON response
//    - If error property, print error
//    - If no error property, print location and forecast
// 3. Refresh the browser and test your work

fetch('http://localhost:3000/weather?address=boston').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    });
});