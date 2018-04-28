class TeamUsersController < ApplicationController
  before_action :set_team_user, only: [:show, :update, :destroy]

  # GET /team_users/:user_id/teams
  def index
    @team_users =  TeamUser.get (params[:user_id])
    respond_to do |format|
      format.json {
        render json: { teams: @team_users }
      }
    end

  end

  # GET /team_users/:team_id/members
  def team_members
    @users =  TeamUser.joins(:users).where(users: { user_id: params[:team_id] })
    json_response(@team_users)
  end

  # GET /team_users/:id
  def show
    json_response(@team_user)
  end

  # POST /team_users
  def create
    @team_user = TeamUser.create!(team_user_params)
    json_response(@team_user, :created)
  end

  # PUT /team_users/:id
  def update
    @team_user.update(team_user_params)
    head :no_content
  end

  # DELETE /team_users/:id
  def destroy
    @team_user.destroy
    head :no_content
  end

  private

  def team_user_params
    params.permit(:team_id, :user_id)
  end

  def set_team_user
    @team_user = TeamUser.find(params[:id])
  end

end
