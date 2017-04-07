'use strict';

jQuery(document).ready(function ($) {
  var $document = $(document),
      $window = $(window),
      $body = $('body'),
      md = new MobileDetect(window.navigator.userAgent);

  // SAME HEIGHT
  function sameHeight(container) {
    var maxHeight = 0,
        $container = $(container);

    $container.each(function () {
      $container.css({ 'height': "" });
      if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $container.height(maxHeight);
  }

  $body.append('<div id="blackout"></div>');

  // Autocomplete search header
  var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
  $("#search-field").autocomplete({
    source: availableTags
  });
  // Autocomplete search header end

  // sound
  // let sound = document.querySelector('.soundBlock');
  // let soundBtn = document.querySelector('.sound-btn');
  // soundBtn.addEventListener("click", (e)=>{
  //   e.preventDefault();
  //   let _this = e.currentTarget;
  //   if (!_this.classList.contains('play')) {
  //     sound.play();
  //     _this.classList.add('play');
  //   } else {
  //     sound.pause();
  //     _this.classList.remove('play')
  //   }
  // },false);
  $('.sound-btn').on('click', function (e) {
    e.preventDefault();
    var _this = e.currentTarget;
    if (!_this.classList.contains('play')) {
      $('.soundBlock').get(0).play();
      _this.classList.add('play');
    } else {
      $('.soundBlock').get(0).pause();
      _this.classList.remove('play');
    }
  });
  // sound end
  $('.description-slider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    arrows: false
  });

  // sliders
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || function (p) {
    return p.toString() === "[object SafariRemoteNotification]";
  }(!window['safari'] || safari.pushNotification);

  if (isSafari && md.mobile() == null) {
    $('.product-container__slider').slick({
      lazyLoad: 'ondemand',
      fade: true,
      cssEase: 'linear'
    });
  } else {
    $('.product-container__slider').slick({
      lazyLoad: 'ondemand'
    });
  }

  $('.product-container__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $(this).parent().find('.currentSlide').text(currentSlide + 1);
  });

  $('.slide-counter').each(function () {
    var total = $(this).parent().find('.product-container__slider figure:not(.slick-cloned)').length;
    $(this).find('.totalSlides').text(total);
  });

  function productSlider() {
    if (md.mobile() == null) {
      $('.slick-prev, .slick-next').hide();
      $('.slider-wraper').hover(function (e) {
        $(this).find('.slide-counter').show();
        $(this).find('.slick-prev, .slick-next').show();
      }, function () {
        $(this).find('.slide-counter').hide();
        $(this).find('.slick-prev, .slick-next').hide();
      });
    } else {
      $('.slide-counter').show();
    }
    // setTimeout(function () {
    //   $('.slider-wraper').css({
    //     opacity: 1
    //   });
    // }, 500);
  }
  productSlider();

  function mobSlider() {
    // $('.mainGrid-block__mob-slider').fadeIn();
    if (md.mobile() !== null) {
      $('.mainGrid-block__mob-slider').addClass('mob-device');
      $('.mainGrid-block__mob-slider').slick({
        dots: true,
        autoplay: 4000,
        responsive: [{
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }]
      });
    }
  };
  mobSlider();

  var setHeight = function setHeight(block) {
    var width = arguments.length <= 1 || arguments[1] === undefined ? 911 : arguments[1];
    var height = arguments.length <= 2 || arguments[2] === undefined ? 480 : arguments[2];
    var setW = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    var $blockW = Math.round($(block).outerWidth());
    var $blockH = Math.round($blockW * height / width);
    if (setW) {
      $(block).css({
        height: $blockH,
        transition: 'height .3s',
        width: $(block).outerWidth() - 30,
        margin: '0 15px'
      });
    } else {
      $(block).css({
        height: $blockH,
        transition: 'height .3s'
      });
    }
  };
  setHeight('.product-container__slider', 555, 370);
  setHeight('.mainGrid-big>.wrap', 555, 370);

  if (md.phone() !== null) {
    setHeight('.hero__container', 300, 365, 1);
  } else {
    setHeight('.hero__container', 1120, 370);
  }

  setTimeout(function () {
    $('.product-container__slider').css({ 'min-height': '1px' });
    $('.mainGrid-big>.wrap').css({ 'min-height': '1px' });
  }, 1000);

  $('.custom-select').select2({
    minimumResultsForSearch: Infinity
  });

  if (md.mobile() !== null && $window.width() < 1024 && $window.width() >= 768) {
    sameHeight('.equalH');
  }

  $window.on('load resize', function () {
    sameHeight('.news-list .product-container__name');
    $('.custom-select').select2({
      minimumResultsForSearch: Infinity
    });
    if (md.mobile() !== null && $window.width() < 1024 && $window.width() >= 768) {
      sameHeight('.equalH');
    } else if (md.mobile() !== null && $window.width() >= 1024) {
      $('.equalH').css({ height: '' });
    }

    equalGallery('.gallery-item');
    if ($window.width() >= 1024) {
      setTimeout(function () {
        equalGallery('.mainGrid-big .wrap');
      }, 100);
    } else if ($window.width() < 1024) {
      $('.mainGrid-big .wrap').css({ height: '' });
    }

    if ($window.width() < 1024 && $window.width() >= 768) {
      sameHeight('.mainGrid-block__item');
    } else if ($window.width() >= 1024) {
      $('.mainGrid-block__item').css({ height: '' });
    }

    if ($window.width() >= 768) {
      $('.sub-menu>a').on('click', function (e) {
        e.preventDefault();
      });
    }
    if ($window.width() < 768 && md.phone() !== null) {
      $('.sub-menu>a').on('click', function (e) {
        e.preventDefault();
        $('.sub-menu__list').not($(this).parent().find('.sub-menu__list')).hide();
        $(this).parent().find('.sub-menu__list').toggle();
        $('.sub-menu>a').not($(this)).removeClass('active');
        $(this).toggleClass('active');
      });
    }
  });

  $window.on('resize', function () {
    setHeight('.product-container__slider', 265, 175);
    setHeight('.mainGrid-big>.wrap', 555, 370);
    if (md.phone() !== null) {
      setHeight('.hero__container', 300, 365);
    } else {
      setHeight('.hero__container', 1120, 370);
    }
  });

  // gallery
  $(".fancybox").fancybox({
    wrapCSS: 'gallery-box'
  });

  $(".gallery-thumb").fancybox({
    wrapCSS: 'gallery-box index-gallery',
    nextEffect: 'none',
    prevEffect: 'none',
    helpers: {
      thumbs: {
        width: 50,
        height: 50
      }
    },
    afterShow: function afterShow() {
      $('.fancybox-wrap').swipe({
        swipe: function swipe(event, direction) {
          if (direction === 'left' || direction === 'up') {
            $.fancybox.prev(direction);
          } else {
            $.fancybox.next(direction);
          }
        }
      });
    },

    afterLoad: function afterLoad() {}
  });
  $(document).on('click', '.popup-trigger-video', function (event) {
    event.preventDefault();
    $.fancybox.open({
      href: $(this).attr('href'),
      type: 'iframe',
      autoSize: false,
      fitToView: false,
      width: '90%',
      height: '90%',
      maxWidth: 800,
      maxHeight: 600,
      wrapCSS: 'gallery-box'
    });
  });

  $('.gallery-trigger').on('click', function (e) {
    e.preventDefault();
    $(this).next().trigger('click');
  });
  $('.gallery-trigger .photo-quantity').text($('.gallery-thumb').length);

  function equalGallery(container) {
    var minH = [],
        minHeight = void 0;

    if ($window.width() >= 1024) {
      $(container).each(function () {
        minH.push($(this).height());
      });
      minHeight = Math.min.apply(null, minH);
      $(container).height(minHeight);
    } else {
      $(container).css({ height: '' });
    }
  };

  // help
  $('.help-trigger').on('click', function (e) {
    e.preventDefault();
    if (!$('#help-block').hasClass('active')) {
      $('#help-block').addClass('active');
    } else {
      $('#help-block').removeClass('active');
    }
  });
  // help end

  // navigation
  $('.burger').on('click', function (e) {
    e.preventDefault();
    $('.header__nav').slideToggle();
    if ($(this).hasClass('cross')) {
      $('.header__search').hide();
    }
    $(this).toggleClass('cross');
  });
  $('.search-trigger').on('click', function (e) {
    e.preventDefault();
    $('.header__search').toggle();
    if ($('.burger').hasClass('cross')) {
      $('.header__search').css({
        top: 50 + $('.header__nav').height()
      });
    } else {
      $('.header__search').css({
        top: 50
      });
    }
  });

  // if($window.width()>=768){
  //   $('.sub-menu>a').on('click', function(e) {
  //     e.preventDefault();
  //   });
  // }


  // filter show
  $('#blackout').on('click', function () {
    if ($('.products-search__filter').hasClass('active')) {
      $('.products-search__filter').removeClass('active').fadeOut();
      $('#blackout').fadeOut();
      $('.show-results-tooltip').hide();
    }
  });
  $('.close-filter').on('click', function (e) {
    e.preventDefault();
    $('.products-search__filter').removeClass('active').fadeOut();
    $('#blackout').fadeOut();
    $('.show-results-tooltip').hide();
    if (md.phone() !== null || $window.width() < 768) {
      $body.removeClass('stop-scroll');
    }
  });
  $('.filter-trigger').on('click', function (e) {
    e.preventDefault();
    if (!$('.products-search__filter').hasClass('active')) {
      $('.products-search__filter').addClass('active').fadeIn();
      $('#blackout').fadeIn();
      if (md.phone() !== null || $window.width() < 768) {
        $body.addClass('stop-scroll');
      }
    } else {
      $('.products-search__filter').removeClass('active').fadeOut();
      $('#blackout').fadeOut();
      if (md.phone() !== null || $window.width() < 768) {
        $body.removeClass('stop-scroll');
      }
    }
  });

  // All Categories
  // if (md.phone()!==null&&$window.width()<768) {
  //   $('.brand-list li:nth-child(6)').nextAll().hide();
  //   $('.categories .categories__list li:nth-child(3)').nextAll().hide();
  //   $('.categories .all').on('click', function(e) {
  //     e.preventDefault();
  //     $('.categories__list li:nth-child(3)').nextAll().fadeIn()
  //   });
  // }

  // select brand
  function brandPopup() {
    $('.select-brand').hide().css({
      position: 'absolute',
      'z-index': 2,
      transition: 'all .4s'
    });
    $('.modal-list .custom').on('click', function () {
      var cords = $(this).offset();
      // console.log(cords);
      var inputW = $(this).outerWidth() + 10;
      if (md.phone() !== null) {
        var mobModalOffset = $(this).parents('.modal-dialog').offset().top;
        console.log(mobModalOffset);
        $('.select-brand').fadeIn().css({
          top: cords.top - mobModalOffset + 12,
          left: cords.left + inputW
        });
      } else {
        $('.select-brand').fadeIn().css({
          top: cords.top,
          left: cords.left + inputW
        });
      }
    });
  };
  brandPopup();

  // label click
  $('.products-search__filter__body__item label').on('click', function () {
    var top = $(this).offset().top - $('.show-results-tooltip').height() / 2,
        left = $(this).offset().left + $(this).outerWidth() + 30;
    if ($(this).find('input').prop('checked')) {
      $(this).addClass('checked');
      setTimeout(function () {
        $('.show-results-tooltip').fadeIn().css({
          top: top,
          left: left
        });
      }, 200);
    } else if (!$(this).find('input').prop('checked')) {
      $(this).removeClass('checked');
      setTimeout(function () {
        $('.show-results-tooltip').hide();
      }, 200);
    }
  });

  // check label
  function checkLabel() {
    // check active
    $('.custom').each(function () {
      if ($(this).find('input').prop('checked')) {
        $(this).addClass('checked');
      }
    });

    $('.custom').on('click', function (e) {
      e.stopPropagation();
      // radio
      if ($(this).find('input').prop('type') === 'radio') {
        if ($(this).find('input').prop('checked')) {
          var sameRadio = $(this).find('input').attr('name');
          $('input[name="' + sameRadio + '"]').parent().not($(this)).removeClass('checked');
          $(this).addClass('checked');
        }
      }
      // checkbox
      else if ($(this).find('input').prop('type') === 'checkbox') {
          if ($(this).find('input').prop('checked')) {
            $(this).addClass('checked');
          } else {
            $(this).removeClass('checked');
          }
        }
    });
  }

  checkLabel();

  // tooltips
  $('.tool').tooltipster({
    trigger: "hover",
    theme: "tooltipster-light"
  });

  $('.tooltiper').tooltipster({
    side: 'bottom',
    trigger: "click",
    maxWidth: 170,
    theme: "tooltipster-light",
    content: $('#tooltip_content'),
    contentCloning: true
  });
  $('.complain').on('click', function (e) {
    e.preventDefault();
  });

  // All brands
  function makeColumns(block, cols) {
    $(block).columnize({ columns: cols });
  }
  if ($window.width() >= 768) {
    makeColumns('.letter-block__brands', 3);
    // makeColumns('.equipment-list',3);
  }
  if ($window.width() >= 1024) {
    // colModal(3);
  }
  if ($window.width() >= 768 && md.tablet() !== null && $window.width() <= 1200) {}
  // colModal(2);


  // function colModal(num) {
  //   // let flag = true;
  //   $('#brandModal').on('shown.bs.modal', function (e) {
  //     makeColumns('.modal-list',num);
  //   });
  //   $('#popupSelectorDialog').on('shown.bs.modal', function (e) {
  //     makeColumns('.modal-list',num);
  //     // if (flag) {
  //     //   flag = false;
  //     // }
  //   });
  // };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCIkZG9jdW1lbnQiLCIkd2luZG93Iiwid2luZG93IiwiJGJvZHkiLCJtZCIsIk1vYmlsZURldGVjdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInNhbWVIZWlnaHQiLCJjb250YWluZXIiLCJtYXhIZWlnaHQiLCIkY29udGFpbmVyIiwiZWFjaCIsImNzcyIsImhlaWdodCIsImFwcGVuZCIsImF2YWlsYWJsZVRhZ3MiLCJhdXRvY29tcGxldGUiLCJzb3VyY2UiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIl90aGlzIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZ2V0IiwicGxheSIsImFkZCIsInBhdXNlIiwicmVtb3ZlIiwic2xpY2siLCJsYXp5TG9hZCIsImRvdHMiLCJhcnJvd3MiLCJpc1NhZmFyaSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIkhUTUxFbGVtZW50IiwiaW5kZXhPZiIsInAiLCJzYWZhcmkiLCJwdXNoTm90aWZpY2F0aW9uIiwibW9iaWxlIiwiZmFkZSIsImNzc0Vhc2UiLCJldmVudCIsImN1cnJlbnRTbGlkZSIsIm5leHRTbGlkZSIsInBhcmVudCIsImZpbmQiLCJ0ZXh0IiwidG90YWwiLCJsZW5ndGgiLCJwcm9kdWN0U2xpZGVyIiwiaGlkZSIsImhvdmVyIiwic2hvdyIsIm1vYlNsaWRlciIsImFkZENsYXNzIiwiYXV0b3BsYXkiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsInNldEhlaWdodCIsImJsb2NrIiwid2lkdGgiLCJzZXRXIiwiJGJsb2NrVyIsIk1hdGgiLCJyb3VuZCIsIm91dGVyV2lkdGgiLCIkYmxvY2tIIiwidHJhbnNpdGlvbiIsIm1hcmdpbiIsInBob25lIiwic2V0VGltZW91dCIsInNlbGVjdDIiLCJtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaCIsIkluZmluaXR5IiwiZXF1YWxHYWxsZXJ5Iiwibm90IiwidG9nZ2xlIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVDbGFzcyIsImZhbmN5Ym94Iiwid3JhcENTUyIsIm5leHRFZmZlY3QiLCJwcmV2RWZmZWN0IiwiaGVscGVycyIsInRodW1icyIsImFmdGVyU2hvdyIsInN3aXBlIiwiZGlyZWN0aW9uIiwicHJldiIsIm5leHQiLCJhZnRlckxvYWQiLCJvcGVuIiwiaHJlZiIsImF0dHIiLCJ0eXBlIiwiYXV0b1NpemUiLCJmaXRUb1ZpZXciLCJtYXhXaWR0aCIsInRyaWdnZXIiLCJtaW5IIiwibWluSGVpZ2h0IiwicHVzaCIsIm1pbiIsImFwcGx5IiwiaGFzQ2xhc3MiLCJzbGlkZVRvZ2dsZSIsInRvcCIsImZhZGVPdXQiLCJmYWRlSW4iLCJicmFuZFBvcHVwIiwicG9zaXRpb24iLCJjb3JkcyIsIm9mZnNldCIsImlucHV0VyIsIm1vYk1vZGFsT2Zmc2V0IiwicGFyZW50cyIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0IiwicHJvcCIsImNoZWNrTGFiZWwiLCJzdG9wUHJvcGFnYXRpb24iLCJzYW1lUmFkaW8iLCJ0b29sdGlwc3RlciIsInRoZW1lIiwic2lkZSIsImNvbnRlbnQiLCJjb250ZW50Q2xvbmluZyIsIm1ha2VDb2x1bW5zIiwiY29scyIsImNvbHVtbml6ZSIsImNvbHVtbnMiLCJ0YWJsZXQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLFFBQVAsRUFBaUJDLEtBQWpCLENBQXVCLFVBQVNDLENBQVQsRUFBWTtBQUNqQyxNQUFNQyxZQUFZRCxFQUFFRixRQUFGLENBQWxCO0FBQUEsTUFDTUksVUFBVUYsRUFBRUcsTUFBRixDQURoQjtBQUFBLE1BRU1DLFFBQVFKLEVBQUUsTUFBRixDQUZkO0FBQUEsTUFHTUssS0FBSyxJQUFJQyxZQUFKLENBQWlCSCxPQUFPSSxTQUFQLENBQWlCQyxTQUFsQyxDQUhYOztBQUtBO0FBQ0Es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QUFDeEJvRSxnQkFBWSx1QkFBWixFQUFvQyxDQUFwQztBQUNBO0FBQ0Q7QUFDRCxNQUFJMUksUUFBUXNFLEtBQVIsTUFBaUIsSUFBckIsRUFBMkI7QUFDekI7QUFDRDtBQUNELE1BQUl0RSxRQUFRc0UsS0FBUixNQUFpQixHQUFqQixJQUFzQm5FLEdBQUcySSxNQUFILE9BQWMsSUFBcEMsSUFBMEM5SSxRQUFRc0UsS0FBUixNQUFpQixJQUEvRCxFQUFxRSxDQUVwRTtBQURDOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRCxDQXJoQkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xyXG4gIGNvbnN0ICRkb2N1bWVudCA9ICQoZG9jdW1lbnQpLFxyXG4gICAgICAgICR3aW5kb3cgPSAkKHdpbmRvdyksXHJcbiAgICAgICAgJGJvZHkgPSAkKCdib2R5JyksXHJcbiAgICAgICAgbWQgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbiAgLy8gU0FNRSBIRUlHSFRcclxuICBmdW5jdGlvbiBzYW1lSGVpZ2h0KGNvbnRhaW5lcikge1xyXG4gICAgbGV0IG1heEhlaWdodCA9IDAsXHJcbiAgICAgICAgJGNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcclxuXHJcbiAgICAkY29udGFpbmVyLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICRjb250YWluZXIuY3NzKHsnaGVpZ2h0JzpcIlwifSk7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhlaWdodCgpPm1heEhlaWdodCkge1xyXG4gICAgICAgIG1heEhlaWdodCA9ICQodGhpcykuaGVpZ2h0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJGNvbnRhaW5lci5oZWlnaHQobWF4SGVpZ2h0KTtcclxuICB9XHJcbiAgXHJcbiAgJGJvZHkuYXBwZW5kKCc8ZGl2IGlkPVwiYmxhY2tvdXRcIj48L2Rpdj4nKTtcclxuXHJcbiAgLy8gQXV0b2NvbXBsZXRlIHNlYXJjaCBoZWFkZXJcclxuICB2YXIgYXZhaWxhYmxlVGFncyA9IFtcclxuXHRcIkFjdGlvblNjcmlwdFwiLFxyXG5cdFwiQXBwbGVTY3JpcHRcIixcclxuXHRcIkFzcFwiLFxyXG5cdFwiQkFTSUNcIixcclxuXHRcIkNcIixcclxuXHRcIkMrK1wiLFxyXG5cdFwiQ2xvanVyZVwiLFxyXG5cdFwiQ09CT0xcIixcclxuXHRcIkNvbGRGdXNpb25cIixcclxuXHRcIkVybGFuZ1wiLFxyXG5cdFwiRm9ydHJhblwiLFxyXG5cdFwiR3Jvb3Z5XCIsXHJcblx0XCJIYXNrZWxsXCIsXHJcblx0XCJKYXZhXCIsXHJcblx0XCJKYXZhU2NyaXB0XCIsXHJcblx0XCJMaXNwXCIsXHJcblx0XCJQZXJsXCIsXHJcblx0XCJQSFBcIixcclxuXHRcIlB5dGhvblwiLFxyXG5cdFwiUnVieVwiLFxyXG5cdFwiU2NhbGFcIixcclxuXHRcIlNjaGVtZVwiXHJcbl07XHJcbiQoIFwiI3NlYXJjaC1maWVsZFwiICkuYXV0b2NvbXBsZXRlKHtcclxuXHRzb3VyY2U6IGF2YWlsYWJsZVRhZ3NcclxufSk7XHJcbiAgLy8gQXV0b2NvbXBsZXRlIHNlYXJjaCBoZWFkZXIgZW5kXHJcblxyXG4vLyBzb3VuZFxyXG4vLyBsZXQgc291bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmRCbG9jaycpO1xyXG4vLyBsZXQgc291bmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc291bmQtYnRuJyk7XHJcbi8vIHNvdW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PntcclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgbGV0IF90aGlzID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4vLyAgIGlmICghX3RoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5JykpIHtcclxuLy8gICAgIHNvdW5kLnBsYXkoKTtcclxuLy8gICAgIF90aGlzLmNsYXNzTGlzdC5hZGQoJ3BsYXknKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgc291bmQucGF1c2UoKTtcclxuLy8gICAgIF90aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXknKVxyXG4vLyAgIH1cclxuLy8gfSxmYWxzZSk7XHJcbiQoJy5zb3VuZC1idG4nKS5vbignY2xpY2snLGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IF90aGlzID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gIGlmICghX3RoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5JykpIHtcclxuICAgICQoJy5zb3VuZEJsb2NrJykuZ2V0KDApLnBsYXkoKTtcclxuICAgIF90aGlzLmNsYXNzTGlzdC5hZGQoJ3BsYXknKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnLnNvdW5kQmxvY2snKS5nZXQoMCkucGF1c2UoKTtcclxuICAgIF90aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXknKVxyXG4gIH1cclxufSk7XHJcbi8vIHNvdW5kIGVuZFxyXG4kKCcuZGVzY3JpcHRpb24tc2xpZGVyJykuc2xpY2soe1xyXG4gIGxhenlMb2FkOiAnb25kZW1hbmQnLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgYXJyb3dzIDogZmFsc2VcclxufSk7XHJcblxyXG4vLyBzbGlkZXJzXHJcbmxldCBpc1NhZmFyaSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cuSFRNTEVsZW1lbnQpLmluZGV4T2YoJ0NvbnN0cnVjdG9yJykgPiAwIHx8IChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC50b1N0cmluZygpID09PSBcIltvYmplY3QgU2FmYXJpUmVtb3RlTm90aWZpY2F0aW9uXVwiOyB9KSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbik7XHJcblxyXG5pZiAoaXNTYWZhcmkmJm1kLm1vYmlsZSgpPT1udWxsKSB7XHJcbiAgJCgnLnByb2R1Y3QtY29udGFpbmVyX19zbGlkZXInKS5zbGljayh7XHJcbiAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgICBjc3NFYXNlOiAnbGluZWFyJ1xyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gICQoJy5wcm9kdWN0LWNvbnRhaW5lcl9fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXHJcbiAgfSk7XHJcbn1cclxuXHJcbiQoJy5wcm9kdWN0LWNvbnRhaW5lcl9fc2xpZGVyJykub24oJ2FmdGVyQ2hhbmdlJywgZnVuY3Rpb24oZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSl7XHJcbiAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuY3VycmVudFNsaWRlJykudGV4dChjdXJyZW50U2xpZGUrMSk7XHJcbn0pO1xyXG5cclxuJCgnLnNsaWRlLWNvdW50ZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgdG90YWwgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5wcm9kdWN0LWNvbnRhaW5lcl9fc2xpZGVyIGZpZ3VyZTpub3QoLnNsaWNrLWNsb25lZCknKS5sZW5ndGg7XHJcbiAgJCh0aGlzKS5maW5kKCcudG90YWxTbGlkZXMnKS50ZXh0KHRvdGFsKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBwcm9kdWN0U2xpZGVyKCkge1xyXG4gIGlmIChtZC5tb2JpbGUoKT09bnVsbCkge1xyXG4gICAgJCgnLnNsaWNrLXByZXYsIC5zbGljay1uZXh0JykuaGlkZSgpO1xyXG4gICAgJCgnLnNsaWRlci13cmFwZXInKS5ob3ZlcihmdW5jdGlvbiAoZSkge1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJy5zbGlkZS1jb3VudGVyJykuc2hvdygpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJy5zbGljay1wcmV2LCAuc2xpY2stbmV4dCcpLnNob3coKTtcclxuICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuc2xpZGUtY291bnRlcicpLmhpZGUoKTtcclxuICAgICAgJCh0aGlzKS5maW5kKCcuc2xpY2stcHJldiwgLnNsaWNrLW5leHQnKS5oaWRlKCk7XHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcuc2xpZGUtY291bnRlcicpLnNob3coKTtcclxuICB9XHJcbiAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAkKCcuc2xpZGVyLXdyYXBlcicpLmNzcyh7XHJcbiAgLy8gICAgIG9wYWNpdHk6IDFcclxuICAvLyAgIH0pO1xyXG4gIC8vIH0sIDUwMCk7XHJcbn1cclxucHJvZHVjdFNsaWRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBtb2JTbGlkZXIoKSB7XHJcbiAgICAvLyAkKCcubWFpbkdyaWQtYmxvY2tfX21vYi1zbGlkZXInKS5mYWRlSW4oKTtcclxuICAgIGlmIChtZC5tb2JpbGUoKSE9PW51bGwpIHtcclxuICAgICAgJCgnLm1haW5HcmlkLWJsb2NrX19tb2Itc2xpZGVyJykuYWRkQ2xhc3MoJ21vYi1kZXZpY2UnKTtcclxuICAgICAgJCgnLm1haW5HcmlkLWJsb2NrX19tb2Itc2xpZGVyJykuc2xpY2soe1xyXG4gICAgICAgIGRvdHMgOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5IDogNDAwMCxcclxuICAgICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBtb2JTbGlkZXIoKTtcclxuXHJcbiAgbGV0IHNldEhlaWdodCA9IChibG9jayx3aWR0aD05MTEsaGVpZ2h0PTQ4MCxzZXRXPTApPT57XHJcbiAgICBsZXQgJGJsb2NrVyA9IE1hdGgucm91bmQoJChibG9jaykub3V0ZXJXaWR0aCgpKTtcclxuICAgIGxldCAkYmxvY2tIID0gTWF0aC5yb3VuZCgkYmxvY2tXKmhlaWdodC93aWR0aCk7XHJcbiAgICBpZiAoc2V0Vykge1xyXG4gICAgICAkKGJsb2NrKS5jc3Moe1xyXG4gICAgICAgIGhlaWdodCA6ICRibG9ja0gsXHJcbiAgICAgICAgdHJhbnNpdGlvbiA6ICdoZWlnaHQgLjNzJyxcclxuICAgICAgICB3aWR0aCA6ICQoYmxvY2spLm91dGVyV2lkdGgoKS0zMCxcclxuICAgICAgICBtYXJnaW4gOiAnMCAxNXB4J1xyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChibG9jaykuY3NzKHtcclxuICAgICAgICBoZWlnaHQgOiAkYmxvY2tILFxyXG4gICAgICAgIHRyYW5zaXRpb24gOiAnaGVpZ2h0IC4zcydcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9O1xyXG4gIHNldEhlaWdodCgnLnByb2R1Y3QtY29udGFpbmVyX19zbGlkZXInLDU1NSwzNzApO1xyXG4gIHNldEhlaWdodCgnLm1haW5HcmlkLWJpZz4ud3JhcCcsNTU1LDM3MCk7XHJcblxyXG4gIGlmIChtZC5waG9uZSgpIT09bnVsbCkge1xyXG4gICAgc2V0SGVpZ2h0KCcuaGVyb19fY29udGFpbmVyJywzMDAsMzY1LDEpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRIZWlnaHQoJy5oZXJvX19jb250YWluZXInLDExMjAsMzcwKTtcclxuICB9XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnByb2R1Y3QtY29udGFpbmVyX19zbGlkZXInKS5jc3MoeydtaW4taGVpZ2h0JzonMXB4J30pO1xyXG4gICAgJCgnLm1haW5HcmlkLWJpZz4ud3JhcCcpLmNzcyh7J21pbi1oZWlnaHQnOicxcHgnfSk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG4gICQoJy5jdXN0b20tc2VsZWN0Jykuc2VsZWN0Mih7XHJcbiAgICAgIG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eSxcclxuICB9KTtcclxuXHJcbiAgaWYobWQubW9iaWxlKCkhPT1udWxsJiYkd2luZG93LndpZHRoKCk8MTAyNCYmJHdpbmRvdy53aWR0aCgpPj03Njgpe1xyXG4gICAgc2FtZUhlaWdodCgnLmVxdWFsSCcpO1xyXG4gIH1cclxuXHJcbiAgJHdpbmRvdy5vbignbG9hZCByZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzYW1lSGVpZ2h0KCcubmV3cy1saXN0IC5wcm9kdWN0LWNvbnRhaW5lcl9fbmFtZScpO1xyXG4gICAgJCgnLmN1c3RvbS1zZWxlY3QnKS5zZWxlY3QyKHtcclxuICAgICAgICBtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHksXHJcbiAgICB9KTtcclxuICAgIGlmKG1kLm1vYmlsZSgpIT09bnVsbCYmJHdpbmRvdy53aWR0aCgpPDEwMjQmJiR3aW5kb3cud2lkdGgoKT49NzY4KXtcclxuICAgICAgc2FtZUhlaWdodCgnLmVxdWFsSCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihtZC5tb2JpbGUoKSE9PW51bGwmJiR3aW5kb3cud2lkdGgoKT49MTAyNCl7XHJcbiAgICAgICQoJy5lcXVhbEgnKS5jc3Moe2hlaWdodDonJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWFsR2FsbGVyeSgnLmdhbGxlcnktaXRlbScpO1xyXG4gICAgaWYgKCR3aW5kb3cud2lkdGgoKT49MTAyNCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBlcXVhbEdhbGxlcnkoJy5tYWluR3JpZC1iaWcgLndyYXAnKTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgIH0gZWxzZSBpZiAoJHdpbmRvdy53aWR0aCgpPDEwMjQpIHtcclxuICAgICAgJCgnLm1haW5HcmlkLWJpZyAud3JhcCcpLmNzcyh7aGVpZ2h0OicnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCR3aW5kb3cud2lkdGgoKTwxMDI0JiYkd2luZG93LndpZHRoKCk+PTc2OCkge1xyXG4gICAgICBzYW1lSGVpZ2h0KCcubWFpbkdyaWQtYmxvY2tfX2l0ZW0nKTtcclxuICAgIH0gZWxzZSBpZiAoJHdpbmRvdy53aWR0aCgpPj0xMDI0KSB7XHJcbiAgICAgICQoJy5tYWluR3JpZC1ibG9ja19faXRlbScpLmNzcyh7aGVpZ2h0OicnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoJHdpbmRvdy53aWR0aCgpPj03Njgpe1xyXG4gICAgICAkKCcuc3ViLW1lbnU+YScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYoJHdpbmRvdy53aWR0aCgpPDc2OCYmbWQucGhvbmUoKSE9PW51bGwpe1xyXG4gICAgICAkKCcuc3ViLW1lbnU+YScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLnN1Yi1tZW51X19saXN0Jykubm90KCQodGhpcykucGFyZW50KCkuZmluZCgnLnN1Yi1tZW51X19saXN0JykpLmhpZGUoKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zdWItbWVudV9fbGlzdCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgICQoJy5zdWItbWVudT5hJykubm90KCQodGhpcykpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICR3aW5kb3cub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHNldEhlaWdodCgnLnByb2R1Y3QtY29udGFpbmVyX19zbGlkZXInLDI2NSwxNzUpO1xyXG4gICAgc2V0SGVpZ2h0KCcubWFpbkdyaWQtYmlnPi53cmFwJyw1NTUsMzcwKTtcclxuICAgIGlmIChtZC5waG9uZSgpIT09bnVsbCkge1xyXG4gICAgICBzZXRIZWlnaHQoJy5oZXJvX19jb250YWluZXInLDMwMCwzNjUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SGVpZ2h0KCcuaGVyb19fY29udGFpbmVyJywxMTIwLDM3MCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGdhbGxlcnlcclxuICAkKFwiLmZhbmN5Ym94XCIpLmZhbmN5Ym94KHtcclxuICAgIHdyYXBDU1M6ICdnYWxsZXJ5LWJveCdcclxuICB9KTtcclxuXHJcbiAgJChcIi5nYWxsZXJ5LXRodW1iXCIpLmZhbmN5Ym94KHtcclxuICAgIHdyYXBDU1M6ICdnYWxsZXJ5LWJveCBpbmRleC1nYWxsZXJ5JyxcclxuICAgIG5leHRFZmZlY3Q6ICdub25lJyxcclxuICAgIHByZXZFZmZlY3Q6ICdub25lJyxcclxuXHRcdGhlbHBlcnNcdDoge1xyXG5cdFx0XHR0aHVtYnNcdDoge1xyXG5cdFx0XHRcdHdpZHRoXHQ6IDUwLFxyXG5cdFx0XHRcdGhlaWdodFx0OiA1MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG4gICAgYWZ0ZXJTaG93OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmZhbmN5Ym94LXdyYXAnKS5zd2lwZSh7XHJcbiAgICAgICAgICAgICAgICBzd2lwZSA6IGZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcgfHwgZGlyZWN0aW9uID09PSAndXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3gucHJldiggZGlyZWN0aW9uICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5uZXh0KCBkaXJlY3Rpb24gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZnRlckxvYWQgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB9XHJcblx0fSk7XHJcbiAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5wb3B1cC10cmlnZ2VyLXZpZGVvJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkLmZhbmN5Ym94Lm9wZW4oe1xyXG4gICAgICAgIGhyZWY6ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgIHR5cGU6ICdpZnJhbWUnLFxyXG4gICAgICAgIGF1dG9TaXplOiBmYWxzZSxcclxuICAgICAgICBmaXRUb1ZpZXc6IGZhbHNlLFxyXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICBoZWlnaHQ6ICc5MCUnLFxyXG4gICAgICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiA2MDAsXHJcbiAgICAgICAgd3JhcENTUzogJ2dhbGxlcnktYm94J1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmdhbGxlcnktdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKHRoaXMpLm5leHQoKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gIH0pO1xyXG4gICQoJy5nYWxsZXJ5LXRyaWdnZXIgLnBob3RvLXF1YW50aXR5JykudGV4dCgkKCcuZ2FsbGVyeS10aHVtYicpLmxlbmd0aCk7XHJcblxyXG4gIGZ1bmN0aW9uIGVxdWFsR2FsbGVyeShjb250YWluZXIpIHtcclxuICAgIGxldCBtaW5IID0gW10sXHJcbiAgICAgICAgbWluSGVpZ2h0O1xyXG5cclxuICAgIGlmICgkd2luZG93LndpZHRoKCk+PTEwMjQpIHtcclxuICAgICAgJChjb250YWluZXIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1pbkgucHVzaCgkKHRoaXMpLmhlaWdodCgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG1pbkhlaWdodCA9IE1hdGgubWluLmFwcGx5KG51bGwsIG1pbkgpO1xyXG4gICAgICAkKGNvbnRhaW5lcikuaGVpZ2h0KG1pbkhlaWdodCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKGNvbnRhaW5lcikuY3NzKHtoZWlnaHQ6Jyd9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBoZWxwXHJcbiAgJCgnLmhlbHAtdHJpZ2dlcicpLm9uKCdjbGljaycsKGUpPT57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoISQoJyNoZWxwLWJsb2NrJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJyNoZWxwLWJsb2NrJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnI2hlbHAtYmxvY2snKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG4gIC8vIGhlbHAgZW5kXHJcblxyXG4gIC8vIG5hdmlnYXRpb25cclxuICAkKCcuYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgJCgnLmhlYWRlcl9fbmF2Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2Nyb3NzJykpe1xyXG4gICAgICAkKCcuaGVhZGVyX19zZWFyY2gnKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjcm9zcycpO1xyXG4gIH0pO1xyXG4gICQoJy5zZWFyY2gtdHJpZ2dlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICQoJy5oZWFkZXJfX3NlYXJjaCcpLnRvZ2dsZSgpO1xyXG4gICAgaWYgKCQoJy5idXJnZXInKS5oYXNDbGFzcygnY3Jvc3MnKSkge1xyXG4gICAgICAkKCcuaGVhZGVyX19zZWFyY2gnKS5jc3Moe1xyXG4gICAgICAgIHRvcDogNTArJCgnLmhlYWRlcl9fbmF2JykuaGVpZ2h0KCksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgJCgnLmhlYWRlcl9fc2VhcmNoJykuY3NzKHtcclxuICAgICAgICB0b3A6IDUwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gaWYoJHdpbmRvdy53aWR0aCgpPj03Njgpe1xyXG4gIC8vICAgJCgnLnN1Yi1tZW51PmEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcblxyXG4gIC8vIGZpbHRlciBzaG93XHJcbiAgJCgnI2JsYWNrb3V0Jykub24oJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCgnLnByb2R1Y3RzLXNlYXJjaF9fZmlsdGVyJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0cy1zZWFyY2hfX2ZpbHRlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5mYWRlT3V0KCk7XHJcbiAgICAgICQoJyNibGFja291dCcpLmZhZGVPdXQoKTtcclxuICAgICAgJCgnLnNob3ctcmVzdWx0cy10b29sdGlwJykuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5jbG9zZS1maWx0ZXInKS5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAkKCcucHJvZHVjdHMtc2VhcmNoX19maWx0ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZmFkZU91dCgpO1xyXG4gICAgJCgnI2JsYWNrb3V0JykuZmFkZU91dCgpO1xyXG4gICAgJCgnLnNob3ctcmVzdWx0cy10b29sdGlwJykuaGlkZSgpO1xyXG4gICAgaWYgKG1kLnBob25lKCkhPT1udWxsfHwkd2luZG93LndpZHRoKCk8NzY4KSB7XHJcbiAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdzdG9wLXNjcm9sbCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5maWx0ZXItdHJpZ2dlcicpLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghJCgnLnByb2R1Y3RzLXNlYXJjaF9fZmlsdGVyJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5wcm9kdWN0cy1zZWFyY2hfX2ZpbHRlcicpLmFkZENsYXNzKCdhY3RpdmUnKS5mYWRlSW4oKTtcclxuICAgICAgJCgnI2JsYWNrb3V0JykuZmFkZUluKCk7XHJcbiAgICAgIGlmIChtZC5waG9uZSgpIT09bnVsbHx8JHdpbmRvdy53aWR0aCgpPDc2OCkge1xyXG4gICAgICAgICRib2R5LmFkZENsYXNzKCdzdG9wLXNjcm9sbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICAkKCcucHJvZHVjdHMtc2VhcmNoX19maWx0ZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJykuZmFkZU91dCgpO1xyXG4gICAgICAkKCcjYmxhY2tvdXQnKS5mYWRlT3V0KCk7XHJcbiAgICAgIGlmIChtZC5waG9uZSgpIT09bnVsbHx8JHdpbmRvdy53aWR0aCgpPDc2OCkge1xyXG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdzdG9wLXNjcm9sbCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFsbCBDYXRlZ29yaWVzXHJcbiAgLy8gaWYgKG1kLnBob25lKCkhPT1udWxsJiYkd2luZG93LndpZHRoKCk8NzY4KSB7XHJcbiAgLy8gICAkKCcuYnJhbmQtbGlzdCBsaTpudGgtY2hpbGQoNiknKS5uZXh0QWxsKCkuaGlkZSgpO1xyXG4gIC8vICAgJCgnLmNhdGVnb3JpZXMgLmNhdGVnb3JpZXNfX2xpc3QgbGk6bnRoLWNoaWxkKDMpJykubmV4dEFsbCgpLmhpZGUoKTtcclxuICAvLyAgICQoJy5jYXRlZ29yaWVzIC5hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgICAgJCgnLmNhdGVnb3JpZXNfX2xpc3QgbGk6bnRoLWNoaWxkKDMpJykubmV4dEFsbCgpLmZhZGVJbigpXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIC8vIHNlbGVjdCBicmFuZFxyXG4gIGZ1bmN0aW9uIGJyYW5kUG9wdXAoKSB7XHJcbiAgICAkKCcuc2VsZWN0LWJyYW5kJykuaGlkZSgpLmNzcyh7XHJcbiAgICAgIHBvc2l0aW9uOidhYnNvbHV0ZScsXHJcbiAgICAgICd6LWluZGV4JzoyLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIC40cydcclxuICAgIH0pO1xyXG4gICAgJCgnLm1vZGFsLWxpc3QgLmN1c3RvbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgY29yZHMgPSAkKHRoaXMpLm9mZnNldCgpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhjb3Jkcyk7XHJcbiAgICAgIGxldCBpbnB1dFcgPSAkKHRoaXMpLm91dGVyV2lkdGgoKSsxMDtcclxuICAgICAgaWYgKG1kLnBob25lKCkhPT1udWxsKSB7XHJcbiAgICAgICAgbGV0IG1vYk1vZGFsT2Zmc2V0ID0gJCh0aGlzKS5wYXJlbnRzKCcubW9kYWwtZGlhbG9nJykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vYk1vZGFsT2Zmc2V0KTtcclxuICAgICAgICAkKCcuc2VsZWN0LWJyYW5kJykuZmFkZUluKCkuY3NzKHtcclxuICAgICAgICAgIHRvcDogY29yZHMudG9wLShtb2JNb2RhbE9mZnNldCkrMTIsXHJcbiAgICAgICAgICBsZWZ0OiBjb3Jkcy5sZWZ0K2lucHV0V1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJy5zZWxlY3QtYnJhbmQnKS5mYWRlSW4oKS5jc3Moe1xyXG4gICAgICAgICAgdG9wOiBjb3Jkcy50b3AsXHJcbiAgICAgICAgICBsZWZ0OiBjb3Jkcy5sZWZ0K2lucHV0V1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGJyYW5kUG9wdXAoKTtcclxuXHJcbiAgLy8gbGFiZWwgY2xpY2tcclxuICAkKCcucHJvZHVjdHMtc2VhcmNoX19maWx0ZXJfX2JvZHlfX2l0ZW0gbGFiZWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCB0b3AgPSAkKHRoaXMpLm9mZnNldCgpLnRvcC0oJCgnLnNob3ctcmVzdWx0cy10b29sdGlwJykuaGVpZ2h0KCkvMiksXHJcbiAgICAgICAgbGVmdCA9ICQodGhpcykub2Zmc2V0KCkubGVmdCskKHRoaXMpLm91dGVyV2lkdGgoKSszMDtcclxuICAgIGlmICgkKHRoaXMpLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnNob3ctcmVzdWx0cy10b29sdGlwJykuZmFkZUluKCkuY3NzKHtcclxuICAgICAgICAgIHRvcDp0b3AsXHJcbiAgICAgICAgICBsZWZ0OmxlZnRcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgIH0gZWxzZSBpZighJCh0aGlzKS5maW5kKCdpbnB1dCcpLnByb3AoJ2NoZWNrZWQnKSl7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCgnLnNob3ctcmVzdWx0cy10b29sdGlwJykuaGlkZSgpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBjaGVjayBsYWJlbFxyXG4gIGZ1bmN0aW9uIGNoZWNrTGFiZWwoKSB7XHJcbiAgICAvLyBjaGVjayBhY3RpdmVcclxuICAgICQoJy5jdXN0b20nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKCQodGhpcykuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICQoJy5jdXN0b20nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIC8vIHJhZGlvXHJcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ2lucHV0JykucHJvcCgndHlwZScpPT09J3JhZGlvJykge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICBsZXQgc2FtZVJhZGlvID0gJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ25hbWUnKTtcclxuICAgICAgICAgICQoJ2lucHV0W25hbWU9XCInK3NhbWVSYWRpbysnXCJdJykucGFyZW50KCkubm90KCQodGhpcykpLnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIGNoZWNrYm94XHJcbiAgICAgIGVsc2UgaWYgKCQodGhpcykuZmluZCgnaW5wdXQnKS5wcm9wKCd0eXBlJyk9PT0nY2hlY2tib3gnKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJykpIHtcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tMYWJlbCgpO1xyXG5cclxuICAvLyB0b29sdGlwc1xyXG4gICQoJy50b29sJykudG9vbHRpcHN0ZXIoe1xyXG4gICB0cmlnZ2VyOlwiaG92ZXJcIixcclxuICAgdGhlbWU6IFwidG9vbHRpcHN0ZXItbGlnaHRcIlxyXG4gfSk7XHJcblxyXG4gICQoJy50b29sdGlwZXInKS50b29sdGlwc3Rlcih7XHJcbiAgICBzaWRlOiAgJ2JvdHRvbScsXHJcbiAgIHRyaWdnZXI6XCJjbGlja1wiLFxyXG4gICBtYXhXaWR0aDogMTcwLFxyXG4gICB0aGVtZTogXCJ0b29sdGlwc3Rlci1saWdodFwiLFxyXG4gICBjb250ZW50OiAkKCcjdG9vbHRpcF9jb250ZW50JyksXHJcbiAgIGNvbnRlbnRDbG9uaW5nOiB0cnVlLFxyXG4gfSk7XHJcbiAkKCcuY29tcGxhaW4nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiB9KTtcclxuXHJcbiAgLy8gQWxsIGJyYW5kc1xyXG4gIGZ1bmN0aW9uIG1ha2VDb2x1bW5zKGJsb2NrLGNvbHMpIHtcclxuICAgICQoYmxvY2spLmNvbHVtbml6ZSh7IGNvbHVtbnM6IGNvbHMgfSk7XHJcbiAgfVxyXG4gIGlmICgkd2luZG93LndpZHRoKCk+PTc2OCkge1xyXG4gICAgbWFrZUNvbHVtbnMoJy5sZXR0ZXItYmxvY2tfX2JyYW5kcycsMyk7XHJcbiAgICAvLyBtYWtlQ29sdW1ucygnLmVxdWlwbWVudC1saXN0JywzKTtcclxuICB9XHJcbiAgaWYgKCR3aW5kb3cud2lkdGgoKT49MTAyNCkge1xyXG4gICAgLy8gY29sTW9kYWwoMyk7XHJcbiAgfVxyXG4gIGlmICgkd2luZG93LndpZHRoKCk+PTc2OCYmbWQudGFibGV0KCkhPT1udWxsJiYkd2luZG93LndpZHRoKCk8PTEyMDApIHtcclxuICAgIC8vIGNvbE1vZGFsKDIpO1xyXG4gIH1cclxuXHJcbiAgLy8gZnVuY3Rpb24gY29sTW9kYWwobnVtKSB7XHJcbiAgLy8gICAvLyBsZXQgZmxhZyA9IHRydWU7XHJcbiAgLy8gICAkKCcjYnJhbmRNb2RhbCcpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgLy8gICAgIG1ha2VDb2x1bW5zKCcubW9kYWwtbGlzdCcsbnVtKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vICAgJCgnI3BvcHVwU2VsZWN0b3JEaWFsb2cnKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gIC8vICAgICBtYWtlQ29sdW1ucygnLm1vZGFsLWxpc3QnLG51bSk7XHJcbiAgLy8gICAgIC8vIGlmIChmbGFnKSB7XHJcbiAgLy8gICAgIC8vICAgZmxhZyA9IGZhbHNlO1xyXG4gIC8vICAgICAvLyB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG5cclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
