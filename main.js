document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validation logic
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var emailRegex = /^(.+)@(gmail\.com|hotmail\.com|yahoo\.com)$/;
    var phoneRegex = /^\d{10,}$/;

    if (!emailRegex.test(email)) {
        alert('Please login with official mail id (gmail.com, hotmail.com, yahoo.com)');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Incorrect phone number input. It should be at least 10 digits.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
});