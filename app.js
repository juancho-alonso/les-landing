function navigate(id) {
    const dataId = id.getAttribute("data-id");
    document.getElementById(dataId).scrollIntoView({behavior: 'smooth'});
    document.getElementById(dataId).scrollTop -= 10;
    
};

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

label.insertAdjacentText('afterend', 'My Plain Text..');