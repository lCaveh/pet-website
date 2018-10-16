$(function(){
  $("button#darktheme").click(function() {
    $("body").removeClass();
    $("body").addClass("darktheme");
  });
  $("button#lighttheme").click(function() {
    $("body").removeClass();
    $("body").addClass("lighttheme");
  });
  $("button#Originaltheme").click(function() {
    $("body").removeClass();
  })
});
