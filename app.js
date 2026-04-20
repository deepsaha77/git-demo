let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
    if(body.style.backgroundColor !== "black") {
        body.style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "white";
    };
});