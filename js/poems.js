// JavaScript Document

/* loading */
$(window).load(function()
{
    $('#loading').fadeOut(1000);
});

$(document).ready(function()
{
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    two.style.display = "none";

    var fog = document.getElementById("fog");
    fog.style.visibility = "hidden";

    $("#one").click(function()
    {
        $("#two").fadeToggle('1000');
        one.style.display = "none";
        fog.style.visibility = "visible";
    });

    $("#two").click(function()
    {
        $("#one").fadeToggle('1000');
        two.style.display = "none";
        fog.style.visibility = "hidden";
    });

    /* 游標跟隨 */
    $(window).load(function()
    {
        var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) 
        {
            var x = e.pageX;
            var y = e.pageY;
            
            pic.style.left = x - 100 + 'px';
            pic.style.top = y - 100 + 'px';
        });
    });
})