class CreateUserParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :user_participations do |t|
      t.references :team, foreign_key: true
      t.references :user, foreign_key: true
      t.date :date_of
      t.integer :duration_min

      t.timestamps
    end
  end
end
