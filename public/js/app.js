let $ = document;

const closeMenuBarIcon = $.querySelector(".close-menuBar");
const menuBar = $.querySelector(".menuBar");
const menuBarIcon = $.querySelector(".menuBarIcon");
const overLay = $.querySelector(".overLay");

const showMenuBar = () => {
    menuBar.classList.remove(
        "invisible",
        "opacity-0",
        "translate-x-full"
    );

    menuBar.classList.add(
        "visible",
        "opacity-100",
        "translate-x-0"
    );

    overLay.classList.remove("invisible", "opacity-0");
};

const hideMenuBar = () => {
    menuBar.classList.add(
        "invisible",
        "opacity-0",
        "translate-x-full"
    );

    menuBar.classList.remove(
        "visible",
        "opacity-100",
        "translate-x-0"
    );

    overLay.classList.add("invisible", "opacity-0");
};
overLay.addEventListener("click",hideMenuBar)
closeMenuBarIcon.addEventListener("click", hideMenuBar);
menuBarIcon.addEventListener("click", showMenuBar);