/* 뉴튼어학원 홈페이지 — data/site-config.js, data/schedule.js 내용을 화면에 반영 */
(function () {
  "use strict";
  var S = window.SITE || {};
  var SEASON = window.SEASON || null;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }
  function digits(s) { return String(s || "").replace(/[^0-9+]/g, ""); }

  /* ---------- 사이트 정보 채우기 ---------- */
  each("[data-site]", function (el) { var v = S[el.getAttribute("data-site")]; if (v) el.textContent = v; });
  each("[data-tel]", function (el) { var v = S[el.getAttribute("data-tel")]; if (v) el.href = "tel:" + digits(v); });
  each("[data-sms]", function (el) { var v = S[el.getAttribute("data-sms")]; if (v) el.href = "sms:" + digits(v); });
  each("[data-mail]", function (el) { var v = S[el.getAttribute("data-mail")]; if (v) el.href = "mailto:" + v; });
  each("[data-href]", function (el) { var v = S[el.getAttribute("data-href")]; if (v) el.href = v; else el.hidden = true; });
  each("[data-show]", function (el) { if (!S[el.getAttribute("data-show")]) el.hidden = true; });

  var map = document.getElementById("mapFrame");
  if (map && S.address) {
    var q = S.address.split(",")[0];
    map.src = "https://maps.google.com/maps?q=" + encodeURIComponent(q) + "&hl=ko&z=17&output=embed";
  }

  var biz = document.getElementById("footerBiz");
  if (biz) {
    var parts = [];
    if (S.company) parts.push(esc(S.company));
    if (S.ceo) parts.push("대표 " + esc(S.ceo));
    if (S.bizNumber) parts.push("사업자등록번호 " + esc(S.bizNumber));
    if (S.academyRegNumber) parts.push("학원등록번호 " + esc(S.academyRegNumber));
    var line2 = [];
    if (S.address) line2.push(esc(S.address));
    if (S.phoneMain) line2.push("Tel " + esc(S.phoneMain));
    if (S.email) line2.push(esc(S.email));
    biz.innerHTML = parts.join(" · ") + "<br>" + line2.join(" · ");
  }
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- 시즌 일정 ---------- */
  var body = document.getElementById("seasonBody");
  if (body && SEASON) {
    document.getElementById("seasonTitle").textContent = SEASON.title || "시즌 특강 · 학기 일정";
    document.getElementById("seasonSub").textContent = SEASON.subtitle || "";

    var h = '<div class="season__main">';
    h += '<div class="season__meta">';
    if (SEASON.badge) h += '<span class="badge">' + esc(SEASON.badge) + "</span>";
    if (SEASON.period) h += '<span class="season__period">' + esc(SEASON.period) + "</span>";
    if (SEASON.location) h += '<span class="season__loc">' + esc(SEASON.location) + "</span>";
    h += "</div>";

    h += '<div class="season__classes">';
    (SEASON.classes || []).forEach(function (c) {
      h += '<article class="sclass"><div class="sclass__head"><h3>' + esc(c.name) + "</h3>";
      if (c.tag) h += '<span class="sclass__tag">' + esc(c.tag) + "</span>";
      h += "</div>";
      var who = [c.teacher, c.target].filter(Boolean).map(esc).join(" · ");
      if (who) h += '<p class="sclass__teacher">' + who + "</p>";
      if (c.schedule && c.schedule.length) {
        h += '<table class="sclass__table"><tbody>';
        c.schedule.forEach(function (r) { h += "<tr><th>" + esc(r.label) + "</th><td>" + esc(r.time) + "</td></tr>"; });
        h += "</tbody></table>";
      }
      if (c.points && c.points.length) {
        h += '<ul class="checks">' + c.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      }
      h += "</article>";
    });
    h += "</div>";

    if (SEASON.testDates && SEASON.testDates.dates && SEASON.testDates.dates.length) {
      h += '<div class="testdates"><b>' + esc(SEASON.testDates.label || "시험 일정") + "</b>" +
        SEASON.testDates.dates.map(function (d) { return "<span>" + esc(d) + "</span>"; }).join("") + "</div>";
    }
    if (SEASON.notice && SEASON.notice.length) {
      h += '<ul class="season__notice">' + SEASON.notice.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>";
    }
    h += "</div>";

    if (SEASON.poster) {
      h += '<aside class="season__poster"><a href="' + esc(SEASON.poster) + '" target="_blank" rel="noopener">' +
        '<img src="' + esc(SEASON.poster) + '" alt="' + esc(SEASON.title) + ' 안내 포스터" loading="lazy"></a>' +
        "<p>포스터를 누르면 크게 볼 수 있습니다</p></aside>";
    } else {
      body.classList.add("season--noposter");
    }
    body.innerHTML = h;
  }

  /* ---------- 모바일 메뉴 ---------- */
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }
    });
  }
})();
