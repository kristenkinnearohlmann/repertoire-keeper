class Organization < ApplicationRecord
    has_many :performances, dependent: :destroy
    has_many :compositions, through: :performances
end
