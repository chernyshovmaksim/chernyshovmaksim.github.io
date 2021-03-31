require("mmenu-light");

const menu = new MmenuLight(
    document.querySelector(".mobile-nav"),
    "(max-width: 1080px)"
);

const navigator = menu.navigation({
    // options
    title: "Вывоз мусора Новосибирск"
});

const drawer = menu.offcanvas({
    // options
});

document.querySelector(".hamburger")
    .addEventListener("click", (event) => {
        event.preventDefault();
        drawer.open();
    });