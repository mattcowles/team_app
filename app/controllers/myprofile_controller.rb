class MyprofileController < ApplicationController

  def ng
    @base_url = "/myprofile/ng"
    render :index
  end

  def index;
  end
end
