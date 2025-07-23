// Register user and save to localStorage
function registerUser() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  // Save credentials
  localStorage.setItem("storedUsername", username);
  localStorage.setItem("storedPassword", password);

  alert("Registration successful!");
}

// Login user by comparing localStorage values
function loginUser() {
  const enteredUsername = document.getElementById("loginUsername").value;
  const enteredPassword = document.getElementById("loginPassword").value;

  const storedUsername = localStorage.getItem("storedUsername");
  const storedPassword = localStorage.getItem("storedPassword");

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    document.getElementById("loginMsg").innerText = "Login Successful! ✅";
  } else {
    document.getElementById("loginMsg").innerText = "Invalid credentials ❌";
    document.getElementById("loginMsg").style.color = "red";
  }
}



