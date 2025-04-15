// The code below displays the type of data of the word written within the parenthesis

document.write(typeof "Word")

function my_Function(){
    document.getElementById("Test").innerHTML = 10 > 2;
}

function my_Function1(){
    document.getElementById("Test1").innerHTML = 10 == 2;
}

function my_Function2(){
    X = 7;
    Y = 7;
    document.getElementById("Test2").innerHTML = X === Y;
}

function my_Function3(){
    X = 7;
    Y = "Hello!";
    document.getElementById("Test3").innerHTML = X === Y;
}

function my_Function4(){
    X = 7;
    Y = '7';
    document.getElementById("Test4").innerHTML = X === Y;
}

function my_Function5(){
    X = 4;
    Y = 7;
    document.getElementById("Test5").innerHTML = X === Y;
}

function my_Function6(){
    document.getElementById("Test6").innerHTML = 5 > 2 && 10 > 4;
}

function my_Function7(){
    document.getElementById("Test7").innerHTML = 5 > 10 && 10 > 4;
}

function my_Function8(){
    document.getElementById("Test8").innerHTML = 5 > 10 || 10 > 4;
}

function my_Function9(){
    document.getElementById("Test9").innerHTML = 5 > 10 && 10 > 20;
}

function my_Function10(){
    document.getElementById("Test10").innerHTML = !(5 > 2);
}

console.log(2 + 2);

console.log(10 < 2);