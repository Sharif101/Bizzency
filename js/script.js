$(".srch").click(function(){
    $("#search-part").slideDown()
})

$(".crs").click(function(){
    $("#search-part").slideUp()
})

$(".close").click(function(){
    $(".close-item").fadeToggle()
})

$(document).ready(function(){
    $('.venobox').venobox(); 
});