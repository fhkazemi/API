#!/usr/bin/ruby
#
# GitHub: https://github.com/SERPWoo/API
#
# This code requests a project's Domains/URLs and outputs the Domain ID, Domain/URL, ORM Tag, Settings, Creation Date
#
# This output is text format
#
# Last updated - Aug 24th, 2017 @ 21:46 EST (@MercenaryCarter https://github.com/MercenaryCarter and https://twitter.com/MercenaryCarter)
#
# Run Command: ruby list-all-project-domains.rb
#

require 'net/http'
require 'uri'
require 'json'

  # Get your API Key here: https://www.serpwoo.com/v3/api/ (should be logged in)
  API_key	= "API_KEY_HERE"
  Project_ID	= 0 #input your Project ID

    def open(url)
      Net::HTTP.get(URI.parse(url))
    end

  page_content = open("https://api.serpwoo.com/v1/projects/#{Project_ID}/domains/?key=#{API_key}")
    
  parsed_projects = JSON.parse(page_content)['projects']
  
  puts "\n--"
  
    printf "%-15s %-80s %-15s %-10s %-15s\n", "Domain ID", "Domain/URL", "ORM Tag", "Settings", "Creation Date"
    printf "%-15s %-80s %-15s %-10s %-15s\n", "---------", "----------", "-------", "--------", "-------------"
  
    parsed_projects.each do |project_id, value|

      value.each do |json_obj, valuex|

          valuex.each do |field, valuey|

            printf "%-15s %-80s %-15s %-10s %-15s\n", field, valuey['domain'], valuey['orm'], valuey['setting']['type'], valuey['creation_date']

          end

      end

    end

  puts "--\n\n"