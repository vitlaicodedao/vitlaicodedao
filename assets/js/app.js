// Template Name: Infinity Multi
// Template URL: https://techpedia.co.uk/template/infinity-multi
// Description: Infinity Multi HTML Template
// Version: 1.0.0

(function (window, document, $, undefined) {
  "use strict";
  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.initializeSlick();
      Init.hamburgerMenu();
      Init.formValidation();
      Init.contactForm();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () {
        $("#preloader").hide("slow");
      }, 2000);
    },

    initializeSlick: function (e) {
      if ($(".client-slider").length) {
        $(".client-slider").slick({
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 2,
          arrows: false,
          autoplay: true,
          cssEase: "linear",
          autoplaySpeed: 3000,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        });
      }
    },
    hamburgerMenu: function () {
      if ($(".hamburger-menu").length) {
        $(".hamburger-menu").on("click", function () {
          $(".bar").toggleClass("animate");
          $(".mobile-navar").toggleClass("active");
          return false;
        });

        $(".has-children").on("click", function (e) {
          e.stopPropagation();

          $(this).children("ul").slideToggle("slow", "swing");
          $(".icon-arrow", this).toggleClass("open");

          if ($(".mobile-navar.active").length) {
            $(".bar").removeClass("animate");
            $(".mobile-navar").removeClass("active");
          }
        });
        $(".menu-item").on("click", function () {
          if ($(".mobile-navar.active").length) {
            $(".bar").removeClass("animate");
            $(".mobile-navar").removeClass("active");
          }
        });
      }
    },
    formValidation: function () {
      if ($(".contact-form").length) {
        $(".contact-form").validate();
      }
    },
    contactForm: function () {
      const form = document.getElementsByClassName("contact-form")[0];
      $(".contact-form").on("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
          method: "POST",
          body: data,
        }).then(() => {
          alert("Sent To MichaelDev! Thanks!");
          window.location.reload();
        });
      });
    },
  };
  Init.i();
})(window, document, jQuery);
