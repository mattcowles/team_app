class UsersController < ApplicationController

  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    json_response(@users)
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

  private

  def user_params
    # whitelist params
    params.permit(:first_name, :last_name, :email, :height, :weight, :isPublic)
  end

  def set_user
    @user = User.find(params[:id])
  end


end
