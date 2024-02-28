$(function(){
	
	$('.content .list:not(:first)').hide(0);
	
	$('.tab li').click(function(){
		var i = $(this).index();
		$('.tab li').removeClass('active');
		$(this).addClass('active');
		$('.content .list').hide(0);
		$('.content .list').eq(i).show(0);
		return false;
	})
});