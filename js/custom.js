$(document).ready(function() {

    var $btn1 =  $('.btn1');
    var $top = $('.top');
    var $right = $('.right');
    var $bottom = $('.bottom');
    var $left = $('.left');
    var $content = $('.content');
    var $closeBtn1 = $('.closeBtn1');
    var $btn2 =  $('.btn2');
    var $wrap2 = $('.wrap2');
    var $closeBtn2 = $('.closeBtn2');

    var $background_img = $('.background_img');

    var speed = 300;

    var classOn = $(this).hasClass('on');
    var selectOn = $(this).hasClass('on');

    function moveIn() {
        $top.stop().animate({'width':'100%'},speed, function() {
            $right.stop().animate({'height':'100%'},speed, function() {
                $bottom.stop().animate({'width':'100%'},speed, function() {
                    $left.stop().animate({'height':'100%'},speed, function() {
                        $content.fadeIn(speed*2);
                    });
                });
            });
        });
    };
    function moveOut() {
        $content.fadeOut(speed, function() {
            $top.stop().animate({'width':'0%'},speed);
            $bottom.stop().animate({'width':'0%'},speed);
            $right.stop().animate({'height':'0%'},speed);
            $left.stop().animate({'height':'0%'},speed);
        });
    };
    function moveIn2() {
        $wrap2.fadeIn(speed);
    }
    function moveOut2() {
        $wrap2.fadeOut(speed);
    }
    function opacity() {
        $background_img.css({'opacity':'0.2'});
    }
    function opacity_reset() {
        $background_img.css({'opacity':'0.4'});
    }

    $btn1.on('click',function() {
        if(classOn) {
            $btn1.removeClass('on');
        } else {
            $(this).addClass('on');
        }
        moveIn();
        opacity();
    });

    $btn2.on('click',function() {
        if(classOn) {
            $btn2.removeClass('on');
        } else {
            $(this).addClass('on');
        }
        moveIn2();
    });  

    $closeBtn1.on('click', function() {
        $btn1.removeClass('on');
        moveOut();
        opacity_reset();
    });

    $closeBtn2.on('click', function() {
        $btn2.removeClass('on');
        moveOut2();
    });


});