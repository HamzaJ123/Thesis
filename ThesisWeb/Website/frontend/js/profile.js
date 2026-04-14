const token = localStorage.getItem("token");
const logoutBtn = document.getElementById("logoutBtn");

if (!token) {
    window.location.href = "index.html";
}

async function loadProfile() {
    try {
        const response = await fetch("/api/auth/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Failed to load profile.");
            window.location.href = "index.html";
            return;
        }

        document.getElementById("profileFirstName").textContent = data.firstName || "-";
        document.getElementById("profileLastName").textContent = data.lastName || "-";
        document.getElementById("profileEmail").textContent = data.email || "-";
        document.getElementById("profilePhone").textContent = data.phone || "-";
        document.getElementById("profileGender").textContent = data.gender || "-";
        document.getElementById("profilePlan").textContent = data.plan || "free";
        document.getElementById("profileSubscriptionType").textContent =
            data.subscriptionType || "none";

        localStorage.setItem("userEmail", data.email || "");
        localStorage.setItem("userFirstName", data.firstName || "");
        localStorage.setItem("userPlan", data.plan || "free");
        localStorage.setItem("subscriptionType", data.subscriptionType || "none");
        localStorage.setItem("isLoggedIn", "true");
    } catch (error) {
        console.error("Profile load error:", error);
        alert("Server error. Please try again later.");
    }
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userFirstName");
        localStorage.removeItem("userPlan");
        localStorage.removeItem("subscriptionType");

        window.location.href = "index.html";
    });
}

loadProfile();