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

var observer1 = new IntersectionObserver(callback1, options5);
let target1 = document.getElementById("divStart");
observer1.observe(target1);

function AddW()
{
    document.getElementById("StartD").style.width = "70vw";
    document.getElementById("PSd").style.width = "70vw";
    document.getElementById("XBOXd").style.width = "70vw";
    document.getElementById("NinD").style.width = "70vw";
    document.getElementById("SteamD").style.width = "70vw";
}

function DelW()
{
    document.getElementById("StartD").style.width = "68vw";
    document.getElementById("PSd").style.width = "68vw";
    document.getElementById("XBOXd").style.width = "68vw";
    document.getElementById("NinD").style.width = "68vw";
    document.getElementById("SteamD").style.width = "68vw";
}
