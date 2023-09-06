let copyValueBtn;
let termHeaders;
let convertedValue = "";

// Importing the termData object from the data.js file
import { termData } from "../../js/data.js";

// Event listener for the "DOMContentLoaded" event
window.addEventListener("DOMContentLoaded", init);

// Initialization function
function init() {
	createTerms();

	copyValueBtn = document.querySelectorAll(".copy-value");
	termHeaders = document.querySelectorAll(".term-header");

	// Adding click event listeners to term headers
	termHeaders.forEach((header) => {
		header.addEventListener("click", toggleLesson);
	});

	// Adding click event listeners to copy buttons
	copyValueBtn.forEach((copyEl) => {
		copyEl.addEventListener("click", convertAndCopyValue);
	});
}

// Function to create terms
function createTerms() {
	termData.forEach((term) => {
		const { elementToAddTo: elementId, data } = term;

		const parentElement = document.querySelector(elementId).children[1];

		data.forEach((value) => {
			parentElement.innerHTML += createLessonTemplate(value);
		});
	});
}

// Function to toggle lesson visibility
function toggleLesson() {
	const nextSibling = this.nextElementSibling;
	const rotateIcon = this.children[0];

	nextSibling.classList.toggle("hide");
	rotateIcon.classList.toggle("rotateUp");
}

// Function to convert and copy values
function convertAndCopyValue() {
	const copyEl = this;
	const textContent = copyEl.previousElementSibling.textContent;
	convertedValue = convertFormat(textContent);

	navigator.clipboard.writeText(convertedValue);
	copyEl.classList.add("copied");

	setTimeout(function () {
		copyEl.classList.remove("copied");
	}, 2000);
}

// Function to convert value format
function convertFormat(value) {
	const convertedValue = value.replace(/(\s|ک|ی)/gi, "%");
	return "%" + convertedValue + "%";
}

// Function to create lesson template
function createLessonTemplate(lessonName) {
	return `
  <p class="each-lesson-box">
    <span class="ms-3">${lessonName}</span>
    <span class="copy-value">کپی</span>
  </p>`;
}
