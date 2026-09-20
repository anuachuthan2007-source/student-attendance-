const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const message = document.getElementById("message");

        if (email === "" || password === "") {

            message.textContent = "Please enter email and password.";
            return;

        }

        window.location.href = "dashboard.html";

    });

}