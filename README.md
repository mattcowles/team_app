# team_app

Setup

Install and setup Postgres

Modify database.yml adding the username and password that setup in postgres

Run npm i webpack-dev-server

Run rake db:drop db:create db:migrate

Create fake data: bundle exec rails db:seed

Start the server: bundle exec foreman start -f Procfile

In browser go localhost:5000/

Items TODO:

Add editing of user profile, sports of interest, and participation log.

Show per user participation chart.

Hide non-public profile



