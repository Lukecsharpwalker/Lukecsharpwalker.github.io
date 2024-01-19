// $(document).ready(function () {
//     var app = $.sammy(function () {
//         this.get('#/home/', function () {
//             loadPageContent("assets/pages/home.html");
//         });

//         this.get('#/about/', function () {
//             loadPageContent("assets/pages/about.html");
//         });

//         this.get('#/news/', function () {
//             loadPageContent("assets/pages/news.html");
//         });

//         this.get('#/contact/', function () {
//             loadPageContent("assets/pages/contact.html");
//         });
//     });

//     app.run('#/');
// });

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

// //  Funkcja do ładowania zawartości strony z pliku HTML
//     function loadPageContent(page) {
//         $.get(page, function (data) {
//             $("main").empty();
//             $("main").html(data);
//         });
//     }