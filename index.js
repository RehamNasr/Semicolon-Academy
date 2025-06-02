let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
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

    // إضافة أنيميشن "fade-in" عند عرض الشريحة
    slides[slideIndex - 1].classList.remove('fade-in'); // إزالة لتشغيلها مرة أخرى
    void slides[slideIndex - 1].offsetWidth; // إعادة تشغيل الأنميشن
    slides[slideIndex - 1].classList.add('fade-in');
}

// التحكم التلقائي بالسلايدر
let autoSlideInterval = setInterval(() => {
    plusSlides(1);
}, 5000); // كل 5 ثوانٍ

// إيقاف التمرير التلقائي عند التفاعل مع الأزرار
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => { plusSlides(1); }, 5000);
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => { plusSlides(1); }, 5000);
});

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => { plusSlides(1); }, 5000);
    });
});


// Intersection Observer for scroll-reveal animations
const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // قللي القيمة لتفعيل أسرع (مثلاً 0.1 بدلاً من 0.2)
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // توقف المراقبة بعد ظهور العنصر مرة واحدة
        }
    });
}, observerOptions);

// العناصر التي نريد تطبيق تأثير الظهور عليها
const sectionsToAnimate = document.querySelectorAll(
    '.about-section, .main-courses, .course-card, .about-us-section, .contact-section, .footer'
);

sectionsToAnimate.forEach(section => {
    observer.observe(section);
});

// **إضافة هذا الجزء الجديد:**
// تحقق من العناصر المرئية بالفعل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    sectionsToAnimate.forEach(section => {
        // إذا كان العنصر مرئيًا بالفعل (أو جزء منه)، قم بتفعيله مباشرة
        if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom > 0) {
            section.classList.add('visible');
            // يمكنك إزالة العنصر من المراقبة هنا إذا أردت
            // observer.unobserve(section);
        }
    });
});