function showCongratulations(theButtonClicked){

    //plese find the document wiht the ID('esult_display') and inster at the HTML document this = message example "contgratulations, you......"
    document.getElementById("result_display").innerHTML = "Congratulations, you did it!<p>You got the page to update!</p>"
   
    theButtonClicked.innerHTML = "Click Again!"; 
    }

    /*-------------------------------------------------- STORY WRITER SECTION--------------------------------------------------------*/


     function loadStory(){
         //use the ".value" to get access to a text inside a textarea or imput tag.
         var storyName = document.getElementById("name_input").value

         //get the name of the story from the locar storage ("getItem" to get access information)
         var storyHTML = localStorage.getItem(storyName)

         //find the tag with the Id story_editor, take what is inside the tag, and store it in the variable "storyHTML"
         document.getElementById("story_editor").value = storyHTML
         }
         /*
         */
         function saveStory(){
         // find the tag with the ID "name_imput", and store the content in the storyName variable (save story name)    
         var storyName = document.getElementById("name_input").value
         // find the tag with the ID "story_editor", and store the content in the storyHTML variable (save story name)
         var storyHTML = document.getElementById("story_editor").value
         // store the variable storyName and storyHTML in the locar storage. ("setItem" to store information) 
         localStorage.setItem(storyName, storyHTML)
         }
         function displayStory(){
         //store the content of the text area in the variable "storyHTMTL"     
         var storyHTML = document.getElementById("story_editor").value
        
         //display the content in the section wiht the id "story_display" 
         document.getElementById("story_display").innerHTML = storyHTML;
         }

         /*----------------------------------------------- DARK MODE SECTION----------------------------------------------------------*/ 

         // find the button wiht the ID switch 
         const btnSwitch = document.querySelector('#switch');

        //listend if the user make click in the button 
         btnSwitch.addEventListener('click', () =>{
             // add the class dark to body tag 
            document.body.classList.toggle('dark');
             // add the class active to the button 
            btnSwitch.classList.toggle('active');

              /*-------------- store dark mode in locar storage--------------*/

         if(document.body.classList.contains('dark')){
             
            // if you are in dark mode, store the string "you are in dark mode"
            localStorage.setItem('dark-mode', 'you are in dark mode');
        }  
            // if you are in dark mode, store the string "you are not in dark mode"
            else{
            localStorage.setItem('dark-mode', 'you are not in dark mode'); 
            } 
         });

         // dectect current mode 
         //if the key "dark-mode" is equal to 'you are in dark mode' ( if the user is in dark mode)
         if(localStorage.getItem('dark-more') === 'you are in dark mode'){
            // add the class dark
            document.body.classList.add('dark');
         } 
         //if the key "dark-mode" is equal to 'you are not in dark mode'
         else{
            document.body.classList.remove('dark');
         }
         
       