#!/usr/bin/env ruby

require 'fileutils'
require 'geocoder'
require 'date'
require 'chronic'

Geocoder.configure(
  :timeout => 15,
  :units => :km,
)

def downunder(string)
  string.gsub(/( )/, '_').downcase
end

datestring =  DateTime.now.strftime('%Y%m%d')

puts "Howdy, let's make a new blog entry!"
puts "Which date is this for? [#{datestring}] \n You can use dates like 'last sunday' or 'yesterday'"
custom_date = gets.strip
datestring = custom_date.empty? ?  datestring : Chronic.parse(custom_date).strftime('%Y%m%d')
puts "What country are you in?"
country = gets.strip
puts "Which city?"
city = gets.strip
puts "Do you have a flickr set ID?"
flickr_set_id = gets.strip

puts "And a favorite image url from that set used for sharing on facebook, should be more than 1600px wide..."
fb_preview_image_url = gets.strip

puts "And an overall description for sharing? (1-3 sentences)"
description = gets.strip


result = Geocoder.search("#{city}, #{country}").first
latitude = result.latitude
longitude = result.longitude


template = <<-EOT
---
date: '#{datestring}'
latitude: #{latitude}
longitude: #{longitude}
city: #{city}
country: #{country}
flickr_link: '#{flickr_set_id}'
EOT

# These optional arguments will be handled only if they exist
unless fb_preview_image_url.empty? then template << "image: '#{fb_preview_image_url}'" end
unless description.empty? then template << "\ndescription: \"#{description}\"" end

# Gotta close out that YFM with three dashes
template << "\n---\n\n"


path = "#{File.expand_path(File.dirname(__FILE__))}/src/posts/#{datestring}_#{downunder(country)}_#{downunder(city)}"
FileUtils.mkdir_p(path)
filename = "#{path}/post.md"

File.open(filename, 'w'){|f| f.write(template)}

