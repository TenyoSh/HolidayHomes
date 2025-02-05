// Toggle between login and register forms
function toggleForm() {
    document.getElementById("login-box").classList.toggle("hidden");
    document.getElementById("register-box").classList.toggle("hidden");
}

// Register a New User
function registerUser() {
    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    // Check if fields are empty
    if (!username || !email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    // Store user details in localStorage
    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user)); // Save user with email as key

    alert("Registration successful! You can now log in.");
    toggleForm(); // Switch to login form
}

// Login a User
function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Retrieve user data
    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
        alert("No account found with this email. Please register first.");
        return;
    }

    const user = JSON.parse(storedUser);

    // Check password
    if (user.password === password) {
        alert(`Welcome back, ${user.username}!`);
        localStorage.setItem("loggedInUser", email); // Store logged-in user
        window.location.href = "home.html"; // Redirect to main page
    } else {
        alert("Incorrect password! Please try again.");
    }
}

// Automatically check if user is logged in
window.onload = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        alert("You are already logged in!");
        window.location.href = "home.html";
    }
};
