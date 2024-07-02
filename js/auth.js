// Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                user.updateProfile({
                    displayName: name
                }).then(() => {
                    alert('User registered successfully');
                    window.location.href = 'login.html';
                });
            })
            .catch((error) => {
                alert('Registration failed: ' + error.message);
            });
    });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                alert('Login successful');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert('Login failed: ' + error.message);
            });
    });
}

// Check Auth State
firebase.auth().onAuthStateChanged((user) => {
    const authSection = document.getElementById('authSection');
    if (user) {
        authSection.innerHTML = `
            <div class="profile-dropdown">
                <button class="profile-btn">${user.displayName}</button>
                <div class="dropdown-content">
                    <a href="#" id="logoutButton">Logout</a>
                </div>
            </div>
        `;

        document.getElementById('logoutButton').addEventListener('click', () => {
            firebase.auth().signOut().then(() => {
                alert('Logged out');
                window.location.href = 'index.html';
            });
        });
    } else {
        authSection.innerHTML = '<button id="loginButton">Login</button>';
        document.getElementById('loginButton').addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
});
