

//this section will allow user to change the app light to dark theme
// const themeSwitcher = document.querySelector("#theme-switcher");
// const themeSection = document.querySelector(".section-1");
// const mode ="dark";

// themeSection.addEventListener("click", ()=>{
//     if (mode ==="dark"){
//         mode = "light";
//         themeSection.setAttribute("class","light");
//     }else{
//         mode="dark";
//         themeSection.setAttribute("class","dark");
//     }
// });

function toggle() {
    var sec = document.getElementById('sec');
    var nav = document.getElementById('navigation');
    sec.classList.toggle('active');
    nav.classList.toggle('active');
}




// confirm("Hello! Welcome to my Portfolio Page !")
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset, navbar.offsetTop);
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")

    }
});




