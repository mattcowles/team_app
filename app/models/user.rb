class User < ApplicationRecord
  # validation
  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :email
  validates_presence_of :height
  validates_presence_of :weight
  validates_presence_of :isPublic

end
