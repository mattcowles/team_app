class Team < ApplicationRecord
  belongs_to :organization

  has_many :team_users
  has_many :users, through: :team_users

  # validation
  validates_presence_of :name

  def self.get(organization_id)
    Team.where(teams: { organization_id:  organization_id})
  end

end
