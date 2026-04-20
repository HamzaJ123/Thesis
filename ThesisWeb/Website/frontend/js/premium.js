let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const registerNavItem = document.getElementById("registerNavItem");
const loginNavItem = document.getElementById("loginNavItem");
const profileNavItem = document.getElementById("profileNavItem");

//Force correct navbar state on Premium page
if (isLoggedIn) {
    if (registerNavItem) registerNavItem.style.display = "none";
    if (loginNavItem) loginNavItem.style.display = "none";
    if (profileNavItem) profileNavItem.style.display = "list-item";
} else {
    if (registerNavItem) registerNavItem.style.display = "list-item";
    if (loginNavItem) loginNavItem.style.display = "list-item";
    if (profileNavItem) profileNavItem.style.display = "none";
}

const subscribeButtons = document.querySelectorAll(".subscribe-btn");
const paymentModal = document.getElementById("paymentModal");
const paymentForm = document.getElementById("paymentForm");
const cancelPayment = document.getElementById("cancelPayment");
const successBox = document.getElementById("successBox");
const paymentFormBox = document.getElementById("paymentFormBox");
const closeSuccess = document.getElementById("closeSuccess");
const planTypeText = document.getElementById("planTypeText");

subscribeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedPlan = button.dataset.plan;
        const consentCheckbox = document.getElementById(`consent-${selectedPlan}`);

        if (!consentCheckbox.checked) {
            alert("Please agree to the Terms of Use before continuing.");
            return;
        }

        if (!isLoggedIn) {
            localStorage.setItem("redirectAfterRegister", "premium");
            localStorage.setItem("selectedPlan", selectedPlan);
            alert("Please register or log in before subscribing.");
            window.location.href = "register.html";
            return;
        }

        openPaymentModal(selectedPlan);
    });
});

function openPaymentModal(planType) {
    paymentModal.style.display = "flex";
    paymentFormBox.style.display = "block";
    successBox.style.display = "none";
    paymentForm.dataset.plan = planType;
}

paymentForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const address = document.getElementById("billingAddress").value.trim();
    const card = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!fullName || !address || !card || !expiry || !cvv) {
        alert("Please fill all payment details.");
        return;
    }

    const selectedPlan = paymentForm.dataset.plan;
    const token = localStorage.getItem("token");

    try {
        const response = await fetch("/api/auth/plan", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ subscriptionType: selectedPlan }),
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message || "Failed to update plan.");
            return;
        }

        localStorage.setItem("userPlan", data.user.plan || "premium");
        localStorage.setItem("subscriptionType", data.user.subscriptionType || selectedPlan);

        paymentFormBox.style.display = "none";
        successBox.style.display = "block";
        planTypeText.textContent =
            selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1);
    } catch (error) {
        console.error("Payment update error:", error);
        alert("Server error. Please try again later.");
    }
});

cancelPayment.onclick = () => (paymentModal.style.display = "none");
closeSuccess.onclick = () => (paymentModal.style.display = "none");

window.onclick = (e) => {
    if (e.target === paymentModal) paymentModal.style.display = "none";
};

window.addEventListener("load", () => {
    const redirectPage = localStorage.getItem("redirectAfterRegister");
    const selectedPlan = localStorage.getItem("selectedPlan");

    if (redirectPage === "premium" && localStorage.getItem("isLoggedIn") === "true") {
        localStorage.removeItem("redirectAfterRegister");
        openPaymentModal(selectedPlan);
    }
});