$( document ).ready(function() {
    new WOW().init();
  });

function changeImage(id,imgSource) {
    document.getElementById(id).src=imgSource;
}

$(".animated").addClass("slower");

