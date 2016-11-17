
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
    var endingUrl = '&format=json&num_of_results=2&wct=Ski';
	var findResort = startUrl+keykey+zippyDoDah+endingUrl;

	$.getJSON(findResort,function(datas){
		var lat = datas.search_api.result[0].latitude;
		var long = datas.search_api.result[0].longitude;
		var baseURL = 'https://api.worldweatheronline.com/premium/v1/ski.ashx?key=cb4a3d52f4b54aa1993205712161011&q=';
		var locale = lat+','+long;
		var endURLtoday = '&format=json&date=today';
		var endURLtomorrow = '&format=json&date=tomorrow';
		var inputToday = baseURL+locale+endURLtoday;
		var inputTomorrow = baseURL+locale+endURLtomorrow;
		$('p#resortName').text(datas.search_api.result[0].areaName[0].value+','+datas.search_api.result[0].region[0].value);
		$.getJSON(inputToday,function(datum){
			var isItSnowing = datum.data.weather[0].chanceofsnow;
			$('span#output').text(isItSnowing);
		});
		$.getJSON(inputTomorrow,function(datum){
			var isItSnowing2 = datum.data.weather[0].chanceofsnow;
			$('span#output2').text(isItSnowing2);
		});
	});
	$.getJSON(findResort,function(datas){
		var lat = datas.search_api.result[1].latitude;
		var long = datas.search_api.result[1].longitude;
		var baseURL = 'https://api.worldweatheronline.com/premium/v1/ski.ashx?key=cb4a3d52f4b54aa1993205712161011&q=';
		var locale = lat+','+long;
		var endURLtoday = '&format=json&date=today';
		var endURLtomorrow = '&format=json&date=tomorrow';
		var inputToday = baseURL+locale+endURLtoday;
		var inputTomorrow = baseURL+locale+endURLtomorrow;
		$('p#otherResort').text(datas.search_api.result[1].areaName[0].value+','+datas.search_api.result[1].region[0].value);
		$.getJSON(inputToday,function(datum){
			var isItSnowing3 = datum.data.weather[0].chanceofsnow;
			$('span#output3').text(isItSnowing3);
		});
		$.getJSON(inputTomorrow,function(datum){
			var isItSnowing4 = datum.data.weather[0].chanceofsnow;
			$('span#output4').text(isItSnowing4);
		});
	});
};







