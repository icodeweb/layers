if (document.body.getAttribute("data-page") === "home") {
    let headers = document.querySelectorAll(".header-wrapper")
    for (let headerIndex = 0; headerIndex < headers.length; headerIndex++) {
        const header = headers[headerIndex];
        header.style.opacity = headerIndex * 0.115;
        // header.style.opacity = headerIndex / (headers.length - 1);
        // header.style.backgroundColor = `rgba(0, 0, 255, ${header.style.opacity})`;
    }
}

// let monoColorElemnts = document.querySelectorAll(".theme-bg");
// let grayscaleToggleElemnt = document.createElement("button");
let grayscaleToggleElemnt = document.querySelector("#g-scaleToggle");
// grayscaleToggleElemnt.id = "g-scaleToggle";
// grayscaleToggleElemnt.innerText = "gray scale"

// let grayscaleToggleIcon = document.createElement("img");
// grayscaleToggleIcon.src = "/assets/img/grayscale.png";

// grayscaleToggleElemnt.appendChild(grayscaleToggleIcon)
// document.body.prepend(grayscaleToggleElemnt);

grayscaleToggleElemnt.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    document.body.classList.toggle("grayscale");
});

