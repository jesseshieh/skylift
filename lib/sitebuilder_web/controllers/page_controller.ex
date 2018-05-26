defmodule SitebuilderWeb.PageController do
  use SitebuilderWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
