/* globals google, document, _, ga*/
var allPlaces = '';
var previousMarker = null;
var map = '';
var currentUID = '';

var updateMapByMarker = function(marker){
  //console.log("updateMapByMarker: " + marker);
  if (previousMarker){previousMarker.setIcon('images/red-marker.png');}
  marker.setIcon('images/yellow-marker.png');
  map.panTo(marker.getPosition());
  previousMarker =  marker;
};

var getMarkerByUID = function(uid){
  //console.log("getMarkerByUID: " + uid);
  var result = _.where(allPlaces, {uid: uid});
  return result[0].marker; 
};

var getUIDByMarker = function(marker){
  var result = _.where(allPlaces, {marker: marker});
  return result[0].uid;  
};

(function($) {
  var app = $.sammy(function() {
    this.get("#:page", function() {
      currentUID = this.params['page'];
      console.log(currentUID);
      var contentPage = 'posts/src/posts/' + currentUID + '/post.html';
      $("#blog-content").load(contentPage + ' #content', function(){
        $("#blog-content").scrollTop(0);
        // ga('send', 'pageview', contentPage);
      });
      var marker = getMarkerByUID(this.params['page']);
      updateMapByMarker(marker);
    });


    $(function() {
      app.run();
    });
  });
})(jQuery);


$(document).ready(function(){
  function initialize() {
    var styles = [
      {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
    ];

    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
    var mapOptions = {
      //center: new google.maps.LatLng(10.422558,-85.545021),
      zoom: 5,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    var prevLatLng = '';


    $.getJSON("data/places.json", function(places) {
      allPlaces = places;
      if (currentUID === ''){
        currentUID =  _.last(allPlaces).uid;
        //console.log(currentUID);
      }
      document.location.hash = currentUID;
      $.each(places, function(key, data) {
        var latLng =      new google.maps.LatLng(data.latitude, data.longitude); 
        this.marker =      new google.maps.Marker({
          position: latLng,
          icon: 'images/red-marker.png',
          map: map,
          title: data.city
        });
        google.maps.event.addListener(this.marker, 'click', function() {
          updateMapByMarker(this);
          var uid = getUIDByMarker(this);
          document.location.hash = uid;
        });
        if (prevLatLng != ''){
          var polyline = new google.maps.Polyline({
            path: [latLng, prevLatLng],
            strokeColor: "#FF62CC",
            map: map,
            strokeOpacity: 0.5, 
            strokeWeight: 8
          });
        }
        prevLatLng = latLng;
      });
      var lastPlace = _.last(places);
      map.panTo(new google.maps.LatLng(lastPlace['latitude'],lastPlace['longitude']));
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);

});

