class Performance < ApplicationRecord
  belongs_to :organization
  has_many :performance_compositions, dependent: :destroy
  has_many :compositions, through: :performance_compositions
end
