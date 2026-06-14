/**
 * Initializes theme management for the portfolio.
 *
 * Loads the user's saved theme preference from localStorage,
 * applies the corresponding theme on page load, and handles theme switching when the toggle button is clicked.
 */
export function initTheme() {
  const button = document.querySelector(".theme-toggle");

  if (!button) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    button.textContent = "☀️";
  }

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    button.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
