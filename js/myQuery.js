$(document).ready(function(){
    
	  $('.owl-carousel1').owlCarousel({
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplaySpeed:500,
		    autoplayHoverPause:true,
		    nav:true,
		    pullDrag:true,
		    navText:false,
		    items:1,
		    /*responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:1
		        }
		    }*/
		})

	    $('.owl-carousel2').owlCarousel({
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplaySpeed:500,
		    autoplayHoverPause:true,
		    nav:true,
		    pullDrag:true,
		    navText:false,
		    items:4,
		    responsive:{
		        320:{
		            items:1,
		            loop:true,
		            center:true,
		            autoWidth:true,
		            margin:200  
		        },
		        480:{
		        	items:1,
		        	center:true,
		        	margin:120,
		        	autoWidth:true,
		        },
		        660:{
		            items:2,
		            margin:30
		        },
		        992:{
		        	items:3
		        },
		        1200:{
		            items:4
		        }
		    }
		})

		$('.owl-carousel3').owlCarousel({
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplaySpeed:500,
		    autoplayHoverPause:true,
		    nav:false,
		    dots:true,
		    pullDrag:true,
		    navText:false,
		    items:3,
		    responsive:{
		        320:{
		            items:1,
		            center:true
		        },
		        768:{
		            items:2
		        },
		        1200:{
		            items:3
		        }
		    }
		})




	$('.tabs').each(function () {
        var par = $(this).children(".i_tab");
        par.children("div:first").addClass("active");
    });
    $('.tabs_content').each(function () {
        $(this).children(".tabs_main:first").css('display', 'block');
    });
    $('.i_tab').each(function () {
        $(this).delegate('div:not(.active)', 'click', function () {
            $(this).addClass('active').siblings().removeClass('active').parents('.tabs').find('.tabs_content .tabs_main').hide().eq($(this).index()).fadeIn('slow');
        });
    });



    
    if( $(window).width() > 1200){
    	$(window).scroll(function() {    
        	var scroll = $(window).scrollTop();
		        if (scroll >= 1) {
		            $(".header").addClass("header_shadow");
		        } else {
		            $(".header").removeClass("header_shadow");
		        }
    	});
    } 

    $('.header__button-mob-menu').click(function(){
    	$('.header__menu-mob-wrap').slideToggle();
    	$(this).toggleClass('header__mob-active');
    });
    
    //Обрезка названия продукта
    $('.product_name a').collapser({
        mode: 'lines',
        truncate: 2,
        showText: '',
        hideText: ''
    });
    
    //Спинер
    $(".spin_up").click(function() {
		var value = parseInt($(this).closest(".spinner").find("input").val());
		if (value != 100){	           $(this).closest(".spinner").find("input").val(value + 1);
		}
	});
	$(".spin_down").click(function() {
		var value = parseInt($(this).closest(".spinner").find("input").val());
		if (value != 1)	{	        $(this).closest(".spinner").find("input").val(value - 1);
		}
	});
    
    //Выбор метода оплаты
    $(".opl_item").click(function() {
        $(".opl_item").removeClass("active");
        $(this).addClass("active");
	});
    
    //Select styling
    $('select, input').styler();
    
    
});