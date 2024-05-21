document.addEventListener('DOMContentLoaded', function () {
    // Fetch the form to apply custom Bootstrap validation
    var form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();
        event.stopPropagation();

        // Validate the form
        if (form.checkValidity() === false) {
            // Loop through each form control
            Array.from(form.elements).forEach(function (element) {
                // Check if the element is an input and is invalid
                if (element.tagName === 'INPUT' && !element.checkValidity()) {
                    // Add Bootstrap's was-validated class to show invalid feedback
                    element.classList.add('is-invalid');
                }
            });
        } else {
            // If form is valid, you can submit the form programmatically or perform other actions
            alert('Form submitted successfully!');
            // Example: form.submit();
        }
    }, false);
});
