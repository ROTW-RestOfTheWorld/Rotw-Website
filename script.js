// Language translations
const translations = {
    en: {
        'nav-leagues': 'Leagues',
        'nav-cup': 'ROTW Cup',
        'nav-founders': 'Founders & Owners',
        'nav-history': 'History',
        'nav-winners': 'Winners',
        'nav-bb-news': 'BB News',
        'season-title': 'Season 12',
        'hero-description': 'The premier football competition in Bloxburg',
        'leagues-title': 'League Structure',
        'tier-elite': 'Elite Tier',
        'tier-competitive': 'Competitive Tier',
        'tier-development': 'Development Tier',
        'a-league-desc': 'The highest level of competition featuring the most skilled teams and players in ROTW.',
        'b-league-desc': 'The middle tier offering competitive gameplay for developing teams and aspiring players.',
        'c-league-desc': 'The entry-level league perfect for newcomers and teams building their foundation.',
        'teams': 'Teams',
        'matches': 'Matches',
        'cup-title': 'ROTW Cup',
        'cup-subtitle': 'The Ultimate Championship',
        'cup-desc-1': 'The ROTW Cup is the most prestigious tournament in Bloxburg Football, bringing together the best teams from all leagues in an epic knockout competition.',
        'cup-desc-2': 'Teams battle through multiple rounds of intense matches, with only the strongest surviving to claim the ultimate prize and eternal glory.',
        'format-title': 'Format',
        'format-desc': 'Single elimination knockout tournament',
        'participants-title': 'Participants',
        'participants-desc': 'All A league teams, 3 B and 3 C teams (16 total)',
        'prize-title': 'Prize',
        'prize-desc': 'ROTW Cup Trophy',
        'founders-title': 'Founders & Ownership',
        'founders-subtitle': 'Founders',
        'owners-subtitle': 'Current Owners',
        'co-founder': 'Co-Founder',
        'owner': 'Owner',
        'founding-desc': 'The visionaries who established ROTW and built the foundation of Bloxburg\'s premier football league.',
        'ownership-change': '*Former owner Sam has transferred ownership to the current leadership team.',
        'bb-news-title': 'Official Broadcaster & Media Partner',
        'bb-news-desc': 'BB News is the official broadcasting and media partner of ROTW, bringing you comprehensive coverage of all league matches, cup competitions, and breaking football news from across the Bloxburg football community.',
        'bb-coverage': 'Live Match Coverage',
        'bb-coverage-desc': 'Watch every crucial moment',
        'bb-analysis': 'Expert Analysis',
        'bb-analysis-desc': 'In-depth tactical breakdowns',
        'bb-news': 'Breaking News',
        'bb-news-desc': 'First to report transfers & updates',
        'bb-broadcasting': 'Live Broadcasting',
        'bb-broadcasting-desc': 'ROTW Cup Final live coverage',
        'latest-news-title': 'Latest News',
        'history-title': 'League & Cup History',
        'winners-title': 'All-Time Competition Winners (S1 - S11)',
        'winners-subtitle': '⭐️ = 1 piece of silverware',
        'bb-news-title': 'Official Broadcaster & Media Partner',
        'bb-news-desc': 'BB News is the official broadcasting and media partner of ROTW, bringing you comprehensive coverage of all league matches, cup competitions, and breaking football news from across the Bloxburg football community.',
        'bb-coverage': 'Live Match Coverage',
        'bb-coverage-desc': 'Watch every crucial moment',
        'bb-analysis': 'Expert Analysis',
        'bb-analysis-desc': 'In-depth tactical breakdowns',
        'bb-news': 'Breaking News',
        'bb-news-desc': 'First to report transfers & updates',
        'ownership-change': '*Former owner Sam has transferred ownership to the current leadership team.',
        'footer-rights': 'All rights reserved.',
        'tab-overview': 'Overview',
        'tab-leagues': 'Leagues',
        'tab-cup': 'ROTW Cup',
        'tab-history': 'History',
        'tab-winners': 'Winners',
        'tab-bb-news': 'BB News',
        'tab-founders': 'Leadership',
        'cup-final-title': 'ROTW Cup Final',
        'final-venue': 'RC Lens Stadium (Neutral)',
        'final-location': 'Neighbourhood: Quwerkyturkey',
        'final-time': '9PM UK Time',
        'days': 'Days',
        'hours': 'Hours',
        'minutes': 'Minutes',
        'seconds': 'Seconds',
        'league-runner': 'League Runner',
        'cup-runner-title': 'Cup Runner',
        'bb-owner': 'Owner',
        'live-stream-title': 'Latest Live Stream',
        'view-all-streams': 'View all BB News streams',
        'ownership-subtitle': 'Current Ownership',
        'co-owner': 'Co-Owner'
    },
    es: {
        'nav-leagues': 'Ligas',
        'nav-cup': 'Copa ROTW',
        'nav-founders': 'Fundadores y Propietarios',
        'nav-history': 'Historia',
        'nav-winners': 'Ganadores',
        'nav-bb-news': 'BB News',
        'season-title': 'Temporada 12',
        'hero-description': 'La competición de fútbol premier en Bloxburg',
        'leagues-title': 'Estructura de Ligas',
        'tier-elite': 'Nivel Elite',
        'tier-competitive': 'Nivel Competitivo',
        'tier-development': 'Nivel de Desarrollo',
        'a-league-desc': 'El más alto nivel de competición con los equipos y jugadores más hábiles de ROTW.',
        'b-league-desc': 'El nivel medio que ofrece juego competitivo para equipos en desarrollo y jugadores aspirantes.',
        'c-league-desc': 'La liga de nivel de entrada perfecta para recién llegados y equipos construyendo su base.',
        'teams': 'Equipos',
        'matches': 'Partidos',
        'cup-title': 'Copa ROTW',
        'cup-subtitle': 'El Campeonato Definitivo',
        'cup-desc-1': 'La Copa ROTW es el torneo más prestigioso en Bloxburg Football, reuniendo a los mejores equipos de todas las ligas en una competición épica de eliminación.',
        'cup-desc-2': 'Los equipos luchan a través de múltiples rondas de partidos intensos, con solo los más fuertes sobreviviendo para reclamar el premio final y la gloria eterna.',
        'format-title': 'Formato',
        'format-desc': 'Torneo de eliminación simple',
        'participants-title': 'Participantes',
        'participants-desc': 'Mejores equipos de las ligas A, B y C',
        'prize-title': 'Premio',
        'prize-desc': 'Trofeo de campeonato y promoción de liga',
        'founders-title': 'Fundadores y Propietarios',
        'founders-subtitle': 'Fundadores',
        'owners-subtitle': 'Propietarios Actuales',
        'co-founder': 'Co-Fundador',
        'owner': 'Propietario',
        'founding-desc': 'Los visionarios que establecieron ROTW y construyeron la base de la liga de fútbol premier de Bloxburg.',
        'ownership-change': '*El anterior propietario Sam ha transferido la propiedad al equipo de liderazgo actual.',
        'bb-news-title': 'Socio Oficial de Transmisión y Medios',
        'bb-news-desc': 'BB News es el socio oficial de transmisión y medios de ROTW, que te aportan cobertura integral de todos los partidos de liga, competiciones de copa y noticias de fútbol de última hora de toda la comunidad de fútbol de Bloxburg.',
        'bb-coverage': 'Cobertura en Vivo',
        'bb-coverage-desc': 'Mira cada momento crucial',
        'bb-analysis': 'Análisis Experto',
        'bb-analysis-desc': 'Análisis tácticos profundos',
        'bb-news': 'Noticias de Última Hora',
        'bb-news-desc': 'Primero en reportar transferencias y actualizaciones',
        'history-title': 'Historia de Ligas y Copas',
        'winners-title': 'Ganadores de Competiciones de Todos los Tiempos (T1 - T11)',
        'winners-subtitle': '⭐️ = 1 pieza de platería',
        'bb-news-title': 'Socio Oficial de Transmisión y Medios',
        'bb-news-desc': 'BB News es el socio oficial de transmisión y medios de ROTW, que te ofrece cobertura completa de todos los partidos de liga, competiciones de copa y noticias de fútbol de última hora de toda la comunidad de fútbol de Bloxburg.',
        'bb-coverage': 'Cobertura en Vivo',
        'bb-coverage-desc': 'Mira cada momento crucial',
        'bb-analysis': 'Análisis Experto',
        'bb-analysis-desc': 'Análisis tácticos profundos',
        'bb-news': 'Noticias de Última Hora',
        'bb-news-desc': 'Primero en reportar transferencias y actualizaciones',
        'ownership-change': '*El anterior propietario Sam ha transferido la propiedad al equipo de liderazgo actual.',
        'footer-rights': 'Todos los derechos reservados.',
        'tab-overview': 'Resumen',
        'tab-leagues': 'Ligas',
        'tab-cup': 'Copa ROTW',
        'tab-history': 'Historia',
        'tab-winners': 'Ganadores',
        'tab-bb-news': 'BB News',
        'tab-founders': 'Liderazgo',
        'cup-final-title': 'Final de la Copa ROTW',
        'final-venue': 'Estadio RC Lens (Neutral)',
        'final-location': 'Barrio: Quwerkyturkey',
        'final-time': '9PM Hora del Reino Unido',
        'days': 'Días',
        'hours': 'Horas',
        'minutes': 'Minutos',
        'seconds': 'Segundos',
        'league-runner': 'Director de Liga',
        'cup-runner-title': 'Director de Copa',
        'bb-owner': 'Propietario',
        'live-stream-title': 'Transmisión en Vivo Reciente',
        'view-all-streams': 'Ver todas las transmisiones de BB News',
        'ownership-subtitle': 'Propiedad Actual',
        'co-owner': 'Co-Propietario'
    },
    fr: {
        'nav-leagues': 'Ligues',
        'nav-cup': 'Coupe ROTW',
        'nav-founders': 'Fondateurs et Propriétaires',
        'nav-history': 'Histoire',
        'nav-winners': 'Gagnants',
        'nav-bb-news': 'BB News',
        'season-title': 'Saison 12',
        'hero-description': 'La compétition de football premier à Bloxburg',
        'leagues-title': 'Structure des Ligues',
        'tier-elite': 'Niveau Elite',
        'tier-competitive': 'Niveau Compétitif',
        'tier-development': 'Niveau Développement',
        'a-league-desc': 'Le plus haut niveau de compétition avec les équipes et joueurs les plus habiles de ROTW.',
        'b-league-desc': 'Le niveau intermédiaire offrant un jeu compétitif pour les équipes en développement et les joueurs aspirants.',
        'c-league-desc': 'La ligue d\'entrée parfaite pour les nouveaux arrivants et les équipes construisant leur fondation.',
        'teams': 'Équipes',
        'matches': 'Matchs',
        'cup-title': 'Coupe ROTW',
        'cup-subtitle': 'Le Championnat Ultime',
        'cup-desc-1': 'La Coupe ROTW est le tournoi le plus prestigieux de Bloxburg Football, rassemblant les meilleures équipes de toutes les ligas dans une compétition épique à élimination.',
        'cup-desc-2': 'Les équipes se battent à travers plusieurs rounds de matchs intenses, avec seulement les plus forts survivant pour réclamer le prix ultime et la gloire éternelle.',
        'format-title': 'Format',
        'format-desc': 'Tournoi à élimination simple',
        'participants-title': 'Participants',
        'participants-desc': 'Meilleures équipes des ligues A, B et C',
        'prize-title': 'Prix',
        'prize-desc': 'Trophée de championnat et promotion de ligue',
        'founders-title': 'Fondateurs et Propriétaires',
        'founders-subtitle': 'Fondateurs',
        'owners-subtitle': 'Propriétaires Actuels',
        'co-founder': 'Co-Fondateur',
        'owner': 'Propriétaire',
        'founding-desc': 'Les visionnaires qui ont établi ROTW et construit la fondation de la ligue de football première de Bloxburg.',
        'ownership-change': '*L\'ancien propriétaire Sam a transféré la propriété à l\'équipe de direction actuelle.',
        'bb-news-title': 'Partenaire Officiel de Diffusion et Médias',
        'bb-news-desc': 'BB News est le partenaire officiel de diffusion et médias de ROTW, que vous apportent une couverture complète de tous les matchs de ligue, compétitions de coupe et nouvelles de football de dernière minute de toute la communauté de football de Bloxburg.',
        'bb-coverage': 'Couverture en Direct',
        'bb-coverage-desc': 'Regardez chaque moment crucial',
        'bb-analysis': 'Analyse d\'Expert',
        'bb-analysis-desc': 'Analyses tactiques approfondies',
        'bb-news': 'Nouvelles de Dernière Minute',
        'bb-news-desc': 'Premier à rapporter les transferts et mises à jour',
        'history-title': 'Histoire des Ligues et Coupes',
        'winners-title': 'Gagnants de Compétitions de Tous les Temps (S1 - S11)',
        'winners-subtitle': '⭐️ = 1 pièce d\'argenterie',
        'bb-news-title': 'Partenaire Officiel de Diffusion et Médias',
        'bb-news-desc': 'BB News est le partenaire officiel de diffusion et médias de ROTW, qui vous offre une couverture complète de tous les matchs de ligue, compétitions de coupe et nouvelles de football de dernière minute de toute la communauté de football de Bloxburg.',
        'bb-coverage': 'Couverture en Direct',
        'bb-coverage-desc': 'Regardez chaque moment crucial',
        'bb-analysis': 'Analyse d\'Expert',
        'bb-analysis-desc': 'Analyses tactiques approfondies',
        'bb-news': 'Nouvelles de Dernière Minute',
        'bb-news-desc': 'Premier à rapporter les transferts et mises à jour',
        'ownership-change': '*L\'ancien propriétaire Sam a transféré la propriété à l\'équipe de direction actuelle.',
        'footer-rights': 'Tous droits réservés.',
        'tab-overview': 'Aperçu',
        'tab-leagues': 'Ligues',
        'tab-cup': 'Coupe ROTW',
        'tab-history': 'Histoire',
        'tab-winners': 'Gagnants',
        'tab-bb-news': 'BB News',
        'tab-founders': 'Direction',
        'cup-final-title': 'Finale de la Coupe ROTW',
        'final-venue': 'Stade RC Lens (Neutre)',
        'final-location': 'Quartier: Quwerkyturkey',
        'final-time': '21h00 Heure du Royaume-Uni',
        'days': 'Jours',
        'hours': 'Heures',
        'minutes': 'Minutes',
        'seconds': 'Secondes',
        'league-runner': 'Directeur de Ligue',
        'cup-runner-title': 'Directeur de Coupe',
        'bb-owner': 'Propriétaire',
        'live-stream-title': 'Diffusion en Direct Récente',
        'view-all-streams': 'Voir toutes les diffusions BB News',
        'ownership-subtitle': 'Propriété Actuelle',
        'co-owner': 'Co-Propriétaire'
    },
    nl: {
        'nav-leagues': 'Competities',
        'nav-cup': 'ROTW Beker',
        'nav-founders': 'Oprichters en Eigenaren',
        'nav-history': 'Geschiedenis',
        'nav-winners': 'Winnaars',
        'nav-bb-news': 'BB News',
        'season-title': 'Seizoen 12',
        'hero-description': 'De premier voetbalcompetitie in Bloxburg',
        'leagues-title': 'Competitie Structuur',
        'tier-elite': 'Elite Niveau',
        'tier-competitive': 'Competitief Niveau',
        'tier-development': 'Ontwikkelings Niveau',
        'a-league-desc': 'Het hoogste niveau van competitie met de meest vaardige teams en spelers in ROTW.',
        'b-league-desc': 'Het middenniveau dat competitief spel biedt voor ontwikkelende teams en ambitieuze spelers.',
        'c-league-desc': 'De instapcompetitie perfect voor nieuwkomers en teams die hun fundament bouwen.',
        'teams': 'Teams',
        'matches': 'Wedstrijden',
        'cup-title': 'ROTW Beker',
        'cup-subtitle': 'Het Ultieme Kampioenschap',
        'cup-desc-1': 'De ROTW Beker is het meest prestigieuze toernooi in Bloxburg Football, dat de beste teams van alle competities samenbrengt in een epische knock-out competitie.',
        'cup-desc-2': 'Teams strijden door meerdere rondes van intense wedstrijden, waarbij alleen de sterksten overleven om de ultieme prijs en eeuwige glorie op te eisen.',
        'format-title': 'Format',
        'format-desc': 'Enkele eliminatie knock-out toernooi',
        'participants-title': 'Deelnemers',
        'participants-desc': 'Top teams van A, B en C competities',
        'prize-title': 'Prijs',
        'prize-desc': 'Kampioenschapstrofee en competitie promotie',
        'founders-title': 'Oprichters en Eigenaren',
        'founders-subtitle': 'Oprichters',
        'owners-subtitle': 'Huidige Eigenaren',
        'co-founder': 'Mede-Oprichter',
        'owner': 'Eigenaar',
        'founding-desc': 'De visionairs die ROTW oprichtten en de basis legden van Bloxburg\'s premier voetbalcompetitie.',
        'ownership-change': '*Voormalig eigenaar Sam heeft het eigendom overgedragen aan het huidige leiderschapsteam.',
        'bb-news-title': 'Officiële Uitzend en Media Partner',
        'bb-news-desc': 'BB News is de officiële uitzend- en mediapartner van ROTW, die je uitgebreide dekking biedt van alle competitiewedstrijden, bekercompetities en laatste voetbalnieuws van de hele Bloxburg voetbalgemeenschap.',
        'bb-coverage': 'Live Wedstrijddekking',
        'bb-coverage-desc': 'Bekijk elk cruciaal moment',
        'bb-analysis': 'Expert Analyse',
        'bb-analysis-desc': 'Diepgaande tactische analyses',
        'bb-news': 'Laatste Nieuws',
        'bb-news-desc': 'Eerste om transfers en updates te rapporteren',
        'history-title': 'Competitie en Beker Geschiedenis',
        'winners-title': 'Alle-Tijd Competitie Winnaars (S1 - S11)',
        'winners-subtitle': '⭐️ = 1 stuk zilverwerk',
        'bb-news-title': 'Officiële Uitzend en Media Partner',
        'bb-news-desc': 'BB News is de officiële uitzend- en mediapartner van ROTW, die je uitgebreide dekking biedt van alle competitiewedstrijden, bekercompetities en laatste voetbalnieuws van de hele Bloxburg voetbalgemeenschap.',
        'bb-coverage': 'Live Wedstrijddekking',
        'bb-coverage-desc': 'Bekijk elk cruciaal moment',
        'bb-analysis': 'Expert Analyse',
        'bb-analysis-desc': 'Diepgaande tactische analyses',
        'bb-news': 'Laatste Nieuws',
        'bb-news-desc': 'Eerste om transfers en updates te rapporteren',
        'ownership-change': '*Voormalig eigenaar Sam heeft het eigendom overgedragen aan het huidige leiderschapsteam.',
        'footer-rights': 'Alle rechten voorbehouden.',
        'tab-overview': 'Overzicht',
        'tab-leagues': 'Competities',
        'tab-cup': 'ROTW Beker',
        'tab-history': 'Geschiedenis',
        'tab-winners': 'Winnaars',
        'tab-bb-news': 'BB News',
        'tab-founders': 'Leiderschap',
        'cup-final-title': 'ROTW Beker Finale',
        'final-venue': 'RC Lens Stadion (Neutraal)',
        'final-location': 'Buurt: Quwerkyturkey',
        'final-time': '21:00 VK Tijd',
        'days': 'Dagen',
        'hours': 'Uren',
        'minutes': 'Minuten',
        'seconds': 'Seconden',
        'league-runner': 'Competitie Manager',
        'cup-runner-title': 'Beker Manager',
        'bb-owner': 'Eigenaar',
        'live-stream-title': 'Recente Live Stream',
        'view-all-streams': 'Bekijk alle BB News streams',
        'ownership-subtitle': 'Huidige Eigendom',
        'co-owner': 'Mede-Eigenaar'
    }
};

// Current language
let currentLanguage = 'en';

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Store language preference
    localStorage.setItem('rotw-language', lang);
}

// Initialize language from localStorage or default to English
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('rotw-language') || 'en';
    switchLanguage(savedLanguage);
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.league-card, .feature, .leadership-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Add hover effects for interactive elements
function initializeHoverEffects() {
    // Add subtle animations to buttons and cards
    document.querySelectorAll('.league-card, .feature, .leadership-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeTabs();
    initializeCountdown();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeHoverEffects();
    
    // Add event listeners for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Add active states for navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Tab functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Countdown timer functionality
function initializeCountdown() {
    const finalDate = new Date('2025-06-07T21:00:00+01:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = finalDate - now;
        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}