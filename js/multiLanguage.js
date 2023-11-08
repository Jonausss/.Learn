//define languange reloads anchors
var dataReload = document.querySelectorAll("[data-reload]");

//language translators
var language = {
    eng: {
        heroTitle: "We are a Programation NGO"
    },
    pt: {
        heroTitle: "Nós somos uma ONG de programação"
    }
}

//define language
if (window.location.hash) {
    if (window.location.hash === "#pt") {
        console.log("pt");
        document.getElementById("hero-title").textContent = language.pt.heroTitle;
    }
}

//define language reload onclick illiterations
for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function() {
        location.reload (true);
    }
}