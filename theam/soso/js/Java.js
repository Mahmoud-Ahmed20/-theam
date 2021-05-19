$(document).ready(function(){
    $(window).scroll(function()
    {if($(this).scrollTop() > 200)
        {$("#return").show();}
        else($("#return").hide()
        )})
    $("#return").click(function()
    {$("html,body").animate({scrollTop:0},2000
        )});
});
