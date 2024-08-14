let buttons = document.querySelectorAll(".Btns");
let UserMove  ;  

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const RandomNUM = Math.random(); 
        let ComputerMove = "";

        if (RandomNUM > 0 && RandomNUM < 1/3) {
            ComputerMove = "rock";
        } else if (RandomNUM > 1/3 && RandomNUM < 2/3) {
            ComputerMove = "paper";
        } else if (RandomNUM > 2/3 && RandomNUM < 1) {
            ComputerMove = "scissors";
        }
        UserMove = this.id;  
        let result = "";

        if(UserMove === "rock"){
            if(ComputerMove === "rock"){
                result = "Tie";
            } else if(ComputerMove === "paper"){
                result = "Lose";
            } else if(ComputerMove === "scissors"){
                result = "Won";
            }
        } else if(UserMove === "paper"){
            if(ComputerMove === "rock"){
                result = "Won";
            } else if(ComputerMove === "paper"){
                result = "Tie";
            } else if(ComputerMove === "scissors"){
                result = "Lose";
            }
        } else if(UserMove === "scissors"){
            if(ComputerMove === "rock"){
                result = "Lose";
            } else if(ComputerMove === "paper"){
                result = "Won";
            } else if(ComputerMove === "scissors"){
                result = "Tie";
            }
        }
            UserMove = this.innerHTML; 
            let userSelectDiv = document.querySelector('.userSelect');
            userSelectDiv.innerHTML = UserMove + "Your Move";
            

            if(ComputerMove === "rock"){ 
            let computerSelectDiv =document.querySelector('.computermove')
            computerSelectDiv.innerHTML = '<img src="/imgs/rock" alt="">' +"Computer Move";
            }else if(ComputerMove === "paper"){ 
            let computerSelectDiv =document.querySelector('.computermove')
            computerSelectDiv.innerHTML = '<img src="/imgs/paper" alt="">'+"Computer Move";
            }else if(ComputerMove === "scissors"){ 
            let computerSelectDiv =document.querySelector('.computermove')
            computerSelectDiv.innerHTML = '<img src="/imgs/scisoor" alt="">'+"Computer Move";
            }


           let  resultDiv = document.querySelector('.result');
            resultDiv.innerHTML="You "+ result;

        console.log("Your Move is  " + UserMove);
        console.log("Computer Move  " + ComputerMove);
        console.log("You " + result );
    });
});
