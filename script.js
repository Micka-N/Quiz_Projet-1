
const boutonDemarrer = document.getElementById("start-btn");
const pageAccueil = document.querySelector(".page-accueil-container");
const pageQuiz = document.getElementById("page-quiz-container");

const questions = [
    {
        titre: "✧ Question 1 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 2 ✧",
        question: "Tu arrives dans un village caché. La source d’eau s’est tarie. Tu...",
        fond: "url('Ressources/Images/source.jpg')",
        reponses: [
            { icone: "🐦", texte: "Je propose d’écouter tout le monde."},
            { icone: "🐉", texte: "Je pars voir d’où vient le problème"},
            { icone: "🐒", texte: "Je lance une blague pour détendre."},
            { icone: "🦉", texte: "J’analyse la situation posément."},
        ]
    },
    {
        titre: "✧ Question 3 ✧",
        question: "Un groupe d’enfants s’est perdu dans les bois. On t’appelle à l’aide. Tu...",
        fond: "url('Ressources/Images/forest_wallpaper.jpg')",
        reponses: [
            { icone: "🐺", texte: "Je mobilise l’équipe pour chercher."},
            { icone: "🦊", texte: "J’établis un plan de recherche."},
            { icone: "🐒", texte: "Je rassure tout le monde en riant."},
            { icone: "🐉", texte: "Je cours les chercher sans attendre."},
        ]
    },
    {
        titre: "✧ Question 4 ✧",
        question: "Tu dois traverser un marais mystérieux. Le sol tremble. Quelle est ta réaction ?",
        fond: "url('Ressources/Images/marais.jpg')",
        reponses: [
            { icone: "🔍", texte: "Je teste chaque pas avec prudence."},
            { icone: "😂", texte: "Je fonce pour éviter l’effondrement."},
            { icone: "🛡️", texte: "J’encourage les autres calmement."},
            { icone: "🦊", texte: "Je trouve un chemin plus sûr."},
        ]
    },
    {
        titre: "✧ Question 5 ✧",
        question: "On te propose de rejoindre une expédition dans une région inconnue. Tu...",
        fond: "url('Ressources/Images/foretTropicale.jpg')",
        reponses: [
            { icone: "🐒", texte: "J’accepte sans poser de questions."},
            { icone: "🐦", texte: "Je m’assure que tout le monde est prêt."},
            { icone: "🦉", texte: "Je trace un itinéraire précis avant."},
            { icone: "🐉", texte: "Je prépare mon sac et fonce."},
        ]
    },
    {
        titre: "✧ Question 6 ✧",
        question: "Une dispute éclate dans le camp. Que fais-tu ?",
        fond: "url('Ressources/Images/camp.jpg')",
        reponses: [
            { icone: "🐦", texte: "J’écoute chacun pour calmer la situation."},
            { icone: "🐒", texte: "Je fais une blague pour détendre."},
            { icone: "🛡️", texte: "Je rappelle les règles communes."},
            { icone: "🦊", texte: "Je propose une solution logique."},
        ]
    },
    {
        titre: "✧ Question 7 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 8 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 9 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 10 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 11 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 12 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "🔍", texte: "J’observe calmement sans bouger."},
            { icone: "😂", texte: "J’imite le bruit pour rigoler."},
            { icone: "🛡️", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🦊", texte: "Je change discrètement de chemin."},
        ]
    },
]

boutonDemarrer.addEventListener("click", () => {
    pageAccueil.classList.add("hidden");
    pageQuiz.classList.remove("hidden");

    setTimeout(() => {
        pageQuiz.classList.add("visible");
    }, 50);
})

