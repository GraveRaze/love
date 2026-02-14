document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling or page transition logic can go here
    console.log("Romantic website loaded with love ❤️");

    // Example: Add a click event listener if not using standard <a> tag navigation
    // But for accessibility and simplicity, standard links are often best.
    // We can enhance the transition if needed.

    const nextBtn = document.querySelector('.btn-romantic');

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            // Optional: Add a fade-out effect before navigating
            e.preventDefault();
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                window.location.href = nextBtn.getAttribute('href');
            }, 500);
        });
    }

    // Fade-in effect on load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.8s ease-in';
    }, 100);
});
