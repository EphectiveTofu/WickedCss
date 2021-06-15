let donut = document.getElementById("donutMove");

let titleChange = document.getElementById("titleChange");

let btnRollRight = document.getElementById("btnRollRight");
let btnRollLeft = document.getElementById("btnRollLeft");
let btnZoomer = document.getElementById("btnZoomer");
let btnZoomOut = document.getElementById("btnZoomOut");
let btnRotation = document.getElementById("btnRotation");
let btnSideToSide = document.getElementById("btnSideToSide");
let btnHeartBeat = document.getElementById("btnHeartBeat");
let btnRotateIn = document.getElementById("btnRotateIn");
let btnRandom = document.getElementById("btnRandom")

let wickedCss = ["floater", "barrelRoll", "rollerRight", "rollerLeft", "heartBeat", "pulse", "rotation",
    "sideToSide", "zoomer", "zoomOut", "spinner", "wiggle", "shake", "pound", "slideUp", "slideDown",
    "slideRight", "slideLeft", "fadeIn", "fadeOut", "rotateInRight", "rotateInLeft", "rotateIn", "bounceIn"];

let cssSelected = Math.floor(Math.random() * wickedCss.length)



btnRollRight.addEventListener('click', function (e) {
    donut.className += " rollerRight"
    titleChange.innerText = "rollerRight"
});

btnRollLeft.addEventListener('click', function (e) {
    donut.className += " rollerLeft"
    titleChange.innerText = "rollerLeft"
});

btnZoomer.addEventListener('click', function (e) {
    donut.className += " zoomer"
    titleChange.innerText = "zoomer"
});

btnZoomOut.addEventListener('click', function (e) {
    donut.className += " zoomerOut"
    titleChange.innerText = "zoomerOut"
});

btnRotation.addEventListener('click', function (e) {
    donut.className += " rotation"
    titleChange.innerText = "rotation"
});

btnSideToSide.addEventListener('click', function (e) {
    donut.className += " sideToSide"
    titleChange.innerText = "sideToSide"
});
btnHeartBeat.addEventListener('click', function (e) {
    donut.className += " heartbeat"
    titleChange.innerText = "heartBeat"
});


btnRotateIn.addEventListener('click', function (e) {
    donut.className += " rotateIn"
    titleChange.innerText = "rotateIn"
});

btnRandom.addEventListener('click', function (e) {
    donut.className = wickedCss[cssSelected]
   
});


function AutoRefresh(t) {
    setTimeout("location.reload(true);", t)
};






