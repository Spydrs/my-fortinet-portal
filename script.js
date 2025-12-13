document.getElementById("loginForm").addEventListener("submit", function (e) {
    const pwd = document.getElementById("password").value.trim();
    if (!pwd) {
        e.preventDefault();
        document.getElementById("message").textContent =
            "Please enter a valid password.";
    }
});
