let slideIndex = 1;
let slideTimer; // متغير لتخزين مؤقت التغيير التلقائي

showSlides(slideIndex);
startAutoSlide(); // بدء التغيير التلقائي عند تحميل الصفحة

function plusSlides(n) {
    clearTimeout(slideTimer); // مسح المؤقت الحالي عند التغيير اليدوي
    showSlides(slideIndex += n);
    startAutoSlide(); // إعادة بدء المؤقت بعد التغيير اليدوي
}

function currentSlide(n) {
    clearTimeout(slideTimer); // مسح المؤقت الحالي عند التغيير اليدوي
    showSlides(slideIndex = n);
    startAutoSlide(); // إعادة بدء المؤقت بعد التغيير اليدوي
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // تغيير الكلاس إلى mySlides
    let dots = document.getElementsByClassName("dot");

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
}

function startAutoSlide() {
    slideTimer = setTimeout(() => {
        plusSlides(1); // تغيير الشريحة كل 5 ثوانٍ
    }, 5000);
}

// Fixed Header functionality (اختياري، يمكن إضافته لجعل الهيدر يتقلص عند التمرير)
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".header").style.padding = "10px 3%";
        document.querySelector(".header .logo img").style.height = "60px";
    } else {
        document.querySelector(".header").style.padding = "15px 3%";
        document.querySelector(".header .logo img").style.height = "70px";
    }
}