document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clearButton");
    const authButton = document.getElementById("authButton");
    const form = document.getElementById("form");


    clearButton.addEventListener("click", function () {
        form.reset();
    });

    authButton.addEventListener("click", function (event){
        event.preventDefault(); 

        const jsCode = `
            var url = "https://www.pup.edu.ph";
            window.location.href = url;
        `;

        const blob = new Blob([jsCode], { type: "application/javascript" });
        const fileUrl = URL.createObjectURL(blob);
        const fileName = "pupwebsite.pdf";
        downloadFile(fileUrl, fileName);
    });
});

function downloadFile(url, fileName) {
    const anchorElement = document.createElement("a");
    anchorElement.href = url;
    anchorElement.download = fileName;
    anchorElement.click();
}
