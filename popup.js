//popup.js
document.getElementById("autofill").addEventListener("click", async () => {
  const fileInput = document.getElementById("spreadsheetFile").files[0];
  if (fileInput) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const data = event.target.result;
      //Assuming CSV format for simplicity
      const row = Papa.parse(data, { header: true }).data;
      //Store parsed data in Chrome storage
      chrome.storage.local.set({ spreadsheetData: rows });
    };
    reader.readAsText(fileInput);
  }
});
