//Javascript Document


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




        
