// $.getJSON("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=cb4a3d52f4b54aa1993205712161011&q=21797&format=json&num_of_days=3",function(datas){
// tempOutput= datas.data.current_condition[0].temp_F;
// console.log(tempOutput);
// });
// 
$(document).ready(function(){
	$.getJSON("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=cb4a3d52f4b54aa1993205712161011&q=21797&format=json&num_of_days=3",function(datas){
	tempOutput= datas.data.current_condition[0].temp_F;
	console.log(tempOutput);
	});
});

