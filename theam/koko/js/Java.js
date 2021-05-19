$(document).ready(function () {
  $(window).scroll(function(){
    if ($(this).scrollTop() > 10){
      $(".navbar").css({"background-color":'black', "color":'black'});
      $(".navbar .about-navbar").css({"background-color":'black',"color":'black'});
    }
      else{
        $(".navbar").css({"background-color":'#7cb62f'});
      $(".navbar .about-navbar").css({"background-color":' #7cb62f'});
      }
  })
  $(window).scroll(function()
    {if($(this).scrollTop() > 200)
        {$("#return").show();}
        else($("#return").hide()
        )})
    $("#return").click(function()
    {$("html,body").animate({scrollTop:0},2000
        )});
  $(".circle-1").circleProgress({
    value: 0.9,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#049dff" },
    startAngle:4.6,
  });
  $(".circle-2").circleProgress({
    value: 0.8,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#fdba04" },
    startAngle:4.6,
  });
  $(".circle-3").circleProgress({
    value: 0.9,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#049dff" },
    startAngle:4.6,
  });
  $(".circle-4").circleProgress({
    value: 0.8,
    size: 150,
    emptyFill: "#fff",
    fill: { color: "#fdba04" },
    startAngle:4.6,
  });
});
