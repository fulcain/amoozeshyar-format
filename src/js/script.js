import convertFormat from "../helpers/convertFormat.js";
// variables
const userInputEl = document.querySelector("#user-input"),
	copyBtn = document.querySelector("#copy-btn"),
	convertBtn = document.querySelector("#convert-btn"),
	newValueBtn = document.querySelector("#new-value"),
	convertedValueEl = document.querySelector("#converted-value");
let userInputValue = "";

// copy button
copyEvents(copyBtn);

// converted Value El
copyEvents(convertedValueEl);

// convert button
convertBtn.addEventListener("click", () => {
	if (userInputEl.value.length > 0) {
		getUserInput();
	} else {
		alert("لطفا یک مقدار وارد کنید");
	}
});

// new value
newValueBtn.addEventListener("click", () => {
	userInputEl.value = "";
	convertedValueEl.value = "";
	convertedValueEl.classList.remove("copied");
});

// TITLE: get user input
// gets user input and puts it in userInputValue variable
function getUserInput() {
	userInputValue = userInputEl.value;
	convertedValueEl.value = convertFormat(userInputValue);
}

// TITLE: copy text
function copyText() {
	navigator.clipboard.writeText(convertedValueEl.value);
	convertedValueEl.classList.add("copied");
}

// TITLE: copy events
// creates an event Listener for click and if
// convertedValueEl.value is not empty calls copyText() function
// parameters:
// clickedElement = the element that has been clicked
function copyEvents(clickedElement) {
	clickedElement.addEventListener("click", () => {
		if (convertedValueEl.value.length > 0) {
			copyText();
		} else {
			alert("لطفا ابتدا تبدیل کنید");
		}
	});
}

// Reset form
const formEl = document.querySelector("#input-box");
formEl.addEventListener("submit", (e) => {
	e.preventDefault();
});
