import { site } from "../data/site";

export const prerender = true;

const routes = ["/", "/news/", "/publications/", "/services/"];

export function GET() {
  const entries = routes.map((route) => `<url><loc>${new URL(route, site.url).toString()}</loc></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}
