(function () {
  "use strict";

  const WA_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.78 14.11c-.24.68-1.41 1.31-1.95 1.38-.49.07-1.12.1-1.81-.11-.42-.13-.96-.31-1.65-.61-2.91-1.26-4.81-4.2-4.96-4.39-.14-.19-1.18-1.57-1.18-3s.75-2.13 1.01-2.42c.27-.29.58-.36.77-.36.19 0 .39.01.56.01.18 0 .42-.07.66.5.24.58.83 2.02.9 2.17.07.15.12.32.02.51-.1.19-.15.32-.29.49-.15.17-.31.38-.44.51-.14.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.19.74-.86.94-1.16.19-.29.39-.24.66-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.12.07.7-.17 1.38z"/></svg>`;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderSignatureFavourites() {
    const grid = document.getElementById("signature-grid");
    if (!grid) return;

    grid.innerHTML = SIGNATURE_FAVOURITES.map((item) => {
      const waUrl = getWhatsAppOrderUrl(item.name);
      return `
        <article class="signature-card reveal">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="food-card-link" aria-label="Order ${escapeHtml(item.name)} on WhatsApp">
            <div class="signature-media">
              <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)} - Aura by Pranavika Pure Vegetarian" width="720" height="540" loading="lazy" decoding="async">
              <span class="signature-badge">${escapeHtml(item.tag)}</span>
              <span class="veg-pill signature-veg"><span class="veg-mark" aria-hidden="true"></span><span>Pure Veg</span></span>
            </div>
            <div class="signature-body">
              <h3>${escapeHtml(item.name)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </div>
          </a>
          <div class="food-card-footer signature-actions">
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              ${WA_ICON}
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderMenu() {
    const tabsEl = document.getElementById("category-tabs");
    const sectionsEl = document.getElementById("menu-sections");
    if (!tabsEl || !sectionsEl) return;

    const allTab = `<button type="button" class="category-tab is-active" role="tab" aria-selected="true" data-category="all">All Categories</button>`;
    const catTabs = MENU_CATEGORIES.map(
      (cat) => `<button type="button" class="category-tab" role="tab" aria-selected="false" data-category="${cat.id}">${cat.code}. ${escapeHtml(cat.name)}</button>`
    ).join("");
    tabsEl.innerHTML = allTab + catTabs;

    sectionsEl.innerHTML = MENU_CATEGORIES.map((cat) => {
      const cards = cat.items
        .map((item) => {
          const waUrl = getWhatsAppOrderUrl(item.name);
          return `
            <article class="food-card" data-category="${cat.id}" data-search="${escapeHtml((item.name + " " + item.description + " " + cat.name).toLowerCase())}">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="food-card-link" aria-label="Order ${escapeHtml(item.name)} on WhatsApp">
                <div class="food-card-media">
                  <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)} — Pure Vegetarian dish at Aura by Pranavika" width="720" height="540" loading="lazy" decoding="async">
                  <span class="veg-pill food-card-veg"><span class="veg-mark" aria-hidden="true"></span><span>Pure Veg</span></span>
                </div>
                <div class="food-card-body">
                  <div class="food-card-title-row">
                    <h4>${escapeHtml(item.name)}</h4>
                    <span class="veg-mark" title="100% Pure Vegetarian" aria-label="Pure Vegetarian"></span>
                  </div>
                  <p class="food-card-desc">${escapeHtml(item.description)}</p>
                </div>
              </a>
              <div class="food-card-footer">
                <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp">
                  ${WA_ICON}
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="menu-category-block" data-category-block="${cat.id}" aria-labelledby="cat-${cat.id}">
          <div class="category-heading">
            <div class="category-heading-title">
              <span class="category-code">${cat.code}</span>
              <h3 id="cat-${cat.id}">${escapeHtml(cat.name)}</h3>
            </div>
            <p>${escapeHtml(cat.subtitle)}</p>
          </div>
          <div class="menu-grid">${cards}</div>
        </section>
      `;
    }).join("");
  }

  function setupMenuFiltering() {
    const tabsEl = document.getElementById("category-tabs");
    const searchInput = document.getElementById("menu-search");
    const countNote = document.getElementById("menu-count-note");
    const emptyNote = document.getElementById("menu-empty");
    const resetBtn = document.getElementById("menu-reset-btn");
    const blocks = Array.from(document.querySelectorAll("[data-category-block]"));
    const cards = Array.from(document.querySelectorAll(".food-card"));
    if (!tabsEl || !searchInput) return;

    let activeCategory = "all";

    function applyFilter() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCards = 0;

      cards.forEach((card) => {
        const matchesCat = activeCategory === "all" || card.dataset.category === activeCategory;
        const matchesQuery = !query || card.dataset.search.includes(query);
        const show = matchesCat && matchesQuery;
        card.hidden = !show;
        if (show) visibleCards += 1;
      });

      blocks.forEach((block) => {
        const blockCat = block.dataset.categoryBlock;
        if (activeCategory !== "all" && blockCat !== activeCategory) {
          block.hidden = true;
          return;
        }
        const anyVisible = block.querySelector(".food-card:not([hidden])") !== null;
        block.hidden = !anyVisible;
      });

      if (emptyNote) emptyNote.hidden = visibleCards > 0;
      if (countNote) {
        countNote.textContent =
          visibleCards === cards.length
            ? `Showing all ${cards.length} pure vegetarian dishes`
            : `Showing ${visibleCards} matching ${visibleCards === 1 ? "dish" : "dishes"}`;
      }
    }

    tabsEl.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-category]");
      if (!btn) return;
      activeCategory = btn.dataset.category;
      tabsEl.querySelectorAll("[data-category]").forEach((el) => {
        const isCurrent = el === btn;
        el.classList.toggle("is-active", isCurrent);
        el.setAttribute("aria-selected", String(isCurrent));
      });
      applyFilter();
    });

    searchInput.addEventListener("input", applyFilter);

    resetBtn?.addEventListener("click", () => {
      activeCategory = "all";
      searchInput.value = "";
      tabsEl.querySelectorAll("[data-category]").forEach((el) => {
        const isAll = el.dataset.category === "all";
        el.classList.toggle("is-active", isAll);
        el.setAttribute("aria-selected", String(isAll));
      });
      applyFilter();
    });
  }

  function renderGallery() {
    const grid = document.getElementById("gallery-grid");
    const dialog = document.getElementById("lightbox-dialog");
    const imgEl = document.getElementById("lightbox-img");
    const titleEl = document.getElementById("lightbox-title");
    const catEl = document.getElementById("lightbox-cat");
    const waEl = document.getElementById("lightbox-wa");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    if (!grid || !dialog) return;

    grid.innerHTML = GALLERY_ITEMS.map(
      (item, idx) => `
        <button type="button" class="gallery-item reveal" data-gallery-idx="${idx}" aria-label="View ${escapeHtml(item.title)}">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)} — ${escapeHtml(item.category)}" width="720" height="540" loading="lazy" decoding="async">
          <span class="gallery-overlay">
            <span class="gallery-category">${escapeHtml(item.category)}</span>
            <span class="gallery-title">${escapeHtml(item.title)}</span>
          </span>
        </button>
      `
    ).join("");

    let currentIndex = 0;

    function showSlide(index) {
      currentIndex = (index + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      const item = GALLERY_ITEMS[currentIndex];
      imgEl.src = item.image;
      imgEl.alt = item.title;
      titleEl.textContent = item.title;
      catEl.textContent = item.category;
      waEl.href = getWhatsAppOrderUrl(item.title);
    }

    grid.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-gallery-idx]");
      if (!btn) return;
      showSlide(Number(btn.dataset.galleryIdx));
      dialog.showModal();
    });

    closeBtn?.addEventListener("click", () => dialog.close());
    prevBtn?.addEventListener("click", () => showSlide(currentIndex - 1));
    nextBtn?.addEventListener("click", () => showSlide(currentIndex + 1));

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
      if (event.key === "ArrowRight") showSlide(currentIndex + 1);
    });
  }

  function setupNavigationAndScroll() {
    const header = document.getElementById("site-header");
    const drawer = document.getElementById("mobile-drawer");
    const openBtn = document.getElementById("mobile-menu-open");
    const closeBtn = document.getElementById("mobile-menu-close");

    function updateHeader() {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    if (drawer && openBtn && closeBtn) {
      openBtn.addEventListener("click", () => drawer.showModal());
      closeBtn.addEventListener("click", () => drawer.close());
      drawer.addEventListener("click", (event) => {
        if (event.target === drawer || event.target.closest("a")) {
          drawer.close();
        }
      });
    }
  }

  function setupRevealObserver() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
  }

  renderSignatureFavourites();
  renderMenu();
  setupMenuFiltering();
  renderGallery();
  setupNavigationAndScroll();
  setupRevealObserver();
})();
