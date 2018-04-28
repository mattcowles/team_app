
class UserSportsController < ApplicationController
  before_action :set_user_user_sport, only: [:show, :update, :destroy]
  
  # GET /user_sports/:user_id/sports
  def index
    @user_user_sports = UserSport.get (params[:user_id])
  
    respond_to do |format|
      format.json {
        render json: { user_sports: @user_user_sports }
      }
    end
  end

  # GET /user_user_sports/:id
  def show
    respond_to do |format|
      format.json {
        render json: { user_sports: @user_sport }
      }
    end
  end

  # POST /user_sports
  def create
    @user_sport = UserSport.create!(user_sport_params)
    json_response(@user_sport, :created)
  end

  # PUT /user_sports/:id
  def update
    @user_sport.update(user_sport_params)
    head :no_content
  end

  # DELETE /user_sports/:id
  def destroy
    @user_sport.destroy
    head :no_content
  end

  private

  def user_sport_params
    params.permit(:name, :done)
  end

  def set_user_sport
    @user_sport = UserSport.find(params[:id])
  end

end  