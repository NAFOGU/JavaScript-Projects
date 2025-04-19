function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"
}


// Canvas

const myCanvas = document.getElementById("ID_Name");
const ctx = myCanvas.getContext("2d");

ctx.fillRect(20, 20, 150, 100);

