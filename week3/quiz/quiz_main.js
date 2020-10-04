
    // object with question
    const quiz = [
        { name: "Superman",realName: "Clark Kent" },
        { name: "Wonder Woman",realName: "Diana Prince" },
        { name: "Batman",realName: "Bruce Wayne" },
    ];
    

    // View Object
const view = {
    //    find the Element strong inside the element with the id "score"  
  score: document.querySelector('#score strong'),
  //    find the Element wiht the ID "question"
  question: document.getElementById('question'),
  //    find the Element wiht the ID "result"
  result: document.getElementById('result'),
  //    find the Element wiht the ID "info"
  info: document.getElementById('info'),
  
  render(target,content,attributes) {
  for(const key in attributes) {
  target.setAttribute(key, attributes[key]);
  }
  target.innerHTML = content;
  }
  };
    
    // object game 
    const game = {
        //method to staert thw quiz 
        start(quiz){
            // the object "game" will store the questions in the property "quiz", and will take the answers from the object "quiz"( at the beginning of the program)
            this.questions = [...quiz];
            // the property score will store the score of the player 
            this.score = 0;

            // main game loop. go through the array "quiz"
            for(const question of this.questions){   

            // store every question in the property "question" of the object game 
            this.question = question;

            //display the questions 
            this.ask();
            }
            // end of main game loop (display the content od the gameOver function)
            this.gameOver();
        },
        
           
           ask(){
            //get the string from the object "game" and the property "question.name"
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question,question);
            // store what the user type in the variable "response"
            const response =  prompt(question);
            this.check(response);
          },
        
      //take the response of the user as a parameter 
      check(response){
          // store the answer in the variable answer  
          const answer = this.question.realName;
          //evaluate the response comparing the text typed by the user and the property "question.real name" from the object "game"
          if(response === answer){
          // add the class correct to the "div" with the id result 
          view.render(view.result,'Correct!',{'class':'correct'});
          alert('Correct!');
          // if the answer is right, add 1 to the score 
          this.score++;
          view.render(view.score,this.score)
          
          } else {
        // if the wanswer is wrong, add the class "wrong" "div" with the id result 
          view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
        //display the right answer 
          alert(`Wrong! The correct answer was ${answer}`);
          }
      },
      gameOver(){
          // create a string with the final score, if the score is not equal to 1 add a "s " to the word "score"
          view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
      }
    }
    
    game.start(quiz);

