(function ($) {
    "use strict";

	// Preloader 
	var win = $(window);
	 win.on('load',function() {
	  $('.page-loader').delay(100).fadeOut('slow');
	});
		
	// COUNTDOWN
	$('#countdown').countdown('2020/10/10', function(event) {
	  var $this = $(this).html(event.strftime(''
	//+ '<li><span>%w</span> weeks</li> '
		+ '<li><span>%D</span> days</li> '
		+ '<li><span>%H</span> hr</li> '
		+ '<li><span>%M</span> min</li> '
		+ '<li><span>%S</span> sec</li>'));
	});

	// cart widget toggle
	$("#items-counter").on('click',function() {
		$("body").toggleClass("cart-widget-open");
	});
	$("#cart-widget-close").on('click',function() {
		$("body").toggleClass("cart-widget-open");
	});

		$(".cart-widget-close-overlay").on('click',function() {
		$("body").toggleClass("cart-widget-open");
	});

	//initialize swipers
	//home slider
	var swiper = new Swiper('.home-slider', {
		pagination: '.home-pagination',
		paginationClickable: true,
		nextButton: '.home-slider-next',
		prevButton: '.home-slider-prev'
	});

	//testimonials slider
	var swiper = new Swiper('.testimonials-slider', {
		pagination: '.testimonials-pagination',
		paginationClickable: true,
		slidesPerView: 1,
		spaceBetween: 30,
		nextButton: '.testimonials-slider-next',
		prevButton: '.testimonials-slider-prev'
	});

	// product list
	var swiper = new Swiper('.product-list-slider', {
		slidesPerView: 3,
		pagination: '.product-list-pagination',
		paginationClickable: true,
		nextButton: '.product-list-slider-next',
		prevButton: '.product-list-slider-prev',
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			640: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			420: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		}
	});

	// smoth scroll
	$(".navbar-nav li a[href^='#']").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
		   scrollTop: $(this.hash).offset().top
		 }, 300, function(){

		   // when done, add hash to url
		   // (default click behaviour)
		   window.location.hash = hash;
		 });

	});

	// scrollUp 
    $.scrollUp({
        scrollText: '<i class="ti-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
   // counterUp
     $('.count').counterUp({
        delay: 10,
        time: 5000
    }); 

	
	
	
	
	
	// Google maps configuration
	// set your latitude, longitude and address of any point on Google Maps - http://www.gps-coordinates.net/
	// Google maps reference - https://developers.google.com/maps/
	// You need API key - https://developers.google.com/maps/documentation/javascript/get-api-key
	// place your api key in link to script  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
	var map;
	var mapAddress = new google.maps.LatLng(34.052234, -118.243685);
	function initialize() {
		var roadAtlasStyles = [{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": -8
			}, {
				"gamma": 1.18
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"saturation": -100
			}, {
				"gamma": 1
			}, {
				"lightness": -24
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "administrative",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "transit",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "road",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "administrative",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "landscape",
			"stylers": [{
				"saturation": -100
			}]
		}, {
			"featureType": "poi",
			"stylers": [{
				"saturation": -100
			}]
		}, {}]
		var mapOptions = {
			zoom: 13,
			scrollwheel: false,
			center: mapAddress,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
			}
		};
		map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);

		var styledMapOptions = {
		};
		var marker = new google.maps.Marker({
			position: mapAddress,
			map: map,
			icon: 'assets-for-index-2/img/map-icon.png'
		});
		var usRoadMapType = new google.maps.StyledMapType(
			roadAtlasStyles, styledMapOptions);

		map.mapTypes.set('usroadatlas', usRoadMapType);
		map.setMapTypeId('usroadatlas');
	}
	google.maps.event.addDomListener(window, 'load', initialize);

})(jQuery);	