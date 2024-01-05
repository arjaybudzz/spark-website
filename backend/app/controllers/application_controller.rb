class ApplicationController < ActionController::API
    include Authenticable
    include ActionController::Cookies
end
