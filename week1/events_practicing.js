function showCongratulations(theButtonClicked){

    //plese find the document wiht the ID('esult_display') and inster at the HTML document this = message example "contgratulations, you......"
    document.getElementById("result_display").innerHTML = "Congratulations, you did it!<p>You got the page to update!</p>"
   
    theButtonClicked.innerHTML = "Click Again!"; 
    }


     function loadStory(){
         var storyName = document.getElementById("name_input").value
         var storyHTML = localStorage.getItem(storyName)
         document.getElementById("story_editor").value = storyHTML
         }
         function saveStory(){
         var storyName = document.getElementById("name_input").value
         var storyHTML = document.getElementById("story_editor").value
         localStorage.setItem(storyName, storyHTML)
         }
         function displayStory(){
         var storyHTML = document.getElementById("story_editor").value
         document.getElementById("story_display").innerHTML = storyHTML;
         }