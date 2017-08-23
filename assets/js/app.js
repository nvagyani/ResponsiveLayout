// JavaScript source code
$(document).ready(function(){

    $.each(['wp-left'], function(i, classname) {
      var $elements = $('.' + classname) 
      $elements.each(function(el) {     
        new Waypoint({
          element: this,
          handler: function(direction) {        
            $(this.element).addClass('fadeInLeft')       
          },
          offset: '90%'
        })
      })
    })

    $.each(['wp-right'], function(i, classname) {
      var $elements = $('.' + classname)
      $elements.each(function() {      
        new Waypoint({
          element: this,
          handler: function(direction) {        
            $(this.element).addClass('fadeInRight')       
          },
          offset: '90%'
        })
      })
    })

    // invoke the carousel
    $('#homeCarousel').carousel({
        interval: false
    });

    // scroll slides on mouse scroll 
    $('#homeCarousel').bind('mousewheel DOMMouseScroll', function(e){

        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
            $(this).carousel('prev');
			
        }
        else{
            $(this).carousel('next');
			
        }
    });

    //scroll slides on swipe for touch enabled devices 

    $("#homeCarousel").on("touchstart", function(event){
 
        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function(event){

            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
        });
    });
    
});