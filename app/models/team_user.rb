class TeamUser < ApplicationRecord

  belongs_to :team
  belongs_to :user

  def self.get(user_id)
    TeamUser.joins(:team).select("teams.id, teams.name").where(team_users: { user_id:  user_id})
  end
end
