const error = document.getElementById('error')

//-- Retrieves the user's info  and if it's 200ok it takes the user to the dashboard --//
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send POST request to api endpoint
    const response = await fetch("/api/trainer/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful go to profile page
      document.location.replace("/dashboard");
    } else {
      error.style.opacity="100%";
      // alert('response.statusText');
    }
  }
};


//-- Retrieves a new user's info to sign up--//
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/trainer", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Please enter valid sign up data!\nYour password must be 8 characters long\nMust enter a valid email address");
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);

document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
