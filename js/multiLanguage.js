//define languange reloads anchors
var dataReload = document.querySelectorAll("[data-reload]");

function Geti (elementName) {
    console.log(elementName);
    element = document.getElementById(elementName).textContent;
    console.log(element);
    return element;
}

//language translators
var language = {
    eng: {
        //S
        SContactUs: "Contact Us",
        //Navbar
        navAbout: "About",
        navService: "Service",
        navContact: "Contact",
        navLanguage: "Language",
        //Hero section
        heroTitle: "We are a Programation NGO",
        heroDescription: "We give the opportunity to people learn programation and IT.",
        heroSponsors: ""
        //Content sections

    },
    pt: {
        //S
        SContactUs: "Nos Contate",
        //Navbar
        navAbout: "Sobre",
        navService: "Serviço",
        navContact: "Contato",
        navLanguage: "Linguagem",
        //Hero section
        heroTitle: "Nós somos uma ONG de programação",
        heroDescription: "Nós damos oportunidade para pessoas aprenderem programação e TI."
    }
}

//define language
function ChangeLanguage () {
    if (window.location.hash) {
        if (window.location.hash == "#eng") {
            //Navbar
            Geti("nav-about") = language.eng.navAbout;
            Get("nav-service") = language.eng.navService;
            Get("nav-contact") = language.eng.navContact;
            Get("nav-language") = language.eng.navLanguage;
            //Hero section
            Get("hero-title") = language.eng.heroTitle;
            Get("hero-description") = language.eng.heroDescription;
            Get("hero-sponsors")
            //Content section
            Get("content-title")
            Get("content-description")
            Get("content-1-title")
            Get("content-1-description")
            Get("content-2-title")
            Get("content-2-description")
            Get("content-3-title")
            Get("content-3-description")
            //About section
            Get("about-title")
            Get("about-description")
            Get("about-1-title")
            Get("about-1-description")
            Get("about-2-title")
            Get("about-2-description")
            Get("about-category-1")
            Get("about-category-2")
            Get("about-category-3")
            Get("about-category-4")
            //Structure section
            Get("structure-title")
            Get("structure-description")
            Get("structure-1-title")
            Get("structure-1-description")
            Get("structure-2-title")
            Get("structure-2-description")
            Get("structure-3-title")
            Get("structure-3-description")
            Get("structure-4-title")
            Get("structure-4-description")
            Get("structure-5-title")
            Get("structure-5-description")
            Get("structure-6-title")
            Get("structure-6-description")
            //Testimonial section
            Get("testimonial-title")
            Get("testimonial-1")
            Get("testimonial-2")
            Get("testimonial-3")
            Get("testimonial-4")
            //Colaboration section
            Get("colaboration-title")
            Get("colaboration-description")
            //Contact section
            Get("contact-forms-title")
            Get("contact-checkinfo")
            Get("contact-send-button")
            Get("contact-title")
            Get("contact-description")
            Get("contact-location-title")
            Get("contact-phone")
            Get("contact-email-description")
        }
        else if (window.location.hash == "#pt") {
            //Navbar
            Get("nav-about") = language.pt.navAbout;
            Get("nav-service") = language.pt.navService;
            Get("nav-contact") = language.pt.navContact;
            Get("nav-language") = language.pt.navLanguage;
            //Hero section
            Get("hero-title") = language.pt.heroTitle;
            Get("hero-description") = language.pt.heroDescription;
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