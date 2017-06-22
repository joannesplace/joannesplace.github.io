$(document).ready(function(){
  var isMenuOpen = false;
  
  $("#nav-button-wrapper").click(function(e){
    isMenuOpen = !isMenuOpen;
    
    if(isMenuOpen){
      $("#nav-button").addClass("active");
      $("#nav").addClass("active");
    } else {
      $("#nav-button").removeClass("active");
      $("#nav").removeClass("active");
    }
    
  });
});