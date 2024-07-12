document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

// Smooth scrolling
document

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Basic form validation
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var captcha = document.getElementById('captcha').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Additional validation for email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Form submission logic (e.g., send data to server or show success message)
    alert('Form submitted successfully!');
});
// Form submission logic (e.g., send data to server or show success message)
alert('Form submitted successfully!');

// Clear form fields
document.getElementById('contact-form').reset();
<a href="C:\Users\Niraj\OneDrive\Portfolio\Niraj_resume Bsc IT.pdf" download="Niraj_resume Bsc IT.pdf" class="resume-download-button">
    Download Resume <img src="pdf-icon.png" alt="PDF Icon" class="pdf-icon"></img>
</a>
