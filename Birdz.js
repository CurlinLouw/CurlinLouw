var slideIndex = 0;
showSlides();


function showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i=0; i<slides.length; i++){
        slides[i].style.display ="none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}

document.getElementsbyID("btn1").addEventListener("click", function(){
    var FirstChoice = document.getElementsbyID("FirstChoices");
    if(FirstChoice.style.display == "none"){
        FirstChoice.style.display = "block";
    }
    else {
        FirstChoice.style.display = "none";
    }
})