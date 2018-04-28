class UserSport < ApplicationRecord
  belongs_to :user
  belongs_to :sport

  def self.get(user_id)
    UserSport.joins(:sport).select("sports.id, sports.name").where(user_sports: { user_id:  user_id})
    end
end
