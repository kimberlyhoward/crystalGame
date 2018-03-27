// Push button to start game or new game.
var computerNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var sum = 0;
var losses = 0;
var wins = 0;


function newGame() {
    computerNumber = Math.floor((Math.random() * 120) + 19);
    $(".computerNumber").html(computerNumber);
    crystalValue1 = Math.floor((Math.random() * 12) + 1);
    crystalValue2 = Math.floor((Math.random() * 12) + 1);
    crystalValue3 = Math.floor((Math.random() * 12) + 1);
    crystalValue4 = Math.floor((Math.random() * 12) + 1);
    sum = 0
    $("#blue").attr("crystalValue", crystalValue1);
    $("#purple").attr("crystalValue", crystalValue2);
    $("#green").attr("crystalValue", crystalValue3);
    $("#red").attr("crystalValue", crystalValue4);
}

$("#start").click(function () {
    newGame()
})

$("#blue").click(function () {
    sum += crystalValue1
    $(".guessNumber").text(sum);
    compare();
});

$("#purple").click(function () {
    sum += crystalValue2
    $("#guessNumber").text(sum);
    compare();
});

$("#green").click(function () {
    sum += crystalValue3
    $("#guessNumber").text(sum);
    compare();
});

$("#red").click(function () {
    sum += crystalValue4
    $("#guessNumber").text(sum);
    compare();
});


function compare (){
// // // If number less, then display in guessNumber box.
if (sum < computerNumber) {
    document.getElementById("guessNumber").innerHTML = sum
}

// // If number more, then lose.
else if (sum > computerNumber) {
    document.getElementById("guessNumber").innerHTML = "Sorry, you lose."
    losses++
    document.getElementById("loss").innerHTML = losses;
}

// // if numbers equals, then win.

else if (sum === computerNumber) {
    document.getElementById("guessNumber").innerHTML = "You win!"
    wins ++
    document.getElementById("win").innerHTML = wins;
}
}
