document.addEventListener('DOMContentLoaded', function() {
    const skillDisplay = document.getElementById('skill-display');
    const skillShuffle = document.getElementById('skill-shuffle');

    function getRandomSkill() {
        fetch('/get_skill')
            .then(response => response.json())
            .then(data => {
                skillDisplay.innerHTML = `${data.name}: ${data.level}%`;
                skillDisplay.style.width = `${data.level}%`;
            });
    }

    skillShuffle.addEventListener('click', getRandomSkill);
    getRandomSkill(); // Initial skill display

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});