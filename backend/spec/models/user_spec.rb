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
    let(:sample_user) { create(:sample_created_user) }
    let(:sample_user_2) { create(:sample_created_user_2) }
    let(:sample_user_3) { create(:sample_created_user_3) }
    let(:sample_user_4) { create(:sample_created_user_4) }

    context 'user searches a user' do
      it { expect(User.filter_by_username(sample_user_2.username).count).to eq(1) }
    end
  end
end
