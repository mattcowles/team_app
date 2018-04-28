class User < ApplicationRecord

  has_many :team_users
  has_many :teams, through: :team_users
  has_many :sports, through: :user_sports
  has_many :participations

  # validation
  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :email
  validates_presence_of :height
  validates_presence_of :weight

end
