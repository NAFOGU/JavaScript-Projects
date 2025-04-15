// The code is used to create a dictionary

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };
    delete Animal.Sound // This removes Sound for the dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
