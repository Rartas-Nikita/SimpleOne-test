var logos = document.querySelectorAll(".menu__burger");
var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector(".menu");
var main = document.querySelector(".main");

logos.forEach(function (logo) {
    logo.addEventListener("click", function () {
        menu.classList.toggle("active");
        sidebar.classList.toggle("active");
        main.classList.toggle("active");

        logo.querySelector('img').src = sidebar.classList.contains("active")
            ? "/images/menu-inactive.svg"
            : "/images/menu.svg";
    });
});






