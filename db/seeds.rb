if User.all.count == 0
  50.times do |i|
    User.create!(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        weight: Faker::Measurement.weight,
        height: Faker::Measurement.height,
        isPublic: Faker::Boolean.boolean,
        email: Faker::Internet.user_name + i.to_s +
            "@#{Faker::Internet.domain_name}")

    print '.' if i % 1000 == 0
  end
end


if Organization.all.count == 0
  $org = Organization.create!(
      name: Faker::Company.name)
  print $org
end

if Team.all.count == 0
  5.times do |i|
    Team.create!(
        name: Faker::Team.name,
        organization_id: $org.id)
    print '.' if i % 1000 == 0
  end
end
$users = User.all
if TeamUser.all.count == 0
  $users.each do|u|
    Team.all.each do|t|
      TeamUser.create!(team_id: t.id, user_id: u.id)
    end
  end
end

if Sport.all.count == 0
  Sport.create!(name: "Basketball")
  Sport.create!(name: "Baseball")
  Sport.create!(name: "Hockey")
  Sport.create!(name: "Volleyball")
  Sport.create!(name: "Swimming")
  Sport.create!(name: "Soccer")
end

$sports = Sport.all
if UserSport.all.count == 0
  $users.each do|u|
    UserSport.create!(user_id: u.id, sport_id: $sports[0].id)
    UserSport.create!(user_id: u.id, sport_id: $sports[1].id)
    UserSport.create!(user_id: u.id, sport_id: $sports[2].id)
  end
end


if UserParticipation.all.count == 0
  $users.each do|u|
    UserParticipation.create!(user_id: u.id, sport_id: $sports[0].id, date_of: Date.today, duration_min: rand(10..60)
    UserParticipation.create!(user_id: u.id, sport_id: $sports[1].id, date_of: Date.today, duration_min: 10..60)
    UserParticipation.create!(user_id: u.id, sport_id: $sports[2].id, date_of: Date.today, duration_min: 10..60)
  end
end
