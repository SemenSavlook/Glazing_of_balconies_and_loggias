import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img'),
				windowWidth = document.querySelectorAll('#width'),
				windowHeight = document.querySelectorAll('#height'),
				windowType = document.querySelectorAll('#view_type'),
				windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	function bindActionToElems(event, elem, prop) {

		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch(item.nodeName) {

					case 'SPAN':
								state[prop] = i;
					break;

					case 'INPUT': 
								if (item.getAttribute('type') === 'checkbox') {
									(i === 0) ? (state[prop] = "Холодное") : (state[prop] = "Тёплое");
									elem.forEach((box, j) => {
										box.checked = false;
										if (i == j) {
											box.checked = true;
										}
									});
								} else {
									state[prop] = item.value;
								}
								break;

					case 'SELECT':
								state[prop] = item.value;
					break;
				}

				console.log(state);

			});
		});

	}

	bindActionToElems('click', windowForm, 'window-shape');
	bindActionToElems('input', windowWidth, 'window-width');
	bindActionToElems('input', windowHeight, 'window-height');
	bindActionToElems('change', windowType, 'type-of-window');
	bindActionToElems('change', windowProfile , 'window-profile');

	// Enable/Disable Status ----------------
	const calcButtonNext = document.querySelector('.button.popup_calc_button'), 
				calcProfileButtonNext = document.querySelector('.button.popup_calc_profile_button'),
				inputParent = document.querySelector('.popup_calc_content'),
				calcTypeParent = document.querySelector('.popup_calc_profile_content');
	
	function disableAttributeHandler(elem) {
		elem.setAttribute('disabled', 'disabled');
	}
	
	disableAttributeHandler(calcButtonNext);

	function enableAttributeHandler(elem) {
		elem.removeAttribute('disabled');
	}	
	
	inputParent.addEventListener('input', () => {
		if (windowWidth[0].value > 100 && +windowHeight[0].value > 100) {
			enableAttributeHandler(calcButtonNext);
		} else {
			disableAttributeHandler(calcButtonNext);
		}
	});

	if (windowType[0][0].value == 'default-disabled') {
		disableAttributeHandler(calcProfileButtonNext);
	}

	calcTypeParent.addEventListener('change', (e) => {

		let trigger = false;
		windowProfile.forEach(item => {
			if (item.checked == true) { 
				trigger = true;
			}
		});

		if ((windowType[0].selectedIndex > 0) && trigger) {
			enableAttributeHandler(calcProfileButtonNext);
		}
	});

};

export default changeModalState;
