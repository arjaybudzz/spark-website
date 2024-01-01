require 'rails_helper'

RSpec.describe "Api::V1::Users", type: :request do
  setup do
    @user = create(:user)
    @user_valid_attributes = attributes_for(:user)
    @user_invalid_attributes = attributes_for(:empty_username)
  end
  
  describe "GET /index" do
    before do
      create_list(:user, 3)
      get api_v1_users_url, as: :json
    end

    it { expect(json.length).to eq(4) }
    it { expect(response).to have_http_status(:success) }
  end

  describe "GET /show" do
    before do
      get api_v1_user_url(@user), as: :json
    end

    it { expect(json['username']).to eq(@user.username) }
    it { expect(response).to have_http_status(:success) }
  end

  describe "POST /create" do
    context 'should create a user if input is valid' do
      before do
        post api_v1_users_url,
          params: { user: @user_valid_attributes },
          as: :json
      end

      it { expect(response).to have_http_status(:created) }
    end

    context 'should not create a user if input is invalid' do
      before do
        post api_v1_users_url,
          params: { user: @user_invalid_attributes },
          as: :json
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe 'PATCH /update' do
    context 'update a user if input is valid' do
      before do
        patch api_v1_user_url(@user),
          params: { user: @user_valid_attributes },
          as: :json
      end

      it { expect(response).to have_http_status(:success) }
    end

    context 'do not update if input is invalid' do
      before do
        patch api_v1_user_url(@user),
          params: { user: @user_invalid_attributes },
          as: :json
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end
  end

  describe "DELETE /destroy" do
    before do
      delete api_v1_user_url(@user), as: :json
    end

    it { expect(response).to have_http_status(:no_content) }
  end
end
