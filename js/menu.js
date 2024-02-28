$(function(){

	// family site
	$('.family > a').toggle(function(){
		$('.familys').show();
		$(this).addClass('active');
		return false;
	},function(){
		$('.familys').hide();
		$(this).removeClass('active');
		return false;
	});

	// popup
	// $('.member_btn').click(function(){
	// 	$('.notice_wrap').show();
	// 	return false;
	// });

	// $('.notice img').click(function(){
	// 	$('.notice_wrap').hide();
	// 	return false;
	// });

});