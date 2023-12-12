function toggleMenu(){
    // customizing menu-links with this
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".ham-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}