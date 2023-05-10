$(function(){
	iskInit();
	iskGnb();
});

/* iskInit */
function iskInit() {
	AOS.init();
}

/* iskGnb */
function iskGnb(){
	// gnb button
	$('.gnb-open').on('click', function() {
		$('html').css('overflow-y', 'hidden');
		$('#header').addClass('is-gnb');
	});
	$('.gnb-close').on('click', function() {
		$('html').removeAttr('style');
		$('#header').removeClass('is-gnb');
	});
	// scroll effect
	$(window).on('scroll', function(){
		const posTop = $(this).scrollTop();
		if (posTop > 0){
			$('#header').addClass('is-fixed');
		} else {
			$('#header').removeClass('is-fixed');
		}
	});
}