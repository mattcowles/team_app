require 'rails_helper'

RSpec.describe 'Teams API' do
  # Initialize the test data
  let!(:organization) { create(:organization) }
  let!(:teams) { create_list(:team, 20, organization_id: organization.id) }
  let(:organization_id) { organization.id }
  let(:id) { teams.first.id }

  # Test suite for GET /organizations/:organization_id/teams
  describe 'GET /organizations/:organization_id/teams' do
    before { get "/organizations/#{organization_id}/teams" }

    context 'when organization exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all organization teams' do
        expect(json.size).to eq(20)
      end
    end

    context 'when organization does not exist' do
      let(:organization_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Organization/)
      end
    end
  end

  # Test suite for GET /organizations/:organization_id/teams/:id
  describe 'GET /organizations/:organization_id/teams/:id' do
    before { get "/organizations/#{organization_id}/teams/#{id}" }

    context 'when organization team exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the team' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when organization team does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Team/)
      end
    end
  end

  # Test suite for PUT /organizations/:organization_id/teams
  describe 'POST /organizations/:organization_id/teams' do
    let(:valid_attributes) { { name: 'Team Ozzie'} }

    context 'when request attributes are valid' do
      before { post "/organizations/#{organization_id}/teams", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/organizations/#{organization_id}/teams", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Name can't be blank/)
      end
    end
  end

  # Test suite for PUT /organizations/:organization_id/teams/:id
  describe 'PUT /organizations/:organization_id/teams/:id' do
    let(:valid_attributes) { { name: 'Mozart' } }

    before { put "/organizations/#{organization_id}/teams/#{id}", params: valid_attributes }

    context 'when team exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the team' do
        updated_item = Team.find(id)
        expect(updated_item.name).to match(/Mozart/)
      end
    end

    context 'when the team does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Team/)
      end
    end
  end

  # Test suite for DELETE /organizations/:id
  describe 'DELETE /organizations/:id' do
    before { delete "/organizations/#{organization_id}/teams/#{id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end