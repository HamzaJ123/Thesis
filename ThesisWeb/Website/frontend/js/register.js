const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    message.textContent = "";
    message.style.color = "";

    // Collect form data
    const userData = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        gender: document.getElementById("gender").value,
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim(),
    };

    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate fields
    for (let key in userData) {
        if (!userData[key]) {
            message.textContent = "Please fill all required fields.";
            message.style.color = "red";
            return;
        }
    }

    if (userData.password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
        return;
    }

    try {
        // Send to backend
        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (!response.ok) {
            message.textContent = data.message || "Registration failed.";
            message.style.color = "red";
            return;
        }

        // Save token (optional, temporary)
        localStorage.setItem("token", data.token);
        localStorage.setItem("userEmail", data.user.email);
        localStorage.setItem("userFirstName", data.user.firstName);
        localStorage.setItem("userPlan", data.user.plan || "free");
        localStorage.setItem("subscriptionType", data.user.subscriptionType || "none");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userGender", userData.gender);

        // Success message
        message.textContent = "Registration successful!";
        message.style.color = "green";

        // Handle redirection
        setTimeout(() => {
            const redirectTarget = localStorage.getItem("redirectAfterRegister");
            if (redirectTarget === "premium") {
                localStorage.removeItem("redirectAfterRegister");
                window.location.href = "premium.html";
            } else {
                window.location.href = "tracker.html";
            }
        }, 1000);
    } catch (err) {
        console.error("Error:", err);
        message.textContent = "Server error. Please try again later.";
        message.style.color = "red";
    }
});
