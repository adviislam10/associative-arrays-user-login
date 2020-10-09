// User Login

// Create data structure to store users and passwords
let users = {
    azra: '1234',
    ben: '4321',
    caleb: 'abc',
    david: 'def',
    ezra: '1111'
}

// HTML Element
let loginBtnEl = document.getElementById('login-btn');
let signupBtnEl = document.getElementById('signup-btn');
let usernameInputEl = document.getElementById('username-in');
let passwordInputEl = document.getElementById('password-in');
let feedbackEl = document.getElementById('feedback');

// Event Listener
loginBtnEl.addEventListener('click', login);
signupBtnEl.addEventListener('click', singup);

// Event Function
function login() {
    // Get User Login Input
    let username = usernameInputEl.value;
    let password = passwordInputEl.value;

    console.log(users[username]);

    // Test User Login Input
    if (users[username] == undefined) {
        feedbackEl.innerHTML = 'Invalid Username';
    } else {
        // Check Password
        if (password == users[username]) {
            feedbackEl.innerHTML = 'Login Successful';
        } else {
            feedbackEl.innerHTML = 'Invalid Password';
        }
    }

}

function signup() {
    // Get User Login Input
    let username = usernameInputEl.value;
    let password = passwordInputEl.value;

    //  Check if user already exists
    if (users[username] != undefined) {
        feedbackEl.innerHTML = 'Username already exists.';
    } else {
        // Add user to users data structure (object)
        users[username] = password;
        feedbackEl.innerHTML = 'Sign Up Sucessful';
    }

}