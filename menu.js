"use strict"

const body = document.body;
const bgColorsBody = ["#3333"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
const menuItems = menu.querySelectorAll (".menu_item");
const menuBorder - menu.querySelector (".menu_border")
let activeItem = menu.querySelector (".active")

function clickItem(item, index){
    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }
    
    item.class.list.add("active");
    body.style.backgroundColor = brColorsBody[index];
    activeItem = item;
    offsetMeniBorder(activeItem, menuBorder);
}
function offsetMenuBorder(Element, menuBorder) {
    const offsetActiveItem = Element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width)/2) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);
menuItems.forEach((item, index) =>{
    item.addEventListener('click', () => clickItem(item, index));
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});