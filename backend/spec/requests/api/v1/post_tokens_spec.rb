require 'rails_helper'

RSpec.describe "Api::V1::PostTokens", type: :request do
  setup do
    @post = create(:sample_post)
  end
  
  describe "POST /create" do
    context 'user enters a correct post' do
      let(:post_sample) { attributes_for(:correct_post) }

      before do
        post api_v1_post_tokens_url,
          params: { post: post_sample },
          as: :json
      end

      it { expect(response).to have_http_status(:success) }
    end

    context 'user enters an incorrect post' do
      let(:post_sample) { attributes_for(:incorrect_post) }

      before do
        post api_v1_post_tokens_url,
          params: { post: post_sample },
          as: :json
      end

      it { expect(response).to have_http_status(:unauthorized) }
    end
  end
end
