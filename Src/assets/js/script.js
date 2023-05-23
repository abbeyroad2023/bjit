document.addEventListener('DOMContentLoaded', () => {
	console.log('loadding page');
	
	const html = document.querySelector('html');
	const wrap = document.querySelector('#wrap');
	const header = document.querySelector('#header');
	const container = document.querySelector('#container');
	const footer = document.querySelector('#footer');
	const topBtn = document.querySelector('#topBtn');

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

			if (gnbControl.classList.contains('is-open')) {
				header.classList.remove('mo-gnb-open');
				gnbControl.classList.remove('is-open');
				html.removeAttribute('style');
			} else {
				header.classList.add('mo-gnb-open');
				gnbControl.classList.add('is-open');
				html.style.overflowY = 'hidden';
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
		const endScroll = Math.round(docH - (window.innerHeight + footH));
		const topBtnDisplay = () => {
			window.scrollY > 0
			? topBtn.classList.add('is-show')
			: topBtn.classList.remove('is-show');

			window.scrollY > endScroll
			? topBtn.classList.add('is-absolute')
			: topBtn.classList.remove('is-absolute')
		};
		window.addEventListener('scroll', topBtnDisplay);
		const scrollWindow = () => {
			if (window.scrollY !== 0) {
				setTimeout(() => {
					window.scrollTo(0, window.scrollY - 50);
					scrollWindow();
				}, 10);
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

			// console.log(efScrollPos, ef.offsetTop, Math.round(ef.getBoundingClientRect().top), Math.round(ef.getBoundingClientRect().top + window.scrollY), Math.round(window.scrollY))

			efScrollPos > efOffsetTop
			? ef.classList.add('is-effect')
			: ef.classList.remove('is-effect');
		});
	};
	elEffect();
	window.addEventListener('scroll', elEffect);
	window.addEventListener('resize', elEffect);


});