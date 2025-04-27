const boutonDemarrer = document.getElementById("start-btn");
const pageAccueil = document.querySelector(".page-accueil-container");
const pageQuiz = document.getElementById("page-quiz-container");

const questions = [
    {
        titre: "✧ Question 1 ✧",
        question: "En marchant dans la forêt brumeuse, tu entends un bruit étrange dans les feuillages. Que fais-tu ?",
        fond: "url('Ressources/Images/pine-forest.jpg')",
        reponses: [
            { icone: "👀", texte: "J’observe calmement sans bouger."},
            { icone: "🎵", texte: "J’imite le bruit pour rigoler."},
            { icone: "👣", texte: "J’avance prudemment, prêt à aider."},
            { icone: "🌫️", texte: "Je change discrètement de chemin."},
        ]
    },
    {
        titre: "✧ Question 2 ✧",
        question: "Tu arrives dans un village caché. La source d’eau s’est tarie. Tu...",
        fond: "url('Ressources/Images/source.jpg')",
        reponses: [
            { icone: "💧", texte: "Je propose d’écouter tout le monde."},
            { icone: "🔍", texte: "Je pars voir d’où vient le problème"},
            { icone: "🎭", texte: "Je lance une blague pour détendre."},
            { icone: "🧠", texte: "J’analyse la situation posément."},
        ]
    },
    {
        titre: "✧ Question 3 ✧",
        question: "Un groupe d’enfants s’est perdu dans les bois. On t’appelle à l’aide. Tu...",
        fond: "url('Ressources/Images/forest_wallpaper.jpg')",
        reponses: [
            { icone: "🔔", texte: "Je mobilise l’équipe pour chercher."},
            { icone: "🧭", texte: "J’établis un plan de recherche."},
            { icone: "🎉", texte: "Je rassure tout le monde en riant."},
            { icone: "🚀", texte: "Je cours les chercher sans attendre."},
        ]
    },
    {
        titre: "✧ Question 4 ✧",
        question: "Tu dois traverser un marais mystérieux. Le sol tremble. Quelle est ta réaction ?",
        fond: "url('Ressources/Images/marais.jpg')",
        reponses: [
            { icone: "🕯️", texte: "Je teste chaque pas avec prudence."},
            { icone: "🏃", texte: "Je fonce pour éviter l’effondrement."},
            { icone: "🌿", texte: "J’encourage les autres calmement."},
            { icone: "🧭", texte: "Je trouve un chemin plus sûr."},
        ]
    },
    {
        titre: "✧ Question 5 ✧",
        question: "On te propose de rejoindre une expédition dans une région inconnue. Tu...",
        fond: "url('Ressources/Images/foretTropicale.jpg')",
        reponses: [
            { icone: "🎒", texte: "J’accepte sans poser de questions."},
            { icone: "🫶", texte: "Je m’assure que tout le monde est prêt."},
            { icone: "🗺️", texte: "Je trace un itinéraire précis avant."},
            { icone: "🏹", texte: "Je prépare mon sac et fonce."},
        ]
    },
    {
        titre: "✧ Question 6 ✧",
        question: "Une dispute éclate dans le camp. Que fais-tu ?",
        fond: "url('Ressources/Images/camp.jpg')",
        reponses: [
            { icone: "🧘", texte: "J’écoute chacun pour calmer la situation."},
            { icone: "🎭", texte: "Je fais une blague pour détendre."},
            { icone: "📜", texte: "Je rappelle les règles communes."},
            { icone: "🧠", texte: "Je propose une solution logique."},
        ]
    },
    {
        titre: "✧ Question 7 ✧",
        question: "Tu tombes sur un coffre fermé par une énigme ancienne. Tu...",
        fond: "url('Ressources/Images/coffre.jpg')",
        reponses: [
            { icone: "🧩", texte: "Je réfléchis aux symboles en silence."},
            { icone: "🧪", texte: "Je teste plein de combinaisons au hasard."},
            { icone: "🛠️", texte: "J’essaie d’ouvrir avec la force brute."},
            { icone: "🔎", texte: "Je cherche discrètement des indices."},
        ]
    },
    {
        titre: "✧ Question 8 ✧",
        question: "Une vieille dame dans les bois te demande de l’aide pour transporter un panier. Tu...",
        fond: "url('Ressources/Images/vieilleDame.jpg')",
        reponses: [
            { icone: "🎒", texte: "Je porte immédiatement son panier."},
            { icone: "🎁", texte: "Je demande une récompense en riant."},
            { icone: "🏡", texte: "Je l’accompagne jusqu’à chez elle."},
            { icone: "🧐", texte: "Je reste méfiant mais j’aide."},
        ]
    },
    {
        titre: "✧ Question 9 ✧",
        question: "Tu dois transmettre un message très important. Tu...",
        fond: "url('Ressources/Images/message.jpg')",
        reponses: [
            { icone: "🧭", texte: "J’organise un trajet discret."},
            { icone: "🏃", texte: "Je cours livrer le message sans attendre."},
            { icone: "👫", texte: "Je demande un compagnon pour plus de sûreté."},
            { icone: "🎶", texte: "Je le transmets par une chanson codée."},
        ]
    },
    {
        titre: "✧ Question 10 ✧",
        question: "La forêt est plongée dans une nuit magique. Des lucioles colorées te montrent le chemin. Tu...",
        fond: "url('Ressources/Images/lucioles.jpg')",
        reponses: [
            { icone: "🎶", texte: "Je les suis en dansant joyeusement."},
            { icone: "📓", texte: "Je note leur trajectoire avec soin."},
            { icone: "⏳", texte: "J’attends que tout le groupe soit prêt."},
            { icone: "🌟", texte: "Je fonce en suivant les lumières."},
        ]
    },
    {
        titre: "✧ Question 11 ✧",
        question: "On te confie une mission secrète. Tu...",
        fond: "url('Ressources/Images/mission.jpg')",
        reponses: [
            { icone: "🔕", texte: "Je prépare tout en silence."},
            { icone: "🧐", texte: "Je vérifie qu’elle est sans danger."},
            { icone: "🎭", texte: "Je l’accepte si elle a l’air drôle."},
            { icone: "🛡️", texte: "Je l’accepte pour prouver ma valeur."},
        ]
    },
    {
        titre: "✧ Question 12 ✧",
        question: "À la fin d’un long voyage, on t’offre une récompense. Tu choisis...",
        fond: "url('Ressources/Images/bourse.jpg')",
        reponses: [
            { icone: "🌱", texte: "Une graine rare à cultiver."},
            { icone: "🔥", texte: "Une pierre de feu éternel."},
            { icone: "🗺️", texte: "Une carte ancienne secrète."},
            { icone: "🎵", texte: "Un collier musical changeant."},
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
            const icone = bouton.querySelector(".icone-rep");
            const textRep = bouton.querySelector(".texte-rep");

            icone.innerText = questions[index].reponses[i].icone;
            textRep.innerText = questions[index].reponses[i].texte;
        });

        wall.style.backgroundImage = questions[index].fond;
    }






boutonDemarrer.addEventListener("click", () => {
    pageAccueil.classList.add("hidden");
    pageQuiz.classList.remove("hidden");


    setTimeout(() => {
        pageQuiz.classList.add("visible");
    }, 50);

    afficherQuestion(0);
})
