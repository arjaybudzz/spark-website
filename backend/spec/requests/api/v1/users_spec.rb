require 'rails_helper'

RSpec.describe "Api::V1::Users", type: :request do
  setup do
    @user = create(:user)
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
end
