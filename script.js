// George Yang Portfolio - Interactive JavaScript

// ============================================
// NAVIGATION & SCROLL HANDLING
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const navItems = document.querySelectorAll('.nav-item');
    const navIndicator = document.getElementById('navIndicator');
    const sections = document.querySelectorAll('section[id]');

    // Track scroll for header shadow effect
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add shadow to header when scrolled
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Update active navigation based on scroll position
        updateActiveNavigation();

        lastScroll = currentScroll;
    });

    // ============================================
    // ACTIVE NAVIGATION INDICATOR
    // ============================================

    function updateActiveNavigation() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');

            if (item.getAttribute('data-section') === currentSection) {
                item.classList.add('active');
                updateIndicator(item);
            }
        });
    }

    // Update navigation indicator position
    function updateIndicator(activeItem) {
        if (!activeItem) {
            const firstItem = document.querySelector('.nav-item.active');
            activeItem = firstItem || navItems[0];
        }

        const itemRect = activeItem.getBoundingClientRect();
        const navRect = activeItem.parentElement.getBoundingClientRect();

        navIndicator.style.width = itemRect.width + 'px';
        navIndicator.style.left = (itemRect.left - navRect.left) + 'px';
    }

    // Initialize indicator position
    setTimeout(() => {
        const activeItem = document.querySelector('.nav-item.active');
        if (activeItem) {
            updateIndicator(activeItem);
        }
    }, 100);

    // Update indicator on window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            const activeItem = document.querySelector('.nav-item.active');
            if (activeItem) {
                updateIndicator(activeItem);
            }
        }, 250);
    });

    // ============================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ============================================

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active class immediately
                navItems.forEach(navItem => navItem.classList.remove('active'));
                this.classList.add('active');
                updateIndicator(this);
            }
        });
    });

    // ============================================
    // FADE-IN ANIMATION ON SCROLL
    // ============================================

    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeObserver.observe(element);
    });

    // ============================================
    // SKILL PROGRESS ANIMATION
    // ============================================

    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';

                setTimeout(() => {
                    bar.style.width = width;
                }, 100);

                skillObserver.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // ============================================
    // PROJECT CARD INTERACTIONS
    // ============================================

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ============================================
    // FOOTER LINK SMOOTH SCROLL
    // ============================================

    const footerLinks = document.querySelectorAll('.footer-link');

    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ============================================
    // EXTERNAL LINKS - OPEN IN NEW TAB
    // ============================================

    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach(link => {
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ============================================
    // TYPING EFFECT FOR HERO (OPTIONAL)
    // ============================================

    // Uncomment below to enable typing effect on hero tagline
    /*
    const heroTagline = document.querySelector('.hero-tagline');
    const originalText = heroTagline.textContent;
    heroTagline.textContent = '';

    let charIndex = 0;

    function typeText() {
        if (charIndex < originalText.length) {
            heroTagline.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        }
    }

    setTimeout(typeText, 500);
    */

    // ============================================
    // CONSOLE MESSAGE
    // ============================================

    console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #3350b4;');
    console.log('%cThanks for checking out my portfolio.', 'font-size: 14px; color: #495057;');
    console.log('%cBuilt with vanilla JavaScript, HTML, and CSS.', 'font-size: 12px; color: #868e96;');

    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================

    document.addEventListener('keydown', function(e) {
        // Navigate sections with arrow keys (optional feature)
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const activeNav = document.querySelector('.nav-item.active');
            if (!activeNav) return;

            const allNavItems = Array.from(navItems);
            const currentIndex = allNavItems.indexOf(activeNav);

            let newIndex;
            if (e.key === 'ArrowDown') {
                newIndex = Math.min(currentIndex + 1, allNavItems.length - 1);
            } else {
                newIndex = Math.max(currentIndex - 1, 0);
            }

            if (newIndex !== currentIndex && !e.shiftKey) {
                // Only trigger if not selecting text
                e.preventDefault();
                allNavItems[newIndex].click();
            }
        }
    });

    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================

    // Lazy load images when they come into view (if images are added)
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ============================================
    // INITIAL SETUP COMPLETE
    // ============================================

    console.log('%c✓ Portfolio initialized successfully', 'color: #51cf66; font-weight: bold;');
});
