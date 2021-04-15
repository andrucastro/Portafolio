
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

   var syniverse_senderID =document.getElementById("syniverse_senderID").innerHTML = senderID;
   var mada_senderID =document.getElementById("mada_senderID").innerHTML = senderID;
   var madaChart_senderID =document.getElementById("madaChart_senderID").innerHTML = senderID;
   var ameex_senderID =document.getElementById("ameex_senderID").innerHTML = senderID;

   var divs = document.querySelectorAll("div"); 

   for(i = 0; i <divs.length; i++){
    divs[i].style. backgroundColor= "#D6FCD6";
   }




}