(function () {
  // Keep CalTopo embeds from stealing focus via keyboard / last-click quirks.
  document.querySelectorAll("[data-map-embed] iframe").forEach(function (frame) {
    frame.setAttribute("tabindex", "-1");
    frame.setAttribute("inert", "");
  });
})();
