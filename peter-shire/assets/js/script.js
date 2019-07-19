var navItem = document.getElementsByClassName("nav-item");
var navBar = document.getElementById("navbar");
var footer = document.getElementById("footer");
var current = document.getElementById("current");
var c = window.getComputedStyle(current).backgroundColor;
footer.style.backgroundColor = c;
navBar.style.backgroundColor = c;
var i;

for (i = 0; i < navItem.length; i++) {
    navItem[i].onmouseover = function (element) {
        for (i = 0; i < navItem.length; i++) {
            navItem[i].style.width = "18.75%";
        };
        this.style.width = "25%";
        var c = window.getComputedStyle(this).backgroundColor;
        footer.style.backgroundColor = c;
        navBar.style.backgroundColor = c;
    };
    navItem[i].onclick = function () {
        for (i = 0; i < navItem.length; i++) {
            navItem[i].style.width = "18.75%";
        };
        this.style.width = "25%";
    };
    navItem[i].onmouseout = function () {
        for (i = 0; i < navItem.length; i++) {
            navItem[i].style.width = "18.75%";
        };
        current.style.width = "25%";
        var c = window.getComputedStyle(current).backgroundColor;
        footer.style.backgroundColor = c;
        navBar.style.backgroundColor = c;}

};
