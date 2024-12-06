document.getElementById("flags").addEventListener("click", startGame("flags"));
document.getElementById("landmarks").addEventListener("click", startGame("landmarks"));
document.getElementById("shape").addEventListener("click", startGame("shape"));

document.getElementById("submit-button").addEventListener("click", checkAnswer);
document.getElementById("home-button").addEventListener("click", showChoosingScreen);
document.getElementById("skip-button").addEventListener("click", skipQuesiton)

let currentMode = "";
let currentQuestionIndex = 0;
let questions = [];

function showChoosingScreen() {
    document.getElementById("choosing-screen").classList.remove("hidden");
    document.getElementById("game-display").classList.add("hidden");
}

function startGame(mode) {
    return function() {
        currentMode = mode;
        loadQuestions(mode);

        document.getElementById("choosing-screen").classList.add("hidden");
        document.getElementById("game-display").classList.remove("hidden");

        displayQuestions();
    };
}

function loadQuestions(mode) {
    if (mode === "flags"){
        questions = [
            {image: "resources/flags/1", correctAnswer: "1"},
            {image: "resources/flags/2", correctAnswer: "2"}
        ];
    } else if (mode === "landmarks") {
        questions = [
            {image: "resources/landmarks/1", correctAnswer: "1"},
            {image: "resources/landmarks/2", correctAnswer: "2"}
        ];
    } else if (mode === "shape") {
        questions = [
            {image: "resources/shapes/1", correctAnswer: "1"},
            {image: "resources/shapes/2", correctAnswer: "2"}
        ];
    }
}

function displayQuestions() {
    const question = questions[currentQuestionIndex];

    document.querySelector("#game-display img").src = question.image;
    document.getElementById("guess-input").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("guess-input").value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].correctAnswer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! ✅";
        document.getElementById("feedback").style.color = "green";
        document.body.style.backgroundColor = "green";

        setTimeout(() => {
            document.body.style.backgroundColor = "";
            currentQuestionIndex = (currentQuestionIndex+1)%questions.length;
            displayQuestions();
        }, 2000);
    } else {
        document.getElementById("feedback").textContent = "Wrong! Try again"
        document.getElementById("feedback").style.color = "red";
    }
}

function skipQuesiton() {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer.toLowerCase();
    document.getElementById("feedback").textContent = `The correct answer is: ${correctAnswer}`;

    setTimeout(() => {
        currentMode = (currentQuestionIndex + 1) % questions.length;
        displayQuestions();
    }, 2000);
}