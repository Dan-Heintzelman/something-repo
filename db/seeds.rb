require 'faker'

dan = User.create!(username: "dheintz", password: "password", zip_code: 60657)
dana = User.create!(username: "dana", password: "password", zip_code: 28806)























# Sample Seeds



# 50.times do
# 	Post.create!(
# 		title: Faker::Hipster.sentence, 
# 		article_url: Faker::Internet.url,
# 		user: User.find(rand(1...13))
# 		) 
# end


# 100.times do
# 	Comment.create!(text: Faker::Hacker.say_something_smart,
# 		post: Post.find(rand(1...50)),
# 		user: User.find(rand(1...13))
# 	)
# end