$(".work-img").on('click', function(){
    var slide = "slide" + $(this).attr('class').split("slide")[1]
    $('.carousel-item').each(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active')
            $(".carousel-inner").children(`.${slide}`).addClass('active')
        }
    })
})