$(document).ready(function() {

  I18n.defaultLocale = 'de';
  I18n.locale = $('html').attr('lang');

  $(['yes', 'no', 'limited', 'unknown']).each(function(index, item){
    if ($.cookie('filter_'+item)) {
      $('.status-filter button.'+item).addClass('active');
    } else {
      $('.status-filter button.'+item).removeClass('active');
    }
  });

  $('.category-filter option').each(function() {
    var filter_class = $(this).val();
    if ($.cookie('filter_'+filter_class)) {
    } else {
      $(this).attr('selected', 'selected');
    }
  });

  $('.selectpicker').selectpicker();

  $('.status-filter button').popover({
    trigger: 'hover',
    placement: getPopoverPlacement
  });

  if (!$.cookie('_wheelmap_first_time_visitor')) {
    $('.overlay-wrapper').addClass('show-overlay');
    $.cookie('_wheelmap_first_time_visitor', true, { expires: 1000 });
  }
  $('.show-overlay').fadeIn(1200);
  $('.lookup').delay(1500).fadeIn(400);
  $('.filter').delay(3500).fadeIn(400);
  $('.categories').delay(5500).fadeIn(400);
  $('.go').delay(7000).fadeIn(400);

  $('.btn-searchbar').click(function() {
    $('.navbar-form').toggleClass('active');
  });
  $('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

  $('.close-btn, .go').click(function() {
    $('.overlay-wrapper').fadeOut(500);
  });

  function getPopoverPlacement(){
    if (window.innerWidth < 767) {
      return 'top';
    } else {
      return 'bottom';
    }
  }
  function ResizeElements() {
    var widthMobile = $(window).width();
    if (widthMobile < 420) {
      $('.category-filter .filter-option').addClass('icon-tags').html('');
    }
    else {
      $('.category-filter .filter-option').removeClass('icon-tags');
    }
    var widthTablet = $(window).width();
    if (widthTablet < 767) {
      $('.category-filter').addClass('dropup');
    }
    else {
      $('.category-filter').removeClass('dropup');
    }
  }
  $(window).load(ResizeElements);
  $(window).resize(ResizeElements);


  if (window.addEventListener) {
    window.addEventListener("load",function() {
      setTimeout(function(){
        window.scrollTo(0, 1);
      }, 0);
    });
  }

  requestNodes(map.getBounds());

});