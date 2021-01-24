const timer = (id, deadline) => {

	const addZero = (num) => {
		if (num <= 9) {
			return '0' + num;
		} else {
			return num;
		}
	};

	// let date = new Date();
	// console.log(date);
	// console.log(date.getTimezoneOffset());
	// console.log(Date.now());
	// console.log(Date.parse(date));
	// // let deadlinetime = Date.parse('2021-01-24');
	// let testdate = Date.parse(date);

	const getTimeRemaining = (endtime) => {
		const t = Date.parse(endtime) - Date.parse(new Date()) + (new Date().getTimezoneOffset() * 1000 * 60),
					seconds = Math.floor((t / 1000) % 60),
					minutes = Math.floor((t / 1000 / 60) % 60),
					hours = Math.floor((t / (1000 *60 *60)) % 24),
					days = Math.floor(t / (1000 * 60 * 60 * 24));

			return {
				'total': t,
				'days': days,
				'hours': hours,
				'minutes': minutes,
				'seconds': seconds
			};
	};

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector),
					days = timer.querySelector('#days'),
					hours = timer.querySelector('#hours'),
					minutes = timer.querySelector('#minutes'),
					seconds = timer.querySelector('#seconds'),
					timeInterval = setInterval(updateclock, 1000);

		updateclock();
		
		function updateclock() {
			const t = getTimeRemaining(endtime);

			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				days.textContent = '00';
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';

				clearInterval(timeInterval);
			}
		}
	};

	setClock(id, deadline);

};

export default timer;