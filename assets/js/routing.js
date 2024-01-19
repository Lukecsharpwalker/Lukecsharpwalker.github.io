$(document).ready(function () {
    var app = $.sammy(function () {
        this.get('#/home/', function () {
            loadPageContent("index.html");
        });

        this.get('#/about/', function () {
            loadPageContent("assets/pages/about.html");
        });

        this.get('#/news/', function () {
            loadPageContent("assets/pages/news.html");
        });

        this.get('#/contact/', function () {
            loadPageContent("assets/pages/contact.html");
        });
    });

    app.run('#/');
});

//  Funkcja do ładowania zawartości strony z pliku HTML
    function loadPageContent(page) {
        $.get(page, function (data) {
            $("main").empty();
            $("main").html(data);
        });
    }