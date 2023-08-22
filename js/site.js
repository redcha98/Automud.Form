// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

let tl = gsap.timeline({ paused: true });
let statusPCN = 0;

$(".navCTA").on("click", function () {
    if (statusPCN === 0) {
        gsap.to(".pcnMain", { opacity: 1, display: 'block', duration: 0.4 });
        statusPCN = 1;

    }
    else {
        gsap.to(".pcnMain", { opacity: 0, display: 'none', duration: 0.4 });
        statusPCN = 0;
    }
});

$(".pcnIcon").on("click", function () {
    if (statusPCN === 0) {
        gsap.to(".pcnMain", { opacity: 1, display: 'block', duration: 0.4 });
        gsap.to(".pcnMain", { opacity: 1, display: 'block', duration: 0.4 });
        statusPCN = 1;
    }
    else {
        gsap.to(".pcnMain", { opacity: 0, display: 'none', duration: 0.4 });
        gsap.to(".blurPCN", { webkitFilter: "blur(" + 0 + "px)" });
        statusPCN = 0;
    }
});
