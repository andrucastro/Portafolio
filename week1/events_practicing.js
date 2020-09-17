function showCongratulations(theButtonClicked){

    //plese find the document wiht the ID('esult_display') and inster at the HTML document this = message example "contgratulations, you......"
    document.getElementById("result_display").innerHTML = "Congratulations, you did it!<p>You got the page to update!</p>"
   
    theButtonClicked.innerHTML = "Click Again!"; 
    }