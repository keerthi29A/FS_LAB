
function validateForm() {
    const name = document.registrationForm.name.value;
    const email = document.registrationForm.email.value;
    const password = document.registrationForm.password.value;
    const confirmPassword = document.registrationForm.confirmPassword.value;

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    return true;
}
