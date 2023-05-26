document.addEventListener('DOMContentLoaded', () => {
	console.log('loadding page');
	
	const html = document.querySelector('html');
	const body = document.querySelector('body');
	const wrap = document.querySelector('#wrap');
	const header = document.querySelector('#header');
	const container = document.querySelector('#container');
	const footer = document.querySelector('#footer');
	const topBtn = document.querySelector('#topBtn');

	console.log(document.body.clientHeight);




	// GNB ADD CLASS ACTIVE
	const currentGnbId = container.dataset.gnb;
	const activeGnb = document.querySelector(`#${currentGnbId}`);

	if (currentGnbId !== undefined) {
		activeGnb.classList.add('is-active');
	}

	// const scrollWindow = () => {
	// 	if (window.scrollY !== 0) {
	// 		setTimeout(() => {
	// 			window.scrollTo(0, window.scrollY - 50);
	// 			scrollWindow();
	// 		}, 10);
	// 	};
	// };

	// 페이지 이동 후 앵커 스크롤 이동
function scrollToAnchor(anchorId) {
	const element = document.getElementById(anchorId);
  
	if (element) {
	  element.scrollIntoView({
		behavior: 'smooth', // 부드러운 스크롤을 원한다면 'smooth'로 변경
		//block: 'start' // 앵커를 화면 상단에 정렬하려면 'start'로 변경
	  });
	}
  }


	// 페이지 로드 시 URL의 앵커로 자동 스크롤 이동
	const url = window.location.href;
	const anchorIndex = url.indexOf('#');

	console.log(url, anchorIndex);
	
	if (anchorIndex !== -1) {
		const anchorId = url.substring(anchorIndex + 1);
		scrollToAnchor(anchorId);

		
		console.log(anchorId);
	}


	// 메뉴 클릭 시 앵커 스크롤 이동
	// const ancherLink = document.querySelectorAll('.gnb-depth2 a');

	// ancherLink.forEach(ac => {
	// 	const ancherData = ac.dataset.ancher;
	// 	const ancherScroll = document.querySelector(`#${ancherData}`);

	// 	ac.addEventListener('click', (e)=> {
	// 		e.preventDefault();
	// 		ancherScroll.scrollIntoView({
	// 			behavior: 'smooth',
	// 		});
	// 	});

	// });



	// HEADER FIXED
	const headerFixed = () => {
		window.scrollY > 0
		? header.classList.add('is-fixed')
		: header.classList.remove('is-fixed');
	};
	headerFixed();
	window.addEventListener('scroll', headerFixed);

	// MOBILE GNB
	const moGnbControl = () => {
		const gnbControl = document.querySelector('.gnb-control');

		gnbControl.addEventListener('click', () => {

			if (!gnbControl.classList.contains('is-open')) {
				header.classList.add('mo-gnb-open');
				gnbControl.classList.add('is-open');
				html.style.overflowY = 'hidden';
			} else {
				header.classList.remove('mo-gnb-open');
				gnbControl.classList.remove('is-open');
				html.removeAttribute('style');
			}

			// header.classList.add('mo-gnb-open')

			// const secScroll = Math.round(section.scrollTop);
	
			// if (secScroll > 0) {
			// 	// if (statusbar !== null) {
			// 	// 	statusbar.classList.add('scroll');
			// 	// }
			// 	if (header !== null) {
			// 		header.classList.add('scroll');
			// 	}
			// 	if (homeSearchbar !== null) {
			// 		if (secScroll > homeTop.scrollHeight - (statusbar.clientHeight + header.clientHeight)) {
			// 			homeSearchbar.classList.add('fixed');
			// 		} else {
			// 			homeSearchbar.classList.remove('fixed');
			// 		}
			// 	}
			// } else {
			// 	// if (statusbar !== null) {
			// 	// 	statusbar.classList.remove('scroll');
			// 	// }
			// 	if (header !== null) {
			// 		header.classList.remove('scroll');
			// 	}
			// }
	
			// if (document.querySelector('.mobile_area').classList.contains('page-submain') && secScroll > 318) {
			// 	document.querySelector('#statusbar').classList.add('is-white')
			// } else {
			// 	document.querySelector('#statusbar').classList.remove('is-white')
			// } 
	
		});
	};
	moGnbControl();



	// TOP BUTTON
	const scrollTop = () => {
		const docH = wrap.clientHeight; // 문서 높이
		const footH = footer.clientHeight; // 푸터 높이
		const endScroll = Math.round(docH - (window.innerHeight - footH));

		
		const topBtnDisplay = () => {
			window.scrollY > 0
			? topBtn.classList.add('is-show')
			: topBtn.classList.remove('is-show');

			// window.scrollY > endScroll
			// ? topBtn.classList.add('is-absolute')
			// : topBtn.classList.remove('is-absolute');

			// console.log('win scroll:' + Math.round(window.scrollY), 'end scroll:' + endScroll, 'doc height:' + Math.round(docH), 'footer height:' + Math.round(footH), 'win height:' + window.innerHeight);

		};
		window.addEventListener('scroll', topBtnDisplay);
		const scrollWindow = () => {
			if (window.scrollY !== 0) {
				setTimeout(() => {
					window.scrollTo(0, window.scrollY - 50);
					scrollWindow();
				}, 5);
			};
		};
		topBtn.addEventListener('click', scrollWindow);
	};
	scrollTop();

	// SCROLL EFFECT
	const elEffect = () => {
		const docH = wrap.clientHeight; // 문서 높이
		const headerH = header.clientHeight; // 헤더 높이
		document.querySelectorAll('.ef-init').forEach(ef => {
			const docT = document.querySelector('#container > section:first-child > .inner').offsetTop; // 문서 시작 위치
			const efScrollPos = Math.round((window.innerHeight - docT + 80) + window.scrollY);
			const efOffsetTop = Math.round(ef.getBoundingClientRect().top + window.scrollY);

			// console.log(efScrollPos, ef.offsetTop, Math.round(ef.getBoundingClientRect().top), Math.round(ef.getBoundingClientRect().top + window.scrollY), Math.round(window.scrollY));

			efScrollPos > efOffsetTop
			? ef.classList.add('is-effect')
			: ef.classList.remove('is-effect');

		});
	};
	elEffect();
	window.addEventListener('scroll', elEffect);
	window.addEventListener('resize', elEffect);

	// INPUT RESET
	document.querySelectorAll('.field-item .control').forEach(control => {
		const elInput = control.querySelector('.input');
		const btnReset = control.querySelector('.btn-reset');
		if (elInput !== null) {
			elInput.addEventListener('input', (e) => {
				e.preventDefault();
				return elInput.value.length > 0 ? btnReset.classList.add('show') : btnReset.classList.remove('show');
			});
		}
		if (btnReset !== null) {
			btnReset.addEventListener('click', () => {
				elInput.value = '';
				btnReset.classList.remove('show');
			});
		}
	})

});