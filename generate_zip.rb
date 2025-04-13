# Inlined Gemfile
require 'bundler/inline'
gemfile do
  source 'https://rubygems.org'

  gem 'rubyzip', '~> 2.4', '>= 2.4.1'
end

# Script
require 'zip'

# overwritte exising files
Zip.on_exists_proc = true
Zip.continue_on_exists_proc = true

input_filenames = Dir['_locales/**/*.json', 'images/**/*.png', 'background.js', 'manifest.json']
zipfile_name = 'archlinux_search.zip'

Zip::File.open(zipfile_name, create: true) do |zipfile|
  input_filenames.each do |filename|
    zipfile.add(filename, File.join('./', filename))
  end
end
