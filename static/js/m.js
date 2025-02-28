// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');
const words = [
    'Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'Web Developer'
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isEnd = false;

function type() {
    isEnd = false;
    const currentWord = words[wordIndex];
    
    if(isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Speed control
    let typeSpeed = isDeleting ? 50 : 100;
    
    // If word is complete
    if(!isDeleting && charIndex === currentWord.length) {
        isEnd = true;
        isDeleting = true;
        typeSpeed = 1000; // Delay before starting to delete
    } else if(isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        if(wordIndex === words.length) {
            wordIndex = 0;
        }
        typeSpeed = 500; // Delay before typing next word
    }

    setTimeout(type, typeSpeed);
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if(typingText) {
        setTimeout(type, 1000);
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll to section
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Project Card Hover Animation
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Skills Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.skills-tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll('.progress');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.parentElement.dataset.progress;
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => observer.observe(bar));

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('checkbox');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeSwitch.checked = savedTheme === 'dark';

    // Theme switch event listener
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Update the typing animation
document.addEventListener('DOMContentLoaded', () => {
    const roles = [ 
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer'
    ];
    
    const roleText = document.querySelector('.role-text');
    let currentIndex = 0;

    function updateRole() {
        roleText.textContent = roles[currentIndex];
        currentIndex = (currentIndex + 1) % roles.length;
    }

    // Initial text
    updateRole();

    // Update timing matches CSS animation
    setInterval(updateRole, 8000 / 3);
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll to section
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        const percent = item.getAttribute('data-percent');
        const percentFill = item.querySelector('.percent-fill');
        
        // Set the CSS variable for the percentage
        percentFill.style.setProperty('--percent', `${percent}%`);
    });
});

// Add this to your existing script.js
document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    const typed = new Typed('.typed-text', {
        strings: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const imageWrapper = document.querySelector('.image-wrapper');
    const profileImages = document.querySelectorAll('.profile-img');
    let currentImageIndex = 0;
    const interval = 10000; // 10 seconds

    // Function to switch images
    function switchImage() {
        // Remove active class from all images
        profileImages.forEach(img => img.classList.remove('active'));
        
        // Update current image index
        currentImageIndex = (currentImageIndex + 1) % profileImages.length;
        
        // Add active class to next image
        profileImages[currentImageIndex].classList.add('active');
        
        // Reset and restart progress bar animation
        imageWrapper.classList.remove('animating');
        void imageWrapper.offsetWidth; // Trigger reflow
        imageWrapper.classList.add('animating');
    }

    // Start automatic switching
    function startAutoSwitch() {
        // Add initial animating class
        imageWrapper.classList.add('animating');
        
        // Set interval for switching
        setInterval(switchImage, interval);
    }

    // Start the automatic switching
    startAutoSwitch();
});