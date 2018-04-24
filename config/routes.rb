  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
    # These supercede other /users routes, so must
    # come before resource :users
    get "users/ng",                to: "users#ng"
    get "users/ng/*angular_route", to: "users#ng"
    resources :organizations do
      resources :teams
    end
    resources :users
    resources :user_participations
    root to: "dashboard#index"
    get "myprofile/ng",             to: "myprofile#ng"
    get "myprofile/ng/*angular_route", to: "myprofile#ng"
    resources :myprofile, only: [ :index ]
    #                                     ^^^^^
    get "summary/ng",             to: "summary#ng"
    get "summary/ng/*angular_route", to: "summary#ng"
    resources :summary, only: [ :index, :show ]
    #                                   ^^^^^

  end
