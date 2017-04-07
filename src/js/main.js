jQuery(document).ready(function($) {
  const $document = $(document),
        $window = $(window),
        $body = $('body'),
        md = new MobileDetect(window.navigator.userAgent);

  // SAME HEIGHT
  function sameHeight(container) {
    let maxHeight = 0,
        $container = $(container);

    $container.each(function() {
      $container.css({'height':""});
      if ($(this).height()>maxHeight) {
        maxHeight = $(this).height();
      }
    });
    $container.height(maxHeight);
  }
  
  $body.append('<div id="blackout"></div>');

  // Autocomplete search header
  var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#search-field" ).autocomplete({
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
$('.sound-btn').on('click',function(e) {
  e.preventDefault();
  let _this = e.currentTarget;
  if (!_this.classList.contains('play')) {
    $('.soundBlock').get(0).play();
    _this.classList.add('play');
  } else {
    $('.soundBlock').get(0).pause();
    _this.classList.remove('play')
  }
});
// sound end
$('.description-slider').slick({
  lazyLoad: 'ondemand',
  dots: true,
  arrows : false
});

// sliders
let isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

if (isSafari&&md.mobile()==null) {
  $('.product-container__slider').slick({
    lazyLoad: 'ondemand',
    fade: true,
    cssEase: 'linear'
  });
} else {
  $('.product-container__slider').slick({
    lazyLoad: 'ondemand',
  });
}

$('.product-container__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  $(this).parent().find('.currentSlide').text(currentSlide+1);
});

$('.slide-counter').each(function () {
  let total = $(this).parent().find('.product-container__slider figure:not(.slick-cloned)').length;
  $(this).find('.totalSlides').text(total);
});

function productSlider() {
  if (md.mobile()==null) {
    $('.slick-prev, .slick-next').hide();
    $('.slider-wraper').hover(function (e) {
      $(this).find('.slide-counter').show();
      $(this).find('.slick-prev, .slick-next').show();
    }, function () {
      $(this).find('.slide-counter').hide();
      $(this).find('.slick-prev, .slick-next').hide();
    })
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
    if (md.mobile()!==null) {
      $('.mainGrid-block__mob-slider').addClass('mob-device');
      $('.mainGrid-block__mob-slider').slick({
        dots : true,
        autoplay : 4000,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        ]
      });
    }
  };
  mobSlider();

  let setHeight = (block,width=911,height=480,setW=0)=>{
    let $blockW = Math.round($(block).outerWidth());
    let $blockH = Math.round($blockW*height/width);
    if (setW) {
      $(block).css({
        height : $blockH,
        transition : 'height .3s',
        width : $(block).outerWidth()-30,
        margin : '0 15px'
      })
    } else {
      $(block).css({
        height : $blockH,
        transition : 'height .3s'
      })
    }
  };
  setHeight('.product-container__slider',555,370);
  setHeight('.mainGrid-big>.wrap',555,370);

  if (md.phone()!==null) {
    setHeight('.hero__container',300,365,1);
  } else {
    setHeight('.hero__container',1120,370);
  }

  setTimeout(function () {
    $('.product-container__slider').css({'min-height':'1px'});
    $('.mainGrid-big>.wrap').css({'min-height':'1px'});
  }, 1000);

  $('.custom-select').select2({
      minimumResultsForSearch: Infinity,
  });

  if(md.mobile()!==null&&$window.width()<1024&&$window.width()>=768){
    sameHeight('.equalH');
  }

  $window.on('load resize', function () {
    sameHeight('.news-list .product-container__name');
    $('.custom-select').select2({
        minimumResultsForSearch: Infinity,
    });
    if(md.mobile()!==null&&$window.width()<1024&&$window.width()>=768){
      sameHeight('.equalH');
    }
    else if(md.mobile()!==null&&$window.width()>=1024){
      $('.equalH').css({height:''});
    }

    equalGallery('.gallery-item');
    if ($window.width()>=1024) {
      setTimeout(function () {
        equalGallery('.mainGrid-big .wrap');
      }, 100);
    } else if ($window.width()<1024) {
      $('.mainGrid-big .wrap').css({height:''});
    }

    if ($window.width()<1024&&$window.width()>=768) {
      sameHeight('.mainGrid-block__item');
    } else if ($window.width()>=1024) {
      $('.mainGrid-block__item').css({height:''});
    }

    if($window.width()>=768){
      $('.sub-menu>a').on('click', function(e) {
        e.preventDefault();
      });
    }
    if($window.width()<768&&md.phone()!==null){
      $('.sub-menu>a').on('click', function(e) {
        e.preventDefault();
        $('.sub-menu__list').not($(this).parent().find('.sub-menu__list')).hide();
        $(this).parent().find('.sub-menu__list').toggle();
        $('.sub-menu>a').not($(this)).removeClass('active');
        $(this).toggleClass('active');
      });
    }
  });

  $window.on('resize', function () {
    setHeight('.product-container__slider',265,175);
    setHeight('.mainGrid-big>.wrap',555,370);
    if (md.phone()!==null) {
      setHeight('.hero__container',300,365);
    } else {
      setHeight('.hero__container',1120,370);
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
		helpers	: {
			thumbs	: {
				width	: 50,
				height	: 50
			}
		},
    afterShow: function() {
            $('.fancybox-wrap').swipe({
                swipe : function(event, direction) {
                    if (direction === 'left' || direction === 'up') {
                        $.fancybox.prev( direction );
                    } else {
                        $.fancybox.next( direction );
                    }
                }
            });

        },

        afterLoad : function() {
        }
	});
  $(document).on('click', '.popup-trigger-video', function(event) {
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
    let minH = [],
        minHeight;

    if ($window.width()>=1024) {
      $(container).each(function () {
        minH.push($(this).height());
      });
      minHeight = Math.min.apply(null, minH);
      $(container).height(minHeight);
    } else {
      $(container).css({height:''});
    }
  };

  // help
  $('.help-trigger').on('click',(e)=>{
    e.preventDefault();
    if (!$('#help-block').hasClass('active')) {
      $('#help-block').addClass('active');
    } else {
      $('#help-block').removeClass('active');
    }

  });
  // help end

  // navigation
  $('.burger').on('click', function(e) {
    e.preventDefault();
    $('.header__nav').slideToggle();
    if($(this).hasClass('cross')){
      $('.header__search').hide();
    }
    $(this).toggleClass('cross');
  });
  $('.search-trigger').on('click', function(e) {
    e.preventDefault();
    $('.header__search').toggle();
    if ($('.burger').hasClass('cross')) {
      $('.header__search').css({
        top: 50+$('.header__nav').height(),
      });
    }
    else{
      $('.header__search').css({
        top: 50,
      });
    }
  });

  // if($window.width()>=768){
  //   $('.sub-menu>a').on('click', function(e) {
  //     e.preventDefault();
  //   });
  // }


  // filter show
  $('#blackout').on('click',function () {
    if ($('.products-search__filter').hasClass('active')) {
      $('.products-search__filter').removeClass('active').fadeOut();
      $('#blackout').fadeOut();
      $('.show-results-tooltip').hide();
    }
  });
  $('.close-filter').on('click',function (e) {
    e.preventDefault();
    $('.products-search__filter').removeClass('active').fadeOut();
    $('#blackout').fadeOut();
    $('.show-results-tooltip').hide();
    if (md.phone()!==null||$window.width()<768) {
      $body.removeClass('stop-scroll');
    }
  });
  $('.filter-trigger').on('click',function (e) {
    e.preventDefault();
    if (!$('.products-search__filter').hasClass('active')) {
      $('.products-search__filter').addClass('active').fadeIn();
      $('#blackout').fadeIn();
      if (md.phone()!==null||$window.width()<768) {
        $body.addClass('stop-scroll');
      }
    }
    else{
      $('.products-search__filter').removeClass('active').fadeOut();
      $('#blackout').fadeOut();
      if (md.phone()!==null||$window.width()<768) {
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
      position:'absolute',
      'z-index':2,
      transition: 'all .4s'
    });
    $('.modal-list .custom').on('click', function() {
      let cords = $(this).offset();
      // console.log(cords);
      let inputW = $(this).outerWidth()+10;
      if (md.phone()!==null) {
        let mobModalOffset = $(this).parents('.modal-dialog').offset().top;
        console.log(mobModalOffset);
        $('.select-brand').fadeIn().css({
          top: cords.top-(mobModalOffset)+12,
          left: cords.left+inputW
        });
      } else {
        $('.select-brand').fadeIn().css({
          top: cords.top,
          left: cords.left+inputW
        });
      }
    });
  };
  brandPopup();

  // label click
  $('.products-search__filter__body__item label').on('click', function() {
    let top = $(this).offset().top-($('.show-results-tooltip').height()/2),
        left = $(this).offset().left+$(this).outerWidth()+30;
    if ($(this).find('input').prop('checked')) {
      $(this).addClass('checked');
      setTimeout(function () {
        $('.show-results-tooltip').fadeIn().css({
          top:top,
          left:left
        });
      }, 200);
    } else if(!$(this).find('input').prop('checked')){
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

    $('.custom').on('click', function(e) {
      e.stopPropagation();
      // radio
      if ($(this).find('input').prop('type')==='radio') {
        if ($(this).find('input').prop('checked')) {
          let sameRadio = $(this).find('input').attr('name');
          $('input[name="'+sameRadio+'"]').parent().not($(this)).removeClass('checked');
          $(this).addClass('checked');
        }
      }
      // checkbox
      else if ($(this).find('input').prop('type')==='checkbox') {
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
   trigger:"hover",
   theme: "tooltipster-light"
 });

  $('.tooltiper').tooltipster({
    side:  'bottom',
   trigger:"click",
   maxWidth: 170,
   theme: "tooltipster-light",
   content: $('#tooltip_content'),
   contentCloning: true,
 });
 $('.complain').on('click', function (e) {
   e.preventDefault();
 });

  // All brands
  function makeColumns(block,cols) {
    $(block).columnize({ columns: cols });
  }
  if ($window.width()>=768) {
    makeColumns('.letter-block__brands',3);
    // makeColumns('.equipment-list',3);
  }
  if ($window.width()>=1024) {
    // colModal(3);
  }
  if ($window.width()>=768&&md.tablet()!==null&&$window.width()<=1200) {
    // colModal(2);
  }

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
