class Team < ApplicationRecord
  belongs_to :organization

  has_many :team_users
  has_many :users, through: :team_users

  # validation
  validates_presence_of :name

  def self.get(organization_id)
    Team.where(teams: { organization_id:  organization_id})
  end

  def self.team_participation(organization_id)
    sql_str = 'select t.name, '\
      'sum(up.duration_min) total '\
      'from user_participations up '\
      'inner join team_users tu '\
      'on tu.user_id = up.user_id '\
      'inner join teams t '\
      'on t.id = tu.team_id '\
      'group by t.id'
    ActiveRecord::Base.connection.exec_query(sql_str).to_json
  end
end
