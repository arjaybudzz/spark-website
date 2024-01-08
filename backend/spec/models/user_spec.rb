require 'rails_helper'

RSpec.describe User, type: :model do
  describe "username validation" do
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username).case_insensitive }
  end

  describe "password validations" do
    it { should have_secure_password }
  end

  describe 'association validations' do
    it { should have_many(:posts).dependent(:destroy) }
  end

  describe 'search functionalities' do
    let(:sample_user) { create(:sample_created_user_2) }

    context 'user searches a user' do
      it { expect(User.filter_by_username(sample_user.username).count).to eq(1) }
    end
  end
end
