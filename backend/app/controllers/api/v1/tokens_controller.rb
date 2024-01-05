class Api::V1::TokensController < ApplicationController
    def create
        @user = User.find_by_username(permitted_user_params[:username])

        if @user&.authenticate(permitted_user_params[:password])
            @token = JsonWebToken.encode(user_id: @user.id)
            @user_id = @user.id

            render json: {
                token: @token,
                id: @user_id
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
