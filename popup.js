//popup.js
//make the autofill element (button) clickable
document
  .getElementById("setLocalStorage")
  .addEventListener("click", async () => {
    // set fileInput to be the spreadsheetFile element> files property> first element of array
    // const fileInput = document.getElementById("spreadsheetFile").files[0];
    const fileInput = "hello world";
    //check if fileInput has any data and if so do the following
    if (fileInput) {
      alert("fileinput can be read" + JSON.stringify(fileInput));
      // create a new FileReader instance and name it "reader"
      const reader = new FileReader();
      //set the onload property of reader to below function
      reader.onload = function (event) {
        //get the event.target.result and save it as a variable called "data"
        const data = event.target.result;
        //Assuming CSV format for simplicity, parse "data" into an array of rows with headers.
        const rows = Papa.parse(data, { header: true }).data;
        //Store parsed data of all rows as variable "spreadsheetData" in Chrome Local Storage
        chrome.storage.local.set({ spreadsheetData: rows });
      };
      //now since we know a file input exists and we are only initializing reader in that case, saving code in memory, and increasing performance actually use reader to execute readastext function on file input
      reader.readAsText(fileInput);
    } else {
      alert("fileinput can't be read");
    }
  });
