require 'rails_helper'

RSpec.describe Post, type: :model do
  describe 'association validations' do
    it { should belong_to(:user) }
  end

  describe 'content validations' do
    it { should validate_presence_of(:content) }
  end
end
