class TeamsController < ApplicationController
  before_action :set_organization
  before_action :set_organization_team, only: [:show, :update, :destroy]

  # GET /organizations/:organization_id/teams
  def index
    @organization_teams =  Team.get (params[:organization_id])
    respond_to do |format|
      format.json {
        render json: { organization_teams: @organization_teams }
      }
    end

  end

  # GET /organizations/:organization_id/teams/participation
  def team_participation
    @team_participation =  Team.team_participation (params[:organization_id])
    respond_to do |format|
      format.json {
        render json: { team_participation: @team_participation }
      }

    end
  end

  # GET /organizations/:organization_id/teams/:id
  def show
    json_response(@team)
  end

  # POST /organizations/:organization_id/teams
  def create
    @organization.teams.create!(team_params)
    json_response(@organization, :created)
  end

  # PUT /organizations/:organization_id/teams/:id
  def update
    @team.update(team_params)
    head :no_content
  end

  # DELETE /organizations/:organization_id/teams/:id
  def destroy
    @team.destroy
    head :no_content
  end

  private

  def team_params
    params.permit(:name, :done)
  end

  def set_organization
    @organization = Organization.find(params[:organization_id])
  end

  def set_organization_team
    @team = @organization.teams.find_by!(id: params[:id]) if @organization
    end
end
