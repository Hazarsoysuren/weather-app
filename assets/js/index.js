// Select DOM elements for manipulation
const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-overlay');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

// Add event listener to the search button
search.addEventListener('click', () => {

    // API key for OpenWeatherMap
    const APIKey = 'bc260d61f61c798efbaccb92a7a81799';
    // Get the city name entered by the user
    const city = document.querySelector('.search-box input').value;

    // If the city input is empty, do nothing
    if (city === '')
        return;

    // Fetch weather data from OpenWeatherMap API for the entered city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {

            // If the city is not found (error 404), display the error message
            if (json.cod === '404') {
                container.style.height = '100px'; // Adjust container height for error message
                weatherBox.style.display = 'none'; // Hide weather box
                weatherDetails.style.display = 'none'; // Hide weather details
                error404.style.display = 'block'; // Show 404 error message
                error404.classList.add('fadeIn'); // Add fadeIn animation to error message
                return; // Exit the function
            }

            // Hide the error message if the city is found
            error404.style.display = 'none'; // Hide 404 error message
            error404.classList.remove('fadeIn'); // Remove fadeIn animation from error message

            // Select elements to display weather information
            const image = document.querySelector('.weather-overlay img');
            const temperature = document.querySelector('.weather-overlay .temperature');
            const description = document.querySelector('.weather-overlay .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            // Update weather image based on weather conditions
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'assets/images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'assets/images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'assets/images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'assets/images/cloud.png';
                    break;
                case 'Haze':
                    image.src = 'assets/images/mist.png';
                    break;
                default:
                    image.src = ''; // Default to an empty image if condition is unknown
            }

            // Update weather details with data from API response
            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`; // Set temperature
            description.innerHTML = `${json.weather[0].description}`; // Set weather description
            humidity.innerHTML = `${json.main.humidity}%`; // Set humidity
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`; // Set wind speed

            // Display the weather box and details with a fade-in effect
            weatherBox.style.display = ''; // Show weather box
            weatherDetails.style.display = ''; // Show weather details
            weatherBox.classList.add('fadeIn'); // Add fadeIn animation to weather box
            weatherDetails.classList.add('fadeIn'); // Add fadeIn animation to weather details
            container.style.height = '50px'; // Adjust container height

        });

});
