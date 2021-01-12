import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
// import appendSummarry from './modules/appendSummarry';


window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	let modalState = {};

	changeModalState(modalState);
	modals();
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
	forms(modalState);



	function appendSummarry(triggerSelector, childSiblingSelector, state) {

		const trigger = document.querySelectorAll(triggerSelector),
					childSibling = document.querySelector(childSiblingSelector);
		

		trigger.forEach(item => {
			item.addEventListener('click', () => {

				if (!state["window-shape"]) {
					state["window-shape"] = 0;
				}

				let summarryDiv = document.createElement('table');
				summarryDiv.classList.add('summarry-table');
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

					case "tree" : wMaterial = "Деревянное";
					break;

					case "aluminum" : wMaterial = "Алюминиевое";
					break;

					case "plastic" : wMaterial = "Пластиковое";
					break;

					case "french" : wMaterial = "Панорамное";
					break;

					case "overhang" : wMaterial = "Остекление с выносом";
					break;

					default: wMaterial = "Материал не выбран";
				}
				
				summarryDiv.insertAdjacentHTML('afterbegin',`
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

			});
		});
	}

	appendSummarry('.popup_calc_profile_button', '[data-cost]', modalState);
});

