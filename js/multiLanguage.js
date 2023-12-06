//define languange reloads anchors
var dataReload = document.querySelectorAll("[data-reload]");

/*function Get (elementName) {
    console.log(type(elementName));
    element = document.getElementById(elementName).textContent;
    console.log(type(element));
    return element;
}*/

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
        heroSponsors: "Sponsored by companies like:",
        //Content sections
        contentTitle: "What we teach to our students?",
        contentDescription: "Following reasons show what students learn with our teachers during the time. Teached by high competent professionals.",
        content1Title: "Front-end",
        content1Description: "Learning html, css, javascript and more.",
        content2Title: "Data Analytics",
        content2Description: "All you have to know about tables and SQL.",
        content3Title: "Game Development",
        content3Description: "Using three different tools to make your dream games.",
        //About section
        aboutTitle: "An NGO for those who can't pay for classes.",
        aboutDescription: "We go to your neighbor and make the best structure to teach everyone.",
        about1Title: "Pratical",
        about1Description: "Just need to the owner's institution register in our site and we go to there.",
        about2Title: "No pay",
        about2Description: "No one have to pay for our service, we are a NGO.",
        aboutCategory1: "Active locations",
        aboutCategory2: "Contributors",
        aboutCategory3: "Students with certificate",
        aboutCategory4: "Clients satisfaction",
        //Structure section
        structureTitle : "We Provide Best Services For You",
        structureDescription : "These features are standard in all of our locations.",
        structure1Title : "Qualified professionals",
        structure1Description : "Our teachers are dedicated to ensuring that each student understands concepts in a clear and inspiring way.",
        structure2Title : "Didatic estructure",
        structure2Description : "We use an adaptive teaching approach, recognizing students' diverse abilities and learning styles.",
        structure3Title : "Complete teaching material",
        structure3Description : "We provide learning materials, including digital resources and printed materials.",
        structure4Title : "Technological Infrastructure",
        structure4Description : "We have set up a complete infrastructure to ensure that all students have access to the necessary resources such as computers and internet.",
        structure5Title : "Personalized Follow-up",
        structure5Description : "Each student receives individualized guidance to identify their specific learning and development needs.",
        structure6Title : "Extracurricular activities",
        structure6Description : "We promote practical activities and projects that allow students to apply their knowledge in real-world situations.",
        //Testimonial section
        testimonialTitle : "Testimonials What Students Say",
        testimonial1 : "Amazing opportunity to learn programming! The teachers were very patient and explained everything clearly. I especially enjoyed the practical activities that challenged us to apply what we learned.",
        testimonial2 : "The classes were very useful for understanding programming. The teachers were attentive, but it would be interesting to have more technological resources to practice at home.",
        testimonial3 : "The experience was enriching! I learned a lot about coding. It would be great to have more practical sessions to apply theoretical knowledge.",
        testimonial4 : "It was a great introduction to programming! The teachers were dedicated and the classes were very useful. It would be nice to have more time to practice and explore different areas of programming.",
        //Colaboration section
        colaborationTitle : "Want to colaborate with our mission?",
        colaborationDescription : "You are very welcome to colaborate with us, both giving us money contributions and be one of us.",
        //Contact section
        contactFormsTitle : "Ready to get started?",
        contactCheckinfo : "I confirm that i am the institution owner",
        contactSendButton : "Send Message",
        contactTitle : "Want to talk with us?",
        contactDescription : "Fill out the form and we will contact you by email for an introductory conversation.",
        contactLocationTitle : "Our Headquarters"
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
        heroDescription: "Nós damos oportunidade para pessoas aprenderem programação e TI.",
        heroSponsors: "Patrocinado por empresas como:",
        //Content sections
        contentTitle: "O que ensinamos aos nossos alunos?",
        contentDescription: "Os motivos a seguir mostram o que os alunos aprendem com nossos professores durante o período. Ministrado por profissionais altamente competentes.",
        content1Title: "Front-end",
        content1Description: "Aprendendo html, css, javascript e muito mais.",
        content2Title: "Análise de dados.",
        content2Description: "Tudo o que você precisa saber sobre tabelas e SQL.",
        content3Title: "Desenvolvimento de jogos",
        content3Description: "Usando três ferramentas diferentes para criar os jogos dos seus sonhos.",
        //About section
        aboutTitle: "Uma ONG para quem não pode pagar as aulas.",
        aboutDescription: "Nós vamos até o seu bairro e fazemos a melhor estrutura para ensinar a todos.",
        about1Title: "Prático",
        about1Description: "Basta a instituição proprietária se cadastrar em nosso site e iremos até lá.",
        about2Title: "Sem pagamento",
        about2Description: "Ninguém precisa pagar pelo nosso serviço, somos uma ONG.",
        aboutCategory1: "Locais ativos",
        aboutCategory2: "Colaboradores",
        aboutCategory3: "Alunos com certificado",
        aboutCategory4: "Satisfação dos clientes",
        //Structure section
        structureTitle : "Oferecemos os melhores serviços para você",
        structureDescription : "Esses recursos são padrão em todas as nossas localidades.",
        structure1Title : "Profissionais qualificados",
        structure1Description : "Nossos professores se dedicam a garantir que cada aluno entenda os conceitos de maneira clara e inspiradora.",
        structure2Title : "Estrutura didática",
        structure2Description : "Usamos uma abordagem de ensino adaptativa, reconhecendo as diversas habilidades e estilos de aprendizagem dos alunos.",
        structure3Title : "Material didático completo",
        structure3Description : "Fornecemos materiais de aprendizagem, incluindo recursos digitais e materiais impressos.",
        structure4Title : "Infraestrutura Tecnológica",
        structure4Description : "Montamos uma infraestrutura completa para garantir que todos os alunos tenham acesso aos recursos necessários, como computadores e internet.",
        structure5Title : "Acompanhamento Personalizado",
        structure5Description : "Cada aluno recebe orientação individualizada para identificar suas necessidades específicas de aprendizagem e desenvolvimento.",
        structure6Title : "Atividades extracurriculares",
        structure6Description : "Promovemos atividades práticas e projetos que permitem aos alunos aplicar os seus conhecimentos em situações do mundo real.",
        //Testimonial section
        testimonialTitle : "Depoimentos do que os alunos dizem",
        testimonial1 : "Oportunidade incrível de aprender programação! Os professores foram muito pacientes e explicaram tudo com clareza. Gostei especialmente das atividades práticas que nos desafiaram a aplicar o que aprendemos.",
        testimonial2 : "As aulas foram muito úteis para a compreensão da programação. Os professores ficaram atentos, mas seria interessante ter mais recursos tecnológicos para praticar em casa.",
        testimonial3 : "A experiência foi enriquecedora! Aprendi muito sobre codificação. Seria ótimo ter mais sessões práticas para aplicar conhecimentos teóricos.",
        testimonial4 : "Foi uma ótima introdução à programação! Os professores foram dedicados e as aulas foram muito proveitosas. Seria bom ter mais tempo para praticar e explorar diferentes áreas da programação.",
        //Colaboration section
        colaborationTitle : "Quer colaborar com nossa missão?",
        colaborationDescription : "Você é muito bem-vindo para colaborar conosco, tanto nos dando contribuições em dinheiro quanto sendo um de nós.",
        //Contact section
        contactFormsTitle : "Pronto para começar?",
        contactCheckinfo : "Confirmo que sou o proprietário da instituição",
        contactSendButton : "Enviar mensagem",
        contactTitle : "Quer falar conosco?",
        contactDescription : "Preencha o formulário e entraremos em contato com você por e-mail para uma conversa introdutória.",
        contactLocationTitle : "Nossa Sede"
    }
}

//define language
function ChangeLanguage () {
    if (window.location.hash) {
        if (window.location.hash == "#eng") {
            //Navbar
            document.getElementById("nav-about").textContent = language.eng.navAbout;
            document.getElementById("nav-service").textContent = language.eng.navService;
            document.getElementById("nav-contact").textContent = language.eng.navContact;
            document.getElementById("nav-language").textContent = language.eng.navLanguage;
            //Hero section
            document.getElementById("hero-title").textContent = language.eng.heroTitle;
            document.getElementById("hero-description").textContent = language.eng.heroDescription;
            document.getElementById("hero-sponsors").textContent = language.eng.heroSponsors;
            //Content section
            document.getElementById("content-title").textContent = language.eng.contentTitle;
            document.getElementById("content-description").textContent = language.eng.contentDescription;
            document.getElementById("content-1-title").textContent = language.eng.content1Title;
            document.getElementById("content-1-description").textContent = language.eng.content1Description;
            document.getElementById("content-2-title").textContent = language.eng.content2Title;
            document.getElementById("content-2-description").textContent = language.eng.content2Description;
            document.getElementById("content-3-title").textContent = language.eng.content3Title;
            document.getElementById("content-3-description").textContent = language.eng.content3Description;
            //About section
            document.getElementById("about-title").textContent = language.eng.aboutTitle;
            document.getElementById("about-description").textContent = language.eng.aboutDescription;
            document.getElementById("about-1-title").textContent = language.eng.about1Title;
            document.getElementById("about-1-description").textContent = language.eng.about1Description;
            document.getElementById("about-2-title").textContent = language.eng.about2Title;
            document.getElementById("about-2-description").textContent = language.eng.about2Description;
            document.getElementById("about-category-1").textContent0 = language.eng.about3Title;
            document.getElementById("about-category-2").textContent = language.eng.about3Description;
            document.getElementById("about-category-3").textContent = language.eng.about4Title;
            document.getElementById("about-category-4").textContent = language.eng.about4Description;
            //Structure section
            document.getElementById("structure-title").textContent = language.eng.structureTitle;
            document.getElementById("structure-description").textContent = language.eng.structureDescription;
            document.getElementById("structure-1-title").textContent = language.eng.structure1Title;
            document.getElementById("structure-1-description").textContent = language.eng.structure1Description;
            document.getElementById("structure-2-title").textContent = language.eng.structure2Title;
            document.getElementById("structure-2-description").textContent = language.eng.structure2Description;
            document.getElementById("structure-3-title").textContent = language.eng.structure3Title;
            document.getElementById("structure-3-description").textContent = language.eng.structure3Description;
            document.getElementById("structure-4-title").textContent = language.eng.structure4Title;
            document.getElementById("structure-4-description").textContent = language.eng.structure4Description;
            document.getElementById("structure-5-title").textContent = language.eng.structure5Title;
            document.getElementById("structure-5-description").textContent = language.eng.structure5Description;
            document.getElementById("structure-6-title").textContent = language.eng.structure6Title;
            document.getElementById("structure-6-description").textContent = language.eng.structure6Description;
            //Testimonial section
            document.getElementById("testimonial-title").textContent = language.eng.testimonialTitle;
            document.getElementById("testimonial-1").textContent = language.eng.testimonial1;
            document.getElementById("testimonial-2").textContent = language.eng.testimonial2;
            document.getElementById("testimonial-3").textContent = language.eng.testimonial3;
            document.getElementById("testimonial-4").textContent = language.eng.testimonial4;
            //Colaboration section
            document.getElementById("colaboration-title").textContent = language.eng.colaborationTitle;
            document.getElementById("colaboration-description").textContent = language.eng.colaborationDescription;
            //Contact section
            document.getElementById("contact-forms-title").textContent = language.eng.contactFormsTitle;
            document.getElementById("contact-checkinfo").textContent = language.eng.contactCheckinfo;
            document.getElementById("contact-send-button").textContent = language.eng.contactSendButton;
            document.getElementById("contact-title").textContent = language.eng.contactTitle;
            document.getElementById("contact-description").textContent = language.eng.contactDescription;
            document.getElementById("contact-location-title").textContent = language.eng.contactLocationTitle;
        }
        else if (window.location.hash == "#pt") {
            //Navbar
            document.getElementById("nav-about").textContent = language.pt.navAbout;
            document.getElementById("nav-service").textContent = language.pt.navService;
            document.getElementById("nav-contact").textContent = language.pt.navContact;
            document.getElementById("nav-language").textContent = language.pt.navLanguage;
            //Hero section
            document.getElementById("hero-title").textContent = language.pt.heroTitle;
            document.getElementById("hero-description").textContent = language.pt.heroDescription;
            document.getElementById("hero-sponsors").textContent = language.pt.heroSponsors;
            //Content section
            document.getElementById("content-title").textContent = language.pt.contentTitle;
            document.getElementById("content-description").textContent = language.pt.contentDescription;
            document.getElementById("content-1-title").textContent = language.pt.content1Title;
            document.getElementById("content-1-description").textContent = language.pt.content1Description;
            document.getElementById("content-2-title").textContent = language.pt.content2Title;
            document.getElementById("content-2-description").textContent = language.pt.content2Description;
            document.getElementById("content-3-title").textContent = language.pt.content3Title;
            document.getElementById("content-3-description").textContent = language.pt.content3Description;
            //About section
            document.getElementById("about-title").textContent = language.pt.aboutTitle;
            document.getElementById("about-description").textContent = language.pt.aboutDescription;
            document.getElementById("about-1-title").textContent = language.pt.about1Title;
            document.getElementById("about-1-description").textContent = language.pt.about1Description;
            document.getElementById("about-2-title").textContent = language.pt.about2Title;
            document.getElementById("about-2-description").textContent = language.pt.about2Description;
            document.getElementById("about-category-1").textContent0 = language.pt.about3Title;
            document.getElementById("about-category-2").textContent = language.pt.about3Description;
            document.getElementById("about-category-3").textContent = language.pt.about4Title;
            document.getElementById("about-category-4").textContent = language.pt.about4Description;
            //Structure section
            document.getElementById("structure-title").textContent = language.pt.structureTitle;
            document.getElementById("structure-description").textContent = language.pt.structureDescription;
            document.getElementById("structure-1-title").textContent = language.pt.structure1Title;
            document.getElementById("structure-1-description").textContent = language.pt.structure1Description;
            document.getElementById("structure-2-title").textContent = language.pt.structure2Title;
            document.getElementById("structure-2-description").textContent = language.pt.structure2Description;
            document.getElementById("structure-3-title").textContent = language.pt.structure3Title;
            document.getElementById("structure-3-description").textContent = language.pt.structure3Description;
            document.getElementById("structure-4-title").textContent = language.pt.structure4Title;
            document.getElementById("structure-4-description").textContent = language.pt.structure4Description;
            document.getElementById("structure-5-title").textContent = language.pt.structure5Title;
            document.getElementById("structure-5-description").textContent = language.pt.structure5Description;
            document.getElementById("structure-6-title").textContent = language.pt.structure6Title;
            document.getElementById("structure-6-description").textContent = language.pt.structure6Description;
            //Testimonial section
            document.getElementById("testimonial-title").textContent = language.pt.testimonialTitle;
            document.getElementById("testimonial-1").textContent = language.pt.testimonial1;
            document.getElementById("testimonial-2").textContent = language.pt.testimonial2;
            document.getElementById("testimonial-3").textContent = language.pt.testimonial3;
            document.getElementById("testimonial-4").textContent = language.pt.testimonial4;
            //Colaboration section
            document.getElementById("colaboration-title").textContent = language.pt.colaborationTitle;
            document.getElementById("colaboration-description").textContent = language.pt.colaborationDescription;
            //Contact section
            document.getElementById("contact-forms-title").textContent = language.pt.contactFormsTitle;
            document.getElementById("contact-checkinfo").textContent = language.pt.contactCheckinfo;
            document.getElementById("contact-send-button").textContent = language.pt.contactSendButton;
            document.getElementById("contact-title").textContent = language.pt.contactTitle;
            document.getElementById("contact-description").textContent = language.pt.contactDescription;
            document.getElementById("contact-location-title").textContent = language.pt.contactLocationTitle;
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