const typed = new Typed('.multiple-text', {
    strings: ['Cyber Security Enthusiast', 'Web Developer', 'Mahasiswa Teknik Informatika'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

const slides = document.querySelectorAll('.project-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const showcaseContainer = document.querySelector('.projects-showcase');

let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.remove('active-slide');
    });

    slides[index].style.display = 'flex';
    slides[index].classList.add('active-slide');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 7000);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    stopAutoPlay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    stopAutoPlay();
});

showcaseContainer.addEventListener('mouseenter', stopAutoPlay);
showcaseContainer.addEventListener('mouseleave', startAutoPlay);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    startAutoPlay();
});

const themeIcon = document.querySelector('#theme-icon');

themeIcon.onclick = () => {
    // Ganti ikon antara bulan dan matahari
    if (themeIcon.querySelector('i').classList.contains('fa-moon')) {
        themeIcon.querySelector('i').classList.remove('fa-moon');
        themeIcon.querySelector('i').classList.add('fa-sun');
    } else {
        themeIcon.querySelector('i').classList.remove('fa-sun');
        themeIcon.querySelector('i').classList.add('fa-moon');
    }
    
    // Tambahkan atau hapus class 'dark-mode' dari body
    document.body.classList.toggle('dark-mode');

    // Simpan pilihan tema pengguna
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};

// Cek tema yang tersimpan saat halaman dimuat
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.querySelector('i').classList.remove('fa-moon');
        themeIcon.querySelector('i').classList.add('fa-sun');
    }
};