//JS Donut Counter Lab

var guests = prompt("Insert number of guests");
var donuts = prompt("Insert number of donuts");

var numGuests = parseInt(guests);
var numDonuts = parseInt(donuts);

function check(numGuests, numDonuts) {
	if (numGuests <= numDonuts){
  		return "There are enough donuts";
	}
	else {
  		return "There are not enough donuts";
	}
}

alert(check(numGuests, numDonuts));
