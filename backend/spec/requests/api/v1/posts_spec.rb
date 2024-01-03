require 'rails_helper'

RSpec.describe "Api::V1::Posts", type: :request do
  setup do
    @post = create(:post)
    @post_valid_attributes = attributes_for(:post)
    @post_invalid_attributes = attributes_for(:empty_post)
  end

  describe "GET /index" do
    before do
      create_list(:post, 9)
      get api_v1_posts_url, as: :json
    end

    it { expect(json.length).to eq(10) }  # includes the top post object sample
    it { expect(response).to have_http_status(:success) }
  end

  describe 'GET /show' do
    before do
      get api_v1_post_url(@post), as: :json
    end

    it { expect(json['content']).to match(@post.content) }
    it { expect(response).to have_http_status(:success) }
  end

  describe 'POST /create' do
    context 'create a post if input is valid and there is an logged in user' do
      before do
        post api_v1_posts_url,
          params: { post: @post_valid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: @post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:created) }
    end

    context 'do not create a post if input is invalid but there is a logged in user' do
      before do
        post api_v1_posts_url,
          params: { post: @post_invalid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: @post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end

    context 'forbid to create post if there is no logged in user' do
      before do
        post api_v1_posts_url,
          params: { post: @post_valid_attributes },
          as: :json
      end

      it { expect(response).to have_http_status(:forbidden) }
    end
  end

  describe 'PATCH /update' do
    context 'update a post if input is valid and the current user is the owner' do
      before do
        patch api_v1_post_url(@post),
          params: { post: @post_valid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: @post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:success) }
    end

    context 'do not update post if input is invalid and the current user is the owner' do
      before do
        patch api_v1_post_url(@post),
          params: { post: @post_invalid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: @post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end

    context 'forbid to update a post if it is not owned by the current user' do
      let(:another_post) { create(:post) }  # different user_id

      before do
        patch api_v1_post_url(@post),
          params: { post: @post_valid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: another_post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:forbidden) }
    end
  end

  describe 'DELETE /destroy' do
    context 'delete post if the post is owned by the current user' do
      before do
        delete api_v1_post_url(@post),
          headers: { Authorization: JsonWebToken.encode(user_id: @post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:no_content) }
    end

    context 'forbid to delete if the post is not owned by the current user' do
      let(:another_post) { create(:post) }
      
      before do
        delete api_v1_post_url(@post),
          headers: { Authorization: JsonWebToken.encode(user_id: another_post.user_id) },
          as: :json
      end

      it { expect(response).to have_http_status(:forbidden) }
    end
  end     
end
