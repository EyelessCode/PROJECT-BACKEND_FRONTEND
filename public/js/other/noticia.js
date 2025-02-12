document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");
    const body = document.body;

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        body.classList.toggle("sidebar-open");
    });
});
