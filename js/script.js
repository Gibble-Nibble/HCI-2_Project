document.addEventListener('DOMContentLoaded', function() {
    // Simulate user login status
    var isLoggedIn = false; // Change this to true to simulate a logged-in user

    // Get the container for dynamic authentication-related content
    var authSection = document.getElementById('authSection');

    if (isLoggedIn) {
        // User is logged in, show profile dropdown
        authSection.innerHTML = `
            <div class="profile-dropdown">
                <button class="profile-btn">Profile</button>
                <div class="dropdown-content">
                    <a href="user-profile.html">Settings</a>
                </div>
            </div>
        `;

        // Show dropdown on button click
        var profileBtn = authSection.querySelector('.profile-btn');
        profileBtn.addEventListener('click', function() {
            var dropdownContent = authSection.querySelector('.dropdown-content');
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    } else {
        // User is not logged in, show login button
        authSection.innerHTML = '<button id="loginButton">Login</button>';

        // Add event listener for login button if necessary
        var loginButton = document.getElementById('loginButton');
        loginButton.addEventListener('click', function() {
            // Add login functionality here
            alert('Login functionality to be implemented.');
        });
    }
});