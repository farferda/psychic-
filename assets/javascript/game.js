        
        var compChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

        var wins = 0;
        var losses = 0;
        var guessLeft = 9;
        var guessSoFar = [];

        

        document.onkeyup = function(event){

            var userGuess = event.key;

            var compLetter = compChoice[Math.floor(Math.random() * compChoice.length)];


            if (guessLeft > 0){
                if (userGuess != compLetter){
                    guessLeft--;
                    guessSoFar.push(userGuess);
                }
                else if (userGuess == compLetter){
                    (guessLeft - 1);
                    wins++
                    alert("Winner, Winner, Chicken Dinner!");
                    guessSoFar = [];
                    guessLeft = 9;
                
                    
                    
                }
            if (guessLeft == 0){
                losses++;
                alert("LOSER!");
                guessSoFar = [];
                guessLeft = 9;
                
                
            };    

            };    

            var html =
                    "<h1>The Guessing Game</h1>" +
                    "<p>What letter is on my mind?</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessLeft + "</p>" +
          "<p>Guesses so far: " + guessSoFar + "</p>";

     document.querySelector("#game").innerHTML = html;
        };


    
