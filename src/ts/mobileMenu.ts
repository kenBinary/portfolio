export function mobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuToggle?.addEventListener("click", () => {
    const isHidden = mobileMenu?.classList.contains("hidden");

    if (isHidden) {
      mobileMenu?.classList.remove("hidden");
      mobileMenu?.classList.add("animate-slide-down");
    } else {
      mobileMenu?.classList.add("hidden");
      mobileMenu?.classList.remove("animate-slide-down");
    }
  });
}
