/*
  Crystal Clear Cleaning Co. — DEMO site JS.
  Progressive enhancement only: every page works with this file absent (nav becomes a plain
  in-flow list, form falls back to native HTML5 validation via `required`/`type` attributes).
  No analytics, no third-party requests, no trackers.
*/
(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile menu after choosing a link, and on Escape.
    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A" && window.innerWidth < 800) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Quote form validation (client-side, demo-mode submit) ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^[0-9()+\-.\s]{7,20}$/;

  function setFieldError(fieldEl, message) {
    var wrapper = fieldEl.closest(".field");
    if (!wrapper) return;
    var errorEl = wrapper.querySelector(".field-error");
    if (message) {
      wrapper.classList.add("has-error");
      if (errorEl) errorEl.textContent = message;
      fieldEl.setAttribute("aria-invalid", "true");
    } else {
      wrapper.classList.remove("has-error");
      if (errorEl) errorEl.textContent = "";
      fieldEl.removeAttribute("aria-invalid");
    }
  }

  function validateField(fieldEl) {
    var value = (fieldEl.value || "").trim();
    if (fieldEl.hasAttribute("required") && !value) {
      setFieldError(fieldEl, "This field is required.");
      return false;
    }
    if (fieldEl.type === "email" && value && !EMAIL_RE.test(value)) {
      setFieldError(fieldEl, "Enter a valid email address.");
      return false;
    }
    if (fieldEl.type === "tel" && value && !PHONE_RE.test(value)) {
      setFieldError(fieldEl, "Enter a valid phone number.");
      return false;
    }
    if (fieldEl.type === "checkbox" && fieldEl.hasAttribute("required") && !fieldEl.checked) {
      setFieldError(fieldEl, "Please confirm you agree to be contacted.");
      return false;
    }
    setFieldError(fieldEl, "");
    return true;
  }

  function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;

    var status = form.querySelector(".form-status");
    var fields = Array.prototype.slice.call(
      form.querySelectorAll("input[required], textarea[required], select[required], input[type='email'], input[type='tel']")
    );

    fields.forEach(function (fieldEl) {
      fieldEl.addEventListener("blur", function () {
        fieldEl.dataset.touched = "true";
        validateField(fieldEl);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Honeypot: a real visitor never fills this hidden field. A non-empty value means a bot.
      var honeypot = form.querySelector("[name='website']");
      if (honeypot && honeypot.value.trim() !== "") {
        // Silently "succeed" from the bot's point of view; do nothing further.
        status.textContent = "Thanks!";
        status.className = "form-status success is-visible";
        form.reset();
        return;
      }

      var isValid = true;
      fields.forEach(function (fieldEl) {
        fieldEl.dataset.touched = "true";
        if (!validateField(fieldEl)) isValid = false;
      });

      if (!isValid) {
        status.textContent = "Please fix the highlighted fields and try again.";
        status.className = "form-status error is-visible";
        var firstError = form.querySelector(".field.has-error input, .field.has-error select, .field.has-error textarea");
        if (firstError) firstError.focus();
        return;
      }

      // DEMO MODE: this static demo has no live backend connected yet (see
      // docs/04-deployment-runbook.md, "Future: real backend"). The real lead pipeline
      // (validation, consent recording, CRM contact + opportunity creation, notification) is
      // implemented and tested separately in tools/lead-pipeline.js and exercised by
      // scripts/test.ps1 — this in-browser confirmation never claims a message was actually
      // sent or that a human will respond by a specific time.
      status.textContent =
        "Demo mode: this form is not connected to a live inbox. In the production version, " +
        "this submission would create a CRM record and notify our team.";
      status.className = "form-status success is-visible";
      form.reset();
      fields.forEach(function (fieldEl) { setFieldError(fieldEl, ""); });
    });
  }

  // Add the JS-enhancement hook as early as possible (not gated on DOMContentLoaded) so there
  // is no flash of the collapsible-but-not-yet-collapsible nav on slow connections.
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initQuoteForm();
  });
})();
