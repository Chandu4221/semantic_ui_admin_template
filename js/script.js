$(document).ready(function() {
  $('.ui.dropdown').dropdown();
  $('.sidebar-menu-toggler').on('click', function() {
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle');
  });
});
