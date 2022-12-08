var options75 = {
    root: document.querySelector('#viewport'),
    rootMargin: '100% 0px 0px 0px',
    threshold: 0.75
};


var options65 = {
    root: document.querySelector('#viewport'),
    rootMargin: '100% 0px 0px 0px',
    threshold: 0.65
};

var options5 = {
    root: document.querySelector('#viewport'),
    rootMargin: '100% 0px 0px 0px',
    threshold: 0.5
};

var obj1 = false;
let callback1 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj1 = true;
        }
        entry.target.style.animation = obj1 ? "ps5png 1.5s 1 running" : "ps5png 1.5s 1 paused";
    });
};

var obj2 = false;
let callback2 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj2 = true;
        }
        document.getElementById("leftBlock-1").style.animation = obj2 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var obj3 = false;
let callback3 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj3 = true;
        }
        document.getElementById("rightBlock").style.animation = obj3 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
    });
};

var obj4 = false;
let callback4 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj4 = true;
        }
        document.getElementById("leftBlock-2").style.animation = obj4 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var obj5 = false;
let callback5 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj5 = true;
        }
        entry.target.style.animation = obj5 ? "ps5png 1.5s 1 running" : "ps5png 1.5s 1 paused";
    });
};

var obj6 = false;
let callback6 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj6 = true;
        }
        entry.target.style.animation = obj6 ? "ps5png 1.5s 1 running" : "ps5png 1.5s 1 paused";
    });
};

var obj7 = false;
let callback7 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj7 = true;
        }
        document.getElementById("startPsPlus").style.animation = obj7 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec20 = false;
let callbackSec20 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec20 = true;
        }
        document.getElementById("hard").style.animation = sec20 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
        document.getElementById("SSD").style.animation = sec20 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec21 = false;
let callbackSec21 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec21 = true;
        }
        document.getElementById("IO").style.animation = sec21 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
        document.getElementById("Haptic").style.animation = sec21 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec22 = false;
let callbackSec22 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec22 = true;
        }
        document.getElementById("Triggers").style.animation = sec22 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
        document.getElementById("Audio").style.animation = sec22 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec23 = false;
let callbackSec23 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec23 = true;
        }
        document.getElementById("rtx").style.animation = sec23 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
        document.getElementById("fps").style.animation = sec23 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec24 = false;
let callbackSec24 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec24 = true;
        }
        document.getElementById("4k").style.animation = sec24 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
        document.getElementById("HDR").style.animation = sec24 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec25 = false;
let callbackSec25 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec25 = true;
        }
        document.getElementById("PSGAME").style.animation = sec25 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
        document.getElementById("PSVR").style.animation = sec25 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var obj8 = false;
let callback8 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj8 = true;
        }
        document.getElementById("obj7").style.animation = obj8 ? "ps5png 1.5s 1 running" : "ps5png 1.5s 1 paused";
    });
};

var sec26 = false;
let callbackSec26 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec26 = true;
        }
        document.getElementById("block-ps5").style.animation = sec26 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var sec27 = false;
let callbackSec27 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec27 = true;
        }
        document.getElementById("block-ps5DE").style.animation = sec27 ? "rblock 1.5s 1 running" : "rblock 1.5s 1 paused";
    });
};

var sec28 = false;
let callbackSec28 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            sec28 = true;
        }
        document.getElementById("block-ps5-2").style.animation = sec28 ? "lblock 1.5s 1 running" : "lblock 1.5s 1 paused";
    });
};

var obj9 = false;
let callback9 = function(entries, observer){
    entries.forEach((entry) => {
        if (entry.isIntersecting == true)
        {
            obj9 = true;
        }
        document.getElementById("Acs").style.animation = obj9 ? "ps5png 1.5s 1 running" : "ps5png 1.5s 1 paused";
    });
};

var observer1 = new IntersectionObserver(callback1, options5);
var observer2 = new IntersectionObserver(callback2, options75);
var observer3 = new IntersectionObserver(callback3, options75);
var observer4 = new IntersectionObserver(callback4, options75);
var observer5 = new IntersectionObserver(callback5, options5);
var observer6 = new IntersectionObserver(callback6, options75);
var observer7 = new IntersectionObserver(callback7, options75);
var observerSec20 = new IntersectionObserver(callbackSec20, options5);
var observerSec21 = new IntersectionObserver(callbackSec21, options5);
var observerSec22 = new IntersectionObserver(callbackSec22, options5);
var observerSec23 = new IntersectionObserver(callbackSec23, options5);
var observerSec24 = new IntersectionObserver(callbackSec24, options5);
var observerSec25 = new IntersectionObserver(callbackSec25, options5);
var observer8 = new IntersectionObserver(callback8, options75);
var observerSec26 = new IntersectionObserver(callbackSec26, options65);
var observerSec27 = new IntersectionObserver(callbackSec27, options65);
var observerSec28 = new IntersectionObserver(callbackSec28, options65);
var observer9 = new IntersectionObserver(callback9, options75);

let target1 = document.getElementById("ps5img");
observer1.observe(target1);
let target2 = document.getElementById("section-2");
observer2.observe(target2);
let target3 = document.getElementById("section-3");
observer3.observe(target3);
let target4 = document.getElementById("section-4");
observer4.observe(target4);
let target5 = document.getElementById("pngh4");
observer5.observe(target5);
let target6 = document.getElementById("PSPlus");
observer6.observe(target6);
let target7 = document.getElementById("section-8");
observer7.observe(target7);
let targetSec20 = document.getElementById("section-19");
observerSec20.observe(targetSec20);
let targetSec21 = document.getElementById("section-20");
observerSec21.observe(targetSec21);
let targetSec22 = document.getElementById("section-21");
observerSec22.observe(targetSec22);
let targetSec23 = document.getElementById("section-22");
observerSec23.observe(targetSec23);
let targetSec24 = document.getElementById("section-23");
observerSec24.observe(targetSec24);
let targetSec25 = document.getElementById("section-24");
observerSec25.observe(targetSec25);
let target8 = document.getElementById("section-18");
observer8.observe(target8);
let targetSec26 = document.getElementById("section-25");
observerSec26.observe(targetSec26);
let targetSec27 = document.getElementById("section-26");
observerSec27.observe(targetSec27);
let targetSec28 = document.getElementById("section-27");
observerSec28.observe(targetSec28);
let target9 = document.getElementById("section-28");
observer9.observe(target9);
