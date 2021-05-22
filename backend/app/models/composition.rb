class Composition < ApplicationRecord
    has_many :performances
    has_many :organizations, through: :performances
end
