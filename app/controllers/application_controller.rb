class ApplicationController < ActionController::Base
    protect_from_forgery prepend:true

    def after_sign_in_path_for(resource)
        protected_path
    end

    def after_sign_out_path_for(resource)
        root_path
    end

    def configure_permitted_parameters
        devise_parameters_sanitizer.permit(:sign_up, keys: [:name, :phone, :hours])
    end
end
