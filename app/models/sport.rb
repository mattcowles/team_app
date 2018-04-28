class Sport < ApplicationRecord

  # has_many :user_sports
  # has_many :users, through: :user_sports
  has_many :user_participations
  # validation
  validates_presence_of :name
end
