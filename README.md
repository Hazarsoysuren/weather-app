# weather-app
## Overview 
Weather App is a user-friendly application designed to provide real-time weather updates for any location worldwide. With a clean and intuitive interface, Weather App delivers essential weather information, including temperature, humidity, wind speed, and forecasts. This project demonstrates the integration of the OpenWeather API to fetch accurate weather data, catering to users who seek convenient access to weather information for planning their day or upcoming travels.

## Features
Current Weather Display
Stay informed with Weather App's current weather display, showcasing vital information such as temperature, humidity, wind speed, and weather condition. Users can quickly assess the current weather conditions at their desired location.

### Location Search
Weather App allows users to search for weather information in any location globally. By entering the desired location, users can retrieve accurate weather data, making it effortless to check weather conditions for travel destinations or distant areas. ![Search image](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/search.png?raw=true)

### Forecast
Plan ahead with Weather App's forecast feature, providing users with insights into future weather conditions. The forecast section offers predictions for upcoming days, empowering users to make informed decisions based on weather trends. ![Forecast image](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/forecast.png?raw=true)

### Responsive Design
Weather App features a responsive design, ensuring seamless user experience across various devices and screen sizes. Whether accessed on a desktop, tablet, or smartphone, users can enjoy consistent and visually appealing weather updates.

## Testing
- Validator Testing
  - HTML: Passed W3C validator without errors.
  - CSS: No errors found when passing through the official Jigsaw validator.
  - JavaScript: Passed Jshint validator without errors.
  

## Browser Compatibility
Weather App has undergone testing on multiple browsers, including Chrome, Firefox, Safari, and Edge, ensuring compatibility across popular browsers. Thorough testing has also been conducted to ensure optimal performance on different screen sizes.

## Unfixed Bugs
No major bugs have been identified during testing. Minor issues encountered were promptly addressed to maintain a seamless user experience.

## Fixed bugs
### API Fetch Function Not Working
During development, a bug was encountered where the API fetch function was not functioning as expected. Upon investigation, it was discovered that the fetch call in the JavaScript file containing the API key was not enclosed within backticks (`) to form a template literal. 
![solution](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/solution.png?raw=true)
### Solution
To resolve the issue, the fetch call was modified to utilize template literals, allowing for dynamic insertion of the city and APIKey variables into the URL string. This ensured that the API request was correctly formatted with the appropriate values for the city name and API key. With this fix in place, the API fetch function now operates as intended, successfully retrieving weather data from the OpenWeather API.


## Deployment
Weather App is deployed to GitHub Pages for easy access. The deployment process involved selecting the Master Branch as the source in the repository settings. The live version of Weather App can be accessed here.

## Credits
### Content
Weather data and forecasts are provided by the OpenWeather API.
Additional information and resources were referenced from the OpenWeather documentation to ensure accurate implementation.

## Media
Icons used in Weather App are sourced from Font Awesome, providing visually appealing and recognizable symbols for weather conditions.
General Project Advice
Maintain a healthy commit history with descriptive commit messages to track changes effectively. Prioritize meaningful file naming and adhere to best coding practices for clean and maintainable code. Plan your project thoroughly to simplify the development process and ensure a successful outcome!