require 'rails_helper'

RSpec.describe User, type: :model do
  describe "username validation" do
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username).case_insensitive }
  end

  describe "password validations" do
    it { should have_secure_password }
  end
end