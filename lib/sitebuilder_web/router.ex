defmodule SitebuilderWeb.Router do
  use SitebuilderWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", SitebuilderWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/about", PageController, :about
    get "/contact", PageController, :contact
    get "/privacy-policy", PageController, :privacy
  end

  # Other scopes may use custom stacks.
  # scope "/api", SitebuilderWeb do
  #   pipe_through :api
  # end
end
