$(document).ready(function() {
    // Smooth scrolling
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Registration form validation
    $('#registrationForm').validate({
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            // Add more fields as per your form
        },
        messages: {
            name: 'Please enter your name',
            email: {
                required: 'Please enter your email',
                email: 'Please enter a valid email address'
            },
            // Add more messages as per your form
        },
        submitHandler: function(form) {
            // Form submission code goes here
        }
    });
});
