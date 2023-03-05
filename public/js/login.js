const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // Send POST request to api endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Coontent-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful go to profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}