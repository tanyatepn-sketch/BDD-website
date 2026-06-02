/* ============================================================
   BDD — shared chrome (header, mobile nav, footer, floats)
   Injected on every page so navigation stays consistent.
   Loaded BEFORE site.js.
   ============================================================ */
(function () {
  "use strict";

  var MARK =
    '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<path d="M5 26 V14 L16 6 L27 14 V26" stroke="#b8924a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<path d="M13 26 V18 H19 V26" stroke="#b8924a" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<line x1="5" y1="26" x2="27" y2="26" stroke="#b8924a" stroke-width="1.4" stroke-linecap="round"/>' +
    '</svg>';

  var PHONE = "081-974-4162";
  var TEL = "tel:0819744162";
  var LINE = "https://line.me/ti/p/HpQmu_HZs4";

  function navLinks(cls) {
    var items = [
      ["index.html", "หน้าแรก", "Home"],
      ["services.html", "บริการ", "Services"],
      ["portfolio.html", "ผลงาน", "Portfolio"],
      ["about.html", "เกี่ยวกับเรา", "About"],
      ["knowledge.html", "เกร็ดความรู้", "Insights"],
      ["contact.html", "ติดต่อเรา", "Contact"]
    ];
    return items.map(function (i) {
      return '<a class="' + cls + '" href="' + i[0] + '"><span class="th">' + i[1] + '</span><span class="en">' + i[2] + '</span></a>';
    }).join("");
  }

  var headerHTML =
    '<header class="site-header hero-dark">' +
      '<div class="container">' +
        '<a class="brand" href="index.html" aria-label="BDD home">' +
          '<span class="brand__mark">' + MARK + '</span>' +
          '<span class="brand__name">' +
            '<span class="brand__word">BDD</span>' +
            '<span class="brand__sub">Development &amp; Design</span>' +
          '</span>' +
        '</a>' +
        '<nav class="nav" aria-label="Primary">' + navLinks("nav__link") + '</nav>' +
        '<div class="header-actions">' +
          '<div class="lang-toggle" role="group" aria-label="Language">' +
            '<button data-lang-btn="th">TH</button><span class="sep">/</span><button data-lang-btn="en">EN</button>' +
          '</div>' +
          '<a class="header-phone" href="' + TEL + '">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
            PHONE +
          '</a>' +
          '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
        '</div>' +
      '</div>' +
    '</header>' +
    '<nav class="mobile-nav" aria-label="Mobile">' +
      navLinks("") +
      '<div class="mobile-cta">' +
        '<a class="btn btn-gold" href="' + TEL + '"><span class="th">โทรเลย ' + PHONE + '</span><span class="en">Call ' + PHONE + '</span></a>' +
        '<a class="btn btn-ghost" href="contact.html"><span class="th">ขอใบเสนอราคาฟรี</span><span class="en">Free Quote</span></a>' +
      '</div>' +
    '</nav>';

  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="footer-top">' +
          '<div class="footer-col">' +
            '<a class="brand" href="index.html">' +
              '<span class="brand__mark">' + MARK + '</span>' +
              '<span class="brand__name"><span class="brand__word">BDD</span><span class="brand__sub">Development &amp; Design</span></span>' +
            '</a>' +
            '<p class="footer-about">' +
              '<span class="th">บริษัท บีซเนส ดีเวลลอปเม้นท์ แอนด์ ดีไซน์ จำกัด — ออกแบบสถาปัตยกรรม ตกแต่งภายใน และรับเหมาก่อสร้างครบวงจร ด้วยสถาปนิกและวิศวกรผู้ชำนาญการ</span>' +
              '<span class="en">Business Development and Design Co., Ltd. — full-service architecture, interior design and construction, led by experienced architects and specialist engineers.</span>' +
            '</p>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5><span class="th">เมนู</span><span class="en">Explore</span></h5>' +
            '<ul>' +
              '<li><a href="services.html"><span class="th">บริการของเรา</span><span class="en">Services</span></a></li>' +
              '<li><a href="portfolio.html"><span class="th">ผลงาน</span><span class="en">Portfolio</span></a></li>' +
              '<li><a href="about.html"><span class="th">เกี่ยวกับเรา</span><span class="en">About</span></a></li>' +
              '<li><a href="knowledge.html"><span class="th">เกร็ดความรู้</span><span class="en">Insights</span></a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5><span class="th">บริการ</span><span class="en">Services</span></h5>' +
            '<ul>' +
              '<li><a href="services.html"><span class="th">ที่ปรึกษางานก่อสร้าง</span><span class="en">Consulting</span></a></li>' +
              '<li><a href="services.html"><span class="th">ออกแบบสถาปัตย์ & โครงสร้าง</span><span class="en">Design</span></a></li>' +
              '<li><a href="services.html"><span class="th">ก่อสร้าง & ตกแต่งภายใน</span><span class="en">Build & Interior</span></a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="footer-col">' +
            '<h5><span class="th">ติดต่อ</span><span class="en">Contact</span></h5>' +
            '<ul class="footer-contact">' +
              '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>95/8 หมู่ 1 ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี 12120</span></li>' +
              '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="' + TEL + '">' + PHONE + '</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© <span data-year></span> Business Development and Design Co., Ltd.</span>' +
          '<div class="footer-socials">' +
            '<a href="' + LINE + '" aria-label="LINE"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.55 7.39 8.35 8.03.32.07.77.21.88.49.1.25.07.65.03.91l-.14.86c-.04.25-.2 1 .87.54 1.08-.45 5.8-3.42 7.92-5.85C21.36 13.49 22 11.9 22 10.13 22 5.64 17.52 2 12 2zM8.2 12.6H6.16c-.3 0-.54-.24-.54-.54V8.5c0-.3.24-.54.54-.54.3 0 .54.24.54.54v3.02H8.2c.3 0 .54.24.54.54s-.24.54-.54.54zm2.13-.54c0 .3-.24.54-.54.54s-.54-.24-.54-.54V8.5c0-.3.24-.54.54-.54s.54.24.54.54v3.56zm4.34 0c0 .23-.15.44-.37.51a.6.6 0 0 1-.17.03c-.17 0-.33-.08-.43-.22l-1.86-2.53v2.21c0 .3-.24.54-.54.54s-.54-.24-.54-.54V8.5c0-.23.15-.44.37-.51.22-.08.46 0 .6.19l1.86 2.53V8.5c0-.3.24-.54.54-.54s.54.24.54.54v3.56zm3.04-2.32c.3 0 .54.24.54.54s-.24.54-.54.54h-1.5v.7h1.5c.3 0 .54.24.54.54s-.24.54-.54.54h-2.04c-.3 0-.54-.24-.54-.54V8.5c0-.3.24-.54.54-.54h2.04c.3 0 .54.24.54.54s-.24.54-.54.54h-1.5v.7h1.5z"/></svg></a>' +
            '<a href="' + TEL + '" aria-label="Phone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var floatsHTML =
    '<div class="float-contact">' +
      '<a class="fc-line" href="' + LINE + '" aria-label="LINE"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 5.64 2 10.13c0 4.02 3.55 7.39 8.35 8.03.32.07.77.21.88.49.1.25.07.65.03.91l-.14.86c-.04.25-.2 1 .87.54 1.08-.45 5.8-3.42 7.92-5.85C21.36 13.49 22 11.9 22 10.13 22 5.64 17.52 2 12 2z"/></svg></a>' +
      '<a class="fc-phone" href="' + TEL + '" aria-label="Call"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>' +
    '</div>';

  var lightboxHTML =
    '<div class="lightbox" aria-hidden="true"><button class="lightbox__close" aria-label="Close">&times;</button><img alt="" /></div>';

  // inject
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
  document.body.insertAdjacentHTML("beforeend", footerHTML + floatsHTML + lightboxHTML);
})();
