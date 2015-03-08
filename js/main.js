$('.smooth-scroll').localScroll();

var $counter = $('.counter');

$counter.waypoint(function () {
	console.log ('waypoint'); },

	{offset: '75%'});



