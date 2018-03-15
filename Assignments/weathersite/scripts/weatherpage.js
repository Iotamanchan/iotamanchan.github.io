var weatherObject = new XMLHttpRequest();
            
            weatherObject.open( 'GET', 
                               'https://byui-cit230.github.io/weather/data/towndata.json', true);
            
            weatherObject.send();
            weatherObject.onload = function() {
                
                var weatherInfo = JSON.parse(weatherObject.responseText);
                console.log(weatherInfo)
                
                document.getElementById('place1').innerHTML = weatherInfo.towns["0"].motto;
                
                document.getElementById('found1').innerHTML = weatherInfo.towns["0"].yearFounded;
                
                document.getElementById('pop1').innerHTML = weatherInfo.towns["0"].currentPopulation;
                
                document.getElementById('rain1').innerHTML = weatherInfo.towns["0"].averageRainfall;
                
                document.getElementById('place2').innerHTML = weatherInfo.towns["1"].motto;
                
                document.getElementById('found2').innerHTML = weatherInfo.towns["1"].yearFounded;
                
                document.getElementById('pop2').innerHTML = weatherInfo.towns["1"].currentPopulation;
                
                document.getElementById('rain2').innerHTML = weatherInfo.towns["1"].averageRainfall;
                
                document.getElementById('place3').innerHTML = weatherInfo.towns["2"].motto;
                
                document.getElementById('found3').innerHTML = weatherInfo.towns["2"].yearFounded;
                
                document.getElementById('pop3').innerHTML = weatherInfo.towns["2"].currentPopulation;
                
                document.getElementById('rain3').innerHTML = weatherInfo.towns["2"].averageRainfall;
                
                document.getElementById('place4').innerHTML = weatherInfo.towns["3"].motto;
                
                document.getElementById('found4').innerHTML = weatherInfo.towns["3"].yearFounded;
                
                document.getElementById('pop4').innerHTML = weatherInfo.towns["3"].currentPopulation;
                
                document.getElementById('rain4').innerHTML = weatherInfo.towns["3"].averageRainfall;
                
            }