jQuery(function ($) {

    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});

$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});




});



function check(){
  var ans=document.querySelectorAll(".Tik");

  for(var i=0;i<ans.length;i++){
    var an=ans[i];
an.addEventListener("click",function(e){
  //console.log(e);
  e.target.classList.add("fas");
  e.target.classList.add("fa-check");
  e.target.classList.add("text-success");
  e.target.innerHTML="";

});
}

}
function last(){
  var ans=document.querySelectorAll(".Tik");
  for(var i=0;i<ans.length;i++){
    var an=ans[i];
    if(!an.classList.contains("text-success")){
      an.classList.add("fas");
      an.classList.add("fa-times");
      an.classList.add("text-danger");
      an.innerHTML="";
    }

  }
}
