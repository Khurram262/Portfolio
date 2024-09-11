document.addEventListener('DOMContentLoaded', function() {
    const downloadCVBtn = document.getElementById('downloadCV');

    downloadCVBtn.addEventListener('click', function() {
        // Trigger bounce animation
        downloadCVBtn.classList.add('bounce');
        setTimeout(function() {
            downloadCVBtn.classList.remove('bounce');
        }, 1000);

        document.getElementById('downloadCV').addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = 'file:///C:/Users/LENOVO/Documents/cv/resume_muhammad_khurram.pdf'; // Ensure this path is correct
            link.download = 'Muhammad_Khurram_CV.pdf';
            link.click();
        });
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the 'active' class on nav-links when menu-toggle is clicked
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');

        // Optionally toggle the icon from bars to times
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close the menu when a navigation link is clicked (optional)
    const navLinkItems = document.querySelectorAll('.nav-links li a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');

                // Revert the icon back to bars
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
});




