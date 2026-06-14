/**
 * Initializes mobile navigation functionality.
 *
 * Toggles the mobile menu when the menu button is clicked
 * and automatically closes the menu when a navigation link is selected.
 */
export function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}
