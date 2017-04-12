
$("body").keydown(function(event) {
    if (event.which === 37) {
        $("#pic").css("margin-left", $("#pic").offset().left - 42);
        console.log($("#pic").offset().left);
    } else if (event.which === 39) {
        $("#pic").css("margin-left", $("#pic").offset().left + 20);
        console.log($("#pic").offset().left);
    } else {
        return;
    }
    
});