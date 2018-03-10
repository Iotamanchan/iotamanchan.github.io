var weatherObject2 = new XMLHttpRequest();
            
            weatherObject2.open( 'GET', 
                               'http://api.wunderground.com/api/4919750498aeffb3/conditions/q/MN/Franklin.json', true);
            
            weatherObject2.send();
            weatherObject2.onload = function() {
                
                var weatherInfo2 = JSON.parse(weatherObject2.responseText);
                console.log(weatherInfo2)
                
                 document.getElementById('currentob').innerHTML = weatherInfo2.current_observation.weather;
                
                document.getElementById('current1').innerHTML = weatherInfo2.current_observation.dewpoint_string;
                
                document.getElementById('windspeed').innerHTML = weatherInfo2.current_observation.wind_mph;
                
                document.getElementById('wicon').src = weatherInfo2.current_observation.icon_url;
                
                
                
            }
            
            var weatherObject3 = new XMLHttpRequest();
            
            weatherObject3.open( 'GET', 
                               'http://api.wunderground.com/api/4919750498aeffb3/forecast/q/MN/Franklin.json', true);
            
            weatherObject3.send();
            weatherObject3.onload = function() {
                
                var weatherInfo3 = JSON.parse(weatherObject3.responseText);
                console.log(weatherInfo3)
                
                document.getElementById('forecast').innerHTML = weatherInfo3.forecast.txt_forecast.forecastday[7].fcttext;
            }
            
            ///