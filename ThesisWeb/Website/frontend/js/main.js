const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

//Open login modal
if (loginBtn) {
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });
}

//close with X
if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

//Close by clicking outside modal
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//Handle login
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        loginMessage.textContent = "";
        loginMessage.style.color = "";

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            loginMessage.textContent = "Please enter both email and password.";
            loginMessage.style.color = "red";
            return;
        }

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                loginMessage.textContent = data.message || "Login failed.";
                loginMessage.style.color = "red";
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("userEmail", data.user.email);
            localStorage.setItem("userFirstName", data.user.firstName);
            localStorage.setItem("userPlan", data.user.plan || "free");
            localStorage.setItem("subscriptionType", data.user.subscriptionType || "none");
            localStorage.setItem("userGender", userData.gender);

            loginMessage.textContent = "Login successful!";
            loginMessage.style.color = "green";

            setTimeout(() => {
                window.location.href = "tracker.html";
            }, 1000);
        } catch (error) {
            console.error("Login error:", error);
            loginMessage.textContent = "Server error. Please try again later.";
            loginMessage.style.color = "red";
        }
    });
}