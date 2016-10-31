var grunt = require('grunt');
var https = require('https');
var _ = require('underscore');
var fs = require('fs');

exports.getPhotos = function(options, flickrCache){

  var jsonURL = function(){
    var url = "https://api.flickr.com/services/rest/?api_key="+ options.apiKey +"&method=flickr.photosets.getPhotos&photoset_id="+ options.photosetID +"&format=json&extras=description&nojsoncallback=1";
    return url;
  };

  var photoTag = function(id, secret, farm, server, title){
    return '<img src="http://farm'+ farm +'.staticflickr.com/'+ server +'/'+ id +'_'+ secret +'_c.jpg" alt="'+ title +'">';
  }; 

  var photoArrayToHtml = function(array){
    var html = '';
    _.each(array, function(value, key){
      //grunt.log.writeln("key: " + JSON.stringify(key) + ", value: " + JSON.stringify(value));
      html += '<figure>';
      html += photoTag(value.id, value.secret, value.farm, value.server, value.title);
      html += '<figcaption>';
      html += value.description._content;
      html += '</figcaption>';
      html += '</figure>';
    });
    return html;
  };

  https.get(jsonURL(), function(res) {
    //grunt.log.writeln("Got response: " + res.statusCode);
    var body = '';
    res.on('data', function(chunk){
      body += chunk.toString('utf8'); 
    });
    res.on('end', function() {
      var json = JSON.parse(body);
      grunt.log.debug(body);
      var html = photoArrayToHtml(json.photoset.photo);
      grunt.log.writeln("Writing html to " + flickrCache);
      fs.writeFile(flickrCache, html, function(error){
        grunt.log.writeln(error);
      });
      //grunt.log.writeln(JSON.stringify(html));
    });
  }).on('error', function(e) {
    grunt.log.writeln("Got error: " + e.message);
  });

};
