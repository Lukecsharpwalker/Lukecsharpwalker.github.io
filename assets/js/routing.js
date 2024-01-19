// Load pages into main content area
document.addEventListener("DOMContentLoaded", function() {
    var routes = {
        "#/home/": "assets/pages/home.html",
        "#/about/": "assets/pages/about.html",
        "#/news/": "assets/pages/news.html",
        "#/contact/": "assets/pages/contact.html"
    };

    function loadPageContent(page) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", page, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector("main").innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    function handleRoute() {
        var hash = window.location.hash;
        var page = routes[hash];
        if (page) {
            loadPageContent(page);
        }
    }

    window.addEventListener("hashchange", handleRoute);
    handleRoute();
});