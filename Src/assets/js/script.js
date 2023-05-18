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


document.addEventListener("DOMContentLoaded", () => {
	console.log("loadding page");
	
	const statusbar = document.querySelector('#statusbar');
	const header = document.querySelector('#header');
	const homeTop = document.querySelector('#homeTop');
	const homeSearchbar = document.querySelector('#homeSearchbar');
	const section = document.querySelector('#container section');
	const bottom = document.querySelector('#bottom');
	const actionbar = document.querySelector('#actionbar');

	section.addEventListener('scroll', () => {
		const secScroll = Math.round(section.scrollTop);
		if (secScroll > 0) {
			if (statusbar !== null) {
				statusbar.classList.add('scroll');
			}
			if (header !== null) {
				header.classList.add('scroll');
			}
			if (homeSearchbar !== null) {
				if (secScroll > homeTop.scrollHeight - (statusbar.clientHeight + header.clientHeight)) {
					homeSearchbar.classList.add('fixed');
				} else {
					homeSearchbar.classList.remove('fixed');
				}
			}
		} else {
			if (statusbar !== null) {
				statusbar.classList.remove('scroll');
			}
			if (header !== null) {
				header.classList.remove('scroll');
			}
		}
	});

	let prevScroll = 0;
	section.addEventListener('scroll', getScrollDirection);

	function getScrollDirection() {
		const currScroll = Math.round(this.scrollTop);
		if ( currScroll > section.scrollHeight - section.clientHeight - actionbar.clientHeight) {
			bottom.classList.remove('hide');
		} else {
			if (prevScroll > currScroll) {
				bottom.classList.remove('hide');
			}
			else {
				bottom.classList.add('hide');
			}
		}
		prevScroll = currScroll;
	}


	// if (window.NodeList && !NodeList.prototype.forEach) {
	// 	NodeList.prototype.forEach = Array.prototype.forEach;
	// }
	
	// document.querySelectorAll('.popup-open').forEach(popOpen => {
	// 	const popId = popOpen.dataset.popup;
	// 	const elPop = document.querySelector('#' + popId);
	// 	if (elPop !== null) {
	// 		popOpen.addEventListener('click', () => {
	// 			elPop.classList.add('is-active');
	// 		})
	// 		elPop.querySelectorAll('.popup-close').forEach(popClose => {
	// 			popClose.addEventListener('click', () => {
	// 				elPop.classList.remove('is-active');
	// 			});
	// 		})
	// 	}
	// })
	

	// TOP BUTTON
    const scrollTop = function () {
		// create HTML button element
		const topBtn = document.querySelector("#topBtn");

		// hide/show button based on scroll distance
		const topBtnDisplay = function () {
			const docH = document.querySelector("#wrap").clientHeight; // 문서 높이
			const footH = document.querySelector("#footer").clientHeight; // 푸터 높이
			const endScroll = Math.round(docH - (window.innerHeight + footH));

			window.scrollY > 0
			? topBtn.classList.add("is-show")
			: topBtn.classList.remove("is-show");

			window.scrollY > endScroll
			? topBtn.classList.add("is-absolute")
			: topBtn.classList.remove("is-absolute")

			//console.log('asdasdasdasd', docH, winScrollY, winH, footH, endScroll)
		};

		window.addEventListener("scroll", topBtnDisplay);
		// scroll to top when button clicked
		const scrollWindow = function () {
		  if (window.scrollY != 0) {
			setTimeout(function () {
			  window.scrollTo(0, window.scrollY - 50);
			  scrollWindow();
			}, 10);
		  }
		};
		topBtn.addEventListener("click", scrollWindow);
	  };
	scrollTop();




});
