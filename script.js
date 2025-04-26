
const boutonDemarrer = document.getElementById("start-btn");
const accueil = document.querySelector(".page-accueil-container");
const quiz = document.getElementById("page-quiz-container");

boutonDemarrer.addEventListener("click", () => {
    accueil.classList.add("hidden");
    quiz.classList.remove("hidden");

    setTimeout(() => {
        quiz.classList.add("visible");
    }, 50);
})