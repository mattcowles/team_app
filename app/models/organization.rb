class Organization < ApplicationRecord
  # model association
  has_many :teams, dependent: :destroy

  # validations
  validates_presence_of :name
end
