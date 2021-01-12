const appendSummarry = () => {
	function append(triggerSelector, childSibling, state) {

		const trigger = document.querySelectorAll(triggerSelector);

		trigger.forEach(item => {
			item.addEventListener('click', () =>{
				console.log('ffff');
				console.log(childSibling);
			});
		});
	}
};

export default appendSummarry;