// Inisialisasi Typed.js untuk efek mengetik
const typed = new Typed('.multiple-text', {
    // Teks yang akan ditampilkan secara bergantian
    strings: ['Cyber Security Enthusiast', 'Web Developer', 'Mahasiswa Teknik Informatika'],
    
    // Kecepatan mengetik (dalam milidetik)
    typeSpeed: 100,

    // Kecepatan menghapus (dalam milidetik)
    backSpeed: 100,

    // Jeda sebelum mulai menghapus
    backDelay: 1000,

    // Mengulang animasi secara terus menerus
    loop: true
});

/* ===== SCROLL SECTIONS & ACTIVE LINK ===== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Fungsi untuk membuka/tutup menu di mobile
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Mengganti ikon bars menjadi X
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

    /* ===== STICKY NAVBAR & REMOVE TOGGLE ICON ===== */
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Menutup menu jika user scroll
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};