$(document).ready(function() {

  console.log("Document ready!");

  $(".nav-item").mouseenter(function(ev){
    $("body").css("background", $(ev.target).attr("data-color"));
  })

  $(".nav-item").mouseleave(function(){
    $("body").css("background", "#63e076");
  });
});
