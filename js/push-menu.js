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
