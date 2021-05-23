# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  resources :performance_compositions
  root to: "static#home"

  resources :organizations do
    resources :performances, only: [:show]
  end

  resources :compositions
  resources :performances
end
