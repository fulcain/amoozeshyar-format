// Importing the "convertFormat" function from the "../helpers/convertFormat.js" file
import convertFormat from "../helpers/convertFormat.js";

// Selecting the HTML element with ID "user-input"
const userInputEl = document.querySelector("#user-input");

// Selecting the HTML element with ID "copy-btn"
const copyBtn = document.querySelector("#copy-btn");

// Selecting the HTML element with ID "convert-btn"
const convertBtn = document.querySelector("#convert-btn");

// Selecting the HTML element with ID "new-value"
const newValueBtn = document.querySelector("#new-value");

// Selecting the HTML element with ID "converted-value"
const convertedValueEl = document.querySelector("#converted-value");

// Initializing the userInputValue variable with an empty string
let userInputValue = "";

// Attaching a "copyEventListener" event listener to the copyBtn element
copyEventListener(copyBtn);

// Attaching a "copyEventListener" event listener to the convertedValueEl element
copyEventListener(convertedValueEl);

// Attaching a "click" event listener to the convertBtn element
convertBtn.addEventListener("click", () => {
    if (userInputEl.value.length > 0) {
        // Assigning the value of userInputEl to userInputValue
        userInputValue = userInputEl.value;

        // Calling the convertFormat function with userInputValue and assigning its return value to the value property of convertedValueEl
        convertedValueEl.value = convertFormat(userInputValue);
    } else {
        // Displaying an alert if no value is entered in userInputEl
        alert("لطفا یک مقدار وارد کنید");
    }
});

// Attaching a "click" event listener to the newValueBtn element
newValueBtn.addEventListener("click", () => {
    // Clearing the value of userInputEl and convertedValueEl
    userInputEl.value = "";
    convertedValueEl.value = "";

    // Removing the "copied" class from convertedValueEl
    convertedValueEl.classList.remove("copied");
});

// Defining the copyEventListener function that attaches a "click" event listener to the clickedElement
function copyEventListener(clickedElement) {
    clickedElement.addEventListener("click", () => {
        if (convertedValueEl.value.length > 0) {
            // Copying the value of convertedValueEl to the clipboard
            navigator.clipboard.writeText(convertedValueEl.value);

            // Adding the "copied" class to convertedValueEl
            convertedValueEl.classList.add("copied");
        } else {
            // Displaying an alert if no value is converted in convertedValueEl
            alert("لطفا ابتدا تبدیل کنید");
        }
    });
}

// Selecting the HTML element with ID "input-box"
const formEl = document.querySelector("#input-box");

// Attaching a "submit" event listener to the formEl element
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
});
