
const macros_btn = document.getElementById("btn_createMacro");   

macros_btn.addEventListener('click', createMacros); 


function createMacros(){

    // get the data from the customer 
    let senderID = document.getElementById("senderID").value;
    let companyName = document.getElementById("companyName").value; 
    let useCase = document.getElementById("useCase").value; 
    let website = document.getElementById("website").value; 
    let smsUrl = document.getElementById("smsUrl").value;  
    let sampleSMS = document.getElementById("sampleSMS").value;  

   // Display the data in the macros 
}

