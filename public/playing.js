$(document).ready(function () {
    var lat;
    var lon;
    $('#go').click(function(){
        var city = $('#city').val();
        $.fn.downloadMap(city);
        $.fn.showPlay(city);
    });
    
    $.fn.downloadMap = function(city){
      var urlX = "https://maps.googleapis.com/maps/api/geocode/xml?address="+city+"&key=AIzaSyBmWHgNOus36qhgjN_b_3nkajvajDMZhuk"  
      $.ajax({
            type: "GET",
            url: urlX,
            dataType: "xml" ,
            success: function(xmlData){
                $(xmlData).find('result').each(function(){
                    lat = $(this).find('geometry').find('location').find('lat').text();
                    lon = $(this).find('geometry').find('location').find('lng').text();
                    return false;
                })
                console.log(lat+", "+lon);  
                $.fn.showMap();
                $.fn.downloadWeather(lat, lon);
            }
        });
        
    };
    
    $.fn.downloadWeather = function(lat, lon){
        var urlJ = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&units=metric&APPID=b24aad289e72adbdc40ef5d0693a4fa6";
        $.getJSON(urlJ, function(data) {
            var current = data.main.temp;
            var high = data.main.temp_max;
            var low = data.main.temp_min;
            var look = data.weather[0].description;
            var dir = data.wind.deg;
            var speed = data.wind.speed;
            var pressure = data.main.pressure;
            var humid = data.main.humidity;
            console.log(pressure + ", " + humid);
            
            $('#weather').addClass('box');
            $('#weather').html('<h2>Temperature</h2>');
            $('#weather').append('<p>Current: ' + current + '&deg;C</p>');
            $('#weather').append('<p>Low: ' + low + '&deg;C</p>');
            $('#weather').append('<p>High: ' + high + '&deg;C</p>');
            $('#weather').append('<h2>Outlook</h2>');
            $('#weather').append('<p> ' +look+ '</p>');
            $('#weather').append('<h2>Wind</h2>');
            $('#weather').append('<p>Direction: ' + dir + '&deg;</p>');
            $('#weather').append('<p>Speed: ' + speed + 'm/s</p>');        
            $('#weather').append('<h2>Pressure</h2>');
            $('#weather').append('<p>' + pressure + 'mB</p>');
            $('#weather').append('<h2>Humidity</h2>');
            $('#weather').append('<p>'+ humid + '%</p>');
            
        });
    };
    
    $.fn.showMap = function(){
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: parseFloat(lat), lng: parseFloat(lon)},
          zoom: 10
        });
    };
    
    $.fn.showPlay = function(city){
        var cdate = new Date();
        var dtime = cdate.getFullYear()+"-"+ (cdate.getMonth()+1)+"-"+ cdate.getDate();
        
        console.log(dtime);
        
        urlNP = "http://data.tmsapi.com/v1.1/movies/showings?startDate="+dtime+"&zip="+city+"&api_key=fzs587dc8mhq4u4xetqbxjr5";
        
        $.getJSON(urlNP, function(data){
            $('#table').html('<h2>NOW PLAYING:</h2>')
            $('#table').append('<hr>');
            
            
            for(var i=0; i < data.length; i++){
                var title = '<h3>' + data[i].title + '</h3>';
                $('#table').append(title);
                
                var table=document.createElement('table');
                var tr = document.createElement('tr');
                var th1 = document.createElement('th');
                th1.appendChild(document.createTextNode('Theater'));
                var th2 = document.createElement('th');
                th2.appendChild(document.createTextNode('Date'));
                var th3 = document.createElement('th');
                th3.appendChild(document.createTextNode('Time'));
                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);
                table.appendChild(tr);
                
                for(var j=0; j< data[i].showtimes.length; j++){
                    var tr = document.createElement('tr');
                    var td1 = document.createElement('td');
                    td1.appendChild(document.createTextNode(data[i].showtimes[j].theatre.name));
                    var temp =data[i].showtimes[j].dateTime;
                    var splt = temp.split("T");
                    var td2 = document.createElement('td');
                    td2.appendChild(document.createTextNode(splt[0]));
                    var td3 = document.createElement('td');
                    td3.appendChild(document.createTextNode(splt[1]));
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    table.appendChild(tr);
                }
                
                $('#table').append(table);
                $('#table').append('<hr>');
                
            }
            
        });
    };
});