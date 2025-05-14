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
 
 
 
 // Review Form Submission
        document.getElementById('reviewForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('আপনার রিভিউ জমা দেওয়া হয়েছে! ধন্যবাদ!');
            this.reset();
        });
        
        // Help Desk Form Submission
        document.getElementById('helpdeskForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
            this.reset();
        });
        
        // Google Map Integration
        function initMap() {
            // This is a placeholder for actual Google Maps API implementation
            // In a real implementation, you would use the Google Maps JavaScript API
            const mapContainer = document.getElementById('map');
            mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.063620586456!2d90.3847653154309!3d23.7465700845911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sFarmgate%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
        }
        
        // Initialize map when page loads
        window.onload = initMap;
        
        // Dynamic Slider for Reviews (placeholder functionality)
        // In a real implementation, you would fetch reviews from a database
        setInterval(function() {
            // This would cycle through different reviews in a real implementation
            console.log('Rotating reviews...');
        }, 5000);


         // Live Viewers Counter
        function updateViewers() {
            const min = 200;
            const max = 500;
            const viewers = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('viewer-count').textContent = `${viewers}+ মানুষ এখন ওয়েবসাইটে রয়েছে`;
        }
        
        setInterval(updateViewers, 3000);
        updateViewers();