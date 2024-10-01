function toggleMenu() {
    var navbar = document.getElementById("navbar");
    var navList = navbar.querySelector(".nav-list");
    if (navList.className === "nav-list") {
        navList.className += " open";
    } else {
        navList.className = "nav-list";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website is loaded and ready.');
});
