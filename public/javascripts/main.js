$(document).ready(function(){
  $('#button-open').click(function(e){
    $('.nav-menu').toggleClass('toggled');
    e.preventDefault();
  });

});