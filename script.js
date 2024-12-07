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
            {image: "resources/flags/1.jpg", correctAnswer: "Mexico"},
            {image: "resources/flags/2.jpg", correctAnswer: "Indonesia"},
            {image: "resources/flags/3.jpg", correctAnswer: "Japan"},
            {image: "resources/flags/4.jpg", correctAnswer: "China"},
            {image: "resources/flags/5.jpg", correctAnswer: "South Korea"},
            {image: "resources/flags/6.jpg", correctAnswer: "Thailand"},
            {image: "resources/flags/7.jpg", correctAnswer: "India"},
            {image: "resources/flags/8.jpg", correctAnswer: "Pakistan"},
            {image: "resources/flags/9.jpg", correctAnswer: "Germany"},
            {image: "resources/flags/10.jpg", correctAnswer: "Brazil"},
            {image: "resources/flags/11.jpg", correctAnswer: "Italy"},
            {image: "resources/flags/12.jpg", correctAnswer: "France"},
            {image: "resources/flags/13.jpg", correctAnswer: "Ukraine"},
            {image: "resources/flags/14.jpg", correctAnswer: "Malaysia"}
        ];
    } else if (mode === "landmarks") {
        questions = [
            {image: "resources/landmarks/1.jpg", correctAnswer: "France"},
            {image: "resources/landmarks/2.jpg", correctAnswer: "Russia"},
            {image: "resources/landmarks/3.jpg", correctAnswer: "Greece"},
            {image: "resources/landmarks/4.jpg", correctAnswer: "Egypt"},
            {image: "resources/landmarks/5.jpg", correctAnswer: "China"},
            {image: "resources/landmarks/6.jpg", correctAnswer: "India"},
            {image: "resources/landmarks/7.jpg", correctAnswer: "Peru"},
            {image: "resources/landmarks/8.jpg", correctAnswer: "England"},
            {image: "resources/landmarks/9.jpg", correctAnswer: "Dubai"},
            {image: "resources/landmarks/10.jpg", correctAnswer: "Italy"},
            {image: "resources/landmarks/11.jpg", correctAnswer: "Brazil"},
            {image: "resources/landmarks/12.jpg", correctAnswer: "Germany"},
            {image: "resources/landmarks/13.jpg", correctAnswer: "Mexico"}
        ];
    } else if (mode === "shape") {
        questions = [
            {image: "resources/shapes/1.png", correctAnswer: "Malaysia"},
            {image: "resources/shapes/2.png", correctAnswer: "France"},
            {image: "resources/shapes/3.png", correctAnswer: "Brazil"},
            {image: "resources/shapes/4.png", correctAnswer: "Pakistan"},
            {image: "resources/shapes/5.png", correctAnswer: "Thailand"},
            {image: "resources/shapes/6.png", correctAnswer: "China"},
            {image: "resources/shapes/7.png", correctAnswer: "Indonesia"},
            {image: "resources/shapes/8.png", correctAnswer: "Mexico"},
            {image: "resources/shapes/9.png", correctAnswer: "Japan"},
            {image: "resources/shapes/10.png", correctAnswer: "South Korea"},
            {image: "resources/shapes/11.png", correctAnswer: "Vietnam"},
            {image: "resources/shapes/12.png", correctAnswer: "Denmark"},
            {image: "resources/shapes/13.png", correctAnswer: "Cuba"},
            {image: "resources/shapes/14.png", correctAnswer: "Egypt"},
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
        document.getElementById("feedback").textContent = "Correct! ";
        document.getElementById("feedback").style.color = "green";

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
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    document.getElementById("feedback").style.color = "blue";
    document.getElementById("feedback").textContent = `The correct answer is: ${correctAnswer}`;

    setTimeout(() => {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        displayQuestions();
        document.getElementById("feedback").style.color = "";
    }, 2000);
}