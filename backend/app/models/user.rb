class User < ApplicationRecord
    validates :username, presence: true, uniqueness: { case_sensitive: false }
    has_many :posts, dependent: :destroy

    has_secure_password

    scope :filter_by_username, lambda { |keyword| where("lower(username) LIKE ?", "%#{keyword.downcase}%") }
end
