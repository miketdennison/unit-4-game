const MAX_POINTS_REQUIRED = 120;
const MIN_POINTS_REQUIRED = 19;
const MAX_ELEMENT_POINTS = 12;
const MIN_ELEMENT_POINTS = 1;
const NUM_OF_CRYSTALS = 4;
var pointsRequired = 0;
var totalPoints = 0;
var clickedImageId = "";
var totalWins = 0;
var totalLosses = 0;

var earth = {
    points: 0,
    idName: "earth-img",
}

var wind = {
    points: 0,
    idName: "wind-img",
}

var water = {
    points: 0,
    idName: "water-img",
}

var fire = {
    points: 0,
    idName: "fire-img",
}

function reset() {
    pointsRequired = 0;
    totalPoints = 0;
    elementValues = [];
    clickedImageId = "";
    pointsRequired = Math.floor(Math.random() * (MAX_POINTS_REQUIRED - MIN_POINTS_REQUIRED) + 1) + MIN_POINTS_REQUIRED;

    earth.points = Math.floor(Math.random() * (MAX_ELEMENT_POINTS - MIN_ELEMENT_POINTS) + 1) + MIN_ELEMENT_POINTS;
    wind.points = Math.floor(Math.random() * (MAX_ELEMENT_POINTS - MIN_ELEMENT_POINTS) + 1) + MIN_ELEMENT_POINTS;
    water.points = Math.floor(Math.random() * (MAX_ELEMENT_POINTS - MIN_ELEMENT_POINTS) + 1) + MIN_ELEMENT_POINTS;
    fire.points = Math.floor(Math.random() * (MAX_ELEMENT_POINTS - MIN_ELEMENT_POINTS) + 1) + MIN_ELEMENT_POINTS;

    $("#goal-pts").html(`<strong>${pointsRequired}</strong>`);
    $("#total-score").html(`<b>${totalPoints}</b>`)
    $("#num-of-wins").html(`<b>${totalWins}</b>`);
    $("#num-of-losses").html(`<b>${totalLosses}</b>`);
}

reset();

$(".element-img").on("click", function () {
    clickedImageId = $(this).attr("id");
    $("#" + clickedImageId).fadeIn(100).fadeOut(100).fadeIn(100);
    calculatePoints();
});

function changeBackground(color){
    $("body").addClass(color)
    setTimeout(function () {
        $("body").removeClass(color)
    }, 500);
}

function calculatePoints() {
    if (clickedImageId === earth.idName) {
        totalPoints += earth.points;
    } else if (clickedImageId === wind.idName) {
        totalPoints += wind.points;
    } else if (clickedImageId === water.idName) {
        totalPoints += water.points;
    } else if (clickedImageId === fire.idName) {
        totalPoints += fire.points;
    }
    $("#total-score").html(`<b>${totalPoints}</b>`);
    if(totalPoints === pointsRequired) {
        totalWins++;
        $("#winner-or-loser").html("You win!!");
        changeBackground("background-green");
        reset();
    } else if(totalPoints > pointsRequired) {
        totalLosses++;
        $("#winner-or-loser").html("You lose!!");
        changeBackground("background-red");
        reset();
    }
}

