$(document).ready(function() {



    let $slider = $('.slider').slick({
        arrows: false,
        // autoplay: true,
        vertical: true,
        verticalSwiping: true,        
    });

    $(document).on('keydown', function(e) {
        if(e.keyCode == 37) {
            $slider.slick('slickPrev');
        }
        if(e.keyCode == 39) {
            $slider.slick('slickNext');
        }
    });

    $(document).on('wheel', function(e) {

        let delta = e.originalEvent.deltaY;
        console.log(delta);
        if (delta > 1) {
            $slider.slick('slickNext');
        } if (delta < -1) {
            $slider.slick('slickPrev');
        }

    })
    
})
