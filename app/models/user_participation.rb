class UserParticipation < ApplicationRecord
  belongs_to :user
  belongs_to :sport

  def self.get(user_id)
    UserParticipation.joins(:sport)
        .select("sports.id, sports.name, user_participations.id, user_participations.date_of, user_participations.duration_min")
        .where(user_participations: { user_id:  user_id})
  end

  def self.user_participations(user_id)

    sql_str = "select up.user_id, "\
              "sum(up.duration_min) total, date_of "\
              " from user_participations up "\
              " where user_id = #{user_id} "\
              " group by user_id, date_of "
    ActiveRecord::Base.connection.exec_query(sql_str).to_json

  end

end
