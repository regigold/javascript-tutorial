//Javascript Document


//slide out step menu

$( document ).ready(function() {
    
    var $slideBtn = $('.slide-btn');
    var $slideOut = $('.slide-out');
    var $stepMenu = $('.step-menu');
    var $mainNav = $('.site-nav-bar');
    
    $stepMenu.hide();
    
    $slideBtn.click(function() {
        console.log('I live!');
        $stepMenu.animate({width:'toggle'}, 'slow')
        $('.fa').toggleClass('fa-rotate-180', 'slow');
    });
         
          if($(window).width() <= 1340){ 
              console.log('does this even work?');
              $mainNav.hide();
              
             $('.menu').click(function(){
                 $mainNav.animate({height:'toggle'}, 'slow');
                 
                 var $this = $(this);
                 $this.toggleClass('menu');
                    if($this.hasClass('menu')){
                        $this.text('menu');			
                    } else {
                        $this.text('close');
                    }

                }); 

          }
    });

//smooth scroll to section

$(".scroll-step-01").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-step-01").offset().top
    }, 1000);
});

$(".scroll-step-02").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-step-02").offset().top
    }, 1000);
});

$(".scroll-step-03").click(function() {
    $('html, body').animate({
        scrollTop: $("#scroll-step-03").offset().top
    }, 1000);
});




        
