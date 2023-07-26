/** This variable contains an array of the questions and answers */
let quizQuestions = [
    {
        question: "What Pharaoh does the Great Sphynx of Giza represent?",
        answers: [
            { option: "Tut", answer: false },
            { option: "Khafre", answer: true },
            { option: "Khufu", answer: false },
            { option: "Cleopatra", answer: false }
        ],
    },
    {
        question: "Which country consumes the most chocolate per capita?",
        answers: [
            { option: "Switzerland", answer: true },
            { option: "Sweden", answer: false },
            { option: "USA", answer: false },
            { option: "Brazil", answer: false }
        ],
    },
    {
        question: "Directing a small green amphibian across a busy road was the goal in which classic video game?",
        answers: [
            { option: "Toads", answer: false },
            { option: "Salamander", answer: false },
            { option: "Battletoads", answer: false },
            { option: "Frogger", answer: true }
        ],
    },
    {
        question: "What mystical blade features in virtually every Legend of Zelda game?",
        answers: [
            { option: "The Sword of Legends", answer: false },
            { option: "Sword of Light", answer: false },
            { option: "Claymore", answer: false },
            { option: "The Master Sword", answer: true }
        ],
    },
    {
        question: "What country has more than half of its people believing in elves, dwarves and ghosts?",
        answers: [
            { option: "Romania", answer: false },
            { option: "Iceland", answer: true },
            { option: "China", answer: false },
            { option: "Sudan", answer: false }
        ],
    },
    {
        question: "What shoes were originally created for men but are now more often worn by women?",
        answers: [
            { option: "Ballerina Flats", answer: false },
            { option: "Sandalettes", answer: false },
            { option: "High Heels", answer: true },
            { option: "Moccasins", answer: false }
        ],
    },
    {
        question: "What country has a unicorn part of its national emblem?",
        answers: [
            { option: "Scotland", answer: true },
            { option: "Finland", answer: false },
            { option: "France", answer: false },
            { option: "Iran", answer: false }
        ],
    },
];
// these are the variables needed for the logic
let questionText = document.getElementById("question");
let answerButton = document.getElementsByClassName("answer");
let answerArray = Array.from(answerButton);
let currentQuestion = 0;
let previousScore = parseInt(document.getElementById("score").innerHTML);

// This makes sure the page is loaded before starting the game
document.addEventListener("DOMContentLoaded", startGame());

/** This functions starts the game */
function startGame() {
    displayQuestion();
    console.log("The game has started");
}

/** This function displays the questions */
function displayQuestion() {
    questionText.innerHTML = quizQuestions[currentQuestion].question;
    for (let i = 0; i < answerButton.length; i++) {
        let btn = answerButton[i];
        btn.innerHTML = quizQuestions[currentQuestion].answers[i].option;
        btn.classList.remove("correct");
        if (quizQuestions[currentQuestion].answers[i].answer === true) {
            btn.classList.add("correct");
        }
    }
}
/**This uses the answerArray array to addeventlistener to each button */
answerArray.forEach(element => {
    element.addEventListener("click", function () {
        checkAnswer(element);
    });
});

/** This function checks whether the answer is correct or incorrect and then increments current question*/
function checkAnswer(element) {
    console.log(element);
    if (element.classList.contains("correct")) {
        incrementScore();
    } else {
        incrementIncorrectAnswer();
    }
    currentQuestion++;
    if (currentQuestion === quizQuestions.length) {
        quizComplete();
        location.reload();

    }
    displayQuestion();
}

/** This increments the score counter */
function incrementScore() {
    document.getElementById("score").innerHTML = ++previousScore;
}
/**This increments the incorrect answers counter */
function incrementIncorrectAnswer() {
    let previousIncorrect = parseInt(document.getElementById("incorrect").innerHTML);
    document.getElementById("incorrect").innerHTML = ++previousIncorrect;
}
/** This function shows the user their score at the end of the quiz */
function quizComplete() {
    if (previousScore > 4) {
        alert(`Congratulations! You got ${previousScore} out of 7 right`);

    } else {
        alert(`Ouch... You got ${previousScore} out of 7 right`);

    }


}

