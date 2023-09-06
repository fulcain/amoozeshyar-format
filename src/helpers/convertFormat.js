// Function to convert value format
function convertFormat(value) {
	const convertedValue = value.replace(/(\s|ک|ی)/gi, "%");
	return "%" + convertedValue + "%";
}

export default convertFormat;
