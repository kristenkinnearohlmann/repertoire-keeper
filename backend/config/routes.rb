# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root to: "static#home"

  resources :organizations
  resources :compositions
  resources :performances
  resources :performance_compositions
end
