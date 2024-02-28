$(window).on('load', function () {
    load('#js-load01', '10');
    load('#js-load02', '10');
    load('#js-load03', '10');
    
    $(".more_btn01").click(function(){
        load('#js-load01', '5', '.more_btn01');
    });

     $(".more_btn02").click(function(){
        load('#js-load02', '5', '.more_btn02');
    });

      $(".more_btn03").click(function(){
        load('#js-load03', '5', '.more_btn03');
    });
});
 
function load(id, cnt, btn) {
    var girls_list = id + " .js-load:not(.active)";
    var girls_length = $(girls_list).length;
    var girls_total_cnt;
    if (cnt < girls_length) {
        girls_total_cnt = cnt;
    } else {
        girls_total_cnt = girls_length;
        $(btn).hide();
    }
    $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
}