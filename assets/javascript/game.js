// Push button to start game or new game.
var computerNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var sum = 0;

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
if (guessNumber < computerNumber) {
    document.getElementById("guessNumber") = guessNumber
}

// // If number more, then lose.
else if (guessNumber > computerNumber) {
    document.getElementById("guessNumber") = "Sorry, you lose."
}


// // if numbers equals, then win.
// else (guessNumber = computerNumber) {
//     document.getElementById("guessNumber") = guessNumber
// }
}
// // Display wins.


// Display losses.