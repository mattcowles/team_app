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
        json_response(@users)
      }
    end

  end

  # POST /organizations
  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  # GET /users/:id
  def show
    json_response(@user)
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
