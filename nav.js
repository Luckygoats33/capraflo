(function () {
  var nav = document.getElementById("nav");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = !menu.classList.contains("is-open");
      menu.classList.toggle("is-open", open);
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("nav-open");
      });
    });
  }

  document.querySelectorAll("[data-accordion]").forEach(function (root) {
    var buttons = root.querySelectorAll(".acc-trigger");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".acc-item");
        var open = item.classList.contains("is-open");
        if (root.getAttribute("data-accordion") === "single") {
          root.querySelectorAll(".acc-item").forEach(function (el) {
            el.classList.remove("is-open");
            var t = el.querySelector(".acc-trigger");
            if (t) t.setAttribute("aria-expanded", "false");
          });
        }
        item.classList.toggle("is-open", !open);
        btn.setAttribute("aria-expanded", !open ? "true" : "false");
      });
    });
  });
})();
