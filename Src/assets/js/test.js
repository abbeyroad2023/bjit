

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







  // test1


jQuery(document).ready(function () {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (window.location.hash && isChrome) {
        setTimeout(function () {
            var hash = window.location.hash;
            window.location.hash = "";
            window.location.hash = hash;
        }, 300);
    }
});




// test2

// 페이지 이동 후 앵커 스크롤 이동
function scrollToAnchor(anchorId) {
	const element = document.getElementById(anchorId);
  
	if (element) {
	  element.scrollIntoView({
		behavior: 'smooth', // 부드러운 스크롤을 원한다면 'smooth'로 변경
		block: 'start' // 앵커를 화면 상단에 정렬하려면 'start'로 변경
	  });
	}
  }
  
  // 페이지 로드 시 URL의 앵커로 자동 스크롤 이동
  window.addEventListener('DOMContentLoaded', () => {
	const url = window.location.href;
	const anchorIndex = url.indexOf('#');
  
	if (anchorIndex !== -1) {
	  const anchorId = url.substring(anchorIndex + 1);
	  scrollToAnchor(anchorId);
	}
  });