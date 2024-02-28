$(window).load(function(){
    // var $container = $('.news_content');
    // $container.isotope({
    //     filter: '*',
    //     animationOptions: {
    //         duration: 750,
    //         easing: 'linear',
    //         queue: false
    //     }
    // });
 
    $('.news_filter a').click(function(){
        $('.news_filter .active').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 

    var all = $(".news_content li").length;
    var academy = $(".academy").length;
    var partner = $(".partner").length;
    var byfi = $(".byfi").length;

    $('#all a').text("ALL ("+all+")");
    $('#academy a').text("ACADEMY NEWS ("+academy+")");
    $('#partner a').text("PARTNER NEWS ("+partner+")");
    $('#byfi a').text("BYFI NEWS ("+byfi+")");
});