$(document).ready(function() {
    // Menu toggle effect
    $('.nav-button').click(function() {
      $('.nav-button').toggleClass('change');
    });
    // Gallery filter
$('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
      $('.filter').show(300);
    } else {
      $('.filter').not('.' + value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  });
  $('.gallery-list-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });
});