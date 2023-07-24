document.addEventListener("DOMContentLoaded", startGame());

document.getElementById("answer1")
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

/** */
function displayQuestion1() {
    document.getElementById("question").textContent = "What Pharaoh does the Great Sphynx of Giza represent?";
    document.getElementById("answer1").textContent = "Tut";
    document.getElementById("answer2").textContent = "Khafre";
    document.getElementById("answer3").textContent = "Khufu";
    document.getElementById("answer4").textContent = "Cleopatra";
}

