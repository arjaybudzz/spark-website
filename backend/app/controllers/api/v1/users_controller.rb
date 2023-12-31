class Api::V1::UsersController < ApplicationController
    before_action :setup_user, only: %i[show]
    
    def index
        @user = User.all
        render json: @user
    end

    def show
        render json: @user
    end

    private

    def setup_user
        @user = User.find(params[:id])
    end
end
