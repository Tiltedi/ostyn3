(function () {
    "use strict";

    // Current year in footer
    var yearEl = document.getElementById("jaar");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Form submit — no-op handler; hook this up to the real Ostyn endpoint
    // or replace the form with the existing offerte-formulier from ostyn.be.
    var form = document.querySelector(".form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            var btn = form.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = "Bedankt — we nemen binnen 2 werkdagen contact op";
                btn.disabled = true;
            }
        });
    }
})();
