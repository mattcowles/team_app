class SportsController < ApplicationController
  before_action :set_sport, only: [:show, :update, :destroy]

  # GET /sports
  def index
    @sports = Sport.all

    respond_to do |format|
      format.json {
        render json: { sports: @sports }
      }
    end
  end

  # GET /sports/:id
  def show
    respond_to do |format|
      format.json {
        render json: { sports: @sport }
      }
    end
  end

  # POST /sports
  def create
    @sport = Sport.create!(sports_params)
    respond_to do |format|
      format.json {
        render json: { sports: @sport }
      }
    end

  end

  # PUT /sports/:id
  def update
    @sport.update(sport_params)
    head :no_content
  end

  # DELETE /sports/:id
  def destroy
    @sport.destroy
    head :no_content
  end

  private

  def sports_params
    params.permit(:name)
  end

  def set_sport
    @sport = Sport.find(params[:id])
  end

end
