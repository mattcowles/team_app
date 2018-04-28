Rails.application.routes.draw do
  root to: "dashboard#index"
  # These supercede other /customers routes, so must
  # come before resource :customers
  get "customers/ng",                to: "customers#ng"
  get "customers/ng/*angular_route", to: "customers#ng"
  resources :customers, only: [ :index, :show, :update ]
  get "summary/ng",                to: "summary#ng"
  get "summary/ng/*angular_route", to: "summary#ng"
  resources :summary, only: [ :index, :show ]

  get "users/ng",                to: "users#ng"
  get "users/ng/*angular_route", to: "users#ng"
  get "users/ng/:id/myprofile",                to: "users#ng"
  get "users/ng/:id/myprofile/*angular_route", to: "users#ng"

  resources :users, only: [ :index, :show, :update ]

  resources :organizations do
    resources :teams
  end
  resources :user_participations
  get "team_users/:team_id_id/members",   to: "team_users#team_members"
  get "team_users/:user_id/teams",     to: "team_users#index"
  get "team_users/:id",               to: "team_users#show"

  get "sports/user/:user_id",          to: "sports#index"
  resources :sports

  get "user_sports/:user_id/sports",          to: "user_sports#index"
  resources :user_sports

  get "user_participations/:user_id/participations",          to: "user_participations#index"
  resources :user_participations

  get "bootstrap_mockups", to: "bootstrap_mockups#index"
  get "credit_card_info/:id", to: "fake_payment_processor#show"
end
