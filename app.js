/*Project objectives: */



const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number [0,3]
    const randomNumber = getRandomNumbers();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
});

function getRandomNumbers(){

    //Math.random() gives numbers [0, 0.9999999)
    //Math.floor() rounds the number to the closest number
    //Math.floor(Math.random()) will spit a random number, rounded
    return Math.floor(Math.random() * colors.length); 
}