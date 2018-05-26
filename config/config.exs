# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :sitebuilder, SitebuilderWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "/Emq7wrqbnJUMSb+FMTINCXziIIu8BDSvyliPi0PxPoB4jx89WWsa+8xMwrqUW1X",
  render_errors: [view: SitebuilderWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Sitebuilder.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
