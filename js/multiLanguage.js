//define languange reloads anchors
var dataReload = document.querySelectorAll("[data-reload]");

//language translators
var language = {
    eng: {
        //S
        SContactUs: "Contact Us",
        //Navbar
        navAbout: "Home",
        navService: "Service",
        navContact: "Contact",
        navLanguage: "Language",
        //Hero section
        heroTitle: "We are a Programation NGO",
        heroDescription: "We give the opportunity to people learn programation and IT."

    },
    pt: {
        //S
        SContactUs: "Nos contate",
        //Navbar
        navAbout: "Início",
        navService: "Serviço",
        navContact: "Contato",
        navLanguage: "Linguagem",
        //Hero section
        heroTitle: "Nós somos uma ONG de programação",
        heroDescription: "Nós damos oportunidade para pessoas aprenderem programação e TI."
    }
}

//define language
setInterval(ChangeLanguage, 1);
function ChangeLanguage () {
    if (window.location.hash) {
        if (window.location.hash == "#eng") {
            //S
            document.getElementById("s-contact-button").textContent = language.eng.SContactUs;
            //Navbar
            document.getElementById("nav-about").textContent = language.eng.navAbout;
            document.getElementById("nav-service").textContent = language.eng.navService;
            document.getElementById("nav-contact").textContent = language.eng.navContact;
            document.getElementById("nav-language").textContent = language.eng.navLanguage;
            //Hero section
            document.getElementById("hero-title").textContent = language.eng.heroTitle;
            document.getElementById("hero-description").textContent = language.eng.heroDescription;
        }
        else if (window.location.hash == "#pt") {
            //S
            document.getElementById("s-contact-button").textContent = language.pt.SContactUs;
            //Navbar
            document.getElementById("nav-about").textContent = language.pt.navAbout;
            document.getElementById("nav-service").textContent = language.pt.navService;
            document.getElementById("nav-contact").textContent = language.pt.navContact;
            document.getElementById("nav-language").textContent = language.pt.navLanguage;
            //Hero section
            document.getElementById("hero-title").textContent = language.pt.heroTitle;
            document.getElementById("hero-description").textContent = language.pt.heroDescription;
        }
    }    
}

/*
//define language reload onclick illiterations
for (i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function() {
        location.reload(true);
    }
}
*/