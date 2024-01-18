class User < ApplicationRecord
    validates :username, presence: true, uniqueness: { case_sensitive: false }
    has_many :posts, dependent: :destroy

    has_secure_password

    scope :filter_by_username, lambda { |keyword| where("lower(username) LIKE ?", "%#{keyword.downcase}%") }

    def self.search(params = {})
        user = params[:user_ids].present? ? User.where(id: params[:user_ids]) : User.all
        user = user.filter_by_username(params[:keyword]) if params[:keyword]

        user
    end
end
