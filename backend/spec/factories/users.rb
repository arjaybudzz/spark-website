FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    password { 'password' }
    password_confirmation { password }

    trait :invalid do
      username { nil }
    end
    
    factory :sample_user do
      username { 'username' }
      password { 'password' }
      password_confirmation { 'password' }

      trait :correct do
        username { 'username' }
        password { 'password' }
      end

      trait :incorrect do
        username { 'username' }
        password { 'wrongpassword' }
      end

      factory :correct_login, traits: [:correct]
      factory :incorrect_login, traits: [:incorrect]
    end

    factory :sample_created_user do
      username { 'johnxyz' }
      password { 'password' }
      password_confirmation { 'password' }
    end

    factory :sample_created_user_2 do
      username { 'heyheyhey' }
      password { 'password' }
      password_confirmation { 'password' }
    end

    factory :sample_created_user_3 do
      username { 'heyjohn' }
      password { 'password' }
      password_confirmation { 'password' }
    end

    factory :sample_created_user_4 do
      username { 'heyjose' }
      password { 'password' }
      password_confirmation { 'password' }
    end

    factory :empty_username, traits: [:invalid]
  end
end
