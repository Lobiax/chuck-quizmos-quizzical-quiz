function startGame();
function checkAnswer();
function incrementScore(){
    let previousScore = parseInt(document.getElementById("score").innerHTML)
    document.getElementById("score").innerHTML = ++previousScore; 
}
function incrementIncorrectAnswer(){
    let previousIncorrect = parseInt(document.getElementById("incorrect").innerHTML)
    document.getElementById("incorrect").innerHTML = ++previousIncorrect;
}
function displayQuestion1();
function displayQuestion2();
function displayQuestion3();
function displayQuestion4();
function displayQuestion5();
