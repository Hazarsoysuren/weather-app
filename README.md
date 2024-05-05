# weather-app
## Overview 
Weather App is a user-friendly application designed to provide real-time weather updates for any location worldwide. With a clean and intuitive interface, Weather App delivers essential weather information, including temperature, humidity, wind speed, and forecasts. This project demonstrates the integration of the OpenWeathermap API to fetch accurate weather data, catering to users who seek convenient access to weather information for planning their day or upcoming travels.

## Features
Current Weather Display
Stay informed with Weather App's current weather display, showcasing vital information such as temperature, humidity, wind speed, and weather condition. Users can quickly assess the current weather conditions at their desired location.

### Location Search
Weather App allows users to search for weather information in any location globally. By entering the desired location, users can retrieve accurate weather data, making it effortless to check weather conditions for travel destinations or distant areas.

![Search image](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/search.png?raw=true)

### Forecast
The forecast shows temperature and what weather condition it is, at the bottom it displays humidity and Wind Speed.
![Forecast image](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/forecast.png?raw=true)

### 404 error
If the user types in an invalid location the code will execute an image with text
![image of 404]()

### Responsive Design
Weather App features a responsive design, ensuring seamless user experience across various devices and screen sizes. Whether accessed on a desktop, tablet, or smartphone, users can enjoy consistent and visually appealing weather updates.

## Testing
- Validator Testing
  - HTML: Passed W3C validator with only one error.
  explanation for the error - The validator complains about the image source on line 36 on the html file being empty the reason for that is js file fills in the image needed for the weather condition based on the location you typed in.
  - CSS: No errors found when passing through the official Jigsaw validator.
  - JavaScript: Passed esprima validator without errors.
  

### Browser Compatibility
Weather App has undergone testing on multiple browsers, including Chrome, Firefox, Safari, and Edge, ensuring compatibility across popular browsers. Thorough testing has also been conducted to ensure optimal performance on different screen sizes.

### Unfixed Bugs
No major bugs have been identified during testing. Minor issues encountered were promptly addressed to maintain a seamless user experience.

## Fixed bugs
### API Fetch Function Not Working
During development, a bug was encountered where the API fetch function was not functioning as expected. Upon investigation, it was discovered that the fetch call in the JavaScript file containing the API key was not enclosed within backticks (`) to form a template literal. 
![solution](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/solution.png?raw=true)
### Solution
To resolve the issue, the fetch call was modified to utilize template literals, allowing for dynamic insertion of the city and APIKey variables into the URL string. This ensured that the API request was correctly formatted with the appropriate values for the city name and API key. With this fix in place, the API fetch function now operates as intended, successfully retrieving weather data from the OpenWeathermap API.


## Deployment
Weather App is deployed to GitHub Pages for easy access. The deployment process is involved in the steps below. 
- The site was deployed to GitHub pages. The steps to deploy are as follows:
   - In the GitHub repository, navigate to the Settings tab
   - From the source section drop-down menu, select the Master Branch
   - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
The live link can be found here


## Credits
### Content
Weather data and forecasts are provided by the [OpenWeathermap](https://openweathermap.org) API.

Additional information and resources were referenced from the OpenWeathermap documentation to ensure accurate implementation.

[cssgradient](https://cssgradient.io) was used to get the color schemes for this site

![Colorscheme](https://github.com/Hazarsoysuren/weather-app/blob/main/assets/images/color.png?raw=true)                  
Code is down below for the color
> background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);

### Media
Icons used in Weather App are sourced from Font Awesome, providing visually appealing and recognizable symbols for weather conditions.
