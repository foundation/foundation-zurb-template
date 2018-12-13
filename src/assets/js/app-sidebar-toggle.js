import $ from 'jquery';

// app wrapper toggle
// -------------------------
$('[data-app-wrapper-toggle-shrink]').on('click', function(e) {
  e.preventDefault();
  $(this).parents('.app-wrapper').toggleClass('shrink-medium').toggleClass('shrink-large');
});
