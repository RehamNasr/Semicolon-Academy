let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides_fade");
    let dots = document.getElementsByClassName("dot");
    let captionText = document.getElementById("slide-content");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
setTimeout(() => {
    showSlides(slideIndex+1)
}, 200);