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

    it { expect(json[:data].length).to eq(4) }
    it { expect(response).to have_http_status(:success) }
  end

  describe "GET /show" do
    before do
      get api_v1_user_url(@user), as: :json
    end

    it { expect(json[:data][:attributes][:username]).to eq(@user.username) }
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
    context 'update a user if input is valid and authorized' do
      before do
        patch api_v1_user_url(@user),
          params: { user: @user_valid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: @user.id) },
          as: :json
      end

      it { expect(response).to have_http_status(:success) }
    end

    context 'do not update if input is invalid' do
      before do
        patch api_v1_user_url(@user),
          params: { user: @user_invalid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: @user.id) },
          as: :json
      end

      it { expect(response).to have_http_status(:unprocessable_entity) }
    end

    context 'forbid update if current user is not the owner of the account' do
      let(:another_user) { create(:user) }

      before do
        patch api_v1_user_url(@user),
          params: { user: @user_valid_attributes },
          headers: { Authorization: JsonWebToken.encode(user_id: another_user.id) },
          as: :json
      end

      it { expect(response).to have_http_status(:forbidden) }
    end
  end

  describe "DELETE /destroy" do
    context 'delete account if authorized' do
      before do
        delete api_v1_user_url(@user),
        headers: { Authorization: JsonWebToken.encode(user_id: @user.id) },
        as: :json
      end

      it { expect(response).to have_http_status(:no_content) }
    end

    context 'forbid to delete account if current user is unauthorized' do
      let(:another_user) { create(:user) }

      before do
        delete api_v1_user_url(@user),
        headers: { Authorization: JsonWebToken.encode(user_id: another_user.id) },
        as: :json
      end

      it { expect(response).to have_http_status(:forbidden) }
    end
  end
end
