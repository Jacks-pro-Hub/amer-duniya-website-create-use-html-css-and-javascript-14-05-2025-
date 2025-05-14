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
        
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
            const contactForm = document.getElementById('contactForm');
            const overlay = document.getElementById('overlay');
            const closeBtn = document.getElementById('closeBtn');
            const uploadArea = document.getElementById('uploadArea');
            const imageInput = document.getElementById('image');
            const preview = document.getElementById('preview');
            
            // Image upload and preview
            uploadArea.addEventListener('click', function(e) {
                if (e.target !== imageInput) {
                    imageInput.click();
                }
            });
            
            imageInput.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        preview.src = e.target.result;
                        preview.style.display = 'block';
                        uploadArea.querySelector('p').textContent = file.name;
                    }
                    
                    reader.readAsDataURL(file);
                }
            });
            
            // Drag and drop functionality
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.style.borderColor = '#2e7d32';
                this.style.background = '#e8f5e9';
            });
            
            uploadArea.addEventListener('dragleave', function() {
                this.style.borderColor = '#ccc';
                this.style.background = '#e8f5e9';
            });
            
            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                this.style.borderColor = '#ccc';
                this.style.background = '#e8f5e9';
                
                if (e.dataTransfer.files.length) {
                    imageInput.files = e.dataTransfer.files;
                    const event = new Event('change');
                    imageInput.dispatchEvent(event);
                }
            });
            
            // Form submission
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would normally send the form data to a server
                // For this example, we'll just show the success message
                
                // Simulate loading delay
                setTimeout(function() {
                    overlay.classList.add('active');
                }, 800);
            });
            
            // Close overlay
            closeBtn.addEventListener('click', function() {
                overlay.classList.remove('active');
                contactForm.reset();
                preview.style.display = 'none';
                uploadArea.querySelector('p').textContent = 'ছবি আপলোড করতে ক্লিক করুন বা ছবিটি এখানে ড্রপ করুন';
            });
        });