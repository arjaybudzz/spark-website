FactoryBot.define do
  factory :post do
    content { Faker::Lorem.paragraph }
    user { association :user }

    trait :invalid do
      content { nil }
    end

    factory :empty_post, traits: [:invalid]
  end
end
