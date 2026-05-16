import { HomePage } from "./pages/HomePage.js";
import { About } from "./pages/About.js";
import { Contact } from "./pages/Contact.js";
import { ErrorPage } from "./pages/ErrorPage.js";

export function navigateTo(url) {
  window.history.pushState({}, "", url);
  router();
}

export async function router() {
  const routes = [
    { path: "/", view: HomePage },
    { path: "/about", view: About },
    { path: "/contact", view: Contact },
  ];

  const potentialMatches = routes.map((route) => ({
    route,
    isMatch: location.pathname === route.path,
  }));

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: { view: ErrorPage },
      isMatch: true,
    };
  }

  const html = await match.route.view();

  document.querySelector("#app").innerHTML = html;
}
