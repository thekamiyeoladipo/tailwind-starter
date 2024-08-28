const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuClose = document.getElementById('menu-close');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('menu-open');
            mobileMenu.classList.toggle('menu-closed');
        });

        menuClose.addEventListener('click', () => {
            mobileMenu.classList.toggle('menu-open');
            mobileMenu.classList.toggle('menu-closed');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                mobileMenu.classList.add('menu-closed');
                mobileMenu.classList.remove('menu-open');
            }
        });