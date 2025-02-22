        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Add scroll animation for skill cards
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        document.querySelectorAll('.skill-card').forEach((card) => {
            observer.observe(card);
        });

        // CV download animation
        document.getElementById('cvButton').addEventListener('click', function(e) {
            this.style.animation = 'bounce 0.5s';
            
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });