// loaded in <head> (not deferred) so the theme is set before first paint
var t; try { t = localStorage.theme; } catch (e) {}
document.documentElement.dataset.theme = t || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function toggleTheme() {
  var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try { localStorage.theme = next; } catch (e) {}
}
