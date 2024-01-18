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