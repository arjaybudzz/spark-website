require 'rails_helper'

RSpec.describe JsonWebToken do
    setup do
        @user = create(:user)
    end

    describe 'decoded user id must match the original id' do
        before do
            @token = JsonWebToken.encode(user_id: @user.id)
        end

        it { expect(JsonWebToken.decode(@token)[:user_id]).to match(@user.id) }
    end
end