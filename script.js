const boutonDemarrer = document.getElementById("start-btn");
const pageAccueil = document.querySelector(".page-accueil-container");
const pageQuiz = document.getElementById("page-quiz-container");
const boutonsReponses = document.querySelectorAll(".bouton-reponse");
const voile = document.querySelector(".brume");
let indexQuestion = 0;

const questions = [
    {
        titre: "✧ Question 1 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.webp')",
        reponses: [
            {texte: "J’observe calmement sans bouger."},
            {texte: "J’imite le bruit pour rigoler."},
            {texte: "J’avance prudemment, prêt à aider."},
            {texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 2 ✧",
        question: "Tu arrives dans un village caché. La source d’eau s’est tarie. Que fais-tu ?",
        fond: "url('Ressources/Images/source.webp')",
        reponses: [
            {texte: "Je propose d’écouter tout le monde."},
            {texte: "Je pars voir d’où vient le problème"},
            {texte: "Je lance une blague pour détendre."},
            {texte: "J’analyse la situation posément."},
        ]
    },
    {
        titre: "✧ Question 3 ✧",
        question: "Un groupe d’enfants s’est perdu dans les bois. On t’appelle à l’aide. Que fais-tu ?",
        fond: "url('Ressources/Images/forest_wallpaper.webp')",
        reponses: [
            {texte: "Je mobilise l’équipe pour chercher."},
            {texte: "J’établis un plan de recherche."},
            {texte: "Je rassure tout le monde en riant."},
            {texte: "Je cours les chercher sans attendre."},
        ]
    },
    {
        titre: "✧ Question 4 ✧",
        question: "Tu dois traverser un marais mystérieux. Le sol tremble. Quelle est ta réaction ?",
        fond: "url('Ressources/Images/marais.webp')",
        reponses: [
            {texte: "Je teste chaque pas avec prudence."},
            {texte: "Je fonce pour éviter l’effondrement."},
            {texte: "J’encourage les autres calmement."},
            {texte: "Je trouve un chemin plus sûr."},
        ]
    },
    {
        titre: "✧ Question 5 ✧",
        question: "On te propose de rejoindre une expédition dans une région inconnue. Que fais-tu ?",
        fond: "url('Ressources/Images/foretTropicale.webp')",
        reponses: [
            {texte: "J’accepte sans poser de questions."},
            {texte: "Je m’assure que tout le monde est prêt."},
            {texte: "Je trace un itinéraire précis avant."},
            {texte: "Je prépare mon sac et fonce."},
        ]
    },
    {
        titre: "✧ Question 6 ✧",
        question: "Une dispute éclate dans le camp. Que fais-tu ?",
        fond: "url('Ressources/Images/camp.webp')",
        reponses: [
            {texte: "J’écoute chacun pour calmer la situation."},
            {texte: "Je fais une blague pour détendre."},
            {texte: "Je rappelle les règles communes."},
            {texte: "Je propose une solution logique."},
        ]
    },
    {
        titre: "✧ Question 7 ✧",
        question: "Tu tombes sur un coffre fermé par une énigme ancienne. Que fais-tu ?",
        fond: "url('Ressources/Images/coffre.webp')",
        reponses: [
            {texte: "Je réfléchis aux symboles en silence."},
            {texte: "Je teste plein de combinaisons au hasard."},
            {texte: "J’essaie d’ouvrir avec la force brute."},
            {texte: "Je cherche discrètement des indices."},
        ]
    },
    {
        titre: "✧ Question 8 ✧",
        question: "Une vieille dame dans les bois te demande de l’aide pour transporter un panier. Que fais-tu ?",
        fond: "url('Ressources/Images/vieilleDame.webp')",
        reponses: [
            {texte: "Je porte immédiatement son panier."},
            {texte: "Je demande une récompense en riant."},
            {texte: "Je l’accompagne jusqu’à chez elle."},
            {texte: "Je reste méfiant mais j’aide."},
        ]
    },
    {
        titre: "✧ Question 9 ✧",
        question: "Tu dois transmettre un message très important. Que fais-tu ?",
        fond: "url('Ressources/Images/message.webp')",
        reponses: [
            {texte: "J’organise un trajet discret."},
            {texte: "Je cours livrer le message sans attendre."},
            {texte: "Je demande un compagnon pour plus de sûreté."},
            {texte: "Je le transmets par une chanson codée."},
        ]
    },
    {
        titre: "✧ Question 10 ✧",
        question: "La forêt est plongée dans une nuit magique. Des lucioles colorées te montrent le chemin. Que fais-tu ?",
        fond: "url('Ressources/Images/lucioles.webp')",
        reponses: [
            {texte: "Je les suis en dansant joyeusement."},
            {texte: "Je note leur trajectoire avec soin."},
            {texte: "J’attends que tout le groupe soit prêt."},
            {texte: "Je fonce en suivant les lumières."},
        ]
    },
    {
        titre: "✧ Question 11 ✧",
        question: "On te confie une mission secrète. Que fais-tu ?",
        fond: "url('Ressources/Images/mission.webp')",
        reponses: [
            {texte: "Je prépare tout en silence."},
            {texte: "Je vérifie qu’elle est sans danger."},
            {texte: "Je l’accepte si elle a l’air drôle."},
            {texte: "Je l’accepte pour prouver ma valeur."},
        ]
    },
    {
        titre: "✧ Question 12 ✧",
        question: "À la fin d’un long voyage, on t’offre une récompense. Tu choisis...",
        fond: "url('Ressources/Images/bourse.webp')",
        reponses: [
            { texte: "Une graine rare à cultiver."},
            { texte: "Une pierre de feu éternel."},
            { texte: "Une carte ancienne secrète."},
            { texte: "Un livre de magie."},
        ]
    },
]

    function afficherQuestion(index) {
        const titre = document.getElementById("titre-question");
        const texte = document.getElementById("texte-question");
        const boutons = document.querySelectorAll(".bouton-reponse");
        const wall = document.getElementById("page-quiz-container");

        titre.innerText = questions[index].titre;
        texte.innerText = questions[index].question;
        boutons.forEach((bouton, i) => {
            const texteRep = bouton.querySelector(".texte-rep");
            texteRep.innerText = questions[index].reponses[i].texte;
        });

        wall.style.backgroundImage = questions[index].fond;
    }

    const musiqueAmbianceQuiz = new Audio('Ressources/sons/Tibet_questions.mp3');
    musiqueAmbianceQuiz.loop = true;
    musiqueAmbianceQuiz.volume = 0.4;
    const sonClic = new Audio('Ressources/sons/sound_clic_accueil_2.mp3');
    sonClic.volume = 0.1;
    const sonClickQuiz = new Audio('Ressources/sons/click-game.mp3');
    sonClickQuiz.volume = 0.9;



boutonDemarrer.addEventListener("click", () => {
    pageAccueil.classList.add("hidden");
    pageQuiz.classList.remove("hidden");
    sonClic.play();
    musiqueAmbianceQuiz.play();
    

    setTimeout(() => {
        pageQuiz.classList.add("visible");
    }, 50);

    afficherQuestion(0);
})

    boutonsReponses.forEach((bouton) => {
        bouton.addEventListener("click", () => {
            sonClickQuiz.currentTime = 0;
            sonClickQuiz.play();
            indexQuestion++;
            afficherQuestion(indexQuestion);
            voile.classList.add("hidden");
        })
    })



