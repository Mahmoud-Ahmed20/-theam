$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 30) {
      $(".navbar-2").animate({ top: "0" }, 10).css("background-color", "Black");
    } else if ($(this).scrollTop() > 0) {
      $(".navbar-2")
        .animate({ top: "45px" }, 10)
        .css("background-color", "transparent");
    } else {
      $(".navbar-2").show() || $(".navbar-1").show();
    }
  });
  $(".navbar-2 .icon .icon-2").hide();
  $(".navbar-2 .icon>img").click(function () {
    $(".navbar-2 .icon .icon-2").animate({ right: "0px" }, 500).fadeIn(100);
  });
  $(".navbar-2 .icon .icon-2 .slide>i").click(function () {
    $(".navbar-2 .icon .icon-2").fadeOut(500);
  });
  $(".Home .move>.move-1").click(function () {
    $(".Home .container .photo").hide(200).siblings();
    $(".Home .container .photo-1").show(200).siblings();
  });
  $(".Home .container .photo").hide();
  $(".Home .move>.move-2").click(function () {
    $(".Home .container .photo-1").hide(200).siblings();
    $(".Home .container .photo").show(200).siblings();
  });
  if (
    $(".Home .move>.move-1")
      .css("background-color", "#08d665")
      .click(function () {
        $(".Home .move>.move-1").css("background-color", "#08d665");
        $(".Home .move>.move-2").css("background-color", "transparent");
      })
  )
    if (
      $(".Home .move>.move-2").click(function () {
        $(".Home .move>.move-2").css("background-color", "#08d665");
        $(".Home .move>.move-1").css("background-color", "transparent");
      })
    ) {
    }
  $("#vshow").hide();
  $("#vshow-1").hide();
  $("#vshow-2").hide();
  $(".About .container .photo a").click(function () {
    $("#vshow-2").fadeIn(500);
    $("#vshow").fadeIn(1000).css("position", "fixed");
    $("#vshow-1")
      .animate({ left: "1090px" }, 500)
      .fadeIn(2000)
      .css("position", "fixed");
    $("#vshow-1").click(function () {
      $("#vshow-1").animate({ left: "50px" }, 500).fadeOut(2000);
      $("#vshow-2").fadeOut(500);
      $("#vshow").fadeOut(1000);
    });
  });
  $(".circle-1").circleProgress({
    value: 0.6,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#08d665" },
  });
  $(".circle-2").circleProgress({
    value: 0.7,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#08d665" },
  });
  $(".circle-3").circleProgress({
    value: 0.3,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#08d665" },
  });
  $(".circle-4").circleProgress({
    value: 0.9,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#08d665" },
  });
  $("#title-4").fadeOut();
  var count = 0;
  $("#move-1").click(function () {
    count++;
    if (count == 1) {
      $("#title-1").animate({ left: "-400px" }, 500).fadeOut();
      $("#title-2").animate({ left: "30px" }, 500);
      $("#title-3").animate({ left: "390px" }, 500);
      $("#title-4").animate({ left: "760px" }, 500).fadeIn();
    } else if (count == 2) {
      $("#title-2").animate({ left: "-400px" }, 500).fadeOut();
      $("#title-3").animate({ left: "30px" }, 500);
      $("#title-4").animate({ left: "390px" }, 500);
      $("#title-1").animate({ left: "760px" }, 500).fadeIn();
    } else if (count == 3) {
      $("#title-3").animate({ left: "-400px" }, 500).fadeOut();
      $("#title-4").animate({ left: "30px" }, 500);
      $("#title-1").animate({ left: "390px" }, 500);
      $("#title-2").animate({ left: "760px" }, 500).fadeIn();
    } else {
      console.log("rr");
      $("#title-1").attr("style", "");
      $("#title-2").attr("style", "");
      $("#title-3").attr("style", "");
      $("#title-4").attr("style", "display: none");
      count = 0;
    }
  });
  $("#title-4").fadeOut();
  $("#move-2").click(function () {
    count++;
    if  (count == 1) {
      $("#title-1").animate({ left: "390px" }, 500);
      $("#title-2").animate({ left: "760px" }, 500);
      $("#title-3").animate({ left: "1300px" }, 500).fadeOut();
      $("#title-4").animate({ left: "30px" }, 500).fadeIn();
    } else if (count == 2) {
      $("#title-2").animate({ left: "1300px" }, 500).fadeOut();
      $("#title-3").animate({ left: "30px" }, 500).fadeIn();
      $("#title-4").animate({ left: "390px" }, 500);
      $("#title-1").animate({ left: "760px" }, 500);
    } else if (count == 3) {
      $("#title-3").animate({ left: "390px" }, 500);
      $("#title-4").animate({ left: "760px" }, 500);
      $("#title-1").animate({ left: "1300px" }, 500).fadeOut();
      $("#title-2").animate({ left: "30px" }, 500).fadeIn();
    } else {
      console.log("rr");
      $("#title-1").attr("style", "");
      $("#title-2").attr("style", "");
      $("#title-3").attr("style", "");
      $("#title-4").attr("style", "display: none");
      count = 0;
    }
  });
  $("#contact-1").fadeOut();
  $("#move-3").click(function(){
    count++;
    if(count == 1){
      $("#contact").animate({left: "-500px" }, 500).fadeOut();
      $("#contact-1").animate({left:"1600px"},20).fadeIn();
      $("#contact-1").animate({left:"555px"},500).fadeIn();
      count = 0;
    }
    // $("#contact-1").fadeOut();
  })
  $("#move-4").click(function(){
    count++;
    if(count == 2){
      $("#contact-1").animate({left: "1600px" }, 500).fadeOut();
      $("#contact").animate({left: "-500px" }, 500).fadeIn();
      $("#contact").animate({left: "555px" }, 500).fadeIn();
      count = 0;
    }
    // return("count");
  })
});
