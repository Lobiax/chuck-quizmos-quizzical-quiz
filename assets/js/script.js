let quizQuestions = [
    {
        question: "What Pharaoh does the Great Sphynx of Giza represent?",
        answers: [
            { answer1: "Tut", answer: false },
            { answer2: "Khafre", answer: true },
            { answer3: "Khufu", answer: false },
            { answer4: "Cleopatra", answer: false }
        ],
    },
    {
        question: "Which country consumes the most chocolate per capita?",
        answers: [
            { answer1: "Switzerland", answer: true },
            { answer2: "Sweden", answer: false },
            { answer3: "USA", answer: false },
            { answer4: "Brazil", answer: false }
        ],
    },
    {
        question: "Directing a small green amphibian across a busy road was the goal in which classic video game?",
        answers: [
            { answer1: "Toads", answer: false },
            { answer2: "Salamander", answer: false },
            { answer3: "Battletoads", answer: false },
            { answer4: "Frogger", answer: true }
        ],
    },
    {
        question: "What mystical blade features in virtually every Legend of Zelda game?",
        answers: [
            { answer1: "The Sword of Legends", answer: false },
            { answer2: "Sword of Light", answer: false },
            { answer3: "Claymore", answer: false },
            { answer4: "The Master Sword", answer: true }
        ],
    },
    {
        question: "What country has more than half of its people believing in elves, dwarves and ghosts?",
        answers: [
            { answer1: "Romania", answer: false },
            { answer2: "Iceland", answer: true },
            { answer3: "China", answer: false },
            { answer4: "Sudan", answer: false }
        ],
    },
    {
        question: "What shoes were originally created for men but are more often worn by women?",
        answers: [
            { answer1: "Ballerina Flats", answer: false },
            { answer2: "Sandalettes", answer: false },
            { answer3: "High Heels", answer: true },
            { answer4: "Moccasins", answer: false }
        ],
    },
    {
        question: "What country has a unicorn part of its national emblem?",
        answers: [
            { answer1: "Scotland", answer: true },
            { answer2: "Finland", answer: false },
            { answer3: "France", answer: false },
            { answer4: "Iran", answer: false }
        ],
    },
];

let answerButtons = document.querySelectorAll("button");
let questionText = document.getElementById("question");

document.addEventListener("DOMContentLoaded", startGame());

function startGame() {
    displayQuestion();
    console.log("The game has started");
}

/** This function displays the questions */
function displayQuestion() {
    let questionText = document.getElementById("question");
    questionText.innerHTML = quizQuestions[0].question;

}
function checkAnswer() {

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

