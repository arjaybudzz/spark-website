require 'rails_helper'

RSpec.describe "Api::V1::Tokens", type: :request do
  setup do
    @user = create(:sample_user)
  end

  describe "POST /create" do
    context 'user signed in correctly' do
      let(:sample_login) { attributes_for(:correct_login) }

      before do
        post api_v1_tokens_url,
          params: { user: sample_login },
          as: :json
      end

      it { expect(json['token'].nil?).to eq(false) }
      it { expect(response).to have_http_status(:success) }
    end

    context 'user signed in incorrectly' do
      let(:sample_login) { attributes_for(:incorrect_login) }

      before do
        post api_v1_tokens_url,
          params: { user: sample_login },
          as: :json
      end

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
