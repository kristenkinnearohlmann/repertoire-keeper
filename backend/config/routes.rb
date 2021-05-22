Rails.application.routes.draw do
  resources :performances
  resources :compositions
  root to: "static#home"

  resources :organizations
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
