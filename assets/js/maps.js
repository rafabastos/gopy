// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);


function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    
    // Posición de Santco en latitud/lonngitud
    var santco = new google.maps.LatLng(-25.279123, -57.552572);

    // Google Maps options
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        // The latitude and longitude to center the map (always required)
        center: santco,

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        //draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"lightness":"-23"},{"saturation":"100"},{"weight":"8.21"},{"color":"#f0730e"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"weight":"3.67"},{"saturation":"64"},{"lightness":"100"},{"visibility":"on"},{"gamma":"1.60"},{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":"70"},{"saturation":"-4"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"on"},{"color":"#d3d3d3"},{"lightness":"60"},{"saturation":"0"},{"gamma":"2.00"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"saturation":"80"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#c8e354"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"hue":"#ff9700"},{"saturation":"43"},{"lightness":"-10"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#0025bc"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"weight":"5"},{"gamma":"1.85"},{"color":"#ffffff"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"},{"hue":"#00b3ff"},{"saturation":"69"},{"lightness":"-38"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-97"},{"saturation":"93"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"weight":"3.5"},{"lightness":"100"},{"saturation":"0"},{"gamma":"1.02"},{"visibility":"on"},{"color":"#ffffff"}]}]
        
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map"
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom string when clicked on marker
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h3 id="firstHeading" class="firstHeading text-center">GoPy</h3>'+
        '<div id="bodyContent">'+
        '<p class="text-center">Mayor Evacio Perinciolo Merlo 2270<br>'+
        '+595 21 606364</p>'+
        '</div>'+
        '</div>';

    // Definition for the information window
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = {
        url: 'assets/images/map-marker2.png',
        origin: new google.maps.Point(0, 0)
    };
    var myLatLng = new google.maps.LatLng(-25.279123, -57.552572);
    var marker = new google.maps.Marker({
        position: myLatLng,
        icon: image,
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        title: 'GoPy'
    });

    // Click event listener
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
}


