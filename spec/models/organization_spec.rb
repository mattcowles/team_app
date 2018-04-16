# spec/models/organizations_spec.rb
require 'rails_helper'

# Test suite for the Organization model
RSpec.describe Organization, type: :model do
  # Association test
  # ensure Organization model has a 1:m relationship with the Team model
  it { should have_many(:teams).dependent(:destroy) }
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:name) }
end