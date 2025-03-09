const links = document.querySelectorAll('.styled-link');

links.forEach(link => {
    link.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});