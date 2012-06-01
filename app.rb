require 'compass'
require 'sinatra'
require 'sinatra/content_for'
require 'haml'
require 'sass'


configure do
  set :haml, {:format => :html5}
  set :scss, {:style => :compact, :debug_info => false}
  Compass.add_project_configuration(File.join(Sinatra::Application.root, 'config', 'compass.rb'))
end

get '/stylesheets/:name.css' do
  content_type 'text/css', :charset => 'utf-8'
  scss(:"stylesheets/#{params[:name]}" ) 
end

get '/' do
  haml :index
end

get '/drawing-divs' do
  haml :"drawing-divs"
end

get '/the-power-of-data' do
  haml :"the-power-of-data"
end
