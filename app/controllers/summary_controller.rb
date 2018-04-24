class SummaryController < ApplicationController
  def ng
    @base_url = "/summary/ng"
    render :index
  end

  def index
  end
end
