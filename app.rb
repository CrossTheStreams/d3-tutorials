require 'compass'
require 'sinatra'
require 'sinatra/content_for'
require 'haml'
require 'sass'


get '/' do
  haml :index
end

get '/murray/:id' do
  haml :"murray/#{params[:id]}" 
end

