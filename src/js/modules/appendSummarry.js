import tabs from "./tabs";

function appendSummarry(triggerSelector, childSiblingSelector, state, priceAdder) {

	const trigger = document.querySelector(triggerSelector),
				childSibling = document.querySelector(childSiblingSelector);

	let summarryDiv;

	let createSummaryTable = function (state) {
		if (!state["window-shape"]) {
			state["window-shape"] = 0;
		}

		let wShape;
		switch (state["window-shape"]) {

			case 0: wShape = "Прямое окно";
				break;

			case 1: wShape = "Z-образное";
				break;

			case 2: wShape = "Г-образное";
				break;

			case 3: wShape = "П-образное";
				break;

			default: wShape = "Форма окна не выбрана";
		}

		let wMaterial;
		switch (state["type-of-window"]) {

			case "tree": wMaterial = "Деревянное";
				break;

			case "aluminum": wMaterial = "Алюминиевое";
				break;

			case "plastic": wMaterial = "Пластиковое";
				break;

			case "french": wMaterial = "Панорамное";
				break;

			case "overhang": wMaterial = "Остекление с выносом";
				break;

			default: wMaterial = "Материал не выбран";
		}

		summarryDiv = document.createElement('table');
		summarryDiv.classList.add('summarry-table');

		summarryDiv.insertAdjacentHTML('afterbegin', `
				<tr>
				<td>Форма окна:</td><td>${wShape}
				</td>
				</tr>
				<tr>
				<td>Ширина:</td><td>${state["window-width"]} мм</td>
				</tr>
				<tr>
				<td>Высота:</td><td>${state["window-height"]} мм</td>
				</tr>
				<tr>
				<td>Тип остекления:</td><td>${wMaterial}</td>
				</tr>
				<tr>
				<td>Профиль:</td><td>${state["window-profile"].replace('ое', 'ый')}</td>
				</tr>
				`
		);

		childSibling.before(summarryDiv);
	};

	function tablePreRender(table) {
		if (table) {
			table.parentNode.removeChild(table);
		}
		summarryDiv = null;
	}

	trigger.addEventListener('click', function () {
		if (summarryDiv) {
			tablePreRender(summarryDiv);
		}
		createSummaryTable(state);
	});

	document.addEventListener('keydown', (e) => {
		if (e.code == 'Escape') {
			if (summarryDiv) {				
				tablePreRender(summarryDiv);
			}
		}
	});


	let test = document.querySelectorAll('[data-price]');
	test.forEach(i => {
		console.log('Here...');
		console.log(i.getAttribute('data-price'));
	});
	// console.dir(test);


}

export default appendSummarry;