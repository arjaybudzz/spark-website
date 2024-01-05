FactoryBot.define do
  factory :post do
    content { Faker::Lorem.paragraph }
    user { association :user }

    factory :sample_post do
      content { 'Lorem ipsum' }
      user { association :user }

      trait :correct do
        content { 'Lorem ipsum' }
      end
      
      trait :incorrect do
        content { 'Ipsum dolor' }
      end

      factory :correct_post, traits: [:correct]
      factory :incorrect_post, traits: [:incorrect]
    end

    trait :invalid do
      content { nil }
    end

    factory :empty_post, traits: [:invalid]
  end
end
