  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  Rails.application.routes.draw do
    resources :organizations do
      resources :teams

    end
    resources :users
    resources :user_participations
    root to: "dashboard#index"

  end
