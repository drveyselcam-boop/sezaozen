const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "Kapat" : "Menü";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "Menü";
    });
  });
}


const publicationSearch = document.getElementById("publication-search");
const publicationYear = document.getElementById("publication-year");
const publicationItems = Array.from(document.querySelectorAll(".searchable-publication"));
const publicationCount = document.getElementById("publication-count");
const noPublications = document.getElementById("no-publications");

function filterPublications() {
  if (!publicationItems.length) return;

  const query = (publicationSearch?.value || "").trim().toLocaleLowerCase("tr");
  const year = publicationYear?.value || "";
  let visible = 0;

  publicationItems.forEach((item) => {
    const matchesText = !query || item.dataset.search.includes(query);
    const matchesYear = !year || item.dataset.year === year;
    const show = matchesText && matchesYear;
    item.hidden = !show;
    if (show) visible += 1;
  });

  if (publicationCount) {
    publicationCount.textContent = `${visible} yayın gösteriliyor.`;
  }
  if (noPublications) {
    noPublications.hidden = visible !== 0;
  }
}

publicationSearch?.addEventListener("input", filterPublications);
publicationYear?.addEventListener("change", filterPublications);
