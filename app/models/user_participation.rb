class UserParticipation < ApplicationRecord
  belongs_to :user
  belongs_to :sport

  def self.get(user_id)
    UserParticipation.joins(:sport)
        .select("sports.id, sports.name, user_participations.id, user_participations.date_of, user_participations.duration_min")
        .where(user_participations: { user_id:  user_id})
  end

end
