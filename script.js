
const boutonDemarrer = document.getElementById("start-btn");
const accueil = document.querySelector(".button-container");
const quiz = document.getElementById("bloc-quiz");

boutonDemarrer.addEventListener("click", () => {
    accueil.classList.add("hidden");
    quiz.classList.remove("hidden");

    setTimeout(() => {
        quiz.classList.add("visible");
    }, 50);
})