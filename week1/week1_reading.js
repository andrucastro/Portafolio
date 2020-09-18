function showCongratulations(theButtonClicked){

    //plese find the document wiht the ID('esult_display') and inster at the HTML document this = message example "contgratulations, you......"
    document.getElementById("result_display").innerHTML = "Congratulations, you did it!<p>You got the page to update!</p>"
   
    theButtonClicked.innerHTML = "Click Again!"; 
    }


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