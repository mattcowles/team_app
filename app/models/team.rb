class Team < ApplicationRecord
  belongs_to :organization

  # validation
  validates_presence_of :name
end
