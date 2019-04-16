Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'apartments#protected', constraints: ->(request){ request.format.html? }

  get 'protected', to: 'apartments#protected', as: :protected
  root to: 'apartments#unprotected'

end
