#!/usr/bin/env ruby

#require 'open-uri'
require 'geocoder'
require 'json'
require 'date'
require 'pry'


datestring =  DateTime.now.strftime('%A, %b %d')
result = Hash.new
result['datestring'] = datestring

location_data = `whereami`
result['latitude'] = location_data.match(/^Latitude: (-?\d{1,3}\.\d{0,20})/).captures[0]
result['longitude'] = location_data.match(/^Longitude: (-?\d{1,3}\.\d{0,20})/).captures[0]




unless ARGV[0].nil?
  text_info = ARGV[0].split(',')
  result['city'] = text_info[0].strip
  result['country'] = text_info[1].strip
else
  # If we don't provide a specific place in the form of a string, then we can guess it based on coordinates.
  geo = Geocoder.search("#{result['latitude']}, #{result['longitude']}")
  result['city'] = geo[0].city
  result['country'] = geo[0].country
end


puts result.to_json
File.open('latlon.json', 'w'){|f| f.write(result.to_json)}

