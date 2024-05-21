document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate name
    var name = document.getElementById('name');
    if(name.value.trim() === '') {
        alert('Please enter your name');
        return;
    }
    
    // Validate date of birth
    var dob = document.getElementById('dob');
    if(dob.value === '') {
        alert('Please enter your date of birth');
        return;
    }
    
    // Validate gender
    var gender = document.querySelector('input[name="gender"]:checked');
    if(!gender) {
        alert('Please select your gender');
        return;
    }
    
    // Validate email
    var email = document.getElementById('email');
    if(email.value === '') {
        alert('Please enter your email address');
        return;
    }
    
    // Validate phone number
    var phone = document.getElementById('phone');
    if(phone.value === '') {
        alert('Please enter your phone number');
        return;
    }
    
    // Validate address
    var street = document.getElementById('street');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var zip = document.getElementById('zip');
    if(street.value.trim() === '' || city.value.trim() === '' || state.value.trim() === '' || zip.values === '') {
        alert('Please complete your address');
        return;
    }
    
    // Validate event preferences
    var eventPreferences = document.getElementById('eventPreferences');
    if(eventPreferences.value === '') {
        alert('Please select your event preferences');
        return;
    }
    
    // Validate t-shirt size
    var tshirtSize = document.getElementById('tshirtSize');
    if(tshirtSize.value === '') {
        alert('Please select your t-shirt size');
        return;
    }
    
    // If all validations pass, show a success message
    alert('Registration successful!');
});