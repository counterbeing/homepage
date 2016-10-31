(function($){

  $.fn.flickrGrabber = function(action, options){

    // Default options:

    options = $.extend({
      width:500,
      height:500,
      maxFetch:50,
      captions:false,
      autoAdvance:false,
      advancePeriod:5000,
      photosetID: 'UNDEFINED: this must be required in your call',
      apiKey:''
    },options);

    var photoBox =  this;
   
    var jsonURL = function(){
      var url = "http://api.flickr.com/services/rest/?api_key="+ options.apiKey +"&method=flickr.photosets.getPhotos&photoset_id="+ options.photosetID +"&format=json&extras=description&nojsoncallback=1";
      return url;
    };

    var photoTag = function(id, secret, farm, server, title){
      return '<img src="http://farm'+ farm +'.staticflickr.com/'+ server +'/'+ id +'_'+ secret +'.jpg" alt="'+ title +'">';
    }; 

    var photoArrayToHtml = function(array){
     var html = '';
     $.each(array, function(key, value){
        html += '<figure>';
        html += photoTag(value.id, value.secret, value.farm, value.server, value.title);
        html += '<figcaption>';
        html += value.description._content;
        html += '</figcaption>';
        html += '</figure>';
     });
        return html;
    };

   if (action === "getSet"){
     //console.log("flickrGrabber is fetching a set at " + jsonURL());
     $.getJSON(jsonURL(), function(photos){
       //console.log(photos.photoset.photo);
       var html = photoArrayToHtml(photos.photoset.photo);
       photoBox.html(html);
     }).fail(function() {
       console.log( "error" );
     });
   }
  };

})(jQuery);
