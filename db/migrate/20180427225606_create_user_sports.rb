class CreateUserSports < ActiveRecord::Migration[5.2]
  def change
    create_table :user_sports do |t|
      t.references :sport, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
