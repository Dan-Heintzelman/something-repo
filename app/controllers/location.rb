get '/location' do
  if request.xhr?
    current_user.zip_code.to_s 
  else
    redirect "/" 
  end

end

get '/jokes' do
	if request.xhr?
		response = Unirest.get "https://webknox-jokes.p.mashape.com/jokes/search?category=Chuck+Norris&keywords=kick%2C+hard&minRating=5&numJokes=5",
  	headers:{
    "X-Mashape-Key" => "Y1PbfSxpsumshn7w1ktT3DOWW3rWp1Okhx6jsnp5nCr1lorNBO",
    "Accept" => "application/json"
  }
  	puts "HOEEEEOEOEOEOEOEOEE"
  	puts response.body
  	puts response.headers
	else
		redirect '/'
	end
end