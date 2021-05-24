# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  root to: "static#home"

  resources :organizations do
    resources :performances, only: [:index, :show]
  end
  resources :compositions
  resources :performances do
    resources :performance_compositions, only: [:index, :destroy]
  end
  resources :performance_compositions
end
