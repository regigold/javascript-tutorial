//Javascript Document

$(document).ready(function() {
    
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".tutorial-03-wrapper").css("flex-direction") == "row" ){
        console.log('ola, world');
        
        var $map   = $(".land-scape"), 
        $window    = $(window),
        offset     = $map.offset(),
        topPadding = 250;

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $map.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            });
        } else {
            $map.stop().animate({
                marginTop: 0
            });
        }
    });
          
    }else if ($(".tell h1").css("display") == "none" ){
        console.log('dont do a damn thing.');
    }
}

