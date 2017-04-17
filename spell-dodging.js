
$("body").keydown(function(event) {
    if (event.which === 37) {
        if ($("#pic").offset().left >= 12) {
            $("#pic").css("margin-left", $("#pic").offset().left - 42);
            console.log($("#pic").offset().left);
        }
    } else if (event.which === 39) {
        if ($("#pic").offset().left <= 1250) {
            $("#pic").css("margin-left", $("#pic").offset().left + 20);
            console.log($("#pic").offset().left);
        }
    } else {
        return;
    }
    
});

setInterval(function() {
    if($('#box2').offset().top < 550){
        console.log($('#box2').offset().top);
        $('#box2').css('margin-top', $('#box2').offset().top + 25);
    }
    else{
        $('#box2').hide();
    }
}, 500);