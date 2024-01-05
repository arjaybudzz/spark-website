class Api::V1::PostTokensController < ApplicationController
    def create
        @post = Post.find_by_content(permitted_post_params[:content])

        if @post
            render json: {
                post_token: JsonWebToken.encode(post_id: @post.id),
                post_id: @post.id
            }
        else
            head :unauthorized
        end
    end

    private

    def permitted_post_params
        params.require(:post).permit(:content)
    end
end
