
        
        //let firstCard=getRandomCard()// let firstCard=2 //dis was value b4 changing
        //let secondCard=getRandomCard()//let secondCard=5
        let cards=[]            //let cards=[firstCard, secondCard]
        let message=""
        let sum=0                         //let sum=firstCard + secondCard
       let hasBlackJack=false
       let isAlive=false
       let messageEl=document.getElementById('message-el')
        let startBTN=document.getElementById('start')//new just added by me
        let cardEl=document.getElementById('card-el')
       //let sumEl=document.getElementById('sumGame')
       let sumEl=document.querySelector('#sumGame')//if its class use . not #

       let newCardBTN=document.getElementById('new-card')
       console.log(cards)//empty cause cards are undefined*
       
       //player details//object lesson
       let player={
        name: 'per',
        chips: 200,
        //sayHello: function(){
          //  console.log("hefsanin")
        //}// not to be used for this game jst testing
       }
        //player.sayHello()//another way to call a function
      
       let playerEl=document.getElementById("player-el")
       playerEl.textContent=player.name + ": $" + player.chips

       function  getRandomCard(){
       //return 6//use this in ecomerce to get the 50$ since its contant later changed yo below
                let randomNumber= Math.floor(Math.random()*13)+1 //1-12+13
                //return randomNumber// formwely part of above
                if(randomNumber>10){
            return 10
        }else if(randomNumber===1){
        return 11
        }else{
            return randomNumber 
        } 
       }
       
       function startGame(){//created this function in case startgame is needed again
        isAlive=true
        let firstCard= getRandomCard()
        let secondCard= getRandomCard()
        cards=[firstCard,secondCard]
         sum=firstCard + secondCard// crect to here
        renderGame()
    }

       function renderGame(){// change from startNow
        cardEl.innerHTML="Cards: " //+cards[0] + " " +cards[1]//tthis prep the two cards value// it render out first  2 cards
        for(let i=0; i<cards.length; i++){
                    cardEl.textContent += cards[i] + " "
                }     
        sumEl.innerHTML="Sum: " + sum// this adds sum in let up with the statement in quotes
            
            if (sum<=20){
                message='do you want new card?'          
      }else if(sum===21){
        message='you have  a black jack'
       hasBlackJack=true
       }else{
        message='you are out of the game'
        isAlive=false
       }
       messageEl.textContent=message
       //cash out
       console.log(isAlive)
        }
        
        //cardEl.innerHTML="Cards:"+firstCard + " " +secondCard+ " " +addCard//tthis prep the two cards value

        function newCard(){ 
            if(isAlive===true && hasBlackJack===false){
                let addCard=getRandomCard()                   //10
                                                // adding the third card to the array
            console.log(cards)                                      //checking if d card works
            sum+=addCard
            cards.push(addCard)                                             //this add sum to new card 
            renderGame()                                                //this is how to call a function      
            messageEl.textContent=message//'drawing a new card from the deck'

            }                                               //remember inside the function u specify what u want to be done when events occurs
            console.log('drawing a new card from the deck')                 //done below
        } 
        newCardBTN.addEventListener('click', newCard)
        startBTN.addEventListener('click', startGame)
            