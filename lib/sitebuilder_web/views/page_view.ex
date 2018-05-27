defmodule SitebuilderWeb.PageView do
  use SitebuilderWeb, :view

  def page_title(:index, _), do: "SiteBuilder - Build & Rent Website"
  def page_title(:about, _), do: "About Us"
  def page_title(:contact, _), do: "Contact Us"
  def page_title(:privacy, _), do: "Privacy Policy"

  def meta_description(:index, _), do: "Index description"
  def meta_description(:about, _), do: "About description"
  def meta_description(:contact, _), do: "Contact description"
  def meta_description(:privacy, _), do: "Privacy description"

  # def no_index(:index, _), do: "noindex"
end
