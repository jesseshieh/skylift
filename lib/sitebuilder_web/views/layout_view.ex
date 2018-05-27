defmodule SitebuilderWeb.LayoutView do
  use SitebuilderWeb, :view

  def page_title(conn, default) do
    try do
      apply(view_module(conn), :page_title, [conn.private.phoenix_action, conn.assigns])
    rescue
      _ -> default
    end
  end

  def meta_description(conn, default) do
    try do
      apply(view_module(conn), :meta_description, [conn.private.phoenix_action, conn.assigns])
    rescue
      _ -> default
    end
  end

  def no_index(conn, default) do
    try do
      apply(view_module(conn), :no_index, [conn.private.phoenix_action, conn.assigns])
    rescue
      _ -> default
    end
  end
end
