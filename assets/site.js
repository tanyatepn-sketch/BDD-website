/* ============================================================
   BDD — shared site behaviour
   ============================================================ */
(function () {
  "use strict";

  /* ---------- language ---------- */
  var STORE = "bdd-lang";
  function getLang() {
    try { return localStorage.getItem(STORE) || "th"; } catch (e) { return "th"; }
  }
  function applyLang(lang) {
    document.documentElement.setAttribute("data-lang", lang);
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang-btn") === lang);
    });
    // swap title / meta if provided
    var t = document.querySelector('title[data-th]');
    if (t) document.title = t.getAttribute("data-" + lang) || document.title;
    // swap placeholders
    document.querySelectorAll("[data-ph-th]").forEach(function (el) {
      el.setAttribute("placeholder", el.getAttribute("data-ph-" + lang) || "");
    });
  }
  // set early
  applyLang(getLang());
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (btn) { applyLang(btn.getAttribute("data-lang-btn")); }
  });

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());

    /* ---------- sticky header ---------- */
    var header = document.querySelector(".site-header");
    function onScroll() {
      if (!header) return;
      if (window.scrollY > 30) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- mobile nav ---------- */
    var toggle = document.querySelector(".nav-toggle");
    var drawer = document.querySelector(".mobile-nav");
    if (toggle && drawer) {
      toggle.addEventListener("click", function () {
        var open = drawer.classList.toggle("is-open");
        document.body.style.overflow = open ? "hidden" : "";
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      drawer.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          drawer.classList.remove("is-open");
          document.body.style.overflow = "";
        });
      });
    }

    /* ---------- active nav link ---------- */
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav__link, .mobile-nav a").forEach(function (a) {
      var href = (a.getAttribute("href") || "").split("/").pop();
      if (href === here) a.classList.add("is-active");
    });

    /* ---------- scroll reveal ---------- */
    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }

    /* ---------- count-up stats ---------- */
    var nums = document.querySelectorAll("[data-count]");
    if ("IntersectionObserver" in window && nums.length) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target; io2.unobserve(el);
          var target = parseFloat(el.getAttribute("data-count"));
          var suffix = el.getAttribute("data-suffix") || "";
          var dur = 1400, start = performance.now();
          function tick(now) {
            var p = Math.min(1, (now - start) / dur);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = target * eased;
            el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.4 });
      nums.forEach(function (el) { io2.observe(el); });
    }

    /* ---------- portfolio filter ---------- */
    var chips = document.querySelectorAll("[data-filter]");
    var items = document.querySelectorAll("[data-cat]");
    if (chips.length) {
      chips.forEach(function (chip) {
        chip.addEventListener("click", function () {
          chips.forEach(function (c) { c.classList.remove("is-active"); });
          chip.classList.add("is-active");
          var f = chip.getAttribute("data-filter");
          items.forEach(function (it) {
            var match = f === "all" || it.getAttribute("data-cat") === f;
            it.style.display = match ? "" : "none";
          });
        });
      });
    }

    /* ---------- lightbox ---------- */
    var lb = document.querySelector(".lightbox");
    if (lb) {
      var lbImg = lb.querySelector("img");
      document.querySelectorAll("[data-lightbox]").forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          var src = el.getAttribute("data-lightbox");
          lbImg.src = src; lb.classList.add("open"); document.body.style.overflow = "hidden";
        });
      });
      function closeLb() { lb.classList.remove("open"); document.body.style.overflow = ""; }
      lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest(".lightbox__close")) closeLb(); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLb(); });
    }

    /* ---------- contact form (Web3Forms) ---------- */
    var form = document.querySelector("[data-contact-form]");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        var ok = form.querySelector(".form-success");
        var originalBtnHTML = btn ? btn.innerHTML : "";
        if (btn) { btn.disabled = true; btn.innerHTML = "กำลังส่ง..."; }

        // Build JSON payload with Thai labels (Web3Forms supports JSON natively, UTF-8 safe)
        var fd = new FormData(form);
        var typeSel = form.querySelector('select[name="type"]');
        var typeText = typeSel ? (typeSel.options[typeSel.selectedIndex] ? typeSel.options[typeSel.selectedIndex].text : fd.get("type")) : fd.get("type");
        var payload = {
          access_key: fd.get("access_key"),
          subject: fd.get("subject") || "ขอใบเสนอราคา/ปรึกษา จากเว็บไซต์ BDD",
          from_name: fd.get("from_name") || "BDD Website",
          botcheck: fd.get("botcheck") || "",
          "ชื่อ-นามสกุล": fd.get("name") || "",
          "เบอร์โทร": fd.get("phone") || "",
          "อีเมล": fd.get("email") || "",
          "ประเภทงานที่สนใจ": typeText || "",
          "รายละเอียดโครงการ": fd.get("message") || "",
          "หน้าที่กรอกฟอร์ม": window.location.href
        };

        fetch(form.action, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data && data.success) {
            if (ok) { ok.classList.add("show"); }
            form.reset();
            window.scrollTo({ top: form.getBoundingClientRect().top + window.scrollY - 120, behavior: "smooth" });
          } else {
            alert("ส่งข้อความไม่สำเร็จ กรุณาลองใหม่ หรือโทร 081-974-4162\n\n" + (data && data.message ? data.message : ""));
          }
        })
        .catch(function () {
          alert("เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองใหม่ หรือโทร 081-974-4162");
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.innerHTML = originalBtnHTML; }
        });
      });
    }

    /* ---------- year ---------- */
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear() + 543; });
  });
})();
