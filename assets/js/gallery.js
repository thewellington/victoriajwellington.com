(function () {
  var root = document.querySelector("[data-gallery]");
  var dialog = document.querySelector("[data-lightbox]");
  if (!root || !dialog) return;

  var links = Array.prototype.slice.call(
    root.querySelectorAll(".photo-card__link[data-full]")
  );
  if (!links.length) return;

  var imgEl = dialog.querySelector("[data-lightbox-img]");
  var titleEl = dialog.querySelector("[data-lightbox-title]");
  var captionEl = dialog.querySelector("[data-lightbox-caption]");
  var index = 0;

  function show(i) {
    index = (i + links.length) % links.length;
    var link = links[index];
    var title = link.getAttribute("data-title") || "";
    var caption = link.getAttribute("data-caption") || "";
    imgEl.src = link.getAttribute("data-full");
    imgEl.alt = title;
    titleEl.textContent = title;
    captionEl.textContent = caption;
  }

  function openAt(i) {
    show(i);
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function close() {
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    imgEl.removeAttribute("src");
  }

  links.forEach(function (link, i) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      openAt(i);
    });
  });

  dialog.querySelector("[data-lightbox-close]").addEventListener("click", close);
  dialog.querySelector("[data-lightbox-prev]").addEventListener("click", function () {
    show(index - 1);
  });
  dialog.querySelector("[data-lightbox-next]").addEventListener("click", function () {
    show(index + 1);
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) close();
  });

  document.addEventListener("keydown", function (event) {
    if (!dialog.open) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });
})();
