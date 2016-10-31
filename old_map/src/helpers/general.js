var _ = require('underscore');
var moment = require('moment');

var postPath = function(post){
  //pass a post object in, get back its path for linking
  var out = post['dest'].replace(/^tmp/, '');
  return out;
};
var postDirName = function(post){
  var out = postPath(post).match(/\d{8}_[^\/]*/)[0];
  return out;
};


module.exports.register = function (Handlebars, options, params)  { 
  Handlebars.registerHelper('postDirName', function (obj)  {
    return postDirName(obj);
  });
  Handlebars.registerHelper('formatDate', function (date)  {
  return moment(date, "YYYYMMDD").format('LL');
  });

  Handlebars.registerHelper('postPath', function (obj)  {
    return postPath(obj);
  });

  Handlebars.registerHelper('relativeContent', function (page, filename)  {
    var postmd = page.src;
    var flickr_file = postmd.replace(/post\.md$/, filename);
    var result = '';
    if (params.grunt.file.exists(flickr_file)){
      result = params.grunt.file.read(flickr_file);
    }
    return new Handlebars.SafeString(result);
  });

  Handlebars.registerHelper('nextPost', function (obj)  {
    var thisPage = obj['page']; // Created a local var for easier reading
    // The "this" object gets passed in as "obj" and contains an array of
    // pages. The trick is, this list isn't necessarily in order, even though
    // the folders are all named by date. Here I sort them. This seems rather
    // heavy handed, as the tax to process these increases exponentially with the
    // number of blog posts.
    // Also, I'm using underscore here to make the code much simpler.
    var sortedPages = _.sortBy(obj['pages'], function(page){ return page['data']['date']; });
    // Go through all of the sorted pages to find the matching data and get the index of where that is,
    // this way we can add one, to find the next element in the sorted array.
    var currentIndex = sortedPages.map(function(page) {return page['data']; }).indexOf(thisPage['data']); 
    var nextIndex = currentIndex + 1;
    var out = '';
    // Don't wig out if it's the last one, just return a blank string instead. 
    if (nextIndex > (sortedPages.length - 1)){ 
      out = postDirName(sortedPages[0]);
    }else{
      // Make a pretty path for use in our view
      out = postDirName(sortedPages[nextIndex]);
    }
    return  out;
  });

  Handlebars.registerHelper('prevPost', function (obj)  {
    var thisPage = obj['page']; // Created a local var for easier reading
    var sortedPages = _.sortBy(obj['pages'], function(page){ return page['data']['date']; });
    var currentIndex = sortedPages.map(function(page) {return page['data']; }).indexOf(thisPage['data']); 
    var nextIndex = currentIndex - 1;
    var out = '';
    // Don't wig out if it's the last one, just return a blank string instead. 
    if (nextIndex < 0){ 
      out = postDirName(sortedPages[sortedPages.length - 1]);
    }else{
      // Make a pretty path for use in our view
      out = postDirName(sortedPages[nextIndex]);
    }
    return  out;
  });

  Handlebars.registerHelper('conventionalLink', function (obj)  {
    // Pass in a page object, it will use its dest value to create a link without tmp
    var path = postPath(obj);
    var title = obj['data']['title'];
    var result =  "<a href='" + path + "'>"+ title +"</a>";
    return new Handlebars.SafeString(result);
  });

  Handlebars.registerHelper('stackedIcon', function (icon, url) {
    var result =  '';
    result += '<a class="social-link" rel="me" href="' + url + '">';
    result += '<span class="fa-stack fa-lg">';
    result += '<i class="fa fa-circle fa-stack-2x"></i>';
    result += '<i class="fa '+ icon +' fa-stack-1x fa-inverse"></i>';
    result += '</span>';
    result += '</a>';
    return new Handlebars.SafeString(result);
  });


};
