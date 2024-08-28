function saveArrayToStorage(array) {
    localStorage.setItem('users', JSON.stringify(array));
}

function getArrayFromStorage() {
    const storedArray = localStorage.getItem('users');
    return storedArray ? JSON.parse(storedArray) : [];
}

function validateForm() {
    var valid = true;

    // Get form field values
    var username = document.getElementById("username").value.trim();
    var password = document.getElementById("password").value.trim();
    var email = document.getElementById("email").value.trim();
    var city = document.getElementById("city").value;

    // Validate Username
    if (username === "") {
        alert("Username is empty");
        document.getElementById("username").focus();
        valid = false;
    }

    // Validate Password
    else if (password === "") {
        alert("Password is empty");
        document.getElementById("password").focus();
        valid = false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        document.getElementById("password").focus();
        valid = false;
    }

    // Validate Email
    else if (email === "") {
        alert("Email is empty");
        document.getElementById("email").focus();
        valid = false;
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Please enter a valid email, e.g: info@yahoo.com");
        document.getElementById("email").focus();
        valid = false;
    }

    // Validate City Selection
    else if (city === "") {
        alert("Please choose a city");
        document.getElementById("city").focus();
        valid = false;
    }

    return valid;
}
// function resetArrayInStorage() {
//     localStorage.setItem('users', JSON.stringify([])); // Replace 'users' with the key you use
//  }

//  // Usage
//  resetArrayInStorage();
document.getElementById("Done").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    if (validateForm()) { // Only proceed if the form is valid
        let u = getArrayFromStorage();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        u.push({ username, password });

        // Save updated users list to localStorage
        saveArrayToStorage(u);

        console.log('Registration successful!');

        // Redirect based on credentials
        if (username === "admin" && password === "admin1") {
            window.location.href = "Admin.html";
        } else {
            window.location.href = "index.html";
        }
    }
});
