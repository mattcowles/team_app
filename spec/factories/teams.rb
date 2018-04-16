FactoryBot.define do
  factory :team do
    name { Faker::StarWars.character }
    organization_id nil
  end
end