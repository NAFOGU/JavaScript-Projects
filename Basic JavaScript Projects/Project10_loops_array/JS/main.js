// Creating loops

function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit
}

// Creating arrays

function cat_pics() {
    var Cat_picture = [];
    Cat_picture[0] = "sleeping";
    Cat_picture[1] = "playing";
    Cat_picture[2] = "eating";
    Cat_picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_picture[2] + ".";
}