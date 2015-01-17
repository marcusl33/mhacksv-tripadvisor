var express = require('express');
var app = express();
var request = require('request');
// var url = require('url');



var bodyparser = require('body-parser');


app.get('/', function(req, res) {
	sess = req.session;
	res.sendFile(__dirname + '/main.html');
});

app.get('/details', function(req, res) {
	// var location = req.query.location;
	// var duration = req.query.duration;
	res.sendFile(__dirname + '/details.html');
});

app.listen(3000, function(){
	console.log('listening on port 3000');
});

// request

//logic for determining optimal route

// each location has a coordinate and a duration


//set var to full day

var itinerary = [];



//place object
function place(location, duration) {
	this.location = location;
	this.duration = duration;
}

//convert all places into place objects

function travel(place1, place2, travel_method) {
		//make call to google api
		//use callback function
	if (travel_method === undefined) {
		travel_method = google.maps.TravelMode.DRIVING;
	}

	var origin1 = place1.location;
	var destinationA = place2.location;

	var service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix(
	{
		origins: [origin1, origin1],
		destinations: [destinationA, destinationA],
		travelMode: travel_method,
		unitSystem: UnitSystem,
		durationInTraffic: Boolean,
		avoidHighways: false,
		avoidTolls: false
	}, callback);

	function callback(response, status) {
		if (status != google.maps.DistanceMatrixStatus.OK) {
			alert('Error was: ' + status);
		} else {
		var dist = response.rows[0].elements[0].distance.text;
		var time = response.rows[0].elements[0].duration.text;
		}
	}
}

list_of_places.forEach(function(place) {
	if (place.duration === 'full') {
		itinerary.push(place);
	}
});

