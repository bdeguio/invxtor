function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const text = document.getElementById("sidebar-text");
    const nameList = document.getElementById("name-list");

    if (sidebar.classList.contains("expanded")) {
        sidebar.classList.remove("expanded");
        text.style.display = "none";
        nameList.style.display = "none";
    } else {
        sidebar.classList.add("expanded");
        text.style.display = "block";
        nameList.style.display = "block";
    }
}
