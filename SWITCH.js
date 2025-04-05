const navLinks = document.querySelectorAll('.navigation a[href^="#"]');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // remove #
        const targetPage = document.getElementById(targetId);

        if (targetPage) {
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            // Show target page
            targetPage.classList.add('active');

            // Remove 'active' class from all nav links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add 'active' to clicked link
            link.classList.add('active');
        }
    });
});