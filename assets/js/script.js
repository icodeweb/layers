if (document.body.getAttribute("data-page") === "home") {
    let headers = document.querySelectorAll(".header-wrapper")
    for (let headerIndex = 0; headerIndex < headers.length; headerIndex++) {
        const header = headers[headerIndex];
        header.style.opacity = headerIndex * 0.115;
    }
}
let grayscaleToggleElemnt = document.querySelector("#g-scaleToggle");
grayscaleToggleElemnt.addEventListener("click", () => {
    document.body.classList.toggle("grayscale");
    document.querySelector("html").style.backgroundColor = "#090988"
});