function addition_Function(){
    var addition = 2 + 2;
    document.getElementById('Math').innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function(){
    var subtraction = 10 - 4;
    document.getElementById('Math').innerHTML = "10 - 4 = " + subtraction;
}

function multiplication_Function(){
    var multiplication = 6 * 8;
    document.getElementById('Math').innerHTML = "6 * 8 = " + multiplication;
}

function division(){
    var simple_Math = 48 / 6;
    document.getElementById('Math').innerHTML = "48 / 6 = " + simple_Math;
}

function negation_Operator(){
    var x = 10;
    document.getElementById('Math').innerHTML = -x;
}

var X = 5;
X++;
document.write(X);

var Y = 5.5;
Y--;
document.write(Y);

window.alert(Math.random());

window.alert(Math.random() * 100);