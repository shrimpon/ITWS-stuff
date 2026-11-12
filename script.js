const currentPage = window.location.pathname;

document.querySelectorAll("nav a").forEach((link) => {
    if (new URL(link.href, window.location.href).pathname === currentPage) {
        link.setAttribute("aria-current", "page");
    }
});
