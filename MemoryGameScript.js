//script will load when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){
   const audio = document.querySelector('button');
   const pokemonAudio = document.getElementById("my_audio");

   function playAudio(){
    pokemonAudio.play();
    pokemonAudio.volume = .002;
   };

   audio.addEventListener('click', function(event){
    //music by tomspicy https://soundcloud.com/tomspicy/kioku
    playAudio();
   });

    //each var. will change in value
    function randomColor(){
        const r = Math.floor(Math.random()*100);
        const g = Math.floor(Math.random()*100);
        //const b = Math.floor(Math.random()*200);
        const b = 130;
        return `rgb(${r},${g},${b})`
    }
    //select the h1 from the dom
    const h1 = document.querySelector('h1');
    //a new color is generated every 2 secs
    const randomh1 = setInterval(function(){
    h1.style.color = randomColor();
    }, 2000);


    //card flipping logic
    const cards = document.querySelectorAll('.card');
    const memoryGame = document.querySelector('#memory-game');
    const cardFront = document.querySelectorAll('.card-front');
    const cardBack = document.querySelectorAll('.card-back');
    //instance vars.
    let flippedCard = false;
    let firstCard;
    let firstCardSquirtle;
    let secondCard;
    let secondCardSquirtle;
    let counter = 0;
    let score = 0;



    cards.forEach(card => card.addEventListener('click', function(event){
        flippedCard = true;
        this.classList.add('flip');

        if(counter >= 0 || counter <2){
            if(firstCard == undefined){
                firstCard = this;
                firstCardSquirtle = this.dataset.framework;
                console.log(firstCardSquirtle,firstCardSquirtle);
                counter++;

            } else if(firstCard != undefined){
                secondCard = this;
                secondCardSquirtle = this.dataset.framework;
                console.log(secondCard, secondCardSquirtle);
                counter ++
                if(secondCardSquirtle === firstCardSquirtle){
                    firstCard.remove();
                    secondCard.remove();
                    score++;
                    counter =0;
                    firstCard= null;
                    secondCard = null;
                } else if (secondCardSquirtle !== firstCardSquirtle) {
                    firstCard.classList.remove('flip');
                    secondCard.classList.remove('flip');
                    counter = 0;
                    firstCard= null;
                    secondCard = null;

                }
            }
        }

        if(score === 6){
            alert('GAME OVER, YOU WIN!');
        }
    }));



}
);
