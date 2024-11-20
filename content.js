//content.js
chrome.storage.local.get("spreadsheetData", ({ spreadsheetData }) => {
  if (spreadsheetData) {
    //Assuming spreadsheetData is an array of objects with key-value pairs
    spreadsheetData.forEach((row) => {
      //Example: Autofill fields by matching IDs or names
      for (let [field, value] of Object.entries(row)) {
        let inputField = document.querySelector(
          `[name="${field}"], [id="${field}"]`
        );
      }
    });
  }
});
