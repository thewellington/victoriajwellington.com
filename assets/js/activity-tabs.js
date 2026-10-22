(function () {
  var root = document.querySelector("[data-activity-tabs]");
  if (!root) return;

  var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
  var panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));
  if (!tabs.length || !panels.length) return;

  function selectTab(next, options) {
    var opts = options || {};
    tabs.forEach(function (tab) {
      var on = tab === next;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (panel) {
      var on = panel.id === next.getAttribute("aria-controls");
      if (on) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "");
      }
    });
    if (opts.focus) next.focus();
    if (opts.hash !== false) {
      var id = next.getAttribute("data-tab");
      if (id && history.replaceState) {
        history.replaceState(null, "", "#" + id);
      }
    }
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      selectTab(tab, { focus: false });
    });
    tab.addEventListener("keydown", function (event) {
      var i = tabs.indexOf(tab);
      var target = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        target = tabs[(i + 1) % tabs.length];
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        target = tabs[(i - 1 + tabs.length) % tabs.length];
      } else if (event.key === "Home") {
        target = tabs[0];
      } else if (event.key === "End") {
        target = tabs[tabs.length - 1];
      }
      if (!target) return;
      event.preventDefault();
      selectTab(target, { focus: true });
    });
  });

  var hash = (location.hash || "").replace(/^#/, "");
  var fromHash = tabs.find(function (tab) {
    return tab.getAttribute("data-tab") === hash;
  });
  selectTab(fromHash || tabs[0], { hash: false, focus: false });
})();
