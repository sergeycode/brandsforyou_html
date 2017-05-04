var main = function(){


	$(window).scroll(function() {
	    if ($(this).scrollTop() > 1){
    		$('.header').addClass('fixed',400);
  	    }
  	    else {
    		$('.header').removeClass('fixed',400);
  	    }
    });

    // Button click to scroll
    $('.main .btn').click(function() {
        $('html,body').animate({'scrollTop' : $('.main').next().offset().top -100},300);
    });

	//Hover effect
    $('.country, .type').hover(function() {
        $(this).css('cursor','pointer');
        $('.layer', this).fadeToggle(300);
        $('.caption', this).toggleClass('caption_hover',300);
    });

    //Brands expand
    $('.country.click').click(function() {
        var i = $(this).index();
        $('.brands').eq(i).fadeIn(400);
        $('.close, .overlay').fadeIn(100);
        $('html').css('overflow-y','hidden');
    });
    //Tables expand
    $('.type').click(function() {
        var i = $(this).parent().index();
        $('.table-fixed').eq(i).fadeIn(400);
        $('.close, .overlay').fadeIn(100);
        $('html').css('overflow-y','hidden');
    });
    //Close expand
    $('.close').click(function() {
        $('.brands, .table-fixed').fadeOut(400);
        $('.close, .overlay').fadeOut(100);
        $('html').css('overflow-y','visible');
    });
};


$(document).ready(main);
