
$(function() {
	var url = "http://172.18.252.86:5000";
	
	setInterval(function() {
		doRequest(url);
	}, 1000);
});
var counter = 0;
function doRequest(url) {
	$.ajax({
		url: url,
		type: 'GET',
		dataType: 'text',
		cache: 'false',
		timeout: 5000, 
		success: function(data) {
			counter += 1;
			console.log(counter);
		},
		error: function(jqXHr, textStatus, errorThrown) {
			console.log("error...");
		}
	});
}