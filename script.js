.interests-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.interest-item {
    background-color: rgba(217, 137, 181, 0.1);
    padding: 15px;
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
}

.interest-item:hover {
    transform: translateY(-5px);
    background-color: rgba(217, 137, 181, 0.2);
}

.interest-item i {
    font-size: 24px;
    color: var(--primary-color);
}

.interest-item span {
    font-size: 0.9rem;
    text-align: center;
}

.cv-button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 12px 25px;
    border-radius: 30px;
    margin-top: 30px;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cv-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    color: white;
}

.cv-button i {
    font-size: 1.2rem;
}.highlight-name {
    font-weight: 700;
    color: var(--primary-color);
}@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');

:root {
    --main-color: #d989b5;  /* Couleur féminine au lieu du violet */
    --black100: #f7f7f7;
    --black400: #555555;
    --black900: #000000;
    --white: #ffffff;

    --shadow-black100: 0 5px 15px rgba(0, 0, 0, .1);
    --shadow-black300: 0 5px 15px rgba(0, 0, 0, .3);
    --black-alpha100: 0 5px 15px rgba(0, 0, 0, .05);
    
    /* Variables d'origine */
    --primary-color: #d989b5;  /* Rose poudré */
    --secondary-color: #f67280; /* Rose corail */
    --accent-color: #6c5b7b;   /* Violet */
    --highlight-color: #355c7d; /* Bleu profond */
    --light-color: #fef9ff;    /* Blanc cassé */
    --dark-color: #2f2f41;     /* Presque noir */
    --gray-color: #f0f0f0;     /* Gris clair */
    --gradient-start: #d989b5;
    --gradient-middle: #f67280;
    --gradient-end: #6c5b7b;
    
    /* Typographie */
    --h1-size: clamp(2.5rem, 5vw, 4.5rem);
    --h2-size: clamp(2rem, 4vw, 3.5rem);
    --h3-size: clamp(1.5rem, 3vw, 2.5rem);
    --text-size: clamp(1rem, 1.2vw, 1.2rem);
    --small-text: clamp(0.875rem, 1vw, 1rem);
    
    /* Espaces */
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Autres */
    --border-radius: 12px;
    --transition-speed: 0.3s;
    --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: normal;
    overflow-x: hidden;
    background-color: var(--white);
}

* { margin: 0; padding: 0; outline: none !important; }
img { max-width: 100%; vertical-align: middle; }
ul { list-style: none; margin: 0; padding: 0; }
a, a:hover { text-decoration: none; }

.btn-1 {
    background-color: var(--main-color);
    padding: 15px 40px;
    border: none;
    border-radius: 30px;
    color: var(--white);
    font-size: 16px;
    text-transform: capitalize;
    box-shadow: var(--shadow-black300);
    font-weight: 500;
    transition: all .5s ease;
}

    .btn-1:hover { color: var(--main-color); background-color: var(--white); }

.btn-2 {
    background-color: var(--white);
    padding: 15px 40px;
    border: none;
    border-radius: 30px;
    color: var(--main-color);
    font-size: 16px;
    text-transform: capitalize;
    box-shadow: var(--shadow-black100);
    font-weight: 500;
    transition: all .5s ease;
}
    
    .btn-2:hover { color: var(--white); background-color: var(--main-color); }

.section-padding { padding: 80px 0; }
.section-title { margin-bottom: 60px; }
    .section-title h4 {
        font-size: 25px;
        font-weight: 700;
        color: var(--black900);
        text-transform: capitalize;
        text-align: center;
    }

    .section-title h2 {
        font-size: 30px;
        color: var(--black900);
        font-weight: 700;
        text-transform: uppercase;
        margin: 0; 
        text-align: center; 
    }

        .section-title h2 span { color: var(--main-color); }

/* Classes pour Bootstrap */
.container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
}

.align-items-center {
    align-items: center;
}

.col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
    padding: 0 15px;
}

.col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 15px;
}

.d-flex {
    display: flex;
}

.d-none {
    display: none;
}

.d-lg-block {
    display: block;
}

/* Overlay initial */
.intro-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black900);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeOut 0.5s ease 2.5s forwards;
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; visibility: hidden; }
}

.loader {
    display: flex;
}

.loader span {
    font-family: 'Kaushan Script', sans-serif;
    font-size: 4rem;
    font-weight: 700;
    color: var(--white);
    animation: fadeIn 0.5s ease calc(var(--i) * 0.1s) forwards, bounce 1s ease calc(var(--i) * 0.1s + 0.5s) infinite;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

/*NAVBAR*/
.navbar { 
    background-color: var(--white); 
    padding: 30px 0; 
    box-shadow: 0 10px 10px rgba(0, 0, 0, .08); 
    transition: all .5s ease;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
    .navbar.navbar-shrink { padding: 20px 0; box-shadow: 0 10px 10px rgba(0, 0, 0, .1); }
    .navbar > .container { padding: 0 15px; }
    .navbar .navbar-brand { 
        font-family: 'Italiana', serif;
        font-size: 30px; 
        color: var(--main-color); 
        font-weight: 500; 
        text-transform: capitalize; 
    }
    .navbar .nav-item { margin-left: 35px; }
        .navbar .nav-item .nav-link {
            color: var(--black400);
            text-transform: capitalize;
            font-size: 18px;
            font-weight: 400;
            padding: 5px 0;
            position: relative;
        }

            .navbar .nav-item .nav-link::before {
                position: absolute;
                content: '';
                width: 3px;
                height: 0;
                background-color: var(--main-color);
                left: 50%;
                top: -45px;
                transform: translateX(-50%);
                transition: all .3s ease-out 0s;
            }

                .navbar .nav-item .nav-link.active, .navbar .nav-item .nav-link:hover { color: var(--main-color); }
                    .navbar .nav-item .nav-link.active::before, .navbar .nav-item .nav-link:hover::before { height: 45px; }

.header-content {
    background-color: #fbfbfb;
    height: 800px;
    padding-top: 110px;
    position: relative;
    overflow: hidden;
}

#parallax { position: absolute; height: 100%; width: 100%; }

/*HOME*/

.header-shape { position: absolute !important; }
.header-shape.shape-one { top: 4.5% !important; left: 0 !important; }
.header-shape.shape-two { top: 2.5% !important; left: 20% !important; }
.header-shape.shape-three { top: 3% !important; left: 40% !important; }
.header-shape.shape-four { top: 8% !important; right: 7.6% !important; left: auto !important; }
.header-shape.shape-five { right: 30px !important; bottom: 36% !important; left: auto !important; top: auto !important; }
.header-shape.shape-six { top: 44% !important; left: 13% !important; transform: translateY(-50%); }
.header-shape.shape-seven { left: 30px !important; bottom: 10% !important; top: auto !important; }
.header-shape.shape-eight { left: 90px !important; bottom: 140px !important; top: auto !important; }
.header-shape.shape-nine { left: 50% !important; transform: translateX(-50%); bottom: 28px !important; top: auto !important; }
.header-shape.shape-ten { right: 30px !important; bottom: 10% !important; left: auto !important; top: auto !important; }

.home-text {
    position: relative;
    z-index: 2;
}

.home-text h4 { 
    font-size: 30px; 
    font-weight: 600; 
    padding-bottom: 8px; 
    color: var(--main-color); 
}

/* Le style pour h1 est maintenant entièrement géré par .gradient-text */
.home-text h1 { 
    padding-bottom: 8px;
}

/* Style pour le titre gradient */
.gradient-text {
    background: linear-gradient(135deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline-block;
    font-family: 'Italiana', serif; /* Changé de 'Playfair Display' à 'Italiana' */
    font-size: 70px; 
    font-weight: 700; 
    padding-bottom: 15px;
}

.elegant-title {
    letter-spacing: 2px;
    margin-top: 15px;
    text-transform: uppercase;
}

.home-text p { 
    font-size: 18px; 
    line-height: 28px; 
    color: var(--black900); 
    font-weight: 300; 
    padding-bottom: 5px; 
}

.hero-tagline {
    height: 60px;
    overflow: hidden;
    margin-bottom: 10px;
}

.text-animation {
    animation: moveUp 10s infinite;
}

@keyframes moveUp {
    0%, 20% { transform: translateY(0); }
    25%, 45% { transform: translateY(-60px); }
    50%, 70% { transform: translateY(-120px); }
    75%, 95% { transform: translateY(-180px); }
    100% { transform: translateY(-240px); }
}

.text-line {
    height: 60px;
    display: flex;
    align-items: center;
    color: var(--accent-color);
    font-weight: 600;
    font-size: 24px;
}

.home-btn {
    margin-top: 30px;
}

.home-img {
    position: relative;
    z-index: 2;
}

.home-img::before {
    position: absolute;
    content: '';
    width: 85%;
    height: 82%;
    border: 20px solid var(--main-color);
    border-bottom: none;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.home-img::after {
    position: absolute;
    content: '';
    width: 85%;
    height: 20px;
    background-color: var(--main-color);
    bottom: 50px;
    left: 0;
    z-index: 11;
}

.home-img img { 
    position: relative; 
    z-index: 5; 
}

.header-social { 
    position: absolute; 
    bottom: 30px; 
    left: 15px; 
    width: 100%; 
}
    .header-social .header-social-icon { position: relative; }

        .header-social .header-social-icon::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            background-color: var(--main-color);
            left: -102.5%;
            top: 50%;
            transform: translateY(-50%);
        }

        .header-social .header-social-icon ul li { 
            display: inline-block; 
            margin-left: 13px; 
        }
            .header-social .header-social-icon ul li:first-child { margin-left: 0; }

            .header-social .header-social-icon ul li a {
                color: #cccccc;
                font-size: 20px;
                width: 40px;
                height: 40px;
                display: inline-block;
                line-height: 40px;
                border-radius: 50%;
                border: 1px solid #cccccc;
                text-align: center;
                transition: all .3s ease-out 0s;
            }

                .header-social .header-social-icon ul li a:hover { 
                    color: var(--white); 
                    background-color: var(--main-color);
                    border-color: var(--main-color);
                }

/* Défilement des logos */
.brands-section {
    padding: 60px 0;
    overflow: hidden;
    background-color: rgba(217, 137, 181, 0.05);
}

.trust-title {
    font-size: 2.2rem;
    color: var(--dark-color);
    margin-bottom: 15px;
    font-family: 'Kaushan Script', cursive; /* Changé à 'Kaushan Script' */
    font-weight: 500;
}

.brandsCarousel {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    overflow: hidden;
}

.section-title-container {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-size: var(--h2-size);
    margin-bottom: var(--spacing-sm);
    position: relative;
    display: inline-block;
}

.title-underline {
    width: 80px;
    height: 4px;
    background: var(--main-color);
    margin: 10px auto 0;
    border-radius: 4px;
}

.carouselTrack {
    display: flex;
    animation: scroll 20s linear infinite;
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-150px * 10)); }
}

.brandLogo {
    flex: 0 0 150px;
    height: 50px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.brandLogo svg {
    width: 40px;
    height: 40px;
    color: var(--black400);
    opacity: 0.6;
    transition: all 0.3s;
}

.brandLogo:hover svg {
    color: var(--main-color);
    opacity: 1;
    transform: translateY(-5px);
}

/* Section à propos */
.about-section {
    padding: 80px 0;
    background-color: var(--white);
}

.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.about-content {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
}

.about-text {
    flex: 1;
}

.about-intro {
    font-size: 1.3rem;
    margin-bottom: var(--spacing-md);
    line-height: 1.6;
}

.about-text p {
    margin-bottom: var(--spacing-md);
}

.about-stats {
    display: flex;
    gap: var(--spacing-lg);
    margin: var(--spacing-lg) 0;
}

.stat-item {
    text-align: center;
    padding: 1rem;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-10px);
}

.stat-number {
    font-size: var(--h3-size);
    font-weight: 700;
    color: var(--primary-color);
}

.stat-label {
    font-size: var(--small-text);
    color: var(--dark-color);
}

.about-languages {
    margin: var(--spacing-lg) 0;
}

.about-languages h3 {
    margin-bottom: var(--spacing-md);
    font-size: 1.3rem;
    color: var(--dark-color);
}

.language-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: var(--spacing-md);
}

.language-item {
    background-color: white;
    padding: 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.language-name {
    font-weight: 600;
    color: var(--dark-color);
}

.language-level {
    display: flex;
    gap: 3px;
}

.level-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e0e0e0;
}

.level-dot.active {
    background-color: var(--primary-color);
}

.language-proficiency {
    font-size: 0.8rem;
    color: var(--accent-color);
}

.about-interests {
    margin: var(--spacing-lg) 0;
}

.about-interests h3 {
    margin-bottom: var(--spacing-md);
    font-size: 1.3rem;
    color: var(--dark-color);
}

.about-image-container {
    flex: 1;
    position: relative;
    max-width: 500px;
}

.about-image {
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    position: relative;
    z-index: 2;
    transition: transform 0.5s ease;
}

.about-image-container:hover .about-image {
    transform: scale(1.03);
}

.image-decoration {
    position: absolute;
    border-radius: 20px;
    background-color: var(--accent-color);
    z-index: 1;
    transition: transform 0.5s ease;
}

.decoration-1 {
    width: 100%;
    height: 100%;
    top: 20px;
    left: 20px;
    background-color: rgba(108, 91, 123, 0.2);
}

.decoration-2 {
    width: 150px;
    height: 150px;
    bottom: -30px;
    right: -30px;
    background-color: rgba(217, 137, 181, 0.2);
}

.about-image-container:hover .decoration-1 {
    transform: translate(5px, 5px);
}

.about-image-container:hover .decoration-2 {
    transform: translate(-5px, -5px);
}

/* Section Compétences */
.skills-section {
    padding: var(--spacing-xl) 0;
    background-color: rgba(108, 91, 123, 0.05);
}

.skills-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
}

.skill-card {
    background-color: white;
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s;
    text-align: center;
}

.skill-card:hover {
    transform: translateY(-10px);
}

.skill-icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
}

.skill-title {
    font-size: 1.5rem;
    margin-bottom: var(--spacing-sm);
    color: var(--dark-color);
}

.skill-description {
    color: rgba(47, 47, 65, 0.8);
    font-size: var(--small-text);
}

.tools-section {
    background-color: white;
    border-radius: var(--border-radius);
    padding: var(--spacing-lg);
    box-shadow: var(--box-shadow);
}

.tools-title {
    text-align: center;
    margin-bottom: var(--spacing-lg);
    font-size: 1.8rem;
    color: var(--dark-color);
}

.tools-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--spacing-md);
}

.tool-item {
    background-color: rgba(217, 137, 181, 0.1);
    color: var(--dark-color);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    transition: all 0.3s;
}

.tool-item:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

/* Section projets */
.projects-section {
    padding: var(--spacing-xl) 0;
    background: linear-gradient(to bottom, rgba(217, 137, 181, 0.05), rgba(246, 114, 128, 0.05));
}

.projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

/* Slider principal */
.projects-slider-container {
    position: relative;
    margin: 60px 0;
    padding: 20px 0;
    overflow: hidden;
}

.projects-slider {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.project-slide {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding: 0 20px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease forwards;
    animation-delay: calc(var(--order) * 0.2s);
}

.project-image-container {
    position: relative;
    overflow: visible;
    margin-bottom: 30px;
    height: 400px;
}

.project-image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: var(--box-shadow);
    height: 100%;
    transition: transform 0.5s ease;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-hover-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    opacity: 0;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    transition: opacity 0.5s ease;
}

.project-image-wrapper:hover .project-hover-overlay {
    opacity: 1;
}

.project-image-wrapper:hover .project-image {
    transform: scale(1.05);
}

.project-color-accent {
    position: absolute;
    bottom: -15px;
    left: 15px;
    width: 70%;
    height: 8px;
    background-color: var(--accent-color);
    border-radius: 4px;
    transition: width 0.3s ease, transform 0.3s ease;
}

.project-image-container:hover .project-color-accent {
    width: 90%;
    transform: translateX(10px);
}

.project-content {
    padding: 20px 0;
}

.project-title {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: var(--dark-color);
    position: relative;
    display: inline-block;
}

.project-title:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: width 0.3s ease;
}

.project-slide:hover .project-title:after {
    width: 100%;
}

.project-description {
    margin-bottom: 20px;
    color: rgba(47, 47, 65, 0.8);
    line-height: 1.6;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--primary-color);
    font-weight: 600;
    transition: transform 0.3s ease;
}

.project-link i {
    transition: transform 0.3s ease;
}

.project-link:hover {
    transform: translateX(5px);
}

.project-link:hover i {
    transform: translateX(5px);
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.project-tag {
    background-color: rgba(255, 255, 255, 0.85);
    color: var(--dark-color);
    padding: 5px 12px;
    border-radius: 50px;
    font-size: 0.8rem;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
}

.project-tag:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
}

/* Navigation du slider */
.projects-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 5;
}

.project-nav-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: var(--primary-color);
    transition: all 0.3s ease;
}

.project-nav-btn:hover {
    background-color: var(--primary-color);
    color: white;
    transform: scale(1.1);
}

.prev-btn {
    left: 20px;
    transform: translateX(-40px);
    opacity: 0;
    transition: all 0.5s ease;
}

.next-btn {
    right: 20px;
    transform: translateX(40px);
    opacity: 0;
    transition: all 0.5s ease;
}

.projects-slider-container:hover .prev-btn,
.projects-slider-container:hover .next-btn {
    transform: translateX(0);
    opacity: 1;
}

/* Indicateurs de pagination */
.project-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
}

.project-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(217, 137, 181, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
}

.project-dot.active,
.project-dot:hover {
    background-color: var(--primary-color);
    transform: scale(1.2);
}

/* Showcase des projets secondaires */
.projects-showcase {
    margin-top: 100px;
}

.showcase-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 20px;
}

.showcase-header h3 {
    font-size: 1.8rem;
    color: var(--dark-color);
}

.showcase-filter {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.showcase-filter-btn {
    background-color: transparent;
    border: none;
    color: var(--dark-color);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 8px 20px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.showcase-filter-btn:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.showcase-filter-btn:hover:before,
.showcase-filter-btn.active:before {
    width: 100%;
}

.showcase-filter-btn.active {
    color: var(--primary-color);
    font-weight: 600;
}

.showcase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.showcase-item {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.showcase-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.showcase-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.showcase-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.showcase-item:hover .showcase-image img {
    transform: scale(1.1);
}

.showcase-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    transform: translateY(40px);
    opacity: 0;
    transition: all 0.3s ease;
}

.showcase-item:hover .showcase-overlay {
    transform: translateY(0);
    opacity: 1;
}

.showcase-overlay h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.showcase-overlay p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Animation en entrée */
@keyframes fadeInSlide {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Formation Section */
.formation-section {
    padding: var(--spacing-xl) 0;
    background-color: var(--light-color);
}

.formation-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.formation-timeline {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 60px 0;
}

.formation-item {
    display: flex;
    gap: 30px;
    position: relative;
    padding: 30px;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
}

.formation-item:hover {
    transform: translateY(-5px);
}

.formation-item:nth-child(even) {
    flex-direction: row-reverse;
}

.formation-year {
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    color: white;
    padding: 15px;
    border-radius: var(--border-radius);
    min-width: 120px;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formation-content {
    flex: 1;
}

.formation-content h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    color: var(--dark-color);
}

.formation-content p {
    color: var(--accent-color);
}

/* Certifications Section */
.certifications-section {
    padding: var(--spacing-xl) 0;
    background-color: rgba(246, 114, 128, 0.05);
}

.certifications-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 60px;
}

.certification-card {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 25px;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certification-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.certification-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    color: white;
}

.certification-content {
    flex: 1;
}

.certification-content h3 {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: var(--dark-color);
}

.certification-content p {
    font-size: 0.9rem;
    color: var(--accent-color);
    margin-bottom: 5px;
}

.certification-date {
    display: inline-block;
    padding: 2px 10px;
    background-color: rgba(217, 137, 181, 0.1);
    color: var(--primary-color);
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 600;
}

/* Expériences Section */
.experiences-section {
    padding: var(--spacing-xl) 0;
    background-color: rgba(217, 137, 181, 0.05);
}

.experiences-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.timeline {
    position: relative;
    margin: 40px 0;
    padding-left: 60px;
}

.timeline:before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-color), var(--accent-color));
    border-radius: 4px;
}

.timeline-item {
    position: relative;
    margin-bottom: 70px;
    background-color: white;
    border-radius: var(--border-radius);
    padding: 25px;
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.timeline-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.timeline-dot {
    position: absolute;
    left: -55px;
    top: 20px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: white;
    border: 4px solid var(--primary-color);
    z-index: 1;
}

.timeline-date {
    position: absolute;
    left: -190px;
    top: 10px;
    width: 120px;
    text-align: right;
    font-size: 0.9rem;
    color: var(--accent-color);
    font-weight: 500;
    display: flex;
    flex-direction: column;
}

.timeline-content h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
    color: var(--primary-color);
}

.timeline-content h4 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 15px;
    color: var(--accent-color);
}

.timeline-details {
    padding-left: 20px;
}

.timeline-details li {
    margin-bottom: 8px;
    position: relative;
}

.timeline-details li:before {
    content: '•';
    position: absolute;
    left: -20px;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.events-section {
    margin-top: 80px;
    padding: 30px;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.events-title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 1.8rem;
    color: var(--dark-color);
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

.event-item {
    display: flex;
    gap: 15px;
    padding: 15px;
    border-radius: var(--border-radius);
    background-color: rgba(217, 137, 181, 0.05);
    transition: transform 0.3s ease;
}

.event-item:hover {
    transform: translateY(-5px);
    background-color: rgba(217, 137, 181, 0.1);
}

.event-date {
    padding: 10px;
    background-color: var(--primary-color);
    color: white;
    border-radius: 8px;
    font-weight: 600;
    height: fit-content;
    min-width: 100px;
    text-align: center;
}

.event-content h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: var(--dark-color);
}

.event-content p {
    font-size: 0.9rem;
    color: var(--accent-color);
}

/* Section Contact */
.contact-section {
    padding: var(--spacing-xl) 0;
    background-color: rgba(246, 114, 128, 0.05);
}

.contact-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
}

.contact-info {
    padding: var(--spacing-lg);
}

.contact-subtitle {
    font-size: 2rem;
    margin-bottom: var(--spacing-md);
    color: var(--dark-color);
}

.contact-text {
    margin-bottom: var(--spacing-lg);
    color: rgba(47, 47, 65, 0.8);
}

.contact-details {
    margin-bottom: var(--spacing-lg);
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-md);
}

.contact-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: var(--spacing-md);
}

.social-links {
    display: flex;
    gap: var(--spacing-md);
}

.social-link {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: rgba(217, 137, 181, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: var(--dark-color);
    transition: all 0.3s;
}

.social-link:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-5px);
}

.contact-form-container {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--spacing-xl);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.form-group {
    position: relative;
    margin-bottom: var(--spacing-md);
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(47, 47, 65, 0.2);
    border-radius: var(--border-radius);
    font-family: 'Montserrat', sans-serif;
    font-size: var(--small-text);
    transition: all 0.3s;
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(217, 137, 181, 0.2);
}

.form-group label {
    position: absolute;
    top: -0.5rem;
    left: 1rem;
    background-color: white;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    color: var(--primary-color);
    transition: all 0.3s;
    opacity: 0;
}

.form-group input:focus + label, .form-group textarea:focus + label, 
.form-group input:not(:placeholder-shown) + label, .form-group textarea:not(:placeholder-shown) + label {
    opacity: 1;
}

.submit-button {
    align-self: flex-start;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;
}

.submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Footer */
.footer {
    background-color: var(--main-color);
    padding: 20px 0;
}

.copyright-text {
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    color: rgba(255, 255, 255, .9);
    font-weight: 300;
    margin: 0;
}

/* Animations et effets */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animations AOS custom */
[data-aos="fade-up"] {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-aos="fade-up"].aos-animate {
    opacity: 1;
    transform: translateY(0);
}

[data-aos="fade-right"] {
    opacity: 0;
    transform: translateX(-50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-aos="fade-right"].aos-animate {
    opacity: 1;
    transform: translateX(0);
}

[data-aos="fade-left"] {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-aos="fade-left"].aos-animate {
    opacity: 1;
    transform: translateX(0);
}

[data-aos="flip-up"] {
    opacity: 0;
    transform: perspective(400px) rotateX(-90deg);
    transition: opacity 0.8s ease, transform 0.8s ease;
}

[data-aos="flip-up"].aos-animate {
    opacity: 1;
    transform: perspective(400px) rotateX(0);
}

/* Navbar toggler pour mobile */
.navbar-toggler {
    background-color: var(--main-color);
    height: 34px;
    width: 44px;
    padding: 0;
    font-size: 17px;
    color: var(--white);
    border: none;
    cursor: pointer;
}

.navbar-collapse {
    transition: all 0.3s ease;
}

.navbar-nav {
    margin-left: auto;
}

.ml-auto {
    margin-left: auto;
}

/* Media Queries */
@media(max-width: 991px) {
    .header-content {
        height: 640px;
    }
    
    .navbar-toggler {
        display: block;
    }
    
    .navbar-collapse {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--white);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
    
    .navbar-collapse.show {
        max-height: 500px;
    }
    
    .navbar-nav {
        padding: 10px 0;
    }
    
    .navbar .nav-item {
        margin: 0;
        padding: 5px 15px;
    }
    
    .navbar .nav-item .nav-link::before {
        display: none;
    }
    
    .home-img::before, .home-img::after {
        display: none;
    }
    
    .row {
        flex-wrap: wrap;
    }
    
    .col-lg-6 {
        flex: 0 0 100%;
        max-width: 100%;
    }
    
    .home-text {
        margin-bottom: 40px;
    }
    
    .d-none.d-lg-block {
        display: none !important;
    }
    
    .header-social {
        position: relative;
        bottom: auto;
        left: auto;
        margin-top: 30px;
    }
    
    .header-social-icon::before {
        display: none;
    }
    
    .about-content {
        flex-direction: column-reverse;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .timeline-date {
        position: relative;
        left: 0;
        top: 0;
        width: auto;
        text-align: left;
        margin-bottom: 10px;
        flex-direction: row;
        justify-content: flex-start;
        gap: 10px;
    }
    
    .formation-item, .formation-item:nth-child(even) {
        flex-direction: column;
    }
    
    .formation-year {
        align-self: flex-start;
    }
    
    .project-slide {
        flex-direction: column;
    }
    
    .project-image-container {
        height: 300px;
    }
    
    .showcase-header {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media(max-width: 767px) {
    .header-shape.shape-one img,
    .header-shape.shape-two img,
    .header-shape.shape-four img,
    .header-shape.shape-five img,
    .header-shape.shape-six img {
        width: 40px;
    }
    
    .header-shape.shape-three img,
    .header-shape.shape-seven img,
    .header-shape.shape-eight img,
    .header-shape.shape-nine img,
    .header-shape.shape-ten img {
        width: 100px;
    }
    
    .header-shape.shape-five {
        right: 25px !important;
        bottom: 50% !important;
    }
    
    .header-shape.shape-seven {
        left: 50px !important;
        bottom: 35px !important;
    }
    
    .header-shape.shape-eight {
        left: 50px !important;
        bottom: 80px !important;
    }
    
    .header-shape.shape-nine {
        left: 65% !important;
        bottom: 20px !important;
    }
    
    .header-shape.shape-ten {
        right: 0 !important;
        bottom: 15% !important;
    }
    
    .home-text h4 {
        font-size: 24px;
    }
    
    .home-text h1, .gradient-text {
        font-size: 38px;
    }
    
    .home-text p {
        padding-bottom: 10px;
    }
    
    .text-line {
        font-size: 20px;
    }
    
    .section-title h2 {
        font-size: 28px;
    }
    
    .project-nav-btn {
        width: 40px;
        height: 40px;
    }
    
    .showcase-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }
    
    .timeline {
        padding-left: 40px;
    }
    
    .timeline-dot {
        left: -35px;
    }
    
    .events-grid {
        grid-template-columns: 1fr;
    }
}

@media(max-width: 576px) {
    :root {
        --h1-size: clamp(2rem, 10vw, 3rem);
        --h2-size: clamp(1.8rem, 8vw, 2.5rem);
        --h3-size: clamp(1.3rem, 6vw, 1.8rem);
    }
    
    .navbar {
        padding: 20px 0;
    }
    
    .navbar .navbar-brand {
        font-size: 24px;
    }
    
    .navbar-toggler {
        width: 38px;
        height: 30px;
    }
    
    .header-content {
        height: 600px;
        padding-top: 90px;
    }
    
    .home-text h4 {
        font-size: 20px;
    }
    
    .home-text h1, .gradient-text {
        font-size: 32px;
    }
    
    .home-text p {
        font-size: 16px;
    }
    
    .btn-1 {
        padding: 12px 30px;
        font-size: 14px;
    }
    
    .header-social .header-social-icon ul li a {
        width: 35px;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
    }
    
    .brandLogo {
        flex: 0 0 120px;
        margin: 0 10px;
    }
    
    .showcase-grid {
        grid-template-columns: 1fr;
    }
    
    .project-image-container {
        height: 250px;
    }
    
    .about-container, .skills-container, .projects-container, .contact-container,
    .experiences-container, .formation-container, .certifications-container {
        padding: 0 var(--spacing-md);
    }
    
    .skills-grid {
        grid-template-columns: 1fr;
    }
    
    .contact-form-container {
        padding: var(--spacing-lg);
    }
    
    .language-container {
        grid-template-columns: 1fr;
    }
    
    .certification-card {
        flex-direction: column;
        text-align: center;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
    .home-text h1, .gradient-text {
        font-size: 50px;
    }
    
    .home-text h4 {
        font-size: 26px;
    }
}
