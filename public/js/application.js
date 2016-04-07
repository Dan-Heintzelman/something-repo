var keyword = "mountains";

    $(document).ready(function(){
        
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            $('html').css({'background-image': "url('" + image_src + "')", 'background-repeat': 'no-repeat', 'background-size': 'cover'});

        }) // Get JSON end

        $('.menu').dropit(); // Load menu drop effect
					

				var request = $.ajax({
        	type: 'GET',
        	url: '/location'
				});

				function parseWeather(weatherObj) {
					var city = weatherObj.name;
					var conditions = weatherObj.weather[0].description;
					var temp = weatherObj.main.temp;
					$('.weather h2').text(city);
					$('.weather p').text(conditions + " " + temp);
				}
				
				request.done(function(currentUserZip){
					console.log(currentUserZip)
					var userZip = currentUserZip
					var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + userZip + ",us&units=imperial"
					var data = { APPID: "2c6cdd65a4388fca923c8a3cfab665a1" }
					$.getJSON(url, data, parseWeather) // get JSON weather end

				}); //end of weather request


				$('.something').on('click', function(event){
					event.preventDefault();

					var jokeRequest = $.ajax({
						url: '/jokes',
						type: 'GET'
					})

					jokeRequest.done(function(joke){
						console.log(joke);
					})
				
				});	//end of joke api request

				// Move to a separate time.js file
        function startTime()
            {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                // Add a zero in front of numbers<10
                m = checkTime(m);
                s = checkTime(s);

                var suffix = "AM";
                if (h >= 12) {
                suffix = "PM";
                h = h - 12;
                }
                if (h == 0) {
                h = 12;
              	}


                $("#content h2").text(today.getMonth() +
                    "-" +
                    (today.getDate()+1)+"-" +
                    today.getFullYear()); 
                 $('#content p').text(h+":"+m+":"+s + suffix);

                t = setTimeout(function(){startTime()},1000);
            }

            function checkTime(i)
            {
                if (i<10)
                {
                    i = "0" + i;
                }
                return i;
            }

            startTime();
        
    }); // Doc ready end