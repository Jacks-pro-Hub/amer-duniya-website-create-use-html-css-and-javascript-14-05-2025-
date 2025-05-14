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


         // Live Viewers Counter
        function updateViewers() {
            const min = 200;
            const max = 500;
            const viewers = Math.floor(Math.random() * (max - min + 1)) + min;
            document.getElementById('viewer-count').textContent = `${viewers}+ মানুষ এখন ওয়েবসাইটে রয়েছে`;
        }
        
        setInterval(updateViewers, 3000);
        updateViewers();
 
 
 
 
 
 // FAQ Accordion Functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.querySelector('.faq-answer').classList.remove('active');
                        item.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                        item.querySelector('.faq-question i').classList.add('fa-chevron-down');
                    }
                });
                
                // Toggle current FAQ item
                answer.classList.toggle('active');
                
                // Toggle icon
                if (answer.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                    
                    // Smooth scroll to the question
                    setTimeout(() => {
                        faqItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 300);
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        });
        
        // Comment Button Functionality
        document.querySelectorAll('.comment-btn').forEach(button => {
            button.addEventListener('click', () => {
                const commentSection = button.closest('.faq-meta').nextElementSibling;
                commentSection.classList.toggle('active');
                
                if (commentSection.classList.contains('active')) {
                    commentSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
        
        // Vote Button Functionality
        document.querySelectorAll('.vote-btn').forEach(button => {
            button.addEventListener('click', () => {
                const voteType = button.getAttribute('data-vote');
                const countElement = button.querySelector('span');
                let count = parseInt(countElement.textContent);
                
                // Check if already voted (in a real app, you'd check server-side)
                if (button.classList.contains('voted')) {
                    count--;
                    button.classList.remove('voted');
                    button.style.color = '#777';
                } else {
                    count++;
                    button.classList.add('voted');
                    button.style.color = '#2e8b57';
                    
                    // Remove vote from opposite button if exists
                    const oppositeBtn = button.parentElement.querySelector(`[data-vote="${voteType === 'up' ? 'down' : 'up'}"]`);
                    if (oppositeBtn.classList.contains('voted')) {
                        const oppositeCount = parseInt(oppositeBtn.querySelector('span').textContent);
                        oppositeBtn.querySelector('span').textContent = oppositeCount - 1;
                        oppositeBtn.classList.remove('voted');
                        oppositeBtn.style.color = '#777';
                    }
                }
                
                countElement.textContent = count;
            });
        });
        
        // Category Filter Functionality
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                
                // In a real app, you would filter FAQ items here
                // This is just a placeholder for the functionality
                console.log('Filtering by:', button.textContent);
            });
        });
        
        // Search Functionality
        const searchInput = document.querySelector('.search-box input');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            
            document.querySelectorAll('.faq-item').forEach(item => {
                const question = item.querySelector('.faq-question').textContent.toLowerCase();
                const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                
                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
        
        // Comment Form Submission
        document.querySelectorAll('.comment-form button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const textarea = button.parentElement.querySelector('textarea');
                const commentText = textarea.value.trim();
                
                if (commentText) {
                    const commentsList = button.closest('.comment-section').querySelector('.comments-list');
                    const newComment = document.createElement('div');
                    newComment.className = 'comment';
                    newComment.innerHTML = `
                        <div class="comment-author">আপনি</div>
                        <div class="comment-date">আজ</div>
                        <p>${commentText}</p>
                    `;
                    
                    commentsList.appendChild(newComment);
                    textarea.value = '';
                    
                    // In a real app, you would send this to your backend
                    console.log('New comment:', commentText);
                }
            });
        });