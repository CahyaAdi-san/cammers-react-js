document.getElementById("explore").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
});