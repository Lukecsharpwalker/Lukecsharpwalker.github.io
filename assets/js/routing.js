
// $(document).ready(function () {
//     // Funkcja obsługująca zmianę adresu URL
//     function handleRoute() {
//         var path = window.location.pathname;
//         console.log(path);
//         // Sprawdź, jaki jest aktualny adres URL i wykonaj odpowiednie działania
//         if (path === "/") {
//             // Strona główna
//             loadPageContent("/pages/home.html");
//         } else if (path === "/about") {
//             // Strona "O mnie"
//             loadPageContent("about.html");
//         } else if (path === "/lastest") {
//             // Strona "ostatnie projekty"
//             loadPageContent("pages/lastest.html");
//         } else if (path === "/contact") {
//             // Strona "Kontakt"
//             loadPageContent("pages/contact.html");
//         } else {
//             // Nieznany adres URL, przekierowuje na stronę główną
//             loadPageContent("home.html");
//         }
//     }

//     // Funkcja do ładowania zawartości strony z pliku HTML
//     function loadPageContent(page) {
//         $.get(page, function (data) {
//             $("main").html(data);
//         });
//     }

//     // Obsłuż kliknięcie linka
//     $("a").on("click", function (event) {
//         event.preventDefault(); // Zapobiegaj domyślnej akcji przekierowania
//         var href = $(this).attr("href"); // Pobierz wartość atrybutu href
//         history.pushState(null, null, href); // Zmień adres URL bez przeładowywania strony
//         handleRoute(); // Wywołaj funkcję obsługującą adres URL
//     });

//     // Obsłuż zmianę adresu URL
//     $(window).on("popstate", handleRoute);

//     // Wywołaj funkcję obsługującą adres URL na starcie
//     handleRoute();
// });

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

// //  Funkcja do ładowania zawartości strony z pliku HTML
//     function loadPageContent(page) {
//         $.get(page, function (data) {
//             $("main").empty();
//             $("main").html(data);
//         });
//     }
document.addEventListener("DOMContentLoaded", function() {
    var app = Sammy(function() {
        this.get('#/home/', function() {
            loadPageContent("assets/pages/home.html");
        });

        this.get('#/about/', function() {
            loadPageContent("assets/pages/about.html");
        });

        this.get('#/news/', function() {
            loadPageContent("assets/pages/news.html");
        });

        this.get('#/contact/', function() {
            loadPageContent("assets/pages/contact.html");
        });
    });

    app.run('#/');
});

function loadPageContent(page) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", page, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var mainElement = document.querySelector("main");
            mainElement.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}