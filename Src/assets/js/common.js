$(function(){
	setTimeout(function() {
	  $('#doc').addClass('show');
	}, 0);
	
	// top member
	$('.bt-member').click(function() {
	  if ($(this).hasClass('active')) {
		 $(this).removeClass('active');
		  $(this).parent().find('.layer-member').hide();
		  $('#header-wrap').removeClass('is-show');
	  } else {
		   mainNavi_H.closeMenu();
		   $(this).addClass('active');
		   $(this).parent().find('.layer-member').show();
		   $('#header-wrap').addClass('is-show');
	  }
	  $('.bt-search').removeClass('active');
	  $('.top-search').hide();
	  $('.top-search').find('.sel').removeClass('active');
	});

	$('.layer-member').find('.login-btn').click(function(){
		$('.layer-member').find('.in-login').show();
		$('.layer-member').find('.in-logout').hide();
		$('.bt-member').addClass('alrim');
	});
	$('.layer-member').find('.logout-btn').click(function(){
		$('.layer-member').find('.in-logout').show();
		$('.layer-member').find('.in-login').hide();
		$('.bt-member').removeClass('alrim');
	});
	

	// top search
	$('.bt-search').click(function() {
	  if ($(this).hasClass('active')) {
		 $(this).removeClass('active');
		  $('.top-search').hide();
		  $('#header-wrap').removeClass('is-show');
		  $('.top-search').find('.sel').removeClass('active');
	  } else {
		   mainNavi_H.closeMenu();
		   $(this).addClass('active');
		   $('.top-search').show();
		   $('#header-wrap').addClass('is-show');
	  }
	  $('.bt-member').removeClass('active');
	  $('.layer-member').hide();
	});
	$('.top-search').find('.sel-btn').click(function() {
	  if ($(this).parent().hasClass('active')) {
		   $(this).parent().removeClass('active');
	  } else {
		   $(this).parent().addClass('active');
	  }
	});
	$('.top-search').find('li > a').click(function(){
		var stxt = $(this).find('span').text();
		$(this).closest('.sel').find('.sel-btn > span').text(stxt);
		$(this).parent().addClass('active');
        $(this).parent().siblings('li').removeClass('active');
		$(this).closest('.sel').removeClass('active');
	});
	

	


	/// input & select
	$('.chk-select').find('select').change(function() {
		  var current = $('.select-input').val();
		  if (current != 'null') {
			  $(this).css({'color':'#222'})
			  $(this).parent().addClass('active');
		  } else {
			   $(this).css({'color':'#999'})	
			   $(this).parent().removeClass('active');
		  }
	}); 
	$('.chk-input').find('input[type=text],textarea').css({'color':'#999'});
	$('.chk-input').find('input[type=text],textarea').on('change keydown keypress keyup',function() {
	  var current = $(this).parent().find('input[type=text]').val();
	  if (current != 'null') {
		  $(this).css({'color':'#222'});
		  $(this).parent().addClass('active');
	  } else {
		  $(this).css({'color':'#999'});
		  $(this).parent().removeClass('active');
	  }
	}); 
	$('.chk-input.active').find('input[type=text],textarea').css({'color':'#000'});
	$('.chk-input.active').find('input[type=text],textarea').change(function() {
	  var current = $(this).val();
	  if (current != 'null') {
		  $(this).css({'color':'#222'});
		 // $(this).parent().find('.delete').show();
	  } else {
		  $(this).css({'color':'#222'});
		 // $(this).parent().find('.delete').show();
	  }
	}); 
	$('.passValue').on('change keydown keypress keyup',function() {
		  var current = $('.passValue').val();
		  if (current != 'null') {
			  $(this).attr('type', 'password'); 
		  } else {
			 $(this).attr('type', 'text'); 
		  }
	});  
	

	if($(".snb-slider-ovclick").length<1) $("<div class='snb-slider-ovclick'/>").appendTo($(".contents-wrap")).hide();
	$('.bt-snb').click(function(){
		if($('#snbNav').hasClass('open')){
			snbHide();
			$('#snbNav').removeClass('open');
		}else{
			snbShow();
			$('#snbNav').addClass('open');
		}
	});
	$('.snbNav-wrap').find('.snb-close').click(function(){
		snbHide();
	});
});	

function snbShow(){
	var $cback = $(".snb-slider-ovclick");
	$cback.unbind("click").bind("click",function(){
		snbHide();
		$('.snb-slider-ovclick').hide();
		$('#snbNav').removeClass('open');
	}).show();
	//$('body').css({'overflow':'hidden'});

	$('#header-wrap').css({'z-index':'1004'});
	$('#container-wrap').css({'z-index':'2005'})
}
function snbHide(){
	$('.snb-slider-ovclick').hide();
	$('#snbNav').removeClass('open');
	//$('body').css({'overflow':'visible'});

	$('#header-wrap').css({'z-index':'2005'});
	$('#container-wrap').css({'z-index':'1004'})
}
$(window).scroll(function() {
	var position = $(window).scrollTop(); 
	var bannerH =$('#top-banner').outerHeight();
	if (position > bannerH){
		$('#header-wrap').addClass('fix');
	}else{
		$('#header-wrap').removeClass('fix');
	}
	if (position > 300){
		$('.top-btn').addClass('over');
	}else{
		$('.top-btn').removeClass('over');
	}
});
$(window).load(function(){
	var position = $(window).scrollTop();
	var bannerH =$('#top-banner').outerHeight();
	if (position > bannerH){
		$('#header-wrap').addClass('fix');
	}else{
		$('#header-wrap').removeClass('fix');
	}
	if (position > 300){
	$('.top-btn').addClass('over');
	}else{
		$('.top-btn').removeClass('over');
	}
});


