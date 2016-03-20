###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

helpers do
  def render_markdown(source)
    Tilt::KramdownTemplate.new { source }.render
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
end


###
# Build South America Blog
###

Dir.glob("data/south_america/*").map do |f|
  # {
  #   "date"=>"20130109",
  #   "latitude"=>23.2361111,
  #   "longitude"=>-106.4152778,
  #   "city"=>"Mazatlán",
  #   "country"=>"Mexico",
  #   "flickr_link"=>"72157638459496024"
  # }
  content = File.read(f + "/post.md")
  data = YAML.parse(content).to_ruby
  content.gsub!(/---.*---/m, '')
  proxy "map/#{data["date"]}.html", 
    "layouts/south_america.html", 
    locals: { 
      body: content,
      city: data["city"]
    }, 
    :ignore => true
end

