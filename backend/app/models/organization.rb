class Organization < ApplicationRecord
    has_many :performances
    has_many :compositions, through: :performances
end
