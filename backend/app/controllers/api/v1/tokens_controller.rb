class Api::V1::TokensController < ApplicationController
    def create
        @user = User.find_by_username(permitted_user_params[:username])

        if @user&.authenticate(permitted_user_params[:password])
            render json: {
                token: JsonWebToken.encode(user_id: @user.id),
                id: @user.id
            }
        else
            head :unauthorized
        end
    end


    private

    def permitted_user_params
        params.require(:user).permit(:username, :password)
    end
end
