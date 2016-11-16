
$(document).ready(function(){
	$('input#clicky').click(function(event){
		event.preventDefault();
		newZipcode = document.getElementById('zip').value;
		getRequest(newZipcode);		
		// $("p#resortName").text(newZipcode);
	});
});


function getRequest(zippyDoDah){
    var startUrl = 'https://api.worldweatheronline.com/premium/v1/search.ashx?';
    var keykey = 'key=cb4a3d52f4b54aa1993205712161011&q=';
    var endingUrl = '&format=json&num_of_results=3&wct=Ski';
	var findResort = startUrl+keykey+zippyDoDah+endingUrl;

	$.getJSON(findResort,function(datas){
		var lat = datas.search_api.result[0].latitude;
		var long = datas.search_api.result[0].longitude;
		var baseURL = 'https://api.worldweatheronline.com/premium/v1/ski.ashx?key=cb4a3d52f4b54aa1993205712161011&q=';
		var locale = lat+','+long;
		var endURL = '&format=json&date=today';
		var input = baseURL+locale+endURL;
		$('p#resortName').text(datas.search_api.result[0].areaName[0].value+','+datas.search_api.result[0].region[0].value);
		$.getJSON(input,function(datum){
			var isItSnowing = datum.data.weather[0].chanceofsnow;
			$('span#output').text(isItSnowing);
		});
	});
};


var locale = {
    "search_api": {
        "result": [
            {
                "areaName": [
                    {
                        "value": "Liberty Mountain"
                    }
                ],
                "country": [
                    {
                        "value": "United States of America"
                    }
                ],
                "region": [
                    {
                        "value": "Pennsylvania"
                    }
                ],
                "latitude": "39.750",
                "longitude": "-77.375",
                "population": "5000",
                "weatherUrl": [
                    {
                        "value": "http://api.worldweatheronline.com/ski/v2/weather.aspx?q=39.7503,-77.3753"
                    }
                ]
            },
            {
                "areaName": [
                    {
                        "value": "Eagle Rock"
                    }
                ],
                "country": [
                    {
                        "value": "United States of America"
                    }
                ],
                "region": [
                    {
                        "value": "Pennsylvania"
                    }
                ],
                "latitude": "39.938",
                "longitude": "-77.534",
                "population": "5000",
                "weatherUrl": [
                    {
                        "value": "http://api.worldweatheronline.com/ski/v2/weather.aspx?q=39.9376,-77.5339"
                    }
                ]
            },
            {
                "areaName": [
                    {
                        "value": "Ski Roundtop"
                    }
                ],
                "country": [
                    {
                        "value": "United States of America"
                    }
                ],
                "region": [
                    {
                        "value": "Pennsylvania"
                    }
                ],
                "latitude": "40.107",
                "longitude": "-76.927",
                "population": "5000",
                "weatherUrl": [
                    {
                        "value": "http://api.worldweatheronline.com/ski/v2/weather.aspx?q=40.1067,-76.9267"
                    }
                ]
            }
        ]
    }
};
