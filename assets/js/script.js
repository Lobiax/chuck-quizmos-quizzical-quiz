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

let questionText = document.getElementById("question");
let answerButton = document.getElementsByClassName("answer");
let answerArray = Array.from(answerButton);

document.addEventListener("DOMContentLoaded", startGame());

/** This functions starts the game */
function startGame() {
    displayQuestion();
    console.log("The game has started");
}

/** This function displays the questions */
function displayQuestion() {
    questionText.innerHTML = quizQuestions[0].question;
    for (let i = 0; i < answerButton.length; i++) {
        let btn = answerButton[i];
        btn.innerHTML = quizQuestions[0].answers[i].option;
    }
}
answerArray.forEach(element => {
    element.addEventListener("click", checkAnswer);
});

/** This function checks whether the answer is correct or incorrect */
function checkAnswer() {
    if (quizQuestions.option == true) {
        incrementScore();
        console.log("true");
    } else {
        incrementIncorrectAnswer();
        console.log("false");
    }

}

/** This increments the score counter */
function incrementScore() {
    let previousScore = parseInt(document.getElementById("score").innerHTML);
    document.getElementById("score").innerHTML = ++previousScore;
}
/**This increments the incorrect answers counter */
function incrementIncorrectAnswer() {
    let previousIncorrect = parseInt(document.getElementById("incorrect").innerHTML);
    document.getElementById("incorrect").innerHTML = ++previousIncorrect;
}

