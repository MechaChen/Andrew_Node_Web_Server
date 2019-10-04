console.log('Client side javascript file is loaded');

fetch(`http://localhost:3000/weather?address=boston`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecast);
        }
    });
});

const weatherForm = document.querySelector('.main-content');
const search = document.querySelector('input');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    console.log(location);
});