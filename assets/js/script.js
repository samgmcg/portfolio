var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");
var third = document.getElementsByClassName("third");
var fourth = document.getElementsByClassName("fourth");
var fifth = document.getElementsByClassName("fifth");
var sixth = document.getElementsByClassName("sixth");
var i = 0;

document.getElementById("seventh-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 0;
        second[i].style.opacity = 0;
        third[i].style.opacity = 0;
        fourth[i].style.opacity = 0;
        fifth[i].style.opacity = 0;
        sixth[i].style.opacity = 0;
    }

}, false);
document.getElementById("sixth-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 0;
        second[i].style.opacity = 0;
        third[i].style.opacity = 0;
        fourth[i].style.opacity = 0;
        fifth[i].style.opacity = 0;
        sixth[i].style.opacity = 1;
    }


}, false);
document.getElementById("fifth-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 0;
        second[i].style.opacity = 0;
        third[i].style.opacity = 0;
        fourth[i].style.opacity = 0;
        fifth[i].style.opacity = 1;
        sixth[i].style.opacity = 1;
    }


}, false);
document.getElementById("fourth-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 0;
        second[i].style.opacity = 0;
        third[i].style.opacity = 0;
        fourth[i].style.opacity = 1;
        fifth[i].style.opacity = 1;
        sixth[i].style.opacity = 1;
    }


}, false);
document.getElementById("third-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 0;
        second[i].style.opacity = 0;
        third[i].style.opacity = 1;
        fourth[i].style.opacity = 1;
        fifth[i].style.opacity = 1;
        sixth[i].style.opacity = 1;
    }


}, false);
document.getElementById("second-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 0;
        second[i].style.opacity = 1;
        third[i].style.opacity = 1;
        fourth[i].style.opacity = 1;
        fifth[i].style.opacity = 1;
        sixth[i].style.opacity = 1;
    }


}, false);
document.getElementById("first-slide").addEventListener("click", function () {
    "use strict";
    for (i = 0; i < 11; i++) {
        first[i].style.opacity = 1;
        second[i].style.opacity = 1;
        third[i].style.opacity = 1;
        fourth[i].style.opacity = 1;
        fifth[i].style.opacity = 1;
        sixth[i].style.opacity = 1;
    }


}, false);