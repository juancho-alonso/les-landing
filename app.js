window.onbeforeunload = function() {
    window.scrollTo(0, 0);
    initMap();
  }


document.getElementById("hamburger-icon").addEventListener("click", toggleMenu);
document.getElementById("menu-opaque").addEventListener("click", collapseMenu);


window.addEventListener('load', carousel);

var slideIndex = 0;

function carousel() {
    //dame todas las img
  var pictures = document.getElementsByClassName("pic-auto");
  var dots = document.getElementsByClassName("intro-section-dot");
  //que no se vea ninguna imagen
  for (i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";
    dots[i].style.backgroundColor = "#D0D0D0";
  }
  //sumame 1 al contador que me dice cuantas veces corri la funcion
  slideIndex++
  //si el contador de funcionjes es mauyor a la cant de img, resetealo
  if (slideIndex > pictures.length) {
      slideIndex = 1
    }
  //a la imagen en el array, en la posicion (valor del contador - 1) mostramela
  pictures[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.backgroundColor = "#3A3A3C";
  setTimeout(carousel, 3000); // Change image every 3 seconds
}


function toggleMenu(){
    var hamburgerMenu = document.getElementById("hamburger-menu");
    console.log(hamburgerMenu.style)
    if (hamburgerMenu.style.display === ""){
        hamburgerMenu.style.display = "block";
    } else if (hamburgerMenu.style.display === "block"){
        hamburgerMenu.style.display = "";
    }
}

function collapseMenu() {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.style.display = "";
}

function scrollBack() {
    document.getElementById(dataId).scrollTop = 100;
}

function navigate(id) {
    const dataId = id.getAttribute("data-id");
    var hamburgerMenu = document.getElementById("hamburger-menu");
    document.getElementById(dataId).scrollIntoView({behavior: 'smooth'});
    if (hamburgerMenu.style.display === "block"){
        hamburgerMenu.style.display = "";
    }
    
};

// -----------------   TOUR SLIDER   ------------------------------------------------------- 

document.getElementById("tours-right-arrow").addEventListener("click", slideTourLeft);
document.getElementById("tours-left-arrow").addEventListener("click", slideTourRight);
var sliderTour = document.getElementById("tours-slider-box");
var clicks = 0;
var viewportWidth = window.innerWidth;


function slideTourLeft(){
    clicks++;
    if (viewportWidth > 900 && clicks >= 3) {
        clicks = 3;
    } else if (viewportWidth > 420 && clicks >= 4){
            clicks = 4;
        } else if (viewportWidth < 420 && clicks >= 5){
            clicks = 5;
        } ;
    sliderTour.style.left = "-300" * clicks + "px";
}

function slideTourRight(){
    clicks--;
    if (viewportWidth > "420" && clicks <= 0){
        clicks = 0;
    } else if (viewportWidth < "420" && clicks <= 0){
        clicks = 0;
    };
    sliderTour.style.left = "-300" * clicks + "px";
}

// ------------------------------------------------------------------------------------------

//--------------------------SAFETY-SLIDER--------------------------------------------
document.getElementById("safety-right-arrow").addEventListener("click", slideTileLeft);
document.getElementById("safety-left-arrow").addEventListener("click", slideTileRight);
var sliderTile = document.getElementById("safety-slider-box");
var clicks = 0;
var viewportWidth = window.innerWidth;


function slideTileLeft(){
    clicks++;
    console.log(clicks)
    if (viewportWidth > 900 && clicks >= 3) {
        clicks = 3;
    } else if (viewportWidth < 900 && viewportWidth > 600 && clicks >= 4){
            clicks = 4;
        } else if (viewportWidth < 420 && clicks >= 5){
            clicks = 5;
        } ;
    sliderTile.style.left = "-255" * clicks + "px";
}

function slideTileRight(){
    clicks--;
    if (viewportWidth > "420" && clicks <= 0){
        clicks = 0;
    } else if (viewportWidth < "420" && clicks <= 0){
        clicks = 0;
    };
    sliderTile.style.left = "-255" * clicks + "px";
}

// ------------------------------------------------------------------------------------------

var inputs = document.getElementsByClassName("inputs");

function checkInputs(){
    for (i = 0; i < inputs.length; i++) {    
        if (inputs[i].value === ""){
            inputs[i].style.boxShadow = "0px 0px 2px 2px rgba(255,0,0,1)";
        } else if (inputs[i].value !== ""){
            inputs[i].style.boxShadow = "none";
        }
    }
}

var labels = document.getElementsByClassName('labels');

document.getElementById("send-btn").addEventListener("click", missingInfo);

function missingInfo() {
    for (i = 0; i < inputs.length; i++) {    
        if (inputs[i].value === ""){
           // labels[i].insertAdjacentText('afterend', "Please fill this field!");
        } else if (labels[i].value !== ""){
           // labels[i].removeChild(labels[i].childNodes[0]);
        }
    }
}

//--------------------- QUESTION TILES ---------------------------------------------

var questionTile = document.getElementsByClassName("question-tile");


for (i = 0; i < questionTile.length; i++) {

    questionTile[i].addEventListener("click", function() {
        let answerTile = document.getElementsByClassName("question-tile-shown");
        if (answerTile.length >= 1) {
            for (let i = 0; i < answerTile.length; i++) {
                answerTile[i].classList.add("question-tile");
                answerTile[i].classList.remove("question-tile-shown");
            }
            setTimeout(function(){ 
                this.classList.add("question-tile-shown");
         }, 1000);
            

        } else if (answerTile.length < 1){
            this.classList.add("question-tile-shown");
            this.classList.remove("question-tile");
    
        }
    
    })
}

//----------------------------------------------------------------------------------

//----------------------MAP-MEETING-POINT-------------------------------------------
function initMap() {
    var meetingPoint = {lat: -33.895241, lng: 151.274413}; 
    var map = new google.maps.Map(
        document.getElementById("meeting-map"), {zoom: 15, center: meetingPoint, disableDefaultUI: true});
    var marker = new google.maps.Marker({position: meetingPoint, map: map});
  }
//----------------------------------------------------------------------------------