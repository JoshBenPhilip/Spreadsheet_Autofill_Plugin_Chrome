//content.js
// get spreadsheetData variable from chrome local storage
chrome.storage.local.get("spreadsheetData", ({ spreadsheetData }) => {
  // if "spreadsheetData" variable actually exists in local storage and has content do the below
  if (spreadsheetData) {
    //Assuming spreadsheetData is an array of objects with key-value pairs, loop through each row
    spreadsheetData.forEach((row) => {
      //Example: Autofill fields by matching IDs or names
      // loop through each field and value in current row
      for (let [field, value] of Object.entries(row)) {
        //Identify the input field in the webpage that corresponds to the a field in the spreadsheet, eg. find element in the DOM that has "name" or "id" property matching "field" from spreadsheet, save as a variable called inputField
        let inputField = document.querySelector(
          `[name="${field}"], [id="${field}"]`
        );
      }
    });
  }
});
