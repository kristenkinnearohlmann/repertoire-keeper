class Composition < ApplicationRecord
    has_many :performance_compositions
    has_many :performances, through: :performance_compositions
    has_many :organizations, through: :performances
end
