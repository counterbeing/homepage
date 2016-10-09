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
def render_markdown(source)
  Tilt::KramdownTemplate.new { source }.render
end
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


require('pry')
###
# Build South America Blog
###
Dir.glob('data/south_america/*').each do |f|
  content = File.read(f + '/post.md')
  data = YAML.parse(content).to_ruby
  content.gsub!(/---.*---/m, '')
  proxy "/map/#{data['date']}.html", '/south_america.html',
        locals: {
          body: render_markdown(content),
          city: data['city'],
          country: data['country'],
          latitude: data['longitude'],
          flickr_link: data['flickr_link']
        },
        layout: false
end
