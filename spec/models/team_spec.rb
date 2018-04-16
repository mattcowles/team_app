require 'rails_helper'

RSpec.describe Team, type: :model do
# Association test
# ensure an item record belongs to a single organization record
  it { should belong_to(:organization) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:name) }
end
