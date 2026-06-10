/* Clear Skies Counselling — site behaviours (jQuery) */
$(function () {
  // Highlight the active nav link based on current page
  var path = window.location.pathname.split("/").pop() || "index.html";
  $(".nav a, .mobile-nav a").each(function () {
    var href = $(this).attr("href");
    if (href === path || (path === "" && href === "index.html")) {
      $(this).addClass("is-active");
    }
  });

  // Mobile menu toggle
  $(".nav-toggle").on("click", function () {
    $(".mobile-nav").toggleClass("is-open");
  });

  // Close mobile menu when a link is tapped
  $(".mobile-nav a").on("click", function () {
    $(".mobile-nav").removeClass("is-open");
  });

  // Reveal-on-scroll using IntersectionObserver (with jQuery fallback)
  var $reveal = $(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $reveal.each(function () { io.observe(this); });
  } else {
    $reveal.addClass("is-visible");
  }

  // Contact form -> mailto handoff
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    var name = $("#name").val() || "";
    var email = $("#email").val() || "";
    var message = $("#message").val() || "";
    var subject = encodeURIComponent("Enquiry from " + (name || "website"));
    var body = encodeURIComponent(message + "\n\n— " + name + "\n" + email);
    window.location.href =
      "mailto:Jenphillips85@outlook.com?subject=" + subject + "&body=" + body;
    $("#contact-submit").text("Opening your email…");
  });
});