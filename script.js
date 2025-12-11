function validateForm() {
    const email = document.getElementById("userEmail").value;
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!pattern.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }
    alert("Login Successful!");
    return true;
}