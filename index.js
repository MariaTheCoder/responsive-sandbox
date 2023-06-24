const toggleFeaturedPackages = document.getElementById(
  "toggleFeaturedPackages"
);
const featuredPackagesContainer = document.getElementById(
  "featuredPackagesContainer"
);

toggleFeaturedPackages.addEventListener("click", () => {
  featuredPackagesContainer.style.display !== "none"
    ? (featuredPackagesContainer.style.display = "none")
    : (featuredPackagesContainer.style.display = "initial");
});
