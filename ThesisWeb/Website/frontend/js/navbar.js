document.addEventListener("DOMContentLoaded", () => {
    const registerNavItem = document.getElementById("registerNavItem");
    const loginNavItem = document.getElementById("loginNavItem");
    const profileNavItem = document.getElementById("profileNavItem");

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const token = localStorage.getItem("token");

    const loggedIn = isLoggedIn && token;

    if (loggedIn) {
        if (registerNavItem) registerNavItem.style.display = "none";
        if (loginNavItem) loginNavItem.style.display = "none";
        if (profileNavItem) profileNavItem.style.display = "list-item";
    } else {
        if (registerNavItem) registerNavItem.style.display = "list-item";
        if (loginNavItem) loginNavItem.style.display = "list-item";
        if (profileNavItem) profileNavItem.style.display = "none";
    }
});