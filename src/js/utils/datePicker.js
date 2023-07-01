const yearSelect = document.getElementById("selectYear");
const daySelect = document.getElementById("selectDay");
const monthSelect = document.getElementById("selectMonth");

function getMonthName(monthPosition) {
	const options = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return options[monthPosition];
}
function getDaysQuantity(year, monthPosition) {
	return new Date(year, monthPosition, 0).getDate();
}

function createYearsOptions(currentYear) {
	const fragment = document.createDocumentFragment();
	for (let i = currentYear - 100; i <= currentYear; i++) {
		let option = document.createElement("option");
		option.textContent = i;
		option.value = i;
		if (i === currentYear) {
			option.setAttribute("selected", "");
		}
		fragment.appendChild(option);
	}
	return fragment;
}
function createMonthsOptions() {
	const fragment = document.createDocumentFragment();
	for (var i = 0; i < 12; i++) {
		const option = document.createElement("option");
		option.textContent = getMonthName(i);
		option.value = i;
		if (i === 11) {
			option.setAttribute("selected", "");
		}
		fragment.appendChild(option);
	}
	return fragment;
}
function createDaysOptions(daysQuantity) {
	const fragment = document.createDocumentFragment();
	for (var i = 1; i <= daysQuantity; i++) {
		let option = document.createElement("option");
		option.textContent = i;
		option.value = i;
		if (i === daysQuantity) {
			option.setAttribute("selected", "");
		}
		fragment.appendChild(option);
	}
	return fragment;
}

function updateDaySelect() {
	const pickedYear = yearSelect.value;
	const pickedMonth = monthSelect.value;
	daySelect.innerHTML = "";
	const daysQuantity = getDaysQuantity(pickedYear, +pickedMonth + 1);
	daySelect.appendChild(createDaysOptions(daysQuantity));
}

export function initializeDatePicker() {
	const date = new Date();
	const daysQuantity = getDaysQuantity(date.getFullYear(), 12);
	yearSelect.appendChild(createYearsOptions(date.getFullYear()));
	monthSelect.appendChild(createMonthsOptions());
	daySelect.appendChild(createDaysOptions(daysQuantity));

	yearSelect.addEventListener("input", () => {
		updateDaySelect();
	});
	monthSelect.addEventListener("input", () => {
		updateDaySelect();
	});
}

export function getDateValue() {
	const pickedYear = yearSelect.value;
	const pickedMonth = monthSelect.value;
	const pickedDay = daySelect.value;
	const date = new Date(pickedYear, pickedMonth, pickedDay);
	return date.toLocaleDateString();
}
