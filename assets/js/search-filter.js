window.addEventListener("load", () => {
  const search = document.querySelector("ninja-keys");
  if (!search || !Array.isArray(search.data)) return;

  const visibleItems = new Set(["nav-about", "nav-theses", "social-cv"]);
  search.data = search.data.filter((item) => visibleItems.has(item.id));
});
