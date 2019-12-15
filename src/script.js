function getCurrentProgress(){
	const firstDateOfYear = new Date(new Date().getFullYear(), 0, 1);
	const currentDate = new Date();
	return ((((currentDate - firstDateOfYear) / (1000 * 60 * 60 * 24)) * 100) / 365).toFixed(6);
}

function updateUI() {
	const percent = getCurrentProgress();

	const barItem = document.getElementsByClassName('bar')[0];
	barItem.style.width = `${percent}%`;

	const counterItem = document.getElementsByClassName('value')[0];
	counterItem.textContent = `${percent}%`;
	
	const currentYear = new Date().getFullYear();
	const yearTextItem = document.getElementsByClassName('current-year')[0];
	yearTextItem.textContent = currentYear;
	
	const currentDate = new Date();
	const dateItem = document.getElementsByClassName('current-date')[0];
	const options = {
		weekday: 'long',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute : 'numeric',
		second : 'numeric'
	};
	dateItem.textContent = currentDate.toLocaleDateString('en-US', options);
	
	// Show alert if percent is equal to zero
	if (Math.floor(percent) === 0){
		const alert = document.getElementsByClassName('alert')[0];
		alert.style.display = 'block';
	}
}

setInterval(function() {
	updateUI();
	return arguments.callee;
}(), 1000);