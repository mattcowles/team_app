class UserParticipationsController < ApplicationController
  before_action :set_user_participation, only: [:show, :update, :destroy]

  # GET /user_participations
  def index
    @user_participations = UserParticipation.all
    json_response(@user_participations)
  end

  # GET /user_participations/:id
  def show
    json_response(@user_participation)
  end

  # POST /user_participations
  def create
    @user_participation = UserParticipation.create!(user_participation_params)
    json_response(@user_participation, :created)
  end

  # PUT /user_participations/:id
  def update
    @user_participation.update(user_participation_params)
    head :no_content
  end

  # DELETE /user_participations/:id
  def destroy
    @user_participation.destroy
    head :no_content
  end

  private

  def user_participation_params
    params.permit(:date_of, :duration_min, :team_id, :user_id)
  end

  def set_user_participation
    @user_participation = UserParticipation.find(params[:id])
  end

end
