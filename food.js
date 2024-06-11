// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const navbar = document.getElementById('navbar');
const toggleBtn = document.createElement('div');
toggleBtn.classList.add('toggle-btn');
toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
navbar.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
    } else if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number');
    } else {
        // Submit the form if all validations pass
        this.submit();
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}
