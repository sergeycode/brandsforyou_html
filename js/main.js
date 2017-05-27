var main = function(){

	// fullpage.js
	$('#fullpage').fullpage({
		verticalCentered: false
	});

    // Button click to scroll with fullpage.js
    $('.main .btn').click(function() {
				$.fn.fullpage.moveSectionDown();
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
        $('.stores .close, .stores .overlay').fadeIn(100);
        $('html').css('overflow-y','hidden');
				// $('body').css('overflow-y','hidden');
    });
    //Tables expand
    $('.type').click(function() {
        var i = $(this).parent().index();
        $('.table-fixed').eq(i).fadeIn(400);
        $('.sizes .close, .sizes .overlay').fadeIn(100);
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
