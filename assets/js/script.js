document.addEventListener("DOMContentLoaded", startGame());

document.getElementById("answer1");
function startGame() {
    displayQuestion1();
    console.log("The game has started");
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

/** This function displays the first question */
function displayQuestion1() {
    document.getElementById("question").textContent = "What Pharaoh does the Great Sphynx of Giza represent?";
    document.getElementById("answer1").textContent = "Tut";
    document.getElementById("answer2").textContent = "Khafre";
    document.getElementById("answer3").textContent = "Khufu";
    document.getElementById("answer4").textContent = "Cleopatra";
}

function displayQuestion2() {
    document.getElementById("question").textContent = "Which country consumes the most chocolate per capita?";
    document.getElementById("answer1").textContent = "Switzerland";
    document.getElementById("answer2").textContent = "Sweden";
    document.getElementById("answer3").textContent = "USA";
    document.getElementById("answer4").textContent = "Brazil";
}
function displayQuestion3() {
    document.getElementById("question").textContent = "Directing a small green amphibian across a busy road was the goal in which classic video game?";
    document.getElementById("answer1").textContent = "Toads";
    document.getElementById("answer2").textContent = "Salamander";
    document.getElementById("answer3").textContent = "Battletoads";
    document.getElementById("answer4").textContent = "Frogger";
}
function displayQuestion4() {
    document.getElementById("question").textContent = "What mystical blade features in virtually every Legend of Zelda game?";
    document.getElementById("answer1").textContent = "The Sword of Legends";
    document.getElementById("answer2").textContent = "Sword of Light";
    document.getElementById("answer3").textContent = "Claymore";
    document.getElementById("answer4").textContent = "The Master Sword";
}
function displayQuestion5() {
    document.getElementById("question").textContent = "What country has more than half of its people believing in elves, dwarves and ghosts?";
    document.getElementById("answer1").textContent = "Romania";
    document.getElementById("answer2").textContent = "Iceland";
    document.getElementById("answer3").textContent = "China";
    document.getElementById("answer4").textContent = "Sudan";
}
function displayQuestion6() {
    document.getElementById("question").textContent = "What shoes were originally created for men but are more often worn by women? ";
    document.getElementById("answer1").textContent = "Ballerina Flats";
    document.getElementById("answer2").textContent = "Sandalettes";
    document.getElementById("answer3").textContent = "High Heels";
    document.getElementById("answer4").textContent = "Moccasins";
}
function displayQuestion7() {
    document.getElementById("question").textContent = "What country has a unicorn part of its national emblem? ";
    document.getElementById("answer1").textContent = "Scotland";
    document.getElementById("answer2").textContent = "Finland";
    document.getElementById("answer3").textContent = "France";
    document.getElementById("answer4").textContent = "Sudan";
}

