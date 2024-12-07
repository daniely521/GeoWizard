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
            {image: "resources/flags/1.jpg", correctAnswer: "mexico"},
            {image: "resources/flags/2.jpg", correctAnswer: "indonesia"},
            {image: "resources/flags/3.jpg", correctAnswer: "japan"},
            {image: "resources/flags/4.jpg", correctAnswer: "china"},
            {image: "resources/flags/5.jpg", correctAnswer: "south korea"},
            {image: "resources/flags/6.jpg", correctAnswer: "thailand"},
            {image: "resources/flags/7.jpg", correctAnswer: "india"},
            {image: "resources/flags/8.jpg", correctAnswer: "pakistan"},
            {image: "resources/flags/9.jpg", correctAnswer: "germany"},
            {image: "resources/flags/10.jpg", correctAnswer: "brazil"},
            {image: "resources/flags/11.jpg", correctAnswer: "italy"},
            {image: "resources/flags/12.jpg", correctAnswer: "france"},
            {image: "resources/flags/13.jpg", correctAnswer: "ukraine"},
            {image: "resources/flags/14.jpg", correctAnswer: "malaysia"}
        ];
    } else if (mode === "landmarks") {
        questions = [
            {image: "resources/landmarks/1.jpg", correctAnswer: "france"},
            {image: "resources/landmarks/2.jpg", correctAnswer: "russia"},
            {image: "resources/landmarks/3.jpg", correctAnswer: "greece"},
            {image: "resources/landmarks/4.jpg", correctAnswer: "egypt"},
            {image: "resources/landmarks/5.jpg", correctAnswer: "china"},
            {image: "resources/landmarks/6.jpg", correctAnswer: "india"},
            {image: "resources/landmarks/7.jpg", correctAnswer: "peru"},
            {image: "resources/landmarks/8.jpg", correctAnswer: "england"},
            {image: "resources/landmarks/9.jpg", correctAnswer: "dubai"},
            {image: "resources/landmarks/10.jpg", correctAnswer: "italy"},
            {image: "resources/landmarks/11.jpg", correctAnswer: "brazil"},
            {image: "resources/landmarks/12.jpg", correctAnswer: "germany"},
            {image: "resources/landmarks/13.jpg", correctAnswer: "mexico"}
        ];
    } else if (mode === "shape") {
        questions = [
            {image: "resources/shapes/1.png", correctAnswer: "1"},
            {image: "resources/shapes/2.png", correctAnswer: "2"}
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
        }, 1000);
    } else {
        document.getElementById("feedback").textContent = "Wrong! Try again"
        document.getElementById("feedback").style.color = "red";
    }
}

function skipQuesiton() {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer.toLowerCase();
    document.getElementById("feedback").textContent = `The correct answer is: ${correctAnswer}`;

    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestions();
    }, 2000);
}