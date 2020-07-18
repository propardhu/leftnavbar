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

  var maincheck=document.querySelector(".Mcheckbox");
  var check=document.querySelectorAll(".check");
  if(maincheck.checked==true){
      for(var i=0;i<check.length;i++){
        check[i].checked=true;
      }
  }
}

var ctxD = document.getElementById("doughnutChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
type: 'doughnut',
data: {
labels: [ "absent","present"],
datasets: [{
data: [14,86],
backgroundColor: [ "#46BFBD", "#FDB45C"],
hoverBackgroundColor: ["#5AD3D1", "#FFC870"]
}]
},
options: {
responsive: true
}
});
