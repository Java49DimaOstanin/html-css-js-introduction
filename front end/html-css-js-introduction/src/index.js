console.log("Launching script");
const anchors = document.querySelectorAll(".thumbnails-anchor");
const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsAudio = document.querySelector(".details-audio");
const mainClass = document.querySelector(".main-class");
const detailsContainer = document.querySelector(".details-container");
const HIDDEN = "hidden";
const IS_POINT = "is-point";


function playAudio() {
    setTimeout(function() {
    detailsAudio.play();
     }, 1);
}
function pauseAudio(msecs) {
    setTimeout(function() {
        detailsAudio.pause();
      }, msecs);
}


function setDetails(anchor) { 
    detailsImage.setAttribute("src" ,anchor.getAttribute("data-details-image"));
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
    pauseAudio(1);
    detailsAudio.setAttribute("src" ,anchor.getAttribute("data-details-audio"));

}

for(let i = 0;i < anchors.length;i++) {
    anchors[i].addEventListener("click",function(){
        console.log("event - click on ", anchors[i]);
        setDetails(anchors[i]);
        showDetails();
        
    })
}
function showDetails() {
    mainClass.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    },1);


    playAudio();
    pauseAudio(5000);
}
function hideDetails() {
    mainClass.classList.add(HIDDEN);
    pauseAudio();
}