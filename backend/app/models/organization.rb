class Organization < ApplicationRecord
    has_many :performances, dependent: :destroy
    has_many :performance_compositions, through: :performances, dependent: :destroy
    has_many :compositions, through: :performance_compositions
end
