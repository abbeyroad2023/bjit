

$(document).ready(function () {
	service.init();
  });
  
  const service = {
  
	  mainScroller: function () {      
		$(".techandsv_navbar li").click(function(){
		  var mNum = $(this).data("idno");
		  var mLoc = ($("#tech" + mNum).offset().top);
			  
		  $('html, body').animate({scrollTop : mLoc - 150}, {duration : 1500});
		});    
		let techMoving = function(direction){
		  if (direction === "up"){
			$(".techandsv_navbar").css("top",80).addClass("slideInDown");
			if (window.outerWidth < 991){
			  $(".techandsv_navbar").css("top",60).addClass("slideInDown");
			}
		  } else if (direction === "down"){
			$(".techandsv_navbar").css("top",0).removeClass("slideInDown");
		  }
		}
		let prevScrollTop = 80;
		$(document).scroll(function () {
		  let nextScrollTop = window.pageYOffset || 310;
		  if (nextScrollTop > prevScrollTop){
			techMoving("down");
		  } else if (nextScrollTop < prevScrollTop){
			techMoving("up");
		  } 
		  prevScrollTop = nextScrollTop;
		});
	  },
  
	  effectScroller: function () {
		$(document).scroll(function () {
		  const currentPosition = $(window).scrollTop();
		  const techPosition = $(".techandsv_container_fw.bg_techandsv_intro").offset().top;
  
		  const yPos = window.pageYOffset + 800 ;
  
		  const service1Position = $(".service1").offset().top;
		  const service2Position = $(".service2").offset().top;
		  const service3Position = $(".service3").offset().top;
		  const mainBanner = $(".bg_techandsv_intro").offset().top;
		  
		  if (
			window.outerWidth > 991 &&
			currentPosition > mainBanner &&
			currentPosition < mainBanner + 1050
		  ) {
			//$("#header").addClass("fixed-main-banner");
		  } else {
			//$("#header").removeClass("fixed-main-banner");
		  };
	
		  if (
			currentPosition > techPosition - 500 &&
			currentPosition < techPosition + 900
		  ) {
			$(".bg_techandsv_intro").addClass("effect");
		  } else {
			$(".bg_techandsv_intro").removeClass("effect");
		  };
  
		  if( yPos> service1Position - 200 ){
			$(".service1").addClass("effect");
		  }else{
			$(".service1").removeClass("effect");
		  }
		  if( yPos> service2Position - 200  ){
			$(".service2").addClass("effect");
		  }else{
			$(".service2").removeClass("effect");
		  }
		  if(  yPos > service3Position - 200  ){
			$(".service3").addClass("effect");
		  }else{
			$(".service3").removeClass("effect");
		  }
  
		
		
		});
	  },
  
	  init: function () {
		  this.mainScroller();
		  this.effectScroller();
	  }
  }