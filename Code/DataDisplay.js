// DataDisplay.js

// Function to display the returned JSON data in a readable, structured way
function displayData(data) {
    console.log("Displaying returned data:");
    console.log(JSON.stringify(data, null, 2)); // Pretty print JSON data
}

// Exporting function for external use
module.exports = {
    displayData
};
