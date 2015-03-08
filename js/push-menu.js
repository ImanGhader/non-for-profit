// Needs latest version of jQuery to run

$(function() {
  $('body').removeClass('noscript');

  $('.toggle-btn, .close-btn').click(function() {
    toggleNav();
  });
});

function toggleNav() {
  if ($('.site-wrapper').attr('data-state') == 'slide-closed') {
    // Display Nav when closed
    $('.site-wrapper').attr('data-state', 'slide-open');
  } else {
    // Hide Nav when open
    $('.site-wrapper').attr('data-state', 'slide-closed');
  }
}

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');

  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 1000,
    easing:'linear',

    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });

});

$('.sign-in').click(function(){
      $('#modal').css('display','block');
      $('.modal-bg').fadeIn();
  });

    $('#close').click(function(){
        $('.modal-bg').fadeOut();
        $('#modal').fadeOut();
      return false;
    });

function toggleDiv(divId) {
        $("#"+divId).toggle();
    }
