window.onload = function() {

    const burger = document.querySelector(".navbar_burgerMenu");
    const menuList = document.querySelector(".navbar_menu")

    function toggleDisplay() {
        if (window.innerWidth <= 768) {
            menuList.classList.toggle('hide');
        }
    }

    burger.addEventListener("click", toggleDisplay);

}