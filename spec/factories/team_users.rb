FactoryBot.define do
  factory :team_user do
      first_name { Faker::Name.first_name }
      last_name { Faker::Name.last_name }
      email { Faker::Internet.email }
      weight { Faker::Number.weight}
      height { Faker::Number.height}

  end
end
