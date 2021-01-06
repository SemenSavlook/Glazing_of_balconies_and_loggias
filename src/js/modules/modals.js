const modals = () => {
	function blindModal(triggerSelector, modalSelector, closeSelector) {

		const trigger = document.querySelectorAll(triggerSelector),
					modal = document.querySelector(modalSelector),
					close = document.querySelector(closeSelector);

		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				// document.body.classList.add('modal-open');
				console.log('PUSH OPEN');
			});
		});

		close.addEventListener('click', () => {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			// document.body.classList.remove('modal-open');
			console.log('PUSH CLOSE');
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.style.display = 'none';
				document.body.style.overflow = '';
				// document.body.classList.remove('modal-open');
				console.log('PUSH CLOSE OTHER');
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(function() {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';			
		}, time);
	}

	blindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	blindModal('.phone_link', '.popup', '.popup .popup_close');

	showModalByTime('.popup', 60000);

};

export default modals;