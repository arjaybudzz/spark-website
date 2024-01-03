require 'rails_helper'

RSpec.describe Authenticable do
    setup do
        @user = create(:user)
        @authentication = MockController.new
    end

    describe 'user must be retrieved from authentication token' do
        before do
            @authentication.request.headers['Authorization'] = JsonWebToken.encode(user_id: @user.id)
        end

        it { expect(@authentication.current_user.id).to match(@user.id) }
    end

    describe 'user must not be retrieved if authentication token is empty' do
        before do
            @authentication.request.headers['Authorization'] = nil
        end

        it { expect(@authentication.current_user.nil?).to eq(true) }
    end
end