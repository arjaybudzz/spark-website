FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    password { 'password' }
    password_confirmation { password }

    trait :invalid do
      username { nil }
    end

    factory :empty_username, traits: [:invalid]
  end
end
