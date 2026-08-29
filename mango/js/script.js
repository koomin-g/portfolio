$(document).ready(function(){
    
    var swiper = new Swiper(".mySwiper", {
            loop:true,
            pagination: {
                el: ".swiper-pagination",
        },
        autoplay: {
            delay: 3000
        },
    });


    $(".new_product2").hide();
	
    $(".more").click(function(){
		$(this).hide();
		$(".new_product2").fadeIn();
	});


    var swiper = new Swiper(".bn2", {
        loop:true,
        pagination: {
            el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000
    },
});


    $(".may").click(function(){
        $(".show").children().slideToggle();
        // $(".show1").children().slideHide();
        // $(".show2").children().slideToggle();

    });

    $(".apr").click(function(){
        $(".show1").children().slideToggle();
    });

    $(".march").click(function(){
        $(".show2").children().slideToggle();
    });

    // $(".may").click(function(){
    //     $(".show").children().slideUp();
    //     $(".show1 ").children().slideDown();
    //     $(".show2 ").children().slideDown();
        
        

    // });

    // $(".apr").click(function(){
    //     $(".show1").children().slideToggle();
    //     $(".show").children().slideUP();
    //     $(".show2").children().slideUP();
        
    // });

    // $(".march").click(function(){
    //     $(".show2").children().slideToggle();
    //     $(".show").children().slideUP();
    //     $(".show1").children().slideUP();
        
    // });

});

