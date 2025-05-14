   // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const closeMenu = document.querySelector('#closeMenu');
        const mobileMenu = document.querySelector('#mobileMenu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.mobile-menu .nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Digital Clock
        function updateClock() {
            const now = new Date();
            const options = { 
                timeZone: 'Asia/Dhaka',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true 
            };
            
            const timeString = now.toLocaleTimeString('en-US', options);
            document.getElementById('clock-time').textContent = timeString;
        }
        
        setInterval(updateClock, 1000);
        updateClock();
        
        // Fixed Digital Clock on Desktop
        function handleDigitalClockPosition() {
            const digitalClock = document.getElementById('digitalClock');
            const desktopNav = document.querySelector('.desktop-nav');
            
            if (window.innerWidth > 992) {
                // Desktop view - fixed position
                digitalClock.style.position = 'fixed';
                digitalClock.style.top = '15px';
                digitalClock.style.right = '20px';
                digitalClock.style.margin = '0';
            } else {
                // Mobile view - in navbar
                digitalClock.style.position = 'static';
                digitalClock.style.marginLeft = 'auto';
                digitalClock.style.marginRight = '15px';
            }
        }
        
        // Run on load and resize
        window.addEventListener('load', handleDigitalClockPosition);
        window.addEventListener('resize', handleDigitalClockPosition);
        
        // Banner Slider
        const slides = document.querySelectorAll('.banner-slide');
        const indicators = document.querySelectorAll('.indicator');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(indicator => indicator.classList.remove('active'));
            
            slides[index].classList.add('active');
            indicators[index].classList.add('active');
            currentSlide = index;
        }
        
        function nextSlide() {
            let next = currentSlide + 1;
            if (next >= slides.length) next = 0;
            showSlide(next);
        }
        
        // Set interval for auto slide change
        setInterval(nextSlide, 5000);
        
        // Add click event to indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
            });
        });
        
        // Live Viewers Counter
        function updateViewers() {
            const min = 200;
            const max = 500;
            const viewers = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('viewer-count').textContent = `${viewers}+ মানুষ এখন ওয়েবসাইটে রয়েছে`;
        }
        
        setInterval(updateViewers, 3000);
        updateViewers();
        
        // Image Preview Modal
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalClose = document.getElementById('modalClose');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const previewBtns = document.querySelectorAll('.preview-btn');
        
        // Open modal when clicking on gallery item or preview button
        galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                // Don't open if clicked on a button
                if (!e.target.classList.contains('gallery-btn')) {
                    const imgSrc = item.getAttribute('data-image');
                    modalImg.src = imgSrc;
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        previewBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const galleryItem = btn.closest('.gallery-item');
                const imgSrc = galleryItem.getAttribute('data-image');
                modalImg.src = imgSrc;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Close modal
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Download button functionality
        const downloadBtns = document.querySelectorAll('.download-btn');
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const galleryItem = btn.closest('.gallery-item');
                const imgSrc = galleryItem.getAttribute('data-image');
                const link = document.createElement('a');
                link.href = imgSrc;
                link.download = 'amerduniya-image.jpg';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        });