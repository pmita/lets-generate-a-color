/*
    Fun projects that goes over basic principles in javascript. Here are the objectives:
    #Generate a random hex color whenever a user presses the button
    #Change the background of our website accordingly
    #Change the header text to the corresponding color

    Remember to always apply clean code principles in every project you are making! Here are
    some basic rules to have at the back of your mind:

    #Leave commects whenever your code is doing something complicated
    #Try giving your variables usefull names. Best if their name describes what they correspond to
    #Re-factor your code once you get something done. Chances are you can make better
*/


/*------------Global Variables-------------*/
const arrayOfHexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const generateColor_Button = document.querySelector('.btn');
const hexColor_header = document.querySelector('.color');

/*------------Event Listners---------------*/
generateColor_Button.addEventListener('click', function(){
    let randomHexColor = '#';
    /*To generate a hex simply select a random character from the arrayOfHexCharacters, 6 times*/
    for(let i=0; i<6; i++){
        randomHexColor += arrayOfHexCharacters[generateHexCharacter()];
    }
    
    //Apply the nex color to both the background and the header
    hexColor_header.textContent = randomHexColor;
    document.body.style.backgroundColor = randomHexColor;
});

/*-----------Functions-------------------*/
function generateHexCharacter(){
    //Math.random() gives numbers [0, 0.9999999)
    //Math.floor() rounds the number to the closest number
    //Math.floor(Math.random()) will spit a random number, rounded
    return Math.floor(Math.random() * arrayOfHexCharacters.length);
}