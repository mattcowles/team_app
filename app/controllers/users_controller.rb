class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def ng
    @base_url = "/users/ng"
    render :index
  end

  # GET /users
  def index

    @users = User.all

    respond_to do |format|
      format.html {
        redirect_to users_ng_path
      }
      format.json {
        render json: { users: @users }
      }
    end

  end

  # GET /users/:id/participation/bydate
  def user_participations
    @participation_bydate =  UserParticipation.user_participations (params[:id])
    respond_to do |format|
      format.json {
        render json: { participation_bydate: @participation_bydate }
      }
    end
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    respond_to do |format|
      format.json {
        render json: { users: @users }
      }
    end
  end

  # GET /users/:id
  def show
    respond_to do |format|
      format.json { render json: { user: @user } }
    end
  end

  # PUT /users/:id
  def update
    @user.update(user_params)
    head :no_content
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    head :no_content
  end
  private

  def user_params
    # whitelist params
    params.permit(:first_name, :last_name, :email, :height, :weight, :isPublic)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
