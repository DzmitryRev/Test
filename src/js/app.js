import { getDateValue, initializeDatePicker } from "./utils/datePicker.js";
import * as testWebp from "./utils/testWebp.js";

testWebp.isWebp();

document.addEventListener("DOMContentLoaded", () => {
	initializeDatePicker();
});

// const form = document.querySelector("form");
// const submitter = document.querySelector("input[type=submit]");

// document.querySelector("form").addEventListener("submit", function (event) {
// 	event.preventDefault();
// 	// const data = new FormData(form);

// 	// let name = data.get("firstName");
// 	// let email = data.get("email");
// 	// let gender = data.get("gender");

// 	// let date = getDateValue();
// });
